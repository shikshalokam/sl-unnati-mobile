import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as qs from 'qs';
import { take, mapTo } from 'rxjs/operators';
import { Observable, zip, race } from 'rxjs';


declare const cordova;
declare const customtabs;

@Injectable({
  providedIn: 'root'
})
export class WebRunnerService {
  inAppBrowser;
  private captured: { [key: string]: string } = {};
  private extras: { [key: string]: string } = {};


  constructor(public http: HttpClient) {
    console.log('Hello WebviewRunnerProvider Provider');
  }


  buildUrl(host: string, path: string, params: { [p: string]: string }) {
    return `${host}${path}?${qs.stringify(params)}`;
  }

  async launchWebview({ host, path, params }: { host: string; path: string; params: { [p: string]: string } }): Promise<void> {
    this.inAppBrowser = {
      ref: cordova.InAppBrowser.open(
        this.buildUrl(host, path, params),
        '_blank',
        'zoom=no,clearcache=yes,clearsessioncache=yes,cleardata=yes'
      ),
      listeners: {
        loadstart: new Set(),
        exit: new Set()
      }
    };

    const onExit = () => {
      this.resetInAppBrowserEventListeners();
      this.inAppBrowser = undefined;
    };

    this.inAppBrowser.listeners.exit.add(onExit);
    this.inAppBrowser.ref.addEventListener('exit', onExit);
  }

  public resetInAppBrowserEventListeners() {
    for (const key in this.inAppBrowser.listeners) {
      if (this.inAppBrowser.listeners.hasOwnProperty(key)) {
        (this.inAppBrowser.listeners[key] as Set<any>).forEach((listener) => {
          this.inAppBrowser!.ref.removeEventListener(key as any, listener);
        });

        (this.inAppBrowser.listeners[key] as Set<any>).clear();
      }
    }
  }

  async closeWebview(): Promise<void> {
    this.inAppBrowser.ref.close();
  }

  any<T>(...args): Promise<T> {
    return race<T>(
      ...args
    ).pipe(
      take(1)
    ).toPromise();
  }

  all(...args: Promise<any>[]): Promise<void> {
    return zip(
      ...args
    ).pipe(
      take(1),
      mapTo(undefined)
    ).toPromise();
  }

  launchCustomTab({ host, path, params }: { host: string; path: string; params: { [p: string]: string } }): Promise<void> {
    const url = this.buildUrl(host, path, params);

    return new Promise<void>((resolve, reject) => {
      customtabs.isAvailable(() => {
        // customTabs available
        customtabs.launch(url, resolved => {
          this.captured = {
            ...this.captured,
            ...qs.parse(resolved)
          };
          resolve();
        }, error => {
          reject(error);
        });
      }, () => {
        customtabs.launchInBrowser(url, resolved => {
          this.captured = {
            ...this.captured,
            ...qs.parse(resolved)
          };
          resolve();
        }, error => {
          reject(error);
        });
      });
    });
  }

  capture({ host, path, params }: { host: string; path: string; params: { key: string; resolveTo: string, match?: string, exists?: 'true' | 'false' }[] }): Promise<void> {
    const isHostMatching = (url: URL) => url.origin === host;
    const isPathMatching = (url: URL) => url.pathname === path;
    const areParamsMatching = (url: URL) => params.map(p => p).every(param => {
      if (param.exists === 'false') {
        return !url.searchParams.has(param.key);
      } else {
        if (param.match) {
          return url.searchParams.has(param.key) && url.searchParams.get(param.key) === param.match;
        }

        return url.searchParams.has(param.key);
      }
    });

    return new Promise((resolve) => {
      const onLoadStart = (event) => {
        if (event.url) {
          const url = new URL(event.url);

          if (

            isHostMatching(url) &&
            isPathMatching(url) &&
            areParamsMatching(url)
          ) {
            this.captured = {
              ...this.captured,
              ...params.reduce<{ [key: string]: string }>((acc, p) => {
                acc[p.resolveTo] = url.searchParams.get(p.key)!;
                return acc;
              }, {}),
            };

            this.extras = {};
            params.map(p => p.key).forEach(param => url.searchParams.delete(param));
            url.searchParams['forEach']((value, key) => {
              this.extras[key] = value;
            });

            if (this.inAppBrowser) {
              this.inAppBrowser.listeners.loadstart.delete(onLoadStart);
              this.inAppBrowser.ref.removeEventListener('loadstart', onLoadStart);
            }

            resolve();
          }
        }
      };

      if (this.inAppBrowser) {
        this.inAppBrowser.listeners.loadstart.add(onLoadStart);
        this.inAppBrowser.ref.addEventListener('loadstart', onLoadStart);
      }
    });
  }

  async resolveCaptured(param: string): Promise<string> {
    return this.captured[param];
  }

  async clearCapture(): Promise<void> {
    this.captured = {};
  }

  async redirectTo({ host, path, params }: { host: string; path: string; params: { [p: string]: string } }): Promise<void> {
    this.inAppBrowser.ref.executeScript({
      code: `(() => {
                    window.location.href = ` + '`' + `${this.buildUrl(host, path, params)}` + '`' + `;
                })()`
    });
  }

  async success(): Promise<{ [p: string]: string }> {
    return { ...this.captured };
  }

  async fail(): Promise<{ [p: string]: string }> {
    throw { ...this.captured };
  }

  async getCaptureExtras(): Promise<{ [p: string]: string }> {
    return { ...this.extras };
  }
}
