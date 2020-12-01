import { Component, OnInit } from '@angular/core';
import { DbService, UnnatiDataService, ToastMessageService, LocalStorageService, localStorageConstants, LoaderService, UtilsService } from '../core';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.page.html',
  styleUrls: ['./create-project.page.scss'],
})
export class CreateProjectPage implements OnInit {
  projectFormData;
  parameters;
  project;
  projectForm: FormGroup;
  categories;
  projectId;
  button = "LABELS.NEXT";
  showCategories = false;
  showTask: boolean = true;
  selectedCategories = [];
  enableInput: boolean = false;
  tasks = [];
  constructor(
    private db: DbService,
    private loader: LoaderService,
    private unnatiService: UnnatiDataService,
    private storage: LocalStorageService,
    private fb: FormBuilder,
    private alert: AlertController,
    private router: Router,
    private translate: TranslateService,
    private toast: ToastMessageService,
    private location: Location,
    private utilsService: UtilsService,
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe(parameters => {
      if (parameters.projectId) {
        this.parameters = parameters;
        this.showTask = false;
        this.button = "LABELS.SAVE_EDITS"
        this.getProjectFromLocal();
      }
    })
  }

  ngOnInit() {
    this.getForm();
  }
  getProjectFromLocal() {
    this.db.query({ _id: this.parameters.projectId }).then(success => {
      this.project = success.docs.length ? success.docs[0] : {};
      console.log(this.categories, "this.project.categories", this.project.categories);
      if (this.project.categories.length) {
        this.project.categories.forEach(element => {
          element.isChecked = true;
        });
        this.selectedCategories = this.project.categories;

      }
      console.log(this.selectedCategories, " this.selectedCategories", this.project.categories);
    }, error => {
    })
  }
  getForm() {
    this.storage.getLocalStorage(localStorageConstants.PROJECT_META_FORM).then(projectData => {
      this.projectFormData = projectData;
      this.storage.getLocalStorage(localStorageConstants.TASK_META_FORM).then(taskData => {
        let taskForm = {
          taskData
        }
        this.projectFormData.push(taskForm);
        console.log(this.projectFormData, "this.projectFormData");
        this.prepareForm();
      })
    })
  }
  close() {
    this.location.back();
  }
  async confirmToClose() {
    let text;
    this.translate.get(['LABELS.DISCARD_PROJECT', 'MESSAGES.DISCARD_PROJECT', 'LABELS.DISCARD', 'LABELS.CONTINUE']).subscribe(data => {
      text = data;
    });
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: text['LABELS.DISCARD_PROJECT'],
      message: text['MESSAGES.DISCARD_PROJECT'],
      buttons: [
        {
          text: text['LABELS.DISCARD'],
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.close();
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

  async confirmToDelete(data, type) {
    let text;
    this.translate.get(['MESSAGES.DELETE_CONFIRM', 'LABELS.CANCEL', 'LABELS.DELETE']).subscribe(data => {
      text = data;
    });
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      // header: text['LABELS.DISCARD_PROJECT'],
      message: text['MESSAGES.DELETE_CONFIRM'] + type,
      buttons: [
        {
          text: text['LABELS.CANCEL'],
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.close();
          }
        }, {
          text: text['LABELS.DELETE'],
          handler: () => {
            if (type == 'task') {
              this.removeTask(data);
            } else if (type == 'category') {
              this.removeCategory(data);
            }
          }
        }
      ]
    });
    await alert.present();
  }
  public prepareForm() {
    const controls = {};
    this.projectFormData.forEach(res => {
      const validationsArray = [];
      if (!res.taskData) {
        if (res.field != 'categories') {
          if (res.validation) {
            if (res.validation.required) {
              res.validation.name = "required",
                validationsArray.push(
                  Validators.required
                );
            }
            controls[res.field] = new FormControl(this.project ? this.project[res.field] : '', validationsArray);
          }
        }
      } else {
        res.taskData.forEach(element => {
          if (element.validation) {
            if (element.validation.required) {
              element.validation.name = "required",
                validationsArray.push(
                  Validators.required
                );
            }
            controls[element.field] = new FormControl('', validationsArray);
          }
        });
      }
    });
    this.projectForm = this.fb.group(
      controls
    );
  }
  // event triger when user click on add category
  openCatgoryList(categories) {
    this.categories = categories;
    this.showCategories = true;
  }
  // event trigger from category list page
  selectCategories(data) {
    this.selectedCategories = data;
    this.showCategories = false;
  }
  removeCategory(category) {
    const index = this.selectedCategories.indexOf(category, 0);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    }
  }
  removeTask(task) {
    const index = this.tasks.indexOf(task, 0);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
  next() {
    if (this.projectForm.value.description && this.projectForm.value.title && this.selectedCategories.length) {
      delete this.projectForm.value.name;
      this.selectedCategories.forEach(category => {
        'isChecked' in category ? delete category.isChecked : ''
        if (category.label == 'Others') {
          category.label = category.value;
          category.value = '';
          delete category._id;
        } else {
          category.value = category._id ? category._id :category.value;
          delete category._id;
        }
      });
      this.projectForm.value.categories = this.selectedCategories;
      this.parameters ? this.update(this.projectForm.value) : this.saveData(this.projectForm.value);
    } else {
      this.translate.get(['MESSAGES.REQUIRED_FIELDS']).subscribe(data => {
        this.toast.showMessage(data['MESSAGES.REQUIRED_FIELDS'], 'danger');
      })
    }
  }
  openInput(event) {
    this.enableInput = true;
  }
  saveTask(taskData) {
    if (taskData.value) {
      let newTask = JSON.parse(JSON.stringify(this.utilsService.getMetaData('task')));
      newTask.name = taskData.value;
      console.log(newTask, "newTask");
      this.tasks.push(newTask);
      this.enableInput = false;
      taskData.value = '';
    }
  }
  discardTask() {
    this.enableInput = false;
  }
  public saveData(data) {
    if (!this.projectId) {
      data.isNew = true;
      data.tasks = this.tasks;
      data.isEdit = true;
      const modifiedData = this.utilsService.setStatusForProject(data);
      this.db.createPouchDB(environment.db.projects);
      this.db.create(modifiedData).then(success => {
        this.projectId = success.id;
        console.log('in else ', this.button);
        this.router.navigate(['menu/project-operation', success.id], { queryParams: { createdType: 'bySelf' }, replaceUrl: true });
      }).catch(error => {
      })
    } else {
      this.button == 'LABELS.SAVE_EDITS' ? this.router.navigate(['menu/project-operation', this.projectId], { queryParams: { createdType: 'bySelf' }, replaceUrl: true }) : this.location.back();
    }
  }
  update(data) {
    this.project.title = data.title;
    this.project.description = data.description;
    this.project.categories = data.categories;
    this.project.isEdit = true;
    this.db.update(this.project).then(success => {
      this.location.back();
    }).catch(error => {
    })
  }
}