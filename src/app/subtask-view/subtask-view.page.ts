import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { TasksService } from '../tasks/tasks.service';
import { SubTasksService } from '../subtasks/subtasks.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ApiProvider } from '../api/api';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-subtask-view',
  templateUrl: './subtask-view.page.html',
  styleUrls: ['./subtask-view.page.scss'],
})
export class SubtaskViewPage implements OnInit {
  public task;
  public taskId;
  back = 'project-view/subtasks';
  constructor(public location: Location,
    public modalController: ModalController,
    public apiProvider: ApiProvider,
    public subTasksService: SubTasksService,
    public alertController: AlertController,
    public tasksService: TasksService,
    public actionSheetController: ActionSheetController,
    public storage: Storage,
    public translate: TranslateService,
    public params: ActivatedRoute) {
    this.tasksService.emit.subscribe(value => {
      this.storage.get('currentSubtask').then(data => {
        this.task = data;
      })
    });
    params.params.subscribe(parameter => {
      if (parameter.taskId && parameter.subtaskId) {
        if (parameter.from == 'notifications') {
          this.back = 'notifications'
          this.taskId = parameter.taskId;
        }
        this.getSubTaskById(parameter)
      } else {
        this.getSubTask();
      }
    })
  }

  ngOnInit() {

  }

  // Get sub tasks
  public getSubTask() {
    this.storage.get('currentSubtask').then(task => {
      this.storage.get('userDetails').then((data: any) => {
        task.assignedTo = [{ name: data.name, id: data.sub }];
        this.task = task;
      })
    })
  }
  // Action sheet
  async presentActionSheet() {
    let opt_synch, opt_delete, opt_edit, opt_subtasks, cancel;
    this.translate.get('synch').subscribe((text: string) => { opt_synch = text });
    this.translate.get('delete').subscribe((text: string) => { opt_delete = text });
    this.translate.get('edit').subscribe((text: string) => { opt_edit = text });
    this.translate.get('subtasks').subscribe((text: string) => { opt_subtasks = text });
    this.translate.get('cancel').subscribe((text: string) => { cancel = text });
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [
        {
          text: opt_synch,
          icon: 'sync',
          handler: () => {
          }
        },
        {
          text: opt_edit,
          icon: 'create',
          handler: () => {
            this.editTask();
          }
        },
        {
          text: opt_delete,
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.delete();
          }
        }, {
          text: cancel,
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        }]
    });
    await actionSheet.present();
  }

  // Delete sutask
  public delete() {
    this.task.isDeleted = true;
    this.storage.set('currentSubtask', this.task).then(cst => {
      this.storage.get('currentTask').then(ctask => {
        ctask.subTasks.forEach(subTask => {
          if (subTask._id == cst._id) {
            subTask.isDeleted = true;
            this.storage.set('currentTask', ctask).then(ct => {
              this.storage.get('currentProject').then(cp => {
                cp.tasks.forEach(task => {
                  task.subTasks.forEach(subtask => {
                    if (subtask._id == this.task._id) {
                      subtask.isDeleted = true;
                      this.storage.set('currentProject', cp).then(data => {
                      })
                    }
                  });
                });
              })
              this.storage.get('projects').then(data => {
                if (typeof data == "string") {
                  data = JSON.parse(data);
                }
                data.data.forEach(projects => {
                  // parsing project
                  projects.projects.forEach(array => {
                    array.tasks.forEach(task => {
                      if (task._id == ctask._id) {
                        task.subTasks.forEach(subtask => {
                          if (subtask._id == cst._id) {
                            subtask.isDeleted = true;
                            this.storage.set('projects', JSON.stringify(data)).then(data => {
                              this.tasksService.loadProject();
                              this.location.back();
                            });
                          }
                        });
                      }
                    });
                  });
                });
              })
            });
          }
        });
      })
    })
  }


  //edit Task
  async editTask() {
    // const modal = await this.modalController.create({
    //   component: EditTaskPage,
    //   componentProps: {
    //     editTask: this.task,
    //     back: this.back,
    //     taskId: this.taskId,
    //     title: "Edit sub task",
    //   }

    // });
    // modal.onDidDismiss()
    //   .then((data) => {
    //     if (data.data != undefined && data.data.name != null) {
    //       this.storage.get('currentProject').then(data => {
    //       })
    //     }
    //   });
    // this.tasksService.modalActive('true');
    // return await modal.present();
  }

  async openDelete() {
    let opt_delete;
    this.translate.get('delete_alert_subtask').subscribe((text: string) => { opt_delete = text });
    const alert = await this.alertController.create({
      header: opt_delete,
      message: 'delete_the_subtask?',
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

  // sync
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
            this.storage.get('currentTask').then(ct => {

              let subTask = {
                taskId: ct._id,
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
                  ct.subTasks = data.data;
                  this.storage.set('currentTask', ct).then(currentTask => {
                    this.storage.get('currentProject').then(cp => {
                      cp.tasks.forEach(task => {
                        if (task._id == currentTask._id) {
                          task.subTasks = currentTask.subTasks;
                          //  task.subTasks.push(currentTask.subTasks);
                          this.storage.set('currentProject', cp).then(currentProject => {
                            this.storage.get('projects').then(projectsList => {
                              if (typeof projectsList == "string") {
                                projectsList = JSON.parse(projectsList);
                              }
                              projectsList.data.forEach(projects => {
                                projects.projects.forEach(project => {
                                  if (project._id == currentProject._id) {
                                    project.tasks = currentProject.tasks;
                                    //   project.tasks.push(currentProject.tasks);
                                    this.storage.set('projects', projectsList).then(pl => {
                                      this.location.back();
                                      this.tasksService.loadProject();
                                    })
                                  }
                                });
                              });
                            })
                          })
                        }
                      });
                    })
                    //this.tasksService.loadProject();
                  })
                }
              }, error => {
                // TODO :: Intentially left.
              })
            })
          })
        }
      }, error => {
         // TODO :: Intentially left.
      })
    })
  }
  public getSubTaskById(parameter) {
    this.storage.get('userTokens').then(data => {
      this.apiProvider.refershToken(data.refresh_token).subscribe((refreshToken: any) => {
        let parsedData = JSON.parse(refreshToken._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.subTasksService.getSubtaskById(userTokens.access_token, parameter).subscribe((data: any) => {
              this.task = data.data;
            }, error => {
            })
          })
        }
      })
    })
  }
}