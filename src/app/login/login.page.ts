import { Component, ViewChild } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Network } from '@ionic-native/network/ngx';
import { NetworkService } from '../network.service';
import { MenuController } from '@ionic/angular';
import { Login } from '../login.service';
import { TranslateService } from '@ngx-translate/core';
import * as jwt_decode from "jwt-decode";
import { IonSlides } from '@ionic/angular';
// import { FcmProvider } from '../fcm';
import { environment } from '../../environments/environment';
import { AlertController } from '@ionic/angular';
import { ToastService } from '../toast.service';
import { ErrorHandle } from '../error-handling.service';
import { DikshaLoginService } from '../core-module/diksha-login/diksha-login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  @ViewChild('slides') slides: IonSlides;
  veryFirstTime: boolean = false;
  responseData;
  activeSlide;
  redirect_url: string;
  showLogin: boolean = false;
  logout_url: string;
  auth_url: string;
  base_url: string;
  show: boolean = false;
  buttonTitle = "Skip";
  logout_redirect_url: string;
  language: string = this.translateService.currentLang;
  constructor(public storage: Storage,
    public router: Router,
    public iab: InAppBrowser,
    public login: Login,
    public translateService: TranslateService,
    public menuCtrl: MenuController,
    public networkService: NetworkService,
    public network: Network,
    // public fcm: FcmProvider,
    public toastService: ToastService,
    public alertController: AlertController,
    public splashScreen: SplashScreen,
    public errorHandle: ErrorHandle,
    public dikshaLoginService: DikshaLoginService) {
  }
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    zoom: false
  };
  ionViewDidEnter() {
    this.show = true;
    this.storage.get('veryFirstTime').then(data => {
      if (data == null || data == undefined) {
        this.veryFirstTime = true;
      }
    })
  }

  //Login 
  doOAuthStepOne(): Promise<any> {
    this.base_url = environment.app_url;
    this.redirect_url = environment.keyCloak.redirection_url;
    this.auth_url = this.base_url + "/auth/realms/sunbird/protocol/openid-connect/auth?response_type=code&scope=offline_access&client_id=" + environment.clientId + "&redirect_uri=" +
      this.redirect_url;
    let that = this;
    return new Promise(function (resolve, reject) {
      let closeCallback = function (event) {
        reject("The Sunbird sign in flow was canceled");
      };
      let browserRef = (<any>window).cordova.InAppBrowser.open(that.auth_url, "_blank", "zoom=no");
      browserRef.addEventListener('loadstart', function (event) {
        if (event.url && ((event.url).indexOf(that.redirect_url) === 0)) {
          browserRef.removeEventListener("exit", closeCallback);
          let responseParameters = (((event.url).split("?")[1]).split("="))[1];
          if (responseParameters !== undefined) {
            this.show = false;
            browserRef.close();
            resolve(responseParameters);
          } else {
            reject("Problem authenticating with Sunbird");
          }
        }
      });
    });
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

  
  // Login call
  loginClick() {
    // this.showLogin = true;
    // this.doOAuthStepOne().then(success => {
    //   this.toastService.startLoader('Loading, please wait');
    //   this.login.doOAuthStepTwo(success).then(success1 => {
    //     this.toastService.stopLoader();
    //     if (success1) {
    //       this.checkLocalData(success1);
    //     }
    //   }).catch(error1 => {
    //     this.toastService.stopLoader();
    //   })
    // }).catch(error => {
    // })
  }

  dikshaLogin() {
    this.dikshaLoginService.getFormApi();
  }

  slideDidChangePrev(event) {
    if (this.buttonTitle == "Get started") {
      this.buttonTitle = "Skip";
    } else if (this.buttonTitle == "") {
      this.buttonTitle = "Get started";
    }
  }
  slideDidChangeNext(event) {
    if (this.buttonTitle == "Get started") {
      this.buttonTitle = "";
    } else if (this.buttonTitle == "Skip") {
      this.buttonTitle = "Get started";
    }
  }

  //Check User is logged in or not
  public checkUser() {
    if (localStorage.getItem("token") != null) {
      this.router.navigateByUrl('/project-view/home');
    } else {
      this.show = true;
    }
  }

  slideChanged(event): void {
  }

  public storeToken(token) {
    // this.login.checkForCurrentUserLocalData(token);
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