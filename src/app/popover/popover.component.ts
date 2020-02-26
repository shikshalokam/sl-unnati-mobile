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
  projectToSync: any = [];
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
      this.projectToSync.push(this.project);
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
    this.storage.get('projects').then(myProjects => {
      if (myProjects[0].projects) {
        myProjects[0].projects.forEach(function (project, i) {
          if (project._id == projectData._id) {
            projectData.isEdited = true;
            myProjects[0].projects[i] = projectData;
          }
        });
        this.storage.set('projects', myProjects).then(project => {
          this.toastService.successToast('message.project_deleted_success');
          this.categoryViewService.deleteProject('deleted');
          this.DismissClick();
        }, error => {
          this.toastService.errorToast('message.project_deleted_failed');
        })
      }
    }, error => {
      this.toastService.errorToast('message.project_deleted_failed');
    })
    this.DismissClick();
  }

  // Dismiss popver menu 
  async DismissClick() {
    this.popoverController.dismiss();
  }

  // Sync project before share
  public syncProject() {
    if (this.projectToSync[0].isEdited || this.projectToSync[0].isNew) {
      if (this.projectToSync[0].isNew) {
        delete this.projectToSync[0]._id;
      }
      if (this.projectToSync[0].tasks && this.projectToSync[0].tasks.length > 0) {
        this.projectToSync[0].tasks.forEach(task => {
          if (task.isNew) {
            delete task._id;
          }
          if (task.subTasks && task.subTasks.length > 0) {
            task.subTasks.forEach(subtask => {
              if (subtask.isNew) {
                delete subtask._id;
              }
            });
          }
        });
      }
      this.storage.get('userTokens').then(data => {
        this.apiProvider.refershToken(data.refresh_token).subscribe((data: any) => {
          let parsedData = JSON.parse(data._body);
          if (parsedData && parsedData.access_token) {
            let userTokens = {
              access_token: parsedData.access_token,
              refresh_token: parsedData.refresh_token,
            };
            this.storage.set('userTokens', userTokens).then(data => {
              this.toastService.startLoader('Loading, please wait');
              let metaData: any = [];
              metaData.push(this.projectToSync);
              let projects = {
                projects: this.projectToSync
              }
              this.projectService.sync(projects, data.access_token).subscribe((data: any) => {
                if (data.status == "success" || data.status == "succes") {
                  // if (data.allProjects.data) {
                  data.allProjects.data.forEach(projects => {
                    projects.projects.forEach(sproject => {
                      if (sproject.share) {
                        this.getPDF(sproject._id);
                      }
                      // sproject.share = false;
                    })
                  });
                  this.DismissClick();
                  this.syncUpdateInLocal(data.allProjects.data);
                } else {
                  this.DismissClick();
                  this.toastService.errorToast1(data.message);
                }
                this.toastService.stopLoader();
              }, error => {
                // intentially left blank
                this.toastService.stopLoader();
              })
            })
          }
        }, error => {
          // intentially left blank
        })
      })
    } else {
      this.getPDF(this.project._id);
      this.DismissClick();
    }
  }
  syncUpdateInLocal(syncedProjects) {
    syncedProjects.forEach(projects => {
      projects.projects.forEach(sproject => {
        sproject.isNew = false;
        sproject.isSync = true;
        sproject.createdType = 'by self';
        sproject.isEdited = false;
        sproject.share = false;
        if (sproject.tasks && sproject.tasks.length >0) {
          sproject.tasks.forEach(task => {
            task.isSync = true;
          });
        }
      })
    });
    this.storage.set('projects', syncedProjects).then(myprojectsff => {
    })
  }
  // geting pdf file report of project and share the project
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
            this.toastService.startLoader('Loading, please wait');
            this.categoryViewService.getPDF(projectData, userTokens.access_token).subscribe((data: any) => {
              const fileName = this.project.title.replace(/\s/g, "");
              const fileTransfer: FileTransferObject = this.transfer.create();
              const url = data.pdfUrl;
              fileTransfer.download(url, this.appFolderPath + '/' + fileName).then((entry) => {
                this.base64.encodeFile(entry.nativeURL).then((base64File: string) => {
                  let data = base64File.split(',');
                  let base64Data = "data:application/pdf;base64," + data[1];
                  this.toastService.stopLoader();
                  this.DismissClick();
                  this.socialSharing.share("", fileName, base64Data, "").then(() => {
                  }, error => {
                    // intentially left blank
                  });
                }, (err) => {
                  this.toastService.stopLoader();
                });
              }, (error) => {
                this.toastService.stopLoader();
              });
            }, error => {
              this.toastService.stopLoader();
            })
          }, error => {
            this.toastService.stopLoader();
          })
        }
      })
    })
  }
}
