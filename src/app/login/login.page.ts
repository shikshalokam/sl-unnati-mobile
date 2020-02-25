import { Component, ViewChild } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppConfigs } from "../app.config";
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
import { FcmProvider } from '../fcm';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  @ViewChild('slides') slides: IonSlides;
  veryFirstTime: boolean = false;
  responseData;
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
    public fcm: FcmProvider,
    public splashScreen: SplashScreen) {
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
    this.base_url = AppConfigs.app_url;
    this.redirect_url = AppConfigs.keyCloak.redirection_url;
    this.auth_url = this.base_url + "/auth/realms/sunbird/protocol/openid-connect/auth?response_type=code&scope=offline_access&client_id=" + AppConfigs.clientId + "&redirect_uri=" +
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

  // Login call
  loginClick() {
    // this.showLogin = true;
    this.doOAuthStepOne().then(success => {
      this.menuCtrl.enable(true);
      this.login.doOAuthStepTwo(success).then(success1 => {
        this.menuCtrl.enable(true);
        this.login.checkForCurrentUserLocalData(success1);
        let userDetails = jwt_decode(success1.access_token);
        this.menuCtrl.enable(true);
        this.storage.set('userDetails', userDetails).then(userData => {
        })
        this.storage.set('userTokens', success1).then(data => {
          localStorage.setItem('isPopUpShowen', null);
          this.router.navigateByUrl('/project-view/home');
          this.fcm.initializeFCM();
          this.login.loggedIn('true');
          this.menuCtrl.enable(true);
          this.storage.set('veryFirstTime', 'false').then(data => {
            this.veryFirstTime = false;
          })
        });
        localStorage.setItem('token', success1);
        this.networkService.status(true);
        this.menuCtrl.enable(true);
        this.login.loggedIn('true');
        localStorage.setItem("networkStatus", 'true');
      }).catch(error1 => {
      })
    }).catch(error => {
    })
  }

  slideDidChangePrev(event) {
    this.buttonTitle = "Skip";
  }
  slideDidChangeNext(event) {
    this.buttonTitle = "Get started";
  }

  //Check User is logged in or not
  public checkUser() {
    if (localStorage.getItem("token") != null) {
      this.router.navigateByUrl('/project-view/home');
    } else {
      this.show = true;
    }
  }
}