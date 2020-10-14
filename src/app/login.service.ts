import { Injectable } from '@angular/core';
import { URLSearchParams, Headers, Http, RequestOptions } from '@angular/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { CurrentUserProvider } from './current-user'
import { Subject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root',
})
export class Login {
  public emit = new Subject();
  redirect_url: string;

  logout_url: string;

  auth_url: string;

  base_url: string;

  logout_redirect_url: string;
  constructor(public http: HttpClient,
    public nativeHttp: HTTP,
    public currentUser: CurrentUserProvider,
    public storage: Storage) { }
  doLogin() {
    // var ref = (<any>window).cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
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
          browserRef.close();
          let responseParameters = (((event.url).split("?")[1]).split("="))[1];
          if (responseParameters !== undefined) {
            resolve(responseParameters);
          } else {
            reject("Problem authenticating with Sunbird");
          }
        }
      });
    });
  }


  public loggedIn(user) {
    this.emit.next(user);
  }
  public getToken(data) {
    this.base_url = environment.app_url;
    this.redirect_url = environment.keyCloak.redirection_url;
    const body = new HttpParams();
    body.set('grant_type', "authorization_code");
    body.set('client_id', environment.clientId);
    body.set('code', data);
    body.set('redirect_uri', this.redirect_url);
    body.set('scope', "offline_access");
    return new Promise(resolve => {
      this.http.post(this.base_url + environment.keyCloak.getAccessToken, body)
        .subscribe((data: any) => {
          //let parsedData = JSON.parse(data._body);
          resolve(data);
        }, error => {
          resolve(error);
        });
    });
  }


  checkForCurrentUserLocalData(tokens) {
    const loggedinUserId = this.currentUser.getDecodedAccessToken(tokens.access_token).sub;
    const currentUserId = this.currentUser.getCurrentUserData() ? this.currentUser.getCurrentUserData().sub : null;
    if (loggedinUserId === currentUserId || !currentUserId) {
      let userTokens = {
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
        idToken: tokens.id_token,
        isDeactivated: false
      };
      this.currentUser.setCurrentUserDetails(userTokens);
    } else {
      // this.confirmPreviousUserName(this.currentUser.getCurrentUserData().preferred_username, tokens);
    }
  }
  doLogout(): Promise<any> {
    return new Promise(function (resolve) {
      let logout_redirect_url = environment.keyCloak.logout_redirect_url;
      let logout_url = environment.app_url + "/auth/realms/sunbird/protocol/openid-connect/logout?redirect_uri=" + logout_redirect_url;
      let closeCallback = function (event) {
      };
      let browserRef = (<any>window).cordova.InAppBrowser.open(logout_url, "_blank", "zoom=no");
      browserRef.addEventListener('loadstart', function (event) {
        if (event.url && ((event.url).indexOf(logout_redirect_url) === 0)) {
          browserRef.removeEventListener("exit", closeCallback);
          browserRef.close();
          resolve()
        }
      });
    });
  }

  doOAuthStepTwo(token: string): Promise<any> {
    return new Promise(resolve => {
      const params = 'grant_type=authorization_code&client_id=' + environment.clientId + '&code=' + token + '&redirect_uri=' + environment.keyCloak.redirection_url + '&scope=offline_access'
      let obj = {
        grant_type: "authorization_code",
        client_id: environment.clientId,
        code: token,
        redirect_uri: environment.keyCloak.redirection_url,
        scope: "offline_access",
      };
      const url = environment.app_url + environment.keyCloak.getAccessToken;
      this.nativeHttp.post(url, obj, {})
        .then((data: any) => {
          let parsedData = JSON.parse(data.data);
          resolve(parsedData);
        }, error => {
          resolve(error);
        });
    });
  }
}