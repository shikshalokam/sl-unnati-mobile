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
    public networkService: NetworkService
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
          validationsArray.push(
            Validators.required
          );
        }
        if (res.validation.regex) {
          if (res.field == "phoneNumber") {
            res.validation.regex = '^[0-9]{10}'
          }
          if (res.field == "email") {
            res.validation.regex = '/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
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
    console.log(controls['firstName'], "firstname");
    console.log(controls['lastName'], "lastname");
    console.log(controls['phoneNumber'], "phoneNumber");
    console.log(controls['email'], "email");
  }

  public getSubEntities(event, data) {
    console.log(event.detail.value.value, " this.profileFormData");
    this.getImmediateChildren(event.detail.value.value);
  }
  public getImmediateChildren(event) {
    if (this.connected) {
      let id;
      id = event;
      if (id) {
        this.toastService.startLoader('Loadinng, please wait');
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
            let mapped: boolean = false;
            this.profileFormData.forEach(element => {
              if (element.field == entities.result.data[0].entityType && !mapped) {
                element.options = entities.result.data;
                element.dependent = id;
                mapped = true;
              }
            });
            if (!mapped) {
              this.profileFormData.push(data);
            }
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
            this.toastService.errorToast('No sub entites found.');
          }
          this.toastService.stopLoader();
        }, erros => {
          this.toastService.stopLoader();
        })
      }
    }
  }

  // Save user info 
  public saveInfo() {
    if (this.connected) {
      this.submitAttempt = true;
      this.showUpdatePop = false;

      let obj = {
      }
      this.profileFormData.forEach(profile => {
        if (profile)
          obj[profile.field] = profile.value
      });
      this.submitAttempt = false;
      let data = {
        'metaInformation': obj
      }
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
        if (element.field == 'state') {
          this.getImmediateChildren(element.value.value);
        }
      });
      this.toastService.stopLoader();
      this.prepareForm();
    }, error => {
      this.toastService.stopLoader();
    })
  }
  public radioChecked(data, value) {
    data.selectedType = value;
  }

  async selectEntity(data) {
    if (data.options) {
      const modal = await this.modalController.create({
        component: GetSubEntitiesPage,
        componentProps: {
          'data': data,
        }
      });
      modal.onDidDismiss().then((data: any) => {
        if (data.data) {
          this.getNextEntities(data.data);
        }
      })
      return await modal.present();
    }
  }
  public getNextEntities(data) {
    this.toastService.startLoader('Loadinng, please wait');
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
        this.toastService.errorToast('No sub entites found.')
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
  }
}