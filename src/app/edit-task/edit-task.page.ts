import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { TasksService } from '../tasks/tasks.service';
import { Storage } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common'
import { ApiProvider } from '../api/api';
import { SubTasksService } from '../subtasks/subtasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {
  public propertyForm: FormGroup;
  public showForm : boolean =false;
  public task = {
    status: "not yet started",
    projectId: '',
    title: '',
    startDate: '',
    endDate: '',
    assignedTo: [],
    lastSync: Date,
    isNew: '',
    isDeleted: ''
  };
  public modalTitle;
  @Input() title: string;
  @Input() editTask: any;
  @Input() back: any;
  @Input() taskId: any;
  public language: string = this.translateService.currentLang;
  constructor(public ctrl: ModalController, 
    public datePicker: DatePicker, 
    public subTasksService: SubTasksService,
    public datePipe: DatePipe, 
    public storage: Storage,
    public tasksService: TasksService, 
    public translateService: TranslateService, 
    public toastController: ToastController,
    public formBuilder: FormBuilder, 
    public route: ActivatedRoute, 
    public apiProvider: ApiProvider, ) {
    this.route.params.subscribe(params => {
    });
  }

  ngOnInit() {
    this.prepareForm();
    this.storage.get('userDetails').then((data: any) => {
      this.task.assignedTo = [{ name: data.name, id: data.sub }];
    })
    if (this.editTask != undefined) {
      this.task = this.editTask;
    }
    this.translateService.get(this.title).subscribe((text: string) => {
      this.title = text;
    });
  }
  //Close Modal
  public close() {
    this.tasksService.modalActive('false');
    this.ctrl.dismiss();
  }
  //Form preparing
  public prepareForm() {
    this.showForm = true;
    this.propertyForm = this.formBuilder.group({
      taskTitle: ['', Validators.required],
      taskEndDate: ['', Validators.required],
      taskStartDate: ['', Validators.required],
      taskStatus: ['', Validators.required],
      taskAssignedTo: ['', Validators.required],
    })
  }

  //Save Task
  public create() {
    if (this.back != 'notifications') {
      if (!this.task.title || !this.task.startDate || !this.task.status || !this.task.endDate) {
        this.errorToast();
      } else {
        if (this.title == "Edit Task") {
          this.storage.set('currentTask', this.task);
          this.tasksService.update(this.task).then(data => {
            this.storage.get('currentProject').then(p => {
            });
            this.tasksService.modalActive('false');
            this.ctrl.dismiss(data);

          });
        } else if (this.title == "Create Task") {
          this.tasksService.addTasks(this.task).then(data => {
            this.storage.get('currentProject').then(data => {
              this.tasksService.modalActive('false');
              this.ctrl.dismiss(data);
            })
          })
        }
        else if (this.title == 'Create Sub task') {
          this.tasksService.addSubTasks(this.task).then(data => {
            this.tasksService.modalActive('false');
            this.ctrl.dismiss(data);
          })
        } else if (this.title == 'Edit sub task') {
          if (this.back)
            this.tasksService.updateSubTask(this.task).then(data => {
              this.tasksService.modalActive('false');
              this.ctrl.dismiss(data);
            });
        }
      }
    }
    else {
      // If task is opened from notifications
      if (this.title == 'Edit sub task') {
        this.storage.get('userTokens').then(data => {
          this.apiProvider.refershToken(data.refresh_token).subscribe((refreshToken: any) => {
            let parsedData = JSON.parse(refreshToken._body);
            if (parsedData && parsedData.access_token) {
              let userTokens = {
                access_token: parsedData.access_token,
                refresh_token: parsedData.refresh_token,
              };
              this.storage.set('userTokens', userTokens).then(usertoken => {
                let subTask = {
                  taskId: this.taskId,
                  subTasks: [{
                    isNew: this.task.isNew,
                    assignedTo: this.task.assignedTo,
                    title: this.task.title,
                    startDate: this.task.startDate,
                    endDate: this.task.endDate,
                    isDeleted: this.task.isDeleted,
                    status: this.task.status,
                  }]
                }
                this.subTasksService.syncSubTask(subTask, data.access_token).subscribe((data: any) => {
                  if (data.status == "success") {
                    this.tasksService.modalActive('false');
                    this.ctrl.dismiss(data, this.back);
                  }
                }, error => {
                })
              })
            }
          }, error => {
          })
        })
      } else if (this.title == "Edit Task") {
        this.storage.get('userTokens').then(data => {
          this.apiProvider.refershToken(data.refresh_token).subscribe((refreshToken: any) => {
            let parsedData = JSON.parse(refreshToken._body);
            if (parsedData && parsedData.access_token) {
              let userTokens = {
                access_token: parsedData.access_token,
                refresh_token: parsedData.refresh_token,
              };
              this.storage.set('userTokens', userTokens).then(usertoken => {
                this.tasksService.syncTask(this.task, usertoken.access_token).subscribe(sync => {
                  this.tasksService.modalActive('false');
                  this.ctrl.dismiss(data,this.back);
                });
              })
            }
          }, error => {
          })
        })
      }
    }
  }
  async errorToast() {
    let msg;
    this.translateService.get('required_fields_error').subscribe((text: string) => {
      msg = text;
    });
    const toast = await this.toastController.create({
      message: msg,
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
  public openDatePicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.task.startDate = this.datePipe.transform(new Date(date));
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  public openDatePicker1() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.task.endDate = this.datePipe.transform(new Date(date));
        // this.task.endDate = new Date(date);
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}