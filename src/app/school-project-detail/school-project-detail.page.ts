import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from '../project-view/project.service';
import { ToastController, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ApiProvider } from '../api/api';
@Component({
  selector: 'app-school-project-detail',
  templateUrl: './school-project-detail.page.html',
  styleUrls: ['./school-project-detail.page.scss'],
})
export class SchoolProjectDetailPage implements OnInit {
  public showSkeleton: boolean = false;
  public project: any = [];
  public skeletons = [{}, {}, {}, {}, {}, {}]
  back = 'project-view/my-schools';
  constructor(public parameter: ActivatedRoute,
    public router: Router,
    public storage: Storage,
    public api: ApiProvider,
    public projectService: ProjectService,
    public alertController: AlertController,
    public toastController: ToastController,
    public translateService: TranslateService,
    public modalController: ModalController
  ) {
    parameter.params.subscribe(data => {
      this.getProjectDetail(data.id);
    })
  }

  ngOnInit() {
  }
  public getProjectDetail(id) {
    this.showSkeleton = true;
    let pid = {
      projectId: id
    }
    this.showSkeleton = true;
    this.projectService.projectDetails(id).subscribe((resp: any) => {
      this.project = [];
      this.showSkeleton = false;
      if (resp.status != 'failed') {
        if (resp.data) {
          this.project = resp.data;
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

  }

  // Success message 
  async successToast(msg) {
    this.translateService.get('task_is_created').subscribe((text: string) => {
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

  // Sync project
  public syncProject() {
    this.storage.get('userTokens').then(data => {
      this.showSkeleton = true;
      this.api.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(data => {
            this.showSkeleton = true;
            if (this.project.status = 'completed') {
              this.project.status = 'not yet started';
            }
            this.projectService.sync(this.project).subscribe((data: any) => {
              this.showSkeleton = false;
              if (data.status == "failed") {
                this.errorToast(data.message);
              } else if (data.status == "succes") {
                this.successToast(data.message);
                this.storage.set('latestProjects', data).then(resp1 => {
                }, error => { }
                )
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
          console.log("/login 163 ");
          this.router.navigateByUrl('/login');
        }
      })
    })
  }
}