import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// import { IonicPage, ModalController, NavController, NavParams } from '@ionic-';
// import { CurrentUserProvider } from '../../providers/current-user/current-user';
// import { OnboardingProvider } from '../../providers/onboarding/onboarding';
// import { SidemenuProvider } from '../../providers/sidemenu/sidemenu';
// import { UtilsProvider } from '../../providers/utils/utils';
import { OnboardingEntityListingModalPage } from './onboarding-entity-listing-modal/onboarding-entity-listing-modal';
import { ToastService } from '../toast.service';
import { OnboadringServiceService } from '../core-module/onboardingService/onboadring-service.service';
import { ModalController } from '@ionic/angular';


// @IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {

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
  itemsAsObjects = [{ id: 0, name: 'Angular' }, { id: 1, name: 'React' }];
  constructor(
    private toast: ToastService,
    // public navCtrl: NavController,
    // public navParams: NavParams,
    private onboardingService: OnboadringServiceService,
    private modal: ModalController,
    // private utils: UtilsProvider,
    // private sidemenuProvider: SidemenuProvider,
    // private currentUSer: CurrentUserProvider,
    public fb: FormBuilder) {
    // this.userName = this.currentUSer.getCurrentUserData().name;
  }

  ionViewDidLoad() {
    this.getProfileData();
    // this.getStates();
  }

  getStates() {
    this.toast.startLoader('Loading, Please wait.');
    this.onboardingService.getState().then(data => {
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
    }).catch(error => {
      this.toast.stopLoader();
    })
  }

  getRolesForState(stateId) {
    this.toast.startLoader('Loading, Please wait.');
    this.onboardingService.getRolesForState(stateId).then(data => {
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
    }).catch(error => {
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
    const url = `${this.formGroup.get('state').value}?roleId=${this.formGroup.get('role').value}`;
    this.toast.startLoader('Loading, Please wait.');
    this.onboardingService.getSubEntitiesForm(url).then(data => {
      this.toast.stopLoader();
      this.entityTypeForm = data.result;
      for (const element of this.entityTypeForm) {
        element.input = "special-select";
        const validation = element.validation.required ? new FormControl('', Validators.required) : new FormControl('', []);
        this.formGroup.addControl(element.field, validation)
      }
      this.dynamicForm = this.dynamicForm.concat(this.entityTypeForm)
    }).catch(error => {
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
        if (result) {
          this.dynamicForm[index].options = [result];
          const obj = {}
          obj[entityType] = result._id;
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
    const url = ""
    this.toast.startLoader('Loading, Please wait.');
    this.onboardingService.profileUpdate(payload).then((data: any) => {
      this.toast.stopLoader();
      // this.showLoader = false;
      this.getProfileData();
      // this.sidemenuProvider.getUserRolesApi();
    }).catch(error => {
      this.toast.stopLoader();
      this.toast.errorToast(JSON.stringify(error))
    })
  }

  getProfileData() {
    this.toast.startLoader('Loading, Please wait.');
    this.showLoader = true;
    this.onboardingService.getProfile().then(data => {
      this.toast.stopLoader();
      if (data.result.roles && data.result.roles.length) {
        this.showPreview = true;
        this.profileRoles = data.result.roles;
        this.getStatesValue();
      } else {
        this.getStates()
      }
      this.showLoader = false;
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

  ionViewCanLeave(): boolean {
    // here we can either return true or false
    // depending on if we want to leave this view
    if (!this.showPreview) {
      this.toast.errorToast("Please update the profile to continue");
      return false;
    } else {
      return true;
    }
  }

}
