import { Injectable } from '@angular/core';
import * as qs from 'qs';
import { WebRunnerService } from '../web-runner/web-runner.service';
// import { HTTP } from "@ionic-native/http";
import { HTTP } from '@ionic-native/http/ngx';
import { AppConfigs } from '../constants/app.config'
// import { AuthProvider } from '../auth/auth';
// import { UtilsProvider } from '../utils/utils';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { environment } from 'src/environments/environment';
import { ToastService } from 'src/app/toast.service';
import { Storage } from '@ionic/storage';
import * as jwt_decode from "jwt-decode";
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Login } from '../../login.service';
import { NetworkService } from '../../network.service';
import { TranslateService } from '@ngx-translate/core';
import { ErrorHandle } from '../../error-handling.service';
import { AlertController } from '@ionic/angular';

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
    private toastService: ToastService,
    // private auth: AuthProvider,
    // private utils: UtilsProvider,
    public storage: Storage,
    public menuCtrl: MenuController,
    private appVer: AppVersion,
    private router: Router,
    private login: Login,
    private networkService: NetworkService,
    private translateService: TranslateService,
    private errorHandle: ErrorHandle,
    private alertController: AlertController
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
    const url = environment.app_url + "/api/data/v1/form/read";
    this.ionHttp.setDataSerializer('json');
    const payload = {
      "request": {
        "type": "config",
        "action": "get",
        "subType": "login",
      }
    }
    this.toastService.startLoader('Loading, Please wait');
    this.ionHttp.post(url, payload, {}).then(success => {
      this.toastService.stopLoader();
      this.loginForm = (success && success.data) ? JSON.parse(success.data) : {};
      this.getWebviewSessionProviderConfig('login');
    }).catch(error => {
      this.toastService.stopLoader();
      this.toastService.errorToast("Error occured");
    })
  }
  getWebviewSessionProviderConfig(context: 'login') {
    const config = this.loginForm['result']['form']['data']['fields'].find(c => c.context === context);
    this.loginConfig = config;
    this.provide();
  }
  public resetInAppBrowserEventListeners() {
    debugger
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
                  this.toastService.errorToast('error_message');
                }).then((param) => {
                  this.toastService.errorToast(`Error param`);
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
      // this.auth.checkForCurrentUserLocalData(tokens);
      // this.toastService.stopLoader();
      this.checkLocalData(tokens);
    } else if (captured['error_message']) {
      this.toastService.errorToast(captured['error_message']);
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
    this.toastService.startLoader('Loading, Please wait.');
    const url = environment.app_url + `/v1/sso/create/session?id=${captured['id']}`;
    this.ionHttp.get(url, {}, {}).then(response => {
      this.toastService.stopLoader();
      const obj = response.data ? JSON.parse(response.data) : null;
      if (obj.access_token && obj.refresh_token) {
        const tokens = {
          access_token: obj.access_token,
          refresh_token: obj.refresh_token,
        }
        // this.auth.checkForCurrentUserLocalData(tokens);
        this.checkLocalData(tokens);
      } else {
        this.toastService.errorToast("Something went wrong");
      }
    }).catch(error => {
      this.toastService.stopLoader();
      this.toastService.errorToast(captured['error_message']);
    })
  }
  private resolvePasswordSession(captured: { [key: string]: string }) {
    this.toastService.startLoader('Loading, Please wait.');
    this.ionHttp.setDataSerializer("urlencoded");
    const obj = {
      redirect_uri: environment.app_url + '/oauth2callback',
      code: captured['code'],
      grant_type: 'authorization_code',
      client_id: 'android'
    };
    const url = environment.app_url + environment.keyCloak.getAccessToken;
    this.ionHttp.post(url, obj, {}).then(success => {
      this.toastService.stopLoader();
      const tokens = JSON.parse(success.data)
      this.checkLocalData(tokens);
    }).catch(error => {
      this.toastService.stopLoader();
      this.toastService.errorToast("Something went wrong");
    })
  }


  public checkLocalData(token) {
    this.storage.get('userTokens').then((localData: any) => {
      if (localData) {
        let previousUser = jwt_decode(localData.access_token);
        let userDetails = jwt_decode(token.access_token);
        if (userDetails.sub.split(":").pop() == previousUser.sub.split(":").pop()) {
          this.storeToken(token);
        } else {
          this.confirmPreviousUserName(previousUser.preferred_username, token);
        }
      } else {
        this.storeToken(token);
      }
    })
  }
  public storeToken(token) {
    let userDetails = jwt_decode(token.access_token);
    this.storage.set('userDetails', userDetails).then(userData => {
    })
    this.storage.set('userTokens', token).then(data => {
      localStorage.setItem('isPopUpShowen', null);
      this.menuCtrl.enable(true);
      if (this.veryFirstTime) {
        this.router.navigateByUrl('/app-permissions');
      } else {
        this.router.navigateByUrl('/project-view/home');
      }
      // this.fcm.initializeFCM();
      this.login.loggedIn(true);
      this.storage.set('veryFirstTime', 'false').then(data => {
        this.veryFirstTime = false;
      })
      this.errorHandle.setPopup();
    });
    this.storage.set('currentUser', token).then(data => {
    })
    localStorage.setItem('token', token);
    this.networkService.status(true);
    this.login.loggedIn('true');
    localStorage.setItem("networkStatus", 'true');
  }

  async confirmPreviousUserName(previousUserEmail, tokens) {
    let translateObject;
    this.translateService
      .get([
        "actionSheet.previousUserName",
        "actionSheet.userId",
        "actionSheet.cancel",
        "actionSheet.send",
      ])
      .subscribe((translations) => {
        translateObject = translations;
      });
    const alert = await this.alertController.create({
      header: translateObject["actionSheet.previousUserName"],
      inputs: [
        {
          name: "userName",
          placeholder: translateObject["actionSheet.userId"],
        },
      ],
      buttons: [
        {
          text: translateObject["actionSheet.cancel"],
          role: "cancel",
          handler: (data) => {
            this.login.doLogout();
            this.router.navigate(['/login']);
          },
        },
        {
          text: translateObject["actionSheet.send"],
          role: "role",
          handler: (data) => {
            if (
              data.userName &&
              previousUserEmail.toLowerCase() === data.userName.toLowerCase()
            ) {
              this.confirmDataClear(tokens);
            } else {
              // this.currentUser.deactivateActivateSession(true);
              this.translateService
                .get(["toastMessage.userNameMisMatch"])
                .subscribe((translations) => {
                  this.toastService.errorToast(
                    translations["toastMessage.userNameMisMatch"]
                  );
                });
              this.login.doLogout();
              // this.router.navigate[('/login')];
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async confirmDataClear(tokens) {
    let translateObject;
    this.translateService
      .get([
        "actionSheet.dataLooseConfirm",
        "actionSheet.no",
        "actionSheet.yes",
      ])
      .subscribe((translations) => {
        translateObject = translations;
      });
    const alert = await this.alertController.create({
      header: translateObject["actionSheet.dataLooseConfirm"],
      buttons: [
        {
          text: translateObject["actionSheet.no"],
          role: "cancel",
          handler: (data) => {
            this.login.doLogout();
            this.router.navigate(['/login']);
            this.translateService
              .get(["toastMessage.loginAgain"])
              .subscribe((translations) => {
                this.toastService.errorToast(
                  translations["toastMessage.loginAgain"]
                );
              });
          },
        },
        {
          text: translateObject["actionSheet.yes"],
          role: "role",
          handler: (data) => {
            localStorage.clear();
            this.storage.clear();
            this.storage.set('veryFirstTime', 'false').then(data => {
            });
            this.storage.get('userTokens').then(token => {
            })
            this.login.loggedIn('false');
            this.storeToken(tokens);
          },
        },
      ],
    });
    await alert.present();
  }
}
