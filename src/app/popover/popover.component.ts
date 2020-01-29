import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PopoverController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CategoryViewService } from '../category-view/category.view.service';
import { CreateProjectService } from '../create-project/create-project.service';
import { Storage } from '@ionic/storage';
import { ToastService } from '../toast.service';
import { AlertController } from '@ionic/angular';
import { ApiProvider } from '../api/api';
import { ProjectService } from '../project-view/project.service';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { LoadingController } from '@ionic/angular';

declare var cordova: any;
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  share;
  delete;
  deleteConfirm;
  @Input() project;
  isIos;
  appFolderPath;
  constructor(
    public translateService: TranslateService,
    public popoverController: PopoverController,
    public socialSharing: SocialSharing,
    public categoryViewService: CategoryViewService,
    public createProjectService: CreateProjectService,
    public storage: Storage,
    public toastService: ToastService,
    public alertController: AlertController,
    public apiProvider: ApiProvider,
    public projectService: ProjectService,
    public transfer: FileTransfer,
    public file: File,
    public platform: Platform,
    public fileChooser: FileChooser,
    public base64: Base64,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.isIos = this.platform.is('ios') ? true : false;
      this.appFolderPath = this.isIos ? cordova.file.documentsDirectory + 'projects' : cordova.file.externalDataDirectory + 'projects';
      this.translateService.get('button.share').subscribe((text: string) => {
        this.share = text;
      });
      this.translateService.get('button.delete').subscribe((text: string) => {
        this.delete = text;
      });
      this.translateService.get('message.delete_project_confirm').subscribe((text: string) => {
        this.deleteConfirm = text;
      });
    })
  }

  // confirmation for delete project
  async deleteConfirmation() {
    const alert = await this.alertController.create({
      message: this.deleteConfirm,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.deleteProject();
          }
        }
      ]
    });
    await alert.present();
  }

  // delete project
  public deleteProject() {
    this.project.isDeleted = true;
    let projectData = this.project;
    this.storage.get('myprojects').then(myProjects => {
      if (myProjects) {
        myProjects.forEach(function (myProject, i) {
          if (myProject._id == projectData._id) {
            projectData.isEdited = true;
            myProjects[i] = projectData;
          }
        });
        this.storage.set('myprojects', myProjects).then(project => {
          this.toastService.successToast('message.project_deleted_success');
          this.categoryViewService.deleteProject('deleted');
        }, error => {
          this.toastService.errorToast('message.project_deleted_failed');
        })
      }
    }, error => {
      this.toastService.errorToast('message.project_deleted_failed');
    })
    this.DismissClick();
  }
  async DismissClick() {
  }

  public syncProject() {
    console.log(navigator.onLine, "navigator.onLine");
    if (!this.project.isSync) {
      this.storage.get('userTokens').then(data => {
        this.apiProvider.refershToken(data.refresh_token).subscribe((data: any) => {
          let parsedData = JSON.parse(data._body);
          if (parsedData && parsedData.access_token) {
            let userTokens = {
              access_token: parsedData.access_token,
              refresh_token: parsedData.refresh_token,
            };
            this.storage.set('userTokens', userTokens).then(data => {
              this.loader();
              this.projectService.sync(this.project, data.access_token).subscribe((data: any) => {
                if (data.status == "failed") {
                } else if (data.status == "success") {
                  this.updateInLocal(this.project, data.projectDetails.data.projects[0]);
                  this.getPDF(data.projectDetails.data.projects[0]._id);
                  this.DismissClick();
                }
              }, error => {
                console.log('error', error);
              })
            })
          }
        }, error => {
          // this.showSkeleton = false;
          console.log(error, "error");
        })
      })
    } else {
      this.loader();
      this.DismissClick();
      this.getPDF(this.project._id);
      this.DismissClick();
    }
  }
  public getPDF(id) {
    this.storage.get('userTokens').then(data => {
      this.apiProvider.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            let projectData = {
              "projectId": id
            }
            this.categoryViewService.getPDF(projectData, userTokens.access_token).subscribe((data: any) => {
              const fileName = this.project.title.replace(/\s/g, "");
              const fileTransfer: FileTransferObject = this.transfer.create();
              const url = data.pdfUrl;
              fileTransfer.download(url, this.appFolderPath + '/' + fileName).then((entry) => {
                this.base64.encodeFile(entry.nativeURL).then((base64File: string) => {
                  let data = base64File.split(',');
                  let base64Data = "data:application/pdf;base64," + data[1];
                  this.socialSharing.share("", fileName, base64Data, "").then(() => {
                  }, error => {
                    console.log(error, "error");
                  });
                }, (err) => {
                  console.log(err);
                });
              }, (error) => {
                console.log(error);
              });
            }, error => {
              this.toastService.errorToast('');
            })
          }, error => {
          })
        }
      })
    })
  }

  async loader() {
    const loading = await this.loadingController.create({
      message: 'Syncing your data.',
      duration:500
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  updateInLocal(project, oldProject) {
    this.storage.get('myprojects').then(myprojects => {
      if (myprojects) {
        myprojects.forEach(function (prj, i) {
          if (prj._id == oldProject._id) {
            myprojects[i] = project;
          }
        });
      }
      this.storage.set('myprojects', myprojects).then(myprojects => {
        console.log(myprojects, "myprojects updated");
      })
    })
  }
}
