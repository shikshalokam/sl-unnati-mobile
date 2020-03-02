import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UpdateProfileService } from './update-profile.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../api/api';
import { ToastService } from '../toast.service';
import * as jwt_decode from "jwt-decode";
import { NetworkService } from '../network.service';
import { NotificationCardService } from '../notification-card/notification.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
  profileForm: FormGroup;
  submitAttempt: boolean = false;
  districtList;
  noData;
  entities;
  clusterList;
  talukList;
  connected: any = navigator.onLine;
  userDetails;
  hubList;
  back = "project-view/home"
  blockList;
  zoneList;
  schoolList;
  profile: any = {};
  stateList;
  body = 'message.thankyou_note';
  header = 'message.thankyou';
  button = 'button.continue';
  isActionable = '/project-view/home';
  showUpdatePop: boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    public updateProfileService: UpdateProfileService,
    public storage: Storage,
    public api: ApiProvider,
    public toastService: ToastService,
    public router: Router,
    public notificationCardService: NotificationCardService,
    public networkService: NetworkService
  ) {
    networkService.emit.subscribe(status => {
      this.connected = status;
    })
  }

  ngOnInit() {
    this.storage.get('userTokens').then(data => {
      this.userDetails = jwt_decode(data.access_token);
    })
    this.updateProfileService.updateProfile('close');
    localStorage.setItem('isPopUpShowen', 'true');
    this.prepareForm();
    if (this.connected) {
      this.getStates();
      this.getProfileData();
    }
  }
  //  Prepare the form
  public prepareForm() {
    this.profileForm = this.formBuilder.group({
      fname: ['', Validators.required],
      emailId: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', ''],
      entity: ['', ''],
      lname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      zone: ['', ''],
      taluka: ['', ''],
      cluster: ['', ''],
      hub: ['', ''],
      block: ['', ''],
      school: ['', ''],
    })
  }
  // get states
  public getStates() {
    this.storage.get('userTokens').then(data => {
      if (data) {
        this.api.refershToken(data.refresh_token).subscribe((data: any) => {
          let parsedData = JSON.parse(data._body);
          if (parsedData && parsedData.access_token) {
            let userTokens = {
              access_token: parsedData.access_token,
              refresh_token: parsedData.refresh_token,
            };
            // this.toastService.startLoader('Loading Please Wait');
            this.storage.set('userTokens', userTokens).then(data => {
              this.updateProfileService.getStates(userTokens.access_token).subscribe((states: any) => {
                this.stateList = states.result;
                // this.toastService.stopLoader();
              }, erros => {
                // this.toastService.stopLoader();
              }
              )
            })
          }
        })
      }
    })
  }
  // immediate children of state
  public getImmediateChildren(event) {
    if (this.connected) {
      let id;
      id = event.detail.value;
      if (id && this.noData) {
        this.storage.get('userTokens').then(data => {
          if (data) {
            this.api.refershToken(data.refresh_token).subscribe((data: any) => {
              let parsedData = JSON.parse(data._body);
              if (parsedData && parsedData.access_token) {
                let userTokens = {
                  access_token: parsedData.access_token,
                  refresh_token: parsedData.refresh_token,
                };
                this.toastService.startLoader('Loading Please Wait');
                this.storage.set('userTokens', userTokens).then(data => {
                  this.updateProfileService.getImmediateChildren(userTokens.access_token, id).subscribe((entities: any) => {
                    switch (entities.result.immediateEntityType) {
                      case 'district': {
                        this.districtList = entities.result.data;
                        break;
                      }
                      case 'zone': {
                        this.zoneList = entities.result.data;
                        break;
                      }
                      case 'cluster': {
                        this.clusterList = entities.result.data;
                        break;
                      }
                      case 'block': {
                        this.blockList = entities.result.data;
                        break;
                      }
                      case 'school': {
                        this.schoolList = entities.result.data;
                        break;
                      }
                      case 'hub': {
                        this.hubList = entities.result.data;
                        break;
                      }
                      case 'taluka': {
                        this.talukList = entities.result.data;
                        break;
                      }
                    }
                    this.toastService.stopLoader();
                  }, erros => {
                    this.toastService.stopLoader();
                  })
                })
              }
            })
          }
        })
      } else {
        this.noData = true;
      }
    }
  }
  public getImmediateChildren1(id) {
    if (this.connected) {
      if (id && this.noData) {
        this.storage.get('userTokens').then(data => {
          if (data) {
            this.api.refershToken(data.refresh_token).subscribe((data: any) => {
              let parsedData = JSON.parse(data._body);
              if (parsedData && parsedData.access_token) {
                let userTokens = {
                  access_token: parsedData.access_token,
                  refresh_token: parsedData.refresh_token,
                };
                this.storage.set('userTokens', userTokens).then(data => {
                  this.updateProfileService.getImmediateChildren(userTokens.access_token, id).subscribe((entities: any) => {
                    switch (entities.result.immediateEntityType) {
                      case 'district': {
                        this.districtList = entities.result.data;
                        break;
                      }
                      case 'zone': {
                        this.zoneList = entities.result.data;
                        break;
                      }
                      case 'cluster': {
                        this.clusterList = entities.result.data;
                        break;
                      }
                      case 'block': {
                        this.blockList = entities.result.data;
                        break;
                      }
                      case 'school': {
                        this.schoolList = entities.result.data;
                        break;
                      }
                      case 'hub': {
                        this.hubList = entities.result.data;
                        break;
                      }
                      case 'taluka': {
                        this.talukList = entities.result.data;
                        break;
                      }
                    }
                  }, erros => {
                  })
                })
              }
            })
          }
        })
      } else {
        this.noData = true;
      }
    }
  }

  // Save user info
  public saveInfo() {
    if (this.connected) {
      this.submitAttempt = true;

      if (this.profile.firstName && this.profile.lastName && this.profile.state && (this.profile.emailId || this.profile.phoneNumber)) {
        if (!this.profile.hub) {
          delete this.profile.hub;
        }
        if (!this.profile.cluster) {
          delete this.profile.cluster;
        }
        if (!this.profile.taluk) {
          delete this.profile.taluk;
        }
        if (!this.profile.block) {
          delete this.profile.block;
        }
        if (!this.profile.district) {
          delete this.profile.district;
        }
        if (!this.profile.zone) {
          delete this.profile.zone;
        }
        if (!this.profile.school) {
          delete this.profile.school;
        }
        if (!this.profile.updatedBy) {
          delete this.profile.updatedBy;
        }
        if (!this.profile.emailId) {
          delete this.profile.emailId;
        }
        if (!this.profile.phoneNumber) {
          delete this.profile.phoneNumber;
        }
        this.submitAttempt = false;
        this.storage.get('userTokens').then(data => {
          if (data) {
            this.api.refershToken(data.refresh_token).subscribe((data: any) => {
              let parsedData = JSON.parse(data._body);
              if (parsedData && parsedData.access_token) {
                let userTokens = {
                  access_token: parsedData.access_token,
                  refresh_token: parsedData.refresh_token,
                };
                this.toastService.startLoader('Loading Please Wait');
                this.storage.set('userTokens', userTokens).then(data => {
                  this.updateProfileService.saveInfo(userTokens.access_token, this.profile).subscribe((data: any) => {
                    this.storage.get('clearNotification').then((data) => {
                      // this.markAsRead(data);
                    });
                    this.updateProfileService.updateProfile('done');
                    this.showUpdatePop = true;
                    console.log(this.showUpdatePop, "this.showUpdatePop");
                    this.submitAttempt = false;
                    this.toastService.stopLoader();
                  }, error => {
                    this.toastService.stopLoader();
                  })
                }, error => {
                  this.toastService.stopLoader();
                })
              }
            })
          }
        })
      }
    } else {
      this.toastService.errorToast('message.nerwork_connection_check');
    }

  }
  // go back to home page
  public cancel() {
    this.router.navigate(['/project-view/home'])
  }

  public markAsRead(notificationMeta) {
    this.storage.get('userTokens').then(data => {
      this.api.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.notificationCardService.markAsRead(userTokens.access_token, notificationMeta.id).subscribe(data => {
              notificationMeta.is_read = true;
              this.notificationCardService.checkForNotificationApi(userTokens.access_token).subscribe((data1: any) => {
                this.notificationCardService.getCount(data1.result.count);
              })
            })
          })
        }
      })
    })
  }

  // get user profile data
  public getProfileData() {
    this.storage.get('userTokens').then(data => {
      if (data) {
        this.api.refershToken(data.refresh_token).subscribe((data: any) => {
          let parsedData = JSON.parse(data._body);
          if (parsedData && parsedData.access_token) {
            let userTokens = {
              access_token: parsedData.access_token,
              refresh_token: parsedData.refresh_token,
            };
            this.toastService.startLoader('Loading Please Wait');
            this.storage.set('userTokens', userTokens).then(data => {
              this.updateProfileService.getProfileData(userTokens.access_token).subscribe((data: any) => {
                delete data.result.createdAt;
                delete data.result.createdBy;
                if (data.result.state) {
                  this.getImmediateChildren1(data.result.state);
                }
                if (data.result.district) {
                  this.getImmediateChildren1(data.result.district);
                }
                if (data.result.hub) {
                  this.getImmediateChildren1(data.result.hub);
                }
                if (data.result.zone) {
                  this.getImmediateChildren1(data.result.zone);
                }
                if (data.result.cluster) {
                  this.getImmediateChildren1(data.result.cluster);
                }
                if (data.result.block) {
                  this.getImmediateChildren1(data.result.block);
                }
                if (data.result.school) {
                  this.getImmediateChildren1(data.result.school);
                }
                this.profile = data.result;
                if (this.profile.firstName) {
                  this.noData = false;
                } else {
                  this.noData = true;
                }
                this.toastService.stopLoader();
              }, error => {
                this.toastService.stopLoader();
              })
            })
          }
        })
      }
    })
  }
}