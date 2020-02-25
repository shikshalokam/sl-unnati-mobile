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
  districts;
  noData;
  entities;
  clusters;
  talukas;
  connected;
  userDetails;
  hubs;
  back = "project-view/home"
  blocks;
  zones;
  schools;
  profile: any = {};
  states;
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
    this.getStates();
    this.getProfileData();
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
                this.states = states.result;
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
    let id = event.detail.value;
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
                      this.districts = entities.result.data;
                      break;
                    }
                    case 'zone': {
                      this.zones = entities.result.data;
                      break;
                    }
                    case 'cluster': {
                      this.clusters = entities.result.data;
                      break;
                    }
                    case 'block': {
                      this.blocks = entities.result.data;
                      break;
                    }
                    case 'school': {
                      this.schools = entities.result.data;
                      break;
                    }
                    case 'hub': {
                      this.hubs = entities.result.data;
                      break;
                    }
                    case 'taluka': {
                      this.talukas = entities.result.data;
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

  // Save user info
  public saveInfo() {
    if (this.connected) {
      this.submitAttempt = true;
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
      if (!this.profile.emailId) {
        delete this.profile.emailId;
      }
      if (!this.profile.phoneNumber) {
        delete this.profile.phoneNumber;
      }
      if (this.profile.firstName && this.profile.lastName && this.profile.state && (this.profile.emailId || this.profile.phoneNumber)) {
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
                      this.markAsRead(data);
                    });
                    this.toastService.stopLoader();
                    this.updateProfileService.updateProfile('done');
                    this.showUpdatePop = true;
                    this.submitAttempt = false;
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