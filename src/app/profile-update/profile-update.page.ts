import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { KendraApiService, LoaderService, localStorageConstants, LocalStorageService, ProfileService, ToastMessageService, urlConstants } from '../core';
import { ModalController } from '@ionic/angular';
import { OnboardingEntityListingModalPage } from './onboarding-entity-listing-modal/onboarding-entity-listing-modal';


@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.page.html',
  styleUrls: ['./profile-update.page.scss'],
})
export class ProfileUpdatePage implements OnInit {
  isParam = "profileNotUpdated";
  states;
  roles;
  showPreview: boolean = false;
  userName: string;
  profileRoles: any;
  userState: string;
  formObj: {
    state: "",
    role: ""
  }
  entityTypeForm = [];
  dynamicForm = [];
  appName = "";
  tc: boolean = false;
  selectedState;
  selectedRole;
  formGroup: FormGroup;
  showLoader: boolean = false;
  constructor(
    private kendraService: KendraApiService,
    private toast: LoaderService,
    private modal: ModalController,
    public fb: FormBuilder,
    private storage: LocalStorageService,
    private profile: ProfileService,
    private router: Router) { }

  ngOnInit() {
    this.profile.getProfile().then(data => {
      this.userName = data.userName;
    }).catch(error => {
      this.userName = "";
    })
  }

  ionViewDidEnter() {
    this.formObj = {
      state: "",
      role: ""
    }
    this.getProfileData();
    // this.getStates();
  }


  async getProfileData() {
    await this.toast.startLoader()
    this.showLoader = true;
    this.profile.getProfileRoles().then(data => {
      this.toast.stopLoader();
      if (data.roles && data.roles.length) {
        this.showPreview = true;
        this.profileRoles = data.roles;
        this.getStatesValue();
        this.isParam = 'profileUpdated';
      } else {
        this.getStates()
      }
    }).catch(error => {
      this.toast.stopLoader();
    })
  }

  getStatesValue() {
    for (const role of this.profileRoles) {
      for (const entity of role.entities) {
        if (entity.entityType === 'state') {
          this.userState = entity.name;
        }
        for (const subEntity of entity.relatedEntities) {
          if (subEntity.entityType === 'state') {
            this.userState = subEntity.metaInformation.name;
          }
        }
      }
    }
  }

  getStates() {
    const config = {
      url: urlConstants.API_URLS.STATE_LIST
    }
    this.toast.startLoader();
    this.kendraService.get(config).subscribe(data => {
      this.toast.stopLoader();
      this.states = data.result && data.result.length ? data.result : [];
      this.dynamicForm.push(
        {
          "field": "state",
          "label": "State",
          "value": "",
          "options": data.result,
          "visible": true,
          "editable": true,
          "input": "text",
          "validation": {
            "required": true
          }
        }
      )
      this.formGroup = this.fb.group(
        {
          state: ['', [Validators.required]],
          // tc: [false, [Validators.required]]
        }
      );

      this.formGroup.get("state").valueChanges.subscribe(selectedState => {
        // this.formGroup.removeControl('role');
        // this.getRolesForState(selectedState);
        if (!this.formGroup.get('role')) {
          this.getRolesForState(selectedState);
        }
        else {
          this.formGroup.removeControl('role');
          this.dynamicForm.length = 2;
          this.getRolesForState(selectedState);
        }
      })
    }, error => {
      this.toast.stopLoader();
    })
  }

  getRolesForState(stateId) {
    const config = {
      url: urlConstants.API_URLS.STATE_ROLES + stateId
    }
    this.toast.startLoader();
    this.kendraService.get(config).subscribe(data => {
      this.toast.stopLoader();
      this.roles = data.result && data.result.length ? data.result : [];
      // this.showLoader = false;
      if (!this.checkIfAlreadyInDynamicJson('role', this.roles)) {
        this.dynamicForm.push(
          {
            "field": "role",
            "label": "Role",
            "value": "",
            "options": this.roles,
            "visible": true,
            "editable": true,
            "input": "text",
            "validation": {
              "required": true
            }
          }
        )
      }

      this.formGroup.addControl('role', new FormControl('', [Validators.required]));
      this.formGroup.get("role").valueChanges.subscribe(selectedState => {
        this.resetSubEntitiesForm();
        //removing all elements of array other than role and state
        this.dynamicForm.length = 2
        this.getSubEntitiesForm();

      })
    }, error => {
      this.toast.stopLoader();
    })
  }


  checkIfAlreadyInDynamicJson(key, options): boolean {
    for (const element of this.dynamicForm) {
      if (key === element.field) {
        element.options = options;
        return true
      }
    }
    return false
  }

  resetSubEntitiesForm() {
    for (const element of this.entityTypeForm) {
      this.formGroup.get(element.field) ? this.formGroup.removeControl(element.field) : null;
      let index = 0;
    }
  }

  getSubEntitiesForm() {
    const config = {
      url: urlConstants.API_URLS.ENTITY_MAPPING_FORM + `${this.formGroup.get('state').value}?roleId=${this.formGroup.get('role').value}`
    }
    this.toast.startLoader();
    this.kendraService.get(config).subscribe(data => {
      this.toast.stopLoader();
      this.entityTypeForm = data.result;
      for (const element of this.entityTypeForm) {
        element.input = "special-select";
        const validation = element.validation.required ? new FormControl('', Validators.required) : new FormControl('', []);
        this.formGroup.addControl(element.field, validation)
      }
      this.dynamicForm = this.dynamicForm.concat(this.entityTypeForm)
    }, error => {
      this.toast.stopLoader();
      this.showLoader = false;
    })
  }

  async openDialog(index, entityType) {
    const formValue = this.formGroup.value;
    let highestEntity;
    for (const element of Object.keys(formValue)) {
      if (formValue[element] && (element !== 'role') && element !== entityType) {
        highestEntity = formValue[element]
      } else if (element === entityType) {
        break
      }
    }
    let entityModal = await this.modal.create({
      component: OnboardingEntityListingModalPage,
      componentProps: {
        entityType: entityType,
        highestEntity: highestEntity
      }
    });
    entityModal.onDidDismiss().then(
      (result: any) => {
        if (result.data) {
          this.dynamicForm[index].options = [result.data];
          const obj = {}
          obj[entityType] = result.data._id;
          // this.formGroup.controls[entityType].patchValue(result._id);
          // let obj = {}
          for (let i = index + 1; i < this.dynamicForm.length; i++) {
            obj[this.dynamicForm[i]['field']] = "";
            this.dynamicForm[i]['options'] = []
          }
          this.formGroup.patchValue(obj);
        }
      }
    );
    return await entityModal.present();
  }


  removeChip(index) {
    let obj = {}
    for (let i = index; i < this.dynamicForm.length; i++) {
      obj[this.dynamicForm[i]['field']] = "";
      this.dynamicForm[i]['options'] = []
    }
    this.formGroup.patchValue(obj);
  }

  submitForm() {
    const formValue = this.formGroup.value;
    const keyEntity = []
    for (const field of this.dynamicForm) {
      if (field.validation.required && field.input === 'special-select') {
        keyEntity.push(field.field)
      }
    }
    const entities = [];
    for (const entity of keyEntity) {
      entities.push(formValue[entity])
    }
    const payload = {
      stateId: formValue.state,
      roles: [
        {
          _id: formValue.role,
          entities: entities
        }
      ]
    }
    this.showLoader = true;
    const config = {
      url: urlConstants.API_URLS.PROFILE_UPDATE,
      payload: payload
    }
    this.toast.startLoader();
    this.kendraService.post(config).subscribe((data: any) => {
      this.storage.setLocalStorage(localStorageConstants.PROFILE_DATA, data.result).then(success => {
        this.toast.stopLoader();
        this.getProfileData();
      }).catch(error => {
        this.toast.stopLoader();
      })
    }, error => {

    });
  }
}
