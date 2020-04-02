import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UpdateProfileService } from './update-profile.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../api/api';
import { ToastService } from '../toast.service';
import * as jwt_decode from "jwt-decode";
import { NetworkService } from '../network.service';
import { NotificationCardService } from '../notification-card/notification.service';
import { ModalController } from '@ionic/angular';
import { GetSubEntitiesPage } from '../get-sub-entities/get-sub-entities.page';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage {
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
  profile = [];
  stateList;
  appUpdate = '';
  showCloseButton: boolean = false;
  body = 'message.thankyou_note';
  header = 'message.thankyou';
  button = 'button.continue';
  isActionable = '/project-view/home';
  showUpdatePop: boolean = false;
  showForm: boolean = false;
  name = 'Angular';
  stateSubEntities;
  profileFormData;

  dynamicForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public updateProfileService: UpdateProfileService,
    public storage: Storage,
    public api: ApiProvider,
    public toastService: ToastService,
    public router: Router,
    public modalController: ModalController,
    public notificationCardService: NotificationCardService,
    public networkService: NetworkService,
    public alertController: AlertController
  ) {

  }

  ionViewDidEnter() {
    this.showUpdatePop = false;
    this.storage.get('userTokens').then(data => {
      this.userDetails = jwt_decode(data.access_token);
    })
    this.updateProfileService.updateProfile('close');
    localStorage.setItem('isPopUpShowen', 'true');
    if (this.connected) {
      this.getProfileData();
    }
  }
  //  Prepare the form
  public prepareForm() {
    const controls = {};
    this.profileFormData.forEach(res => {
      const validationsArray = [];
      if (res.validation) {
        if (res.validation.required) {
          res.validation.name = "required",
            validationsArray.push(
              Validators.required
            );
        }
        if (res.validation.regex) {
          res.validation.name = "pattern";
          if (res.field == "phoneNumber") {
            res.validation.regex = new RegExp("^[0-9]{10}");
          }
          if (res.field == "firstName") {
            res.validation.regex = new RegExp("^[A-Za-z]+$");
          }
          if (res.field == "lastName") {
            res.validation.regex = new RegExp("^[A-Za-z]+$");
          }
          if (res.field == "email") {
            res.validation.regex = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
          }
          if (res.field == "state") {
            delete res.validation.regex
          }
          validationsArray.push(
            Validators.pattern(res.validation.regex)
          );
        }
        controls[res.field] = new FormControl('', validationsArray);
      }
    });
    this.dynamicForm = new FormGroup(
      controls
    );
    this.showForm = true;
  }

  public getSubEntities(event) {
    this.getImmediateChildren(event.detail.value);
  }
  public getImmediateChildren(event) {
    if (this.connected) {
      let id;
      id = event;
      if (id) {
        this.toastService.startLoader('Loading, please wait');
        this.updateProfileService.getImmediateChildren(id).subscribe((entities: any) => {
          if (entities.result.data) {
            let entityData = [];
            entityData.push(id);
            let data = {
              editable: false,
              dependent: id,
              field: entities.result.data[0].entityType,
              input: "multiselect",
              label: entities.result.data[0].entityType,
              selectedType: "list",
              validation: {},
              options: entities.result.data,
              visible: true
            }
            console.log(entities.result.data, "entities.result.data");
            let mapped: boolean = false;
            this.profileFormData.forEach(element => {
              if (element.field == entities.result.data[0].entityType && !mapped) {
                element.options = entities.result.data;
                element.value = [];
                element.dependent = id;
                mapped = true;
              }
            });
            if (!mapped) {
              this.profileFormData.push(data);
            }
            let remove = false;
            let toBeRemove = [];
            this.stateSubEntities[id].forEach(element => {
              if (remove) {
                toBeRemove.push(element);
              }
              if (entities.result.data[0].entityType == element) {
                remove = true;
              }
            });
            const filteredItems = this.profileFormData.filter(item => !toBeRemove.includes(item.field));
            this.profileFormData = filteredItems;
          } else {
            this.profileFormData.forEach(element => {
              if (element.input == 'multiselect') {
                const index: number = this.profileFormData.indexOf(element);
                if (index !== -1) {
                  this.profileFormData.splice(index, 1);
                }
              }
            });
            this.profileFormData.forEach(element => {
              if (element.input == 'multiselect') {
                const index: number = this.profileFormData.indexOf(element);
                if (index !== -1) {
                  this.profileFormData.splice(index, 1);
                }
              }
            });
            // this.toastService.errorToast('No sub entites found.');
          }
          this.toastService.stopLoader();
        }, erros => {
          // this.toastService.stopLoader();
        })
      }
    }
  }

  // Save user info 
  public saveInfo() {
    let valid = true;
    if (this.connected) {
      this.showUpdatePop = false;
      this.submitAttempt = false;
      let obj = {
      }
      this.profileFormData.forEach(profile => {
        if (profile.validation.regex) {
          if (!profile.patternMatch) {
            valid = false;
          }
        }
        if (profile.validation.required) {
          if (!profile.value) {
            valid = false;
          }
        }
        if (valid) {
          this.submitAttempt = false;
        } else {
          this.submitAttempt = true;
          // this.toastService.errorToast('message.fileds_mandatory');
        }
        if (profile.field == 'state' && !profile.value.value) {
          profile.options.forEach(option => {
            if (option.value == profile.value) {
              obj[profile.field] = option
            }
          });
        } else {
          obj[profile.field] = profile.value
        }
      });

      let data = {
        'metaInformation': obj
      }
      if (valid) {
        this.submitAttempt = false;
        this.toastService.startLoader('Loading,please wait');
        this.updateProfileService.saveInfo(data).subscribe((data: any) => {
          this.storage.get('clearNotification').then((data) => {
            // this.markAsRead(data);
          });
          this.updateProfileService.updateProfile('done');
          this.showUpdatePop = true;
          this.submitAttempt = false;
          this.toastService.stopLoader();
        }, error => {
          this.toastService.stopLoader();
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

  // get user profile data
  public getProfileData() {
    this.toastService.startLoader('Loading, please wait');
    this.updateProfileService.getProfileData().subscribe((data: any) => {
      delete data.result.createdAt;
      delete data.result.createdBy;
      this.profileFormData = data.result.form;
      this.stateSubEntities = data.result.statesWithSubEntities;
      this.profileFormData.forEach(element => {
        element.patternMatch = true;
        // if (element.field == 'state') {
        //   this.getImmediateChildren(element.value.value);
        // }
      });
      this.toastService.stopLoader();
      this.prepareForm();
      if (this.profileFormData[this.profileFormData.length - 1].field != 'state') {
        this.getNextEntities(this.profileFormData[this.profileFormData.length - 1]);
      }
    }, error => {
      this.toastService.stopLoader();
    })
  }
  public radioChecked(data, value) {
    data.selectedType = value;
    if (value == 'others') {
      data.label = 'others'
    }
  }

  async selectEntity(data) {
    console.log(data, "data nnn");
    if (data.options) {
      const modal = await this.modalController.create({
        component: GetSubEntitiesPage,
        componentProps: {
          'data': data,
        }
      });
      modal.onDidDismiss().then((data: any) => {
        if (data.data) {
          let mapped = false;
          let toBeRemove = [];
          this.stateSubEntities[data.data.dependent].forEach(element => {
            if (mapped) {
              toBeRemove.push(element);
            }
            if (data.data.field == element) {
              mapped = true;
            }
          });
          const filteredItems = this.profileFormData.filter(item => !toBeRemove.includes(item.field));
          this.profileFormData = filteredItems;
          this.getNextEntities(data.data);
        }
      })
      return await modal.present();
    }
  }
  public getNextEntities(data) {
    let entity = [];
    let entities;
    let type = '';
    if (data.value && data.value.length > 0) {
      data.value.forEach(element => {
        entity.push(element.value);
      });
    } else {
      let mapped = -1;
      if (this.stateSubEntities[data.dependent]) {
        this.stateSubEntities[data.dependent].forEach(function (element, i) {
          if (mapped == i) {
            type = element;
            entity.push(data.dependent);
          }
          if (element == data.field) {
            mapped = i + 1;
          }
        });
      }
    }
    entities = {
      entities: entity
    }
    this.toastService.startLoader('Loading, please wait');
    this.updateProfileService.getSubEntities(entities, type).subscribe((entity: any) => {
      if (entity.result && entity.result.data) {
        let data1 = {
          editable: false,
          dependent: data.dependent,
          field: entity.result.data[0].entityType,
          input: "multiselect",
          label: entity.result.data[0].entityType,
          selectedType: "list",
          validation: {
            regex: '',
            required: false
          },
          visible: true,
          options: entity.result.data
        }
        let mapped: boolean = false;
        this.profileFormData.forEach(element => {
          if (element.field == entity.result.data[0].entityType && !mapped) {
            element.options = entity.result.data;
            element.dependent = data.dependent;
            mapped = true;
          }
        });
        if (!mapped) {
          this.profileFormData.push(data1);
        }
        this.toastService.stopLoader();
      } else {
        this.toastService.stopLoader();
      }
    }, error => {
      this.toastService.stopLoader();
    })
  }

  public reset(data) {
    data.others = '';
  }
  public submitOthers(data) {
    data.value = [];
    if (data.others) {
      this.getNextEntities(data);
    } else {
      this.toastService.errorToast('Please enter ' + data.field + ' name.')
    }
  }

  public removeEntity(entity, entityList) {
    const index: number = entityList.value.indexOf(entity);
    if (index !== -1) {
      entityList.value.splice(index, 1);

    }
    // if (!entityList.value.length) {
    let mapped = false;
    let toBeRemove = [];
    this.stateSubEntities[entityList.dependent].forEach(element => {
      if (mapped) {
        toBeRemove.push(element);
      }
      if (entityList.field == element) {
        mapped = true;
      }
    });
    const filteredItems = this.profileFormData.filter(item => !toBeRemove.includes(item.field));
    this.profileFormData = filteredItems;
    // } else {
    if (entityList.value && entityList.value.length > 0) {
      // this.getNextEntities(entityList);
    }
    // }
  }
  public checkPatter(data) {
    if (data.value) {
      let result = data.validation.regex.test(data.value);
      data.patternMatch = result;
    } else {
      data.patternMatch = true;
    }
  }

  async deleteConfirm(entity, entityList) {
    const alert = await this.alertController.create({
      header: 'Cofirm!',
      message: 'Do you want delete ' + entity.label + ' from ' + entityList.label + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.removeEntity(entity, entityList);
          }
        }
      ]
    });

    await alert.present();
  }
}