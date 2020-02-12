import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UpdateProfileService } from './update-profile.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../api/api';
import { ToastService } from '../toast.service';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {
  profileForm: FormGroup;
  submitAttempt: boolean = false;
  districts;
  entities;
  clusters;
  talukas;
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
    public router: Router
  ) {
  }

  ngOnInit() {
    this.storage.get('userTokens').then(data => {
      this.userDetails = jwt_decode(data.access_token);
    })
    this.prepareForm();
    this.getStates();
  }

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
            this.toastService.startLoader('Loading, States');
            this.storage.set('userTokens', userTokens).then(data => {
              this.updateProfileService.getStates(userTokens.access_token).subscribe((states: any) => {
                this.states = states.result;
                this.toastService.stopLoader();
              }, erros => {
                this.toastService.stopLoader();
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
    if (id) {
      this.storage.get('userTokens').then(data => {
        if (data) {
          this.api.refershToken(data.refresh_token).subscribe((data: any) => {
            let parsedData = JSON.parse(data._body);
            if (parsedData && parsedData.access_token) {
              let userTokens = {
                access_token: parsedData.access_token,
                refresh_token: parsedData.refresh_token,
              };
              this.toastService.startLoader('Loading');
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
    }

  }

  // Save user info
  public saveInfo() {
    this.submitAttempt = true;
    if (this.profile.firstName && this.profile.lastName && this.profile.state && (this.profile.emailId || this.profile.phoneNumber)) {
      this.storage.get('userTokens').then(data => {
        if (data) {
          this.api.refershToken(data.refresh_token).subscribe((data: any) => {
            let parsedData = JSON.parse(data._body);
            if (parsedData && parsedData.access_token) {
              let userTokens = {
                access_token: parsedData.access_token,
                refresh_token: parsedData.refresh_token,
              };
              this.toastService.startLoader('Loading');
              this.storage.set('userTokens', userTokens).then(data => {
                this.updateProfileService.saveInfo(userTokens.access_token, this.profile).subscribe((data: any) => {
                  this.toastService.stopLoader();
                  this.updateProfileService.updateProfile('done')
                  this.showUpdatePop = true;
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
    } else {
      if (!this.profile.firstName || !this.profile.lastName) {
        this.toastService.errorToast('message.name_require');
      } else if (!this.profile.state) {
        this.toastService.errorToast('message.state_require');
      } else if (!this.profile.emailId && !this.profile.phoneNumber) {
        this.toastService.errorToast('message.email_phonenumber_require');
      }
    }
  }
  // go back to home page
  public cancel() {
    this.router.navigate(['/project-view/home'])
  }
}
