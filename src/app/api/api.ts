import { URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Login } from '../login.service';
import { Storage } from '@ionic/storage';
import * as jwt_decode from "jwt-decode";
import { environment } from '../../environments/environment';
import { ErrorHandle } from '../error-handling.service';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
@Injectable()
export class ApiProvider {
  constructor(
    public storage: Storage,
    public http: Http,
    public nativeHttp: HTTP,
    public login: Login,
    public https: HttpClient,
    public errorHandle: ErrorHandle
  ) { }

  errorObj = {
    "fallback": "User Details",
    "title": `Error Details`,
    "text": ``
  }

  errorTokenRetryCount: number = 0;





  refershToken(refreshToken) {
    const body = new URLSearchParams();
    body.set('grant_type', "refresh_token");
    body.set('client_id', environment.clientId);
    body.set('client_secret', environment.api_key);
    const obj = 'grant_type=refresh_token&refresh_token=' + refreshToken + "&client_id=" + environment.clientId;
    const url = environment.app_url + environment.keyCloak.getAccessToken;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('skip', 'true')
    };
    // return this.https.post(url, obj, options);
    return this.https.post(url, obj, options);
  }

  getRefershToken(refreshToken) {
    console.log('in refreshToken');
    const body = new URLSearchParams();
    body.set('grant_type', "refresh_token");
    body.set('client_id', environment.clientId);
    body.set('client_secret', environment.api_key);
    const obj = 'grant_type=refresh_token&refresh_token=' + refreshToken + "&client_id=" + environment.clientId;
    const url = environment.app_url + environment.keyCloak.getAccessToken;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    // return this.https.post(url, obj, options);
    console.log('going to call api');
    return this.nativeHttp.post(url, obj, options).then(resp => {
      console.log(resp, "resp in getRefershToken");
      return resp;
    }, error => {
      console.log(error, "error in getRefershToken");
      return error;
    });
  }

  validateToken() {
    return new Promise(resolve => {
      // this.storage.get('userTokens').then(token => {
      //   resolve(token);
      // })
      return this.storage.get('userDetails').then(data => {
        if (data) {
          // if (data.exp <= (Date.now() / 1000)) {
          this.storage.get('userTokens').then(usertoken => {
            console.log(usertoken, "usertoken")
            this.getRefershToken(usertoken.refresh_token).then((data: any) => {
              // let parsedData = JSON.parse(data._body);
              if (data && data.access_token) {
                let userTokens = {
                  access_token: data.access_token,
                  refresh_token: data.refresh_token,
                  expires_in: data.expires_in
                };
                let userDetails = jwt_decode(userTokens.access_token);
                this.storage.set('userDetails', userDetails).then(userData => {
                })
                this.storage.set('userTokens', userTokens).then(data => {
                  resolve(userTokens);
                })
                this.storage.set('currentUser', data).then(data => { })
              }
            }, error => {
              this.errorHandle.errorHandle(error);
            })
          })
          // } else {
          //   this.storage.get('userTokens').then(token => {
          //     resolve(token);
          //   })
          // }
        }
      })
    })
  }
} 
