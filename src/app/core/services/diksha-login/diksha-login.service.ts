import { Injectable } from '@angular/core';
import * as qs from 'qs';
import { WebRunnerService } from '../web-runner/web-runner.service';
import { HTTP } from '@ionic-native/http/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import * as jwt_decode from "jwt-decode";
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import { ToastMessageService } from '../toast-messages/toast-message.service';
import { LoaderService } from '../loader/loader.service';
import { AuthService } from '../auth/auth.service';
import { NetworkService } from '../network/network.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { localStorageConstants } from '../../constants';
import { CurrentUserService } from '../current-user/current-user.service';

declare const cordova;
interface ParamMap { [key: string]: string; }
@Injectable({
  providedIn: 'root'
})
export class DikshaLoginService {

  loginForm;
  inAppBrowser;
  loginConfig;
  veryFirstTime: boolean = false;
  private resetParams: ParamMap | undefined;
  appId;
  constructor(
    private webRunner: WebRunnerService,
    private ionHttp: HTTP,
    private toastService: ToastMessageService,
    public storage: Storage,
    public menuCtrl: MenuController,
    private appVer: AppVersion,
    private router: Router,
    private networkService: NetworkService,
    private translateService: TranslateService,
    private alertController: AlertController,
    private loader: LoaderService,
    private auth: AuthService,
    private localStorage: LocalStorageService,
    private currentUser: CurrentUserService
  ) {
    this.appVer.getPackageName().then(id => {
      this.appId = id;
    })
    this.storage.get('veryFirstTime').then(data => {
      if (data == null || data == undefined) {
        this.veryFirstTime = true;
      }
    })
  }
  buildUrl(host: string, path: string, params) {
    let url = `${host}${path}?`;
    for (const param of params) {
      url = url + `${param.key}=${param.value}&`
    }
    url = url.slice(0, -1)
    return url;
  }
  getFormApi() {
    const url = environment.appUrl + "/api/data/v1/form/read";
    this.ionHttp.setDataSerializer('json');
    const payload = {
      "request": {
        "type": "config",
        "action": "get",
        "subType": "login",
      }
    }
    this.loader.startLoader('Loading, Please wait');
    this.ionHttp.post(url, payload, {}).then(success => {
      this.loader.stopLoader();
      this.loginForm = (success && success.data) ? JSON.parse(success.data) : {};
      this.getWebviewSessionProviderConfig('login');
    }).catch(error => {
      this.loader.stopLoader();
      this.toastService.showMessage("Error occured", 'danger');
    })
  }
  getWebviewSessionProviderConfig(context: 'login') {
    const config = this.loginForm['result']['form']['data']['fields'].find(c => c.context === context);
    this.loginConfig = config;
    this.provide();
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
  public async provide() {
    const dsl = this.webRunner;
    const config = {
      host: this.loginConfig.target.host,
      path: this.loginConfig.target.path,
      params: this.loginConfig.target.params.reduce((acc, p) => {
        acc[p.key] = p.value;
        return acc;
      }, { ...this.resetParams })
    }
    return dsl.launchWebview(config).then(() => {
      return dsl.any<any>(
        ...this.loginConfig.return.reduce((acc, forCase) => {
          switch (forCase.type) {
            case 'password': acc.push(
              this.buildPasswordSessionProvider(dsl, forCase)
            ); break;
            case 'state': acc.push(
              this.buildStateSessionProvider(dsl, forCase)
            ); break;
            case 'state-error': acc.push(dsl.capture({
              host: forCase.when.host,
              path: forCase.when.path,
              params: forCase.when.params
            }).then(() => {
              return dsl.closeWebview().then(() => {
                return dsl.resolveCaptured('error_message').catch(() => {
                  this.toastService.showMessage('error_message', 'danger');
                }).then((param) => {
                  this.toastService.showMessage(`Error param`, 'danger');
                });
              });
            })); break;
            case 'google': acc.push(
              this.buildGoogleSessionProvider(dsl, forCase)
            ); break;
            case 'reset': acc.push(dsl.capture({
              host: forCase.when.host,
              path: forCase.when.path,
              params: [
                ...forCase.when.params,
                {
                  key: 'client_id',
                  resolveTo: 'client_id',
                  match: 'portal'
                },
                {
                  key: 'automerge',
                  resolveTo: 'automerge',
                  exists: 'false'
                }
              ]
            }).then(() =>
              dsl.getCaptureExtras().then((extras) => {
                this.resetParams = extras;
                return dsl.closeWebview().then(() =>
                  new Promise((resolve) => setTimeout(resolve, 500))
                    .then(() => this.provide())
                );
              })
            )); break;
          }
          return acc;
        }, [])
      )
    })
  }
  protected buildStateSessionProvider(dsl, forCase) {
    return dsl.capture({
      host: forCase.when.host,
      path: forCase.when.path,
      params: forCase.when.params
    }).then(() => dsl.closeWebview()).then(() => dsl.success()).then((captured) => {
      return this.resolveStateSession(captured);
    });
  }
  protected buildPasswordSessionProvider(dsl, forCase) {
    return dsl.capture({
      host: forCase.when.host,
      path: forCase.when.path,
      params: forCase.when.params
    }).then(() => {
      return dsl.closeWebview()
    }
    ).then(() => {
      return dsl.success()
    }
    ).then((captured) => {
      return this.resolvePasswordSession(captured);
    });
  }
  protected buildGoogleSessionProvider(dsl, forCase) {
    return dsl.capture({
      host: forCase.when.host,
      path: forCase.when.path,
      params: forCase.when.params
    }).then(() =>
      dsl.closeWebview()
    ).then(() =>
      dsl.success()
    ).then((captured) =>
      dsl.getCaptureExtras().then((extras) => {
        const url = this.buildGoogleTargetUrl(captured, extras);
        return dsl.launchCustomTab({
          host: url.origin,
          path: url.pathname,
          params: qs.parse(url.searchParams.toString(), { ignoreQueryPrefix: true })
        }).then(() => {
          return dsl.success()
        }
        ).then((cap) => {
          // this.toastService.startLoader('Loading, Please wait 222');
          return this.resolveGoogleSession(cap);
        });
      })
    );
  }
  private resolveGoogleSession(captured: { [key: string]: string }) {
    if ((captured[`${this.appId}://mobile?access_token`] || captured['access_token']) && captured['refresh_token']) {
      const tokens = {
        access_token: captured[`${this.appId}://mobile?access_token`] || captured['access_token'],
        refresh_token: captured['refresh_token'],
      };
      // this.auth.checkLocalData(tokens);
      this.checkLocalData(tokens)

      this.loader.stopLoader();
      // this.checkLocalData(tokens);
    } else if (captured['error_message']) {
      this.toastService.showMessage(captured['error_message'], 'danger');
    }
  }
  setUserDetails(): Promise<any> {
    return new Promise((resolve, reject) => {
    })
  }
  protected buildGoogleTargetUrl(captured: { [key: string]: string }, extras: { [key: string]: string }): URL {
    const url = new URL(captured['googleRedirectUrl']);
    delete extras['redirect_uri'];
    url.searchParams.set('redirect_uri', this.appId + '://mobile');
    delete extras['error_callback'];
    url.searchParams.set('error_callback', this.appId + '://mobile');
    Object.keys(extras).forEach(key => url.searchParams.set(key, extras[key]));
    return url;
  }
  private resolveStateSession(captured) {
    this.loader.startLoader('Loading, Please wait.');
    const url = environment.appUrl + `/v1/sso/create/session?id=${captured['id']}`;
    this.ionHttp.get(url, {}, {}).then(response => {
      this.loader.stopLoader();
      const obj = response.data ? JSON.parse(response.data) : null;
      if (obj.access_token && obj.refresh_token) {
        const tokens = {
          access_token: obj.access_token,
          refresh_token: obj.refresh_token,
        }
        // this.auth.checkForCurrentUserLocalData(tokens);
        // this.checkLocalData(tokens);
        // this.auth.checkLocalData(tokens);
        this.checkLocalData(tokens)

      } else {
        this.toastService.showMessage("Something went wrong", 'danger');
      }
    }).catch(error => {
      this.loader.stopLoader();
      this.toastService.showMessage(captured['error_message'], 'danger');
    })
  }

  checkLocalData(tokens) {
    this.auth.checkLocalData(tokens).then(success => {
      this.currentUser.setUser(tokens).then(success => {
        this.router.navigateByUrl('/permissions');
        this.localStorage.setLocalStorage(localStorageConstants.SYNC_VARIABLE, 'OFF').then(sucess => {
        }).catch(error => {
        })
      }).catch(error => {
      })

    }).catch(errro => {

    })
  }
  private resolvePasswordSession(captured: { [key: string]: string }) {
    this.loader.startLoader('Loading, Please wait.');
    this.ionHttp.setDataSerializer("urlencoded");
    const obj = {
      redirect_uri: environment.appUrl + '/oauth2callback',
      code: captured['code'],
      grant_type: 'authorization_code',
      client_id: 'android'
    };
    const url = environment.appUrl + "/auth/realms/sunbird/protocol/openid-connect/token";
    this.ionHttp.post(url, obj, {}).then(success => {
      this.loader.stopLoader();
      const tokens = JSON.parse(success.data)
      this.checkLocalData(tokens);
    }).catch(error => {
      this.loader.stopLoader();
      this.toastService.showMessage("Something went wrong", 'danger');
    })
  }


}
