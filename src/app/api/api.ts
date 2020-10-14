import { URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Login } from '../login.service';
import { Storage } from '@ionic/storage';
import * as jwt_decode from "jwt-decode";
import { environment } from '../../environments/environment';
import { ErrorHandle } from '../error-handling.service';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HomeService } from '../home/home.service';
import { NetworkService } from '../network.service';
import { ToastService } from '../toast.service';
import { AppConfigs } from '../core-module/constants/app.config';
ToastService
@Injectable()
export class ApiProvider {
  constructor(
    public storage: Storage,
    public http: Http,
    public login: Login,
    public https: HttpClient,
    public errorHandle: ErrorHandle,
    public homeService: HomeService,
    public networkService: NetworkService,
    public toastService: ToastService
  ) { }

  errorObj = {
    "fallback": "User Details",
    "title": `Error Details`,
    "text": ``
  }

  errorTokenRetryCount: number = 0;





  refershToken(refreshToken) {
    // const body = new URLSearchParams();
    // body.set('grant_type', "refresh_token");
    // body.set('client_id', environment.clientId);
    // body.set('client_secret', environment.api_key);
    const obj = 'grant_type=refresh_token&refresh_token=' + refreshToken + "&client_id=" + environment.clientId;
    const url = environment.app_url + environment.keyCloak.getAccessToken;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('skip', 'true')
    };
    return this.https.post(url, obj, options);
  }

  validateToken() {
    return new Promise(resolve => {
      this.storage.get('userTokens').then(token => {
        resolve(token);
      })
      // return this.storage.get('userDetails').then(data => {
      //   if (data) {
      //     if (data.exp <= (Date.now() / 1000)) {
      //     this.storage.get('userTokens').then(usertoken => {
      //       this.refershToken(usertoken.refresh_token).subscribe((data: any) => {
      //         // let parsedData = JSON.parse(data._body);
      //         if (data && data.access_token) {
      //           let userTokens = {
      //             access_token: data.access_token,
      //             refresh_token: data.refresh_token,
      //             expires_in: data.expires_in
      //           };
      //           let userDetails = jwt_decode(userTokens.access_token);
      //           this.storage.set('userDetails', userDetails).then(userData => {
      //           })
      //           this.storage.set('userTokens', userTokens).then(data => {
      //             resolve(userTokens);
      //           })
      //           this.storage.set('currentUser', data).then(data => { })
      //         }
      //       }, error => {
      //         this.errorHandle.errorHandle(error);
      //       })
      //     })
      //     } else {
      //       this.storage.get('userTokens').then(token => {
      //         resolve(token);
      //       })
      //     }
      //   }
      // })
    })
  }
  checkAppUpdate() {
    if (this.networkService.isConnected) {
      return new Promise(resolve => {
        let appUpdate;
        this.homeService.checkAppUpdate().subscribe((data: any) => {
          if (data.result && !data.result.isVersionValid) {
            appUpdate = data.result.data;
            appUpdate.actions = {
              showCloseButton: false,
              showUpdatePopup: true,
            }
            appUpdate.showCloseButton = false,
              appUpdate.type = "appUpdate"
            appUpdate.buttons = [{
              title: 'Update',
              color: 'primary',
              isActionable: 'submit'
            }]
            // this.homeService.forceAppUpdate(appUpdate);
            resolve(appUpdate);
          } else {
            resolve(appUpdate);
          }
        }, error => {
          resolve();
          this.errorHandle.errorHandle(error);
        })
      })
    } else {
      this.toastService.errorToast('message.nerwork_connection_check');
    }
  }
} 
