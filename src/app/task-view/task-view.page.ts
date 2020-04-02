import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Location } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';
import { ApiProvider } from '../api/api';
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.page.html',
  styleUrls: ['./task-view.page.scss'],
})
export class TaskViewPage implements OnInit {
  public connected;
  public task;
  public back;
  public loaded: boolean = false;
  public language: string = this.translate.currentLang;
  constructor(public storage: Storage, 
    public taskService: TasksService, 
    public apiProvider: ApiProvider, 
    public location: Location, 
    public alertController: AlertController, 
    public translate: TranslateService, 
    public route: ActivatedRoute, 
    public router: Router, 
    public networkService: NetworkService, 
    public modalController: ModalController, 
    public actionSheetController: ActionSheetController, ) {
    // Triggering network change status
    this.networkService.emit.subscribe(value => {
      this.connected = value;
      localStorage.setItem("networkStatus", this.connected);
    });
    this.route.params.subscribe(params => {
      if (params.projectId && params.taskId) {
        this.back = 'notifications';
        localStorage.setItem('goBackis', 'notifications');
        this.getTaskById(params)
      } else {
        this.back = localStorage.getItem('goBackis');
        this.getTask();
      }
    })
  }
  ngOnInit() {
    this.connected = localStorage.getItem("networkStatus");
  }
  ionViewDidEnter() {
    this.back = localStorage.getItem('goBackis');
    if (!this.back) {
      this.back = 'project-view/detail'
    }
  }
  //get Task
  public getTask() {
    this.storage.get('currentTask').then(task => {
      this.storage.get('userDetails').then((data: any) => {
        task.assignedTo = [{ name: data.name, id: data.sub }];
        this.task = task;
      })
    }, error=>{
    })
  }

  // sync confirm popup
  async syncConfirm() {
    let syncConfirm;
    this.translate.get('sync_confirm_subtask').subscribe((text: string) => { syncConfirm = text });
    const alert = await this.alertController.create({
      header: 'Sync Confirm!',
      message: syncConfirm,
      buttons: [
        {
          text: '✕',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '✓',
          cssClass: 'secondary',
          handler: () => {
            this.sync();
          }
        }
      ],
    });

    await alert.present();
  }
  //Sync operation
  public sync() {
    this.storage.get('userTokens').then(data => {
      this.apiProvider.refershToken(data.refresh_token).subscribe((refreshToken: any) => {
        let parsedData = JSON.parse(refreshToken._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.taskService.syncTask(this.task, usertoken.access_token).subscribe((sync: any) => {
              this.storage.get('latestProjects').then((projects) => {
                if (typeof projects == 'string') {
                  projects = JSON.parse(projects);
                }
                this.storage.set('currentProject',sync.data).then(data =>{
                })
                projects.data.forEach(project => {
                  project.projects.forEach(pro => {
                    if (pro._id == sync.data._id) {
                      // project = sync;
                      pro.tasks = sync.data.tasks;
                      this.storage.set('latestProjects', projects).then(projectsUpdated => {
                        this.taskService.loadProject();
                        this.router.navigate(['/project-view/detail']);
                      })
                    }else {
                     this.router.navigate(['/project-view/detail']);
                    }
                  });
                });
              })
            });
          })
        }
      }, error => {
      })
    })
  }

  //Sub Task View
  async showSubTasks(id) {
    // const modal = await this.modalController.create({
    //   component: EditTaskPage,
    //   componentProps: {}
    // });
    // return await modal.present();
  }

  // navigate To subtask
  navigateToSubtasks() {
    this.router.navigate(['project-view/subtasks'])
  }

  //edit Task
  async editTask() {
    // const modal = await this.modalController.create({
    //   component: EditTaskPage,
    //   componentProps: {
    //     editTask: this.task,
    //     back: this.back,
    //     title: "Edit Task",
    //   }
    // });
    // modal.onDidDismiss()
    //   .then((data) => {
    //     if (data.data != undefined && data.data.name != null) {
    //       this.storage.get('currentProject').then(data => {
    //         this.taskService.loadProject();
    //       })
    //     }
    //   });
    // this.taskService.modalActive('true');
    // return await modal.present();
  }
  //  create task
  async create(id) {
    // const modal = await this.modalController.create({
    //   component: EditTaskPage,
    //   componentProps: {
    //     editTask: this.task,
    //     title: "Create Task",
    //   }
    // });
    // modal.onDidDismiss()
    //   .then((data) => {
    //     if (data.data != undefined && data.data.name != null) {
    //       // code
    //     }
    //   });
    // return await modal.present();
  }
  // open delete confirm alert
  async openDelete() {
    const alert = await this.alertController.create({
      header: 'Delete!',
      message: 'Delete the task?',
      buttons: [
        {
          text: '✕',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '✓',
          cssClass: 'secondary',
          handler: () => {
            this.delete();
          }
        }
      ],
    });

    await alert.present();
  }
  // delete task
  public delete() {
    this.storage.get('currentProject').then(data => {
      for (var i = 0; i < data.tasks.length; i++) {
        if (data.tasks[i]._id === this.task._id) {
          data.tasks[i].isDeleted = true;
          //   data.tasks.splice(i,1);
          this.storage.set('currentProject', data).then(data => {
            this.storage.get('latestProjects').then(schema => {
              if (typeof schema == "string") {
                schema = JSON.parse(schema);
              }
              schema.data.forEach(projects => {
                projects.projects.forEach(project => {
                  if (project._id == data._id) {
                    project.tasks.forEach(task => {
                      if (task._id == this.task._id) {
                        task.isDeleted = true;
                        this.storage.set('latestProjects', schema).then(data => {
                          this.taskService.loadProject();
                          this.location.back();
                        })
                      }
                    });
                  }
                });
              });
            })
          });
        }
      }
    })
  }
  public goBack() {
    this.back = 'project-view/detail';
    this.router.navigateByUrl('project-view/detail');
  }
  // get Task from server
  public getTaskById(parameters) {
    this.storage.get('userTokens').then(data => {
      this.apiProvider.refershToken(data.refresh_token).subscribe((refreshToken: any) => {
        let parsedData = JSON.parse(refreshToken._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {

            this.taskService.getTaskById(usertoken.access_token, parameters).subscribe((data: any) => {
              // this.task = data.data;
              this.storage.set('currentTask', data.data).then(data => {
                this.getTask();
              })
            }, error => {
              this.loaded = false;
            })
          })
        }
      }, error => {
      })
    })
  }
  ngOnDestroy() {
    localStorage.setItem('goBackis', '');
  }
}