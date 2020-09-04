import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from '../project-view/project.service';
import { ToastController, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ApiProvider } from '../api/api';
import {ErrorHandle} from '../error-handling.service';
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
    public modalController: ModalController,
    public errorHandle:ErrorHandle
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
      this.errorHandle.errorHandle(error);
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
            // this.syncProject();
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
}