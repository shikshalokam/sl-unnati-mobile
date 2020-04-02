import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from '../project-view/project.service';
import { ToastController, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { TasksService } from '../tasks/tasks.service';
import { ProjectsService } from '../projects/projects.service';
import { ApiProvider } from '../api/api';
import { Location } from '@angular/common';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public connected;
  public id;
  public project;
  public navigatedFromHome: boolean = false;
  public skeletons = [{}, {}, {}, {}, {}, {}];
  public showSkeleton: boolean = false;
  public completed;
  public notFromLocal = true;
  public refreshToken;
  public navigatedFromSchoolTasks = '';
  public pid;
  public pfrom;
  public back;
  public language: string = this.translateService.currentLang;
  constructor(public tasksService: TasksService, public storage: Storage, public homeService:HomeService, public screenOrientation: ScreenOrientation, public location: Location, public translate: TranslateService, public modalController: ModalController, public apiProvider: ApiProvider,
    public projectsService: ProjectsService, public api: ApiProvider, public alertController: AlertController, public toastController: ToastController, public translateService: TranslateService, public projectService: ProjectService, public networkService: NetworkService, public route: ActivatedRoute, public router: Router) {
    this.tasksService.emit.subscribe(value => {
      if (this.pfrom != 'goBack' && this.back && this.back != '/notifications') {
        this.getProject();
      }
    });

    this.networkService.emit.subscribe(value => {
      this.connected = value;
      this.connected = localStorage.getItem("networkStatus");
    });
    this.id = localStorage.getItem("id");
    this.route.params.subscribe(params => {
      this.pid = params.id;
      this.pfrom = params.from;
      this.navigatedFromHome = false;
      this.navigatedFromSchoolTasks = '';
      if (params.from == 'school') {
        this.notFromLocal = false;
        this.navigatedFromSchoolTasks = params.id;
      } else if (params.from == 'home') {
        this.navigatedFromSchoolTasks = '';
        this.navigatedFromHome = true;
        this.notFromLocal = true;
        this.getProject();
      } else if (params.from == 'notifications') {
        this.getProjectsFromService();
      }
    });

  }
  ionViewDidEnter() {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
    if (localStorage.getItem('from') === 'home') {
      this.back = 'project-view/home';
      localStorage.setItem('gobackis', 'project-view/home')
    } else if (localStorage.getItem('from') === 'projects') {
      this.back = 'project-view/projects';
      localStorage.setItem('gobackis', 'project-view/projects')
    } else if (localStorage.getItem('from') === 'notifications') {
      this.back = '/notifications';
      localStorage.setItem('gobackis', 'notifications')
    }
    else {
      if (this.project) {
        this.back = 'project-view/school-task-report/' + this.project.entityId + '/school';
      }
    }
  }
  ngOnInit() {
    if (this.back != '/notifications') {
      this.getProject();
    }
  }
  // get projects
  public getProject() {
    let notYetStarted = 0,inProgress = 0, completed = 0;
    this.storage.get('currentProject').then(data => {
      if (data) {
        this.showSkeleton = true;
        if (data.tasks) {
          data.tasks.forEach(task => {
            if (task.status == 'not yet started') {
              notYetStarted++;
            } else if (task.status == 'in progress') {
              inProgress++;
            } else if (task.status == 'completed') {
              completed++
            }
          });
          if (data.tasks.length === notYetStarted) {
            data.status = 'not yet started';
          }
          if (data.tasks.length === completed) {
            data.status = 'completed';
          }
          if (inProgress > 0 || completed != data.tasks.length) {
            data.status = 'in progress';
          }
        }
        this.project = data;
        if (localStorage.getItem('from') === 'school') {
          localStorage.setItem('entityKey', this.project.entityId);
          this.back = 'project-view/school-task-report/' + this.project.entityId + '/school';
        }
        this.storage.set('currentProject', this.project).then(response => {
        })
        this.showSkeleton = false;
      } else {
        this.getProjectsFromService();
      }
    })
  }
  // Sync project
  public syncProject() {
    this.storage.get('userTokens').then(data => {
      this.refreshToken = data.refresh_token;
      this.api.refershToken(this.refreshToken).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(data => {
            this.showSkeleton = true;
            this.projectService.sync(this.project, data.access_token).subscribe((data: any) => {
              this.showSkeleton = false;
              if (data.status == "failed") {
                this.errorToast(data.message);
              } else if (data.status == "succes") {
                this.successToast(data.message);
                this.showSkeleton = false;
                this.storage.get('latestProjects').then(projects => {
                  projects.data.forEach(project => {
                    project.projects.forEach(pro => {
                      if (pro._id == data.data._id) {
                        pro = data.data;
                        this.storage.set('latestProjects', projects).then(resp1 => {
                          this.project = resp1.data;
                        }, error => {
                          this.showSkeleton = false;
                        })
                      }
                    });
                  });
                })

                this.storage.get('myProjects').then(mp => {
                  if (mp.find((pro) => pro._id === data._id)) {
                    data.push(data);
                    this.storage.set('myProjects', data).then((data: any) => {
                      this.homeService.loadMyProjects();
                    });
                  }
                })
              }
            }, error => {
              this.showSkeleton = false;
              this.errorToast(error.message);
            })
          })
        }
      }, error => {
        this.showSkeleton = false;
        if (error.status === 0) {
          this.router.navigateByUrl('/login');
        }
      })
    })
  }
  // Get projects 
  public getProjectsFromService() {
    this.project = [];
    this.storage.get('userTokens').then(data => {
      this.showSkeleton = true;
      this.refreshToken = data.refresh_token;
      this.apiProvider.refershToken(this.refreshToken).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.showSkeleton = true;
            let id = {
              projectId: this.pid
            }
            this.showSkeleton = true;
            this.projectService.projectDetails(parsedData.access_token, id).subscribe((resp: any) => {
              this.project = [];
              this.showSkeleton = false;
              if (resp.status != 'failed') {
                this.tasksService.loadProject();
                if (resp.data) {
                  this.project = resp.data;
                  this.storage.set('currentProject', this.project.projects[0]).then(cpsetup => {
                    this.project = cpsetup;
                    // this.getProject();
                  })
                } else {
                }

                this.showSkeleton = false;
              } else {
                this.errorToast(resp.message);
                this.showSkeleton = false;
              }
            }, error => {
              this.showSkeleton = false;
            })
          })
        }
      }, error => {
        this.showSkeleton = false;
      })
    })
  }
  // Display error Message
  async errorToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  // Sync Confirm popup
  async syncConfirm() {
    const alert = await this.alertController.create({
      header: 'Sync Confirm!',
      message: 'Project Sync',
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
            this.syncProject();
          }
        }
      ],
    });
    await alert.present();
  }
  // back Button
  public goBack() {

  }
  // Create task
  async createTask() {
    // const modal = await this.modalController.create({
    //   component: EditTaskPage,
    //   componentProps: {
    //     title: "Create Task",
    //   }
    // });
    // modal.onDidDismiss()
    //   .then((data) => {
    //     if (data.data != undefined) {
    //       data.data.completionDate = new Date(data.data.completionDate);
    //       this.storage.get('currentProject').then(data => {
    //         this.storage.set('currentProject', data).then(response => {
    //           this.project.tasks = response.tasks;
    //           this.storage.get('latestProjects').then((data: any) => {
    //             this.tasksService.loadProject();
    //           })
    //         })
    //       })
    //       this.successToast('task_is_created');
    //     }
    //   });
    // this.tasksService.modalActive('true');
    // return await modal.present();
  }
  // Success message 
  async successToast(msg) {
    this.translate.get('task_is_created').subscribe((text: string) => {
      msg = text;
    });
    const toast = await this.toastController.create({
      message: msg,
      color: 'success',
      duration: 2000
    });
    toast.present();
  }
  //Navigate to view and get current Task
  public navigateToView(id) {
    this.project.tasks.forEach(task => {
      if (id == task._id) {
        this.storage.set('currentTask', task).then(data => {
          this.router.navigateByUrl('/project-view/task-view');
        });
      }
    });
  }
}
