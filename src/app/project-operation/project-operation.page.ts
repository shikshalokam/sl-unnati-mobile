import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService, UnnatiDataService, urlConstants, NetworkService, LoaderService, ToastMessageService, UtilsService, LocalStorageService, localStorageConstants } from '../core';
import { ModalController } from '@ionic/angular';
import { SingleSelectionSearchComponent, AddEntityComponent, MultiSelectionComponent } from '../shared';
import { environment } from 'src/environments/environment.prod';
import { Platform, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-project-operation',
  templateUrl: './project-operation.page.html',
  styleUrls: ['./project-operation.page.scss'],
})
export class ProjectOperationPage implements OnInit {
  template;
  noTemplates: boolean = false;
  profileData;
  selectedEntity;
  selectedResources;
  selectedProgram;
  createdType;
  showRatings: boolean;
  ratingStar = 5;
  payload: any = {};
  projectId;
  today: any = new Date();
  currentYear = new Date().getFullYear();
  endDateMin: any = this.currentYear - 2;

  button = 'LABELS.IMPORT_PROJECT'
  showLearningResources: boolean = false;
  viewProjectAlert;
  constructor(
    private routerparam: ActivatedRoute,
    private unnatiService: UnnatiDataService,
    private networkService: NetworkService,
    private loader: LoaderService,
    private toast: ToastMessageService,
    private modalController: ModalController,
    private db: DbService,
    private alertController: AlertController,
    private translate: TranslateService,
    private router: Router,
    private datePicker: DatePicker,
    private utils: UtilsService,
    private localStorage: LocalStorageService,
    private location: Location
  ) {
    routerparam.params.subscribe(param => {
      this.projectId = param.id;
    })
    this.routerparam.queryParams.subscribe((params) => {
      if (params && params.createdType == 'bySelf') {
        this.createdType = 'bySelf';
        this.button = params.isEdit ? 'LABELS.SAVE_EDITS' : 'LABELS.CREATE_PROJECT'
        this.showLearningResources = true;
        this.showRatings = false;
        this.getProjectFromLocal(this.projectId);
      } else {
        this.showRatings = true;
        this.networkService.isNetworkAvailable ? this.getTemplate(this.projectId) : this.toast.showMessage('MESSAGEs.OFFLINE', 'danger');
      }
    });
  }

  ngOnInit() {
    this.localStorage.getLocalStorage(localStorageConstants.PROFILE_DATA).then(data => {
      this.profileData = data;
    })
  }
  getProjectFromLocal(projectId) {
    // this.loader.startLoader();
    this.db.createPouchDB(environment.db.projects);
    this.db.query({ _id: projectId }).then(success => {
      // this.db.getById(id).then(success => {
      // this.loader.stopLoader();
      this.template = success.docs[0];
      if (this.template.entityName) {
        this.selectedEntity = {
          name: this.template.entityName ? this.template.entityName : '',
          _id: this.template.entityId ? this.template.entityId : '',
        }
      }
      this.selectedResources = this.template.learningResources && this.template.learningResources.length ? this.template.learningResources : [];
      if (this.template.programName) {
        this.selectedProgram = {
          _id: this.template.programId ? this.template.programId : '',
          name: this.template.programName ? this.template.programName : '',
          isAPrivateProgram: this.template.isAPrivateProgram 
        }
      }
    }, error => {
      // this.loader.stopLoader();
    })
  }
  getTemplate(id) {
    this.loader.startLoader();
    const config = {
      url: urlConstants.API_URLS.TEMPLATE_DATA + id
    }
    this.unnatiService.get(config).subscribe(data => {
      this.loader.stopLoader();
      if (data.result) {
        this.template = data.result;
      } else {
        this.noTemplates = true;
      }
    }, error => {
      this.loader.stopLoader();
    })
  }
  async openSearchModel(type, url?) {
    if (type == 'programs') {
      url = urlConstants.API_URLS.PRIVATE_PROGRAMS
    }
    const modal = await this.modalController.create({
      component: SingleSelectionSearchComponent,
      componentProps: {
        url: url,
        type: type
      }
      // cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then(data => {
      if (type == 'entity') {
        this.selectedEntity = data.data ? data.data : '';
      } else {
        this.selectedProgram = data.data ? data.data : '';
      }
    })
    return await modal.present();
  }
  addEntity() {
    if (this.profileData && this.profileData.state && this.profileData.state._id) {
      this.networkService.isNetworkAvailable ? this.openAddEntityModal() : this.showPopupForNoNet('LABELS.UNABLE_TO_ADD_ENTITY', 'MESSAGES.YOU_ARE_WORKING_OFFLINE_TRY_AGAIN', 'LABELS.CANCEL', 'LABELS.TRYAGAIN');
    } else {
      this.toast.showMessage('MESSAGES.DISABLED_ADD_ENTITY', 'danger');
    }
  }
  addLearningResources() {
    this.networkService.isNetworkAvailable ? this.openAddResourcesModal(urlConstants.API_URLS.LEARNING_RESOURCES_LIST) : this.showPopupForNoNet('LABELS.UNABLE_TO_SHOW_LIBRARY', 'MESSAGES.YOU_ARE_WORKING_OFFLINE_TRY_AGAIN', 'LABELS.CANCEL', 'LABELS.TRYAGAIN');
  }
  async showPopupForNoNet(header, body, btnCancel, btnTryagain) {
    let texts;
    this.translate.get([header, body, btnCancel, btnTryagain]).subscribe(data => {
      texts = data;
    })
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: texts[header],
      message: texts[body],
      backdropDismiss: false,
      buttons: [
        {
          text: texts[btnCancel],
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: texts[btnTryagain],
          handler: () => {
            if (this.profileData.state) {
              this.networkService.isNetworkAvailable ? this.openAddEntityModal() : this.toast.showMessage('MESSAGES.PLEASE_NETWORK', 'danger');
            } else {
              this.toast.showMessage('MESSAGES.DISABLED_ADD_ENTITY', 'danger');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  ionViewWillLeave() {
    this.viewProjectAlert ? this.viewProjectAlert.dismiss() : null
  }

  async openAddEntityModal() {
    let entityType;
    if (this.template.entityType && this.template.entityType.length) {
      entityType = this.template.entityType;
    }
    const modal = await this.modalController.create({
      component: AddEntityComponent,
      componentProps: {
        entityType: entityType ? entityType : null
      },
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then(data => {
      this.selectedEntity = data.data ? data.data : '';
    })
    return await modal.present();
  }

  async openAddResourcesModal(url) {
    const modal = await this.modalController.create({
      component: MultiSelectionComponent,
      componentProps: {
        url: url,
        selectedResources: this.selectedResources
      }
      // cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then(data => {
      this.selectedResources = data.data ? data.data : [];
    })
    return await modal.present();
  }
  skip(event) {
    if (!this.template.showProgramAndEntity) {
      this.selectedEntity = '';
      this.selectedProgram = '';
      this.selectedResources = [];
      delete this.payload.rating;
      this.createdType == "bySelf" ? this.createProject() : this.importProject();
    } else {
      this.toast.showMessage('MESSAGES.REQUIRED_FIELDS', 'danger');
    }
  }
  remove(data, type) {
    if (type == 'entity') {
      this.selectedEntity = '';
      if (this.template) {
        this.template.entityName ? delete this.template.entityName : '';
        this.template.entityId ? delete this.template.entityId : '';
      }
    } else if (type == 'program') {
      if (this.template.isAPrivateProgram) {
        this.selectedProgram = '';
        this.template.programId ? delete this.template.programId : '';
        this.template.programName ? delete this.template.programName : '';
      }
    } else if (type == 'resources') {
      const index = this.selectedResources.indexOf(data, 0);
      if (index > -1) {
        this.selectedResources.splice(index, 1);
      }
    }
  }
  action() {
    this.createdType == "bySelf" ? this.createProject() : this.importProject();
  }
  rating(event) {
    this.payload.rating = event;
  }
  resetEndDate(event) {
    if (event.detail && event.detail.value) {
      this.endDateMin = moment(event.detail.value).format("YYYY-MM-DD");
      this.template.endDate = this.template.endDate ? '' : '';
    }
  }

  importProject() {
    if (this.networkService.isNetworkAvailable) {
      this.payload.startDate = this.template.startDate;
      this.payload.endDate = this.template.endDate;
      const isProgramPresent = (this.selectedProgram && this.selectedProgram.name) || (this.selectedProgram && this.selectedProgram._id);
      const isEntityAdded = (this.selectedEntity && this.selectedEntity._id)
      if (!this.isMandatoryFieldsFilled()) {
        return
      }
      this.loader.startLoader();
      if (this.selectedEntity) {
        this.payload.entityId = this.selectedEntity._id;
        this.payload.entityName = this.selectedEntity.name;
      }
      if (this.selectedProgram) {
        !this.selectedProgram.created ? this.payload.programId = this.selectedProgram._id : delete this.payload.programId
        this.payload.programName = this.selectedProgram.name;
        this.payload.isAPrivateProgram = this.selectedProgram.isAPrivateProgram;
      }
      console.log(this.payload, "this.payload");
      const config = {
        url: urlConstants.API_URLS.IMPORT_TEMPLATE + this.template._id,
        payload: this.payload
      }
      this.unnatiService.post(config).subscribe(data => {
        this.loader.stopLoader();
        if (data.result) {
          const projectData = this.utils.processProjectsData([data.result]);
          this.restoreData(projectData[0]);
        } else {
          this.toast.showMessage(data.message, 'danger');
        }
      }, error => {
        this.loader.stopLoader();
      })
    } else {
      this.toast.showMessage('MESSAGES.OFFLINE', 'danger');
    }
  }
  createProject() {
    console.log(this.selectedEntity, "this.selectedEntity");
    if (this.selectedEntity) {
      this.template.entityId = this.selectedEntity._id;
      this.template.entityName = this.selectedEntity.name;
    }
    console.log(this.selectedProgram, "this.selectedProgram");
    if (this.selectedProgram) {
      !this.selectedProgram.created ? this.template.programId = this.selectedProgram._id : delete this.template.programId
      this.template.programName = this.selectedProgram.name;
      //  because of this line after editing the project user can able to edit the program hence i commentted below line.
      // this.template.isAPrivateProgram = this.selectedProgram.isAPrivateProgram ? this.selectedProgram.isAPrivateProgram : true;
    }
    this.template.learningResources = this.selectedResources;
    console.log(this.template, "this.template 312 before update");
    this.update(this.template);
  }
  async createProjectModal(data, header, button) {
    let texts;
    this.translate.get([header, button]).subscribe(data => {
      texts = data;
    })
    let programName = data.programInformation ? data.programInformation.name : ''
    this.viewProjectAlert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: texts[header],
      backdropDismiss: false,
      buttons: [
        {
          text: texts[button],
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['/menu/project-detail', data._id], { replaceUrl: true });
          }
        }
      ]
    });
    await this.viewProjectAlert.present();
  }
  public restoreData(data) {
    this.db.createPouchDB(environment.db.projects);
    this.db.create(data).then(success => {
      if (this.createdType == "bySelf") {

        this.createProjectModal(data, 'MESSAGES.PROJECT_CREATED_SUCCESS', 'LABELS.VIEW_PROJECT');
      } else {
        this.createProjectModal(data, "MESSAGES.PROJECT_IMPORT_SUCCESS", "LABELS.VIEW_PROJECT");
      }
    }).catch(error => {
    })
  }

  isMandatoryFieldsFilled() {
    const isProgramPresent = (this.selectedProgram && this.selectedProgram.name) || (this.selectedProgram && this.selectedProgram._id);
    const isEntityAdded = (this.selectedEntity && this.selectedEntity._id)
    if (this.template.showProgramAndEntity && (!isEntityAdded || !isProgramPresent)) {
      this.toast.showMessage('MESSAGES.REQUIRED_FIELDS', 'danger');
      return false
    }
    return true
  }

  update(data) {
    console.log(data,"data 361");
    if (!this.isMandatoryFieldsFilled()) {
      return
    }
    this.db.createPouchDB(environment.db.projects);
    data.isEdit = true;
    data.isDeleted = false;
    this.db.update(data).then(success => {
      this.button == 'LABELS.SAVE_EDITS' ? this.createProjectModal(data, 'MESSAGES.PROJECT_UPDATED_SUCCESS', 'LABELS.VIEW_PROJECT') :
        this.createProjectModal(data, 'MESSAGES.PROJECT_CREATED_SUCCESS', 'LABELS.VIEW_PROJECT');
    }).catch(error => {
    })
  }

  async confirmToClose() {
    let text;
    this.translate.get(['LABELS.DISCARD_PROJECT', 'MESSAGES.DISCARD_PROJECT', 'LABELS.DISCARD', 'LABELS.CONTINUE']).subscribe(data => {
      text = data;
    });
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: text['LABELS.DISCARD_PROJECT'],
      message: text['MESSAGES.DISCARD_PROJECT'],
      buttons: [
        {
          text: text['LABELS.DISCARD'],
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            if (this.button === 'LABELS.CREATE_PROJECT') {
              this.db.delete(this.projectId, this.template._rev)
            }
            this.location.back();
          }
        }, {
          text: text['LABELS.CONTINUE'],
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }
}