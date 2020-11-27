import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrentUserService } from '../current-user/current-user.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import * as jwt_decode from "jwt-decode";
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastMessageService } from '../toast-messages/toast-message.service';
import { LoaderService } from '../loader/loader.service';
import { DbService } from '../db/db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url: string = environment.appUrl;
  redirect_url: string = environment.keycloakConfig.redirectUrl;
  auth_url: string;
  popOpen: boolean = false;

  constructor(private http: HttpClient,
    private currentUser: CurrentUserService,
    private storage: LocalStorageService,
    private router: Router,
    private alertController: AlertController,
    private message: ToastMessageService,
    private loader: LoaderService,
    private modalController: ModalController,
    private db: DbService
  ) {
    
   }

  doOAuthStepOne(): Promise<any> {
    this.auth_url = this.base_url + "/auth/realms/sunbird/protocol/openid-connect/auth?response_type=code&scope=offline_access&client_id=" + environment.keycloakConfig.clientId + "&redirect_uri=" +
      environment.keycloakConfig.redirectUrl;
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

  doOAuthStepTwo(token: string): Promise<any> {
    return new Promise(resolve => {
      this.loader.startLoader();
      const body = new URLSearchParams();
      const params = 'grant_type=authorization_code&client_id=' + environment.keycloakConfig.clientId + '&code=' + token + '&redirect_uri=' + environment.keycloakConfig.redirectUrl + '&scope=offline_access'
      body.set('grant_type', "authorization_code");
      body.set('client_id', environment.keycloakConfig.clientId);
      body.set('code', token);
      body.set('redirect_uri', environment.keycloakConfig.redirectUrl);
      body.set('scope', "offline_access");
      const url = environment.appUrl + '/auth/realms/sunbird/protocol/openid-connect/token';
      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('skip', 'true')
      };
      this.http.post(url, body.toString(), options)
        .subscribe((data: any) => {
          const sessionData = {
            access_token: data.access_token,
            refresh_token: data.refresh_token,
            accountDeactivate: false
          }
          this.checkLocalData(sessionData).then(success => {
            if (success) {
              this.currentUser.setUser(sessionData).then(success => {
                this.loader.stopLoader();
                resolve(sessionData);
              }).catch(error => {
                this.loader.stopLoader();
                resolve(error);
              })
            } else {
              this.currentUser.setUser(sessionData).then(success => {
                this.loader.stopLoader();
                resolve(sessionData);
              }).catch(error => {
                this.loader.stopLoader();
                resolve(error);
              })
            }
          }).catch(error => {
            this.loader.stopLoader();
            resolve(error);
          })
          // this.fcm.initializeFCM();
        }, error => {
          this.loader.stopLoader();
          resolve(error);
        });
    });
  }

  checkLocalData(newUser): Promise<any> {
    return new Promise(resolve => {
      this.currentUser.getUser().then(previousUserData => {
        if (previousUserData) {
          let previousUser = jwt_decode(previousUserData.access_token);
          let userDetails = jwt_decode(newUser.access_token);
          if (userDetails.sub.split(":").pop() == previousUser.sub.split(":").pop()) {
            resolve(userDetails);
          } else {
            this.confirmPreviousUserName(previousUser.preferred_username, newUser);
          }
        } else {
          resolve(false);
        }
      }).catch(error => {
        resolve(false);
      })
    })
  }

  tokenValidation(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.storage.getLocalStorage('userDetails').then(data => {
        let userDetails = jwt_decode(data.access_token);
        if (userDetails) {
          if (userDetails.exp <= (Date.now() / 1000)) {
            this.getNewToken(data.refresh_token).subscribe((token: any) => {
              const sessionData = {
                access_token: token.access_token,
                refresh_token: token.refresh_token
              }
              this.currentUser.setUser(sessionData).then(success => {
                resolve(sessionData);
              }).catch(error => {
                resolve();
              })
            }, error => {
              resolve();
            })
          } else {
            data ? resolve(data) : resolve()
          }
        }
      }).catch(error => {
        resolve()
      })
    })
  }

  getNewToken(refreshToken) {
    const obj = 'grant_type=refresh_token&refresh_token=' + refreshToken + "&client_id=" + environment.keycloakConfig.clientId;
    const url = environment.appUrl + environment.keycloakConfig.getAccessToken;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('skip', 'true')
    };
    return this.http.post(url, obj, options);
  }

  doLogout(): Promise<any> {
    return new Promise( (resolve) => {
      let logout_redirect_url = environment.keycloakConfig.redirectUrl;
      let logout_url = environment.appUrl + "/auth/realms/sunbird/protocol/openid-connect/logout?redirect_uri=" + logout_redirect_url;
      let closeCallback = function (event) {
      };
      this.db.createPouchDB(environment.db.projects);
      this.db.dropDb();
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

  sessionExpired() {
    this.modalController.dismiss();
    this.currentUser.getUser().then(userdetails => {
      if (!userdetails.accountDeactivate) {
        this.showSessionExpired();
      }
    })
  }
  async showSessionExpired() {
    const alert = await this.alertController.create({
      header: 'Session has expired. Please login again to continue',
      buttons: [
        {
          text: "Login",
          role: "role",
          handler: (data) => {
            this.doLogout().then(data => {
              this.currentUser.getUser().then(userdetails => {
                if (userdetails) {
                  const sessionData = {
                    access_token: userdetails.access_token,
                    refresh_token: userdetails.refresh_token,
                    accountDeactivate: true
                  }
                  this.currentUser.setUser(sessionData).then(success => {
                    this.router.navigateByUrl(`/login`);
                  }).catch(error => {
                  })
                }
              })
            }, error => {
            })
          },
        },
      ],
    });
    await alert.present();
  }

  async confirmPreviousUserName(previousUserEmail, tokens) {
    const alert = await this.alertController.create({
      header: "Please enter previous user id.",
      inputs: [
        {
          name: "userName",
          placeholder: "User Id",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: (data) => {
            this.doLogout();
            this.router.navigate(['/login']);
          },
        },
        {
          text: "Send",
          role: "role",
          handler: (data) => {
            if (
              data.userName &&
              previousUserEmail.toLowerCase() === data.userName.toLowerCase()
            ) {
              this.confirmDataClear(tokens);
            } else {
              this.doLogout();
              this.message.showMessage(
                "toastMessage.userNameMisMatch", 'danger'
              );
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async confirmDataClear(tokens) {
    const alert = await this.alertController.create({
      header: "All your datas will be lost. Do you want to continue?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: (data) => {
            this.doLogout();
            this.router.navigate(['/login']);
            this.message.showMessage(
              "toastMessage.loginAgain", 'danger'
            );
          },
        },
        {
          text: "Yes",
          role: "role",
          handler: (data) => {
            this.currentUser.setUser(tokens).then(success => {
              this.router.navigate(['/menu/tabs/home', {}]);
            }).catch(error => {
            })
          },
        },
      ],
    });
    await alert.present();
  }
}