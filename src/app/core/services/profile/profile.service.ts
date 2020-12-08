import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { localStorageConstants, urlConstants } from '../../constants';
import { KendraApiService } from '../kendra-api/kendra-api.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { SunbirdService } from '../sunbird/sunbird.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private kendra: KendraApiService,
    private localStorage: LocalStorageService,
    private translate: TranslateService,
    private alertController: AlertController,
    private router: Router,
    private sunbird: SunbirdService
  ) { }


  getProfileRoles(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.localStorage.getLocalStorage(localStorageConstants.PROFILE_DATA).then(success => {
        resolve(success)
      }).catch(error => {
        this.getProfilRoleseApi().then(success => {
          resolve(success)
        }).catch(error => {
          reject()
        })
      })
    })
  }

  getProfilRoleseApi(): Promise<any> {
    return new Promise((resolve, reject) => {
      let state;
      const config = {
        url: urlConstants.API_URLS.GET_PROFILE
      }
      this.kendra.get(config).subscribe(data => {
        if (data.result.roles && data.result.roles.length) {
          data.result.roles.forEach(role => {
            if (role.entities && role.entities.length) {
              role.entities.forEach(entity => {
                if (entity.relatedEntities && entity.relatedEntities.length && !state) {
                  entity.relatedEntities.forEach(re => {
                    if (re.entityType == "state") {
                      state = re;
                      data.result.selectedState = state;
                      this.localStorage.setLocalStorage(localStorageConstants.PROFILE_DATA, data.result).then(success => {
                        resolve(data.result);
                      })
                    }
                  });
                } else {
                }
              });
            }
          });
        } else {
          this.localStorage.setLocalStorage(localStorageConstants.PROFILE_DATA, data.result).then(success => {
            resolve(data.result);
          })
        }
      }, error => {
        reject()

      })
    })
  }

  async updateAlert(title, body, update) {
    let texts;
    this.translate.get([title, body, update]).subscribe(data => {
      texts = data;
    })
    const alert = await this.alertController.create({
      cssClass: 'c-permission',
      header: texts[title],
      message: texts[body],
      backdropDismiss: false,
      buttons: [
        {
          text: texts[update],
          role: "role",
          cssClass: 'secondary',
          handler: (data) => {
            this.router.navigate(['menu/profile-update'])
          },
        },
      ],
    });
    await alert.present();
  }


  getProfile(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.localStorage.getLocalStorage(localStorageConstants.USER_DETAILS).then(data => {
        resolve(data)
      }).catch(error => {
        this.getProfileInfoApi().then(success => {
          resolve(success);
        }).catch(error => {
          reject();
        })
      })
    })
  }

  getProfileInfoApi(): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        url: urlConstants.API_URLS.PROFILE_INFO
      }
      this.sunbird.get(config).subscribe(data => {
        const profileInfo = data['result'] ? data['result']['response'] : {};
        this.localStorage.setLocalStorage(localStorageConstants.USER_DETAILS, profileInfo).then(data => {
          resolve(profileInfo)
        })
      }, error => {
        reject()
      })
    })
  }
}
