import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PopoverController } from '@ionic/angular';
import { CategoryViewService } from '../../../category-view/category.view.service';
import { CreateProjectService } from '../../../create-project/create-project.service';
import { Storage } from '@ionic/storage';
import { ToastService } from '../../../toast.service';
import { AlertController } from '@ionic/angular';
import { ApiProvider } from '../../../api/api';
import { ProjectService } from '../../../project-view/project.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { LoadingController } from '@ionic/angular';
import { LocalKeys } from '../../../core-module/constants/localstorage-keys';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandle } from '../../../error-handling.service';
import { NetworkService } from '../../../network.service';
import { HomeService } from 'src/app/home/home.service';

declare var cordova: any;
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  share;
  delete;
  deleteProjectConfirm;
  deleteTaskConfirm;
  @Input() project;
  @Input() menus
  isIos;
  projectToSync: any = [];
  appFolderPath;
  attachmentsList = [];
  storageUrls;
  fileIndex = 0;
  projectData = {}
  constructor(
    public translateService: TranslateService,
    public popoverController: PopoverController,
    public categoryViewService: CategoryViewService,
    public createProjectService: CreateProjectService,
    public storage: Storage,
    public toastService: ToastService,
    public alertController: AlertController,
    public apiProvider: ApiProvider,
    public homeService: HomeService,
    public projectService: ProjectService,
    public transfer: FileTransfer,
    public file: File,
    public platform: Platform,
    public socialSharing: SocialSharing,
    public fileChooser: FileChooser,
    public base64: Base64,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public errorHandle: ErrorHandle,
    public router: Router,
    public networkService: NetworkService) { }
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
        this.deleteProjectConfirm = text;
      });
      this.translateService.get('message.delete_task_confirm').subscribe((text: string) => {
        this.deleteTaskConfirm = text;
      });
    })
  }

  // confirmation for delete project
  async deleteConfirmation(type, msg) {
    const alert = await this.alertController.create({
      message: msg,
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
            if (type == 'project') {
              this.deleteProject();
            } else if (type == 'task') {
              this.deleteTask();
            }
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
    this.storage.get(LocalKeys.allProjects).then(myProjects => {
      if (myProjects) {
        myProjects.forEach(programs => {
          programs.projects.forEach(function (project, i) {
            if (project._id == projectData._id) {
              projectData.isEdited = true;
              programs.projects[i] = projectData;
            }
          });
          this.storage.set(LocalKeys.allProjects, myProjects).then(project => {
            this.toastService.successToast('message.project_deleted_success');
            this.categoryViewService.deleteProject('deleted');
            // this.DismissClick();
          }, error => {
            this.toastService.errorToast('message.project_deleted_failed');
          })
        });
      } else {
        if (myProjects[0].projects) {
          myProjects[0].projects.forEach(function (project, i) {
            if (project._id == projectData._id) {
              projectData.isEdited = true;
              myProjects[0].projects[i] = projectData;
            }
          });
          this.storage.set(LocalKeys.allProjects, myProjects).then(project => {
            this.toastService.successToast('message.project_deleted_success');
            this.categoryViewService.deleteProject('deleted');
            // this.DismissClick();
          }, error => {
            this.toastService.errorToast('message.project_deleted_failed');
          })
        }
      }

    }, error => {
      this.toastService.errorToast('message.project_deleted_failed');
    })
    // this.DismissClick();
  }

  // Dismiss popver menu 
  async DismissClick() {
    this.popoverController.dismiss();
  }

  // Sync project before share
  public syncProject() {
    if (this.networkService.isConnected) {
      this.toastService.startLoader('Loading, Please wait');
      this.apiProvider.checkAppUpdate().then(data => {
        this.toastService.stopLoader();
        if (data) {
          this.homeService.forceAppUpdate(data);
        } else {
          if (this.projectToSync[0].isEdited || this.projectToSync[0].isNew) {
            if (this.projectToSync[0].isNew) {
              delete this.projectToSync[0]._id;
            }
            if (this.projectToSync[0].tasks && this.projectToSync[0].tasks.length > 0) {
              this.getAttachments();
            } else {
              this.sync();
            }
          } else {
            this.toastService.startLoader('Loading, please wait');
            this.getPDF(this.project._id);
            // this.DismissClick();
          }
        }
      }, error => {
        this.toastService.stopLoader();
      })
    } else {
      this.toastService.errorToast('message.nerwork_connection_check');
    }
  }
  syncUpdateInLocal(syncedProjects) {
    syncedProjects.forEach(projects => {
      projects.projects.forEach(sproject => {
        sproject.isNew = false;
        sproject.isSync = true;
        sproject.isEdited = false;
        sproject.share = false;
        if (sproject.tasks && sproject.tasks.length > 0) {
          sproject.tasks.forEach(task => {
            task.isSync = true;
          });
        }
      })
    });
    this.storage.set(LocalKeys.allProjects, syncedProjects).then(myprojectsff => {
    })
  }
  // geting pdf file report of project and share the project
  public getPDF(id) {
    let projectData = {
      "projectId": id
    }
    this.categoryViewService.getPDF(projectData).subscribe((data: any) => {
      const fileName = this.project.title.replace(/\s/g, "");
      const fileTransfer: FileTransferObject = this.transfer.create();
      const url = data.pdfUrl;
      fileTransfer.download(url, this.appFolderPath + '/' + fileName).then((entry) => {
        let path = entry.nativeURL.substring(0, entry.nativeURL.lastIndexOf("/") + 1);
        this.file.readAsDataURL(path, fileName)
          .then(base64File => {
            // this.base64.encodeFile(entry.nativeURL).then((base64File: string) => {
            let data = base64File.split(',');
            let base64Data = "data:application/pdf;base64," + data[1];
            this.toastService.stopLoader();
            this.DismissClick();
            this.socialSharing.share("", fileName, base64Data, "").then((data) => {
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
      this.errorHandle.errorHandle(error);
    })
  }

  public getAttachments() {
    let filesList = [];
    this.attachmentsList = [];
    if (this.projectToSync[0].tasks && this.projectToSync[0].tasks.length > 0) {
      this.projectToSync[0].tasks.forEach(task => {
        if (task.attachments) {
          task.attachments.forEach(attachment => {
            if (attachment.isNew) {
              let data = {
                taskId: task._id,
                data: attachment.data,
                name: attachment.name,
                type: attachment.type,
                isUploaded: false
              }
              this.attachmentsList.push(data);
              filesList.push(attachment.name)
            }
          });
        }
      });
    }
    if (this.attachmentsList.length > 0) {
      this.getUploadUrl(this.attachmentsList, filesList);
    } else {
      this.sync();
    }
  }
  public getUploadUrl(attachmentsList, filesList) {
    this.toastService.startLoader('Loading, Please wait');
    this.fileIndex = 0;
    let fileNames = { fileNames: filesList }
    this.projectService.getStorageUrl(fileNames).subscribe((data: any) => {
      if (data.status == 200) {
        this.storageUrls = data.result;
        this.uploadToGC(attachmentsList[this.fileIndex], this.storageUrls[this.fileIndex]);
      } else {
        this.toastService.stopLoader();
      }
    }, error => {
      this.errorHandle.errorHandle(error);
    })
  }

  public uploadToGC(attachment, result) {
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: attachment.name,
      chunkedMode: false,
      mimeType: attachment.type,
      headers: {
        "Content-Type": 'multipart/form-data',
        "x-ms-blob-type": (result.cloudStorage && result.cloudStorage === 'GC') ? "BlockBlob" : null
      },
      httpMethod: 'PUT',
    }
    let targetPath = this.pathForImage(attachment.name);
    let fileTrns: FileTransferObject = this.transfer.create();
    this.file.checkFile((this.platform.is('ios') ? this.file.documentsDirectory : this.file.externalDataDirectory) + 'attachments/', attachment.name).then(success => {
      fileTrns.upload(targetPath, result.url, options)
        .then((data) => {
          // success
          this.attachmentsList[this.fileIndex]
          this.attachmentsList[this.fileIndex].gcUrl = result.payload.sourcePath;
          if (this.fileIndex < this.attachmentsList.length - 1) {
            this.fileIndex = this.fileIndex + 1;
            this.uploadToGC(this.attachmentsList[this.fileIndex], this.storageUrls[this.fileIndex]);
          } else {
            this.mapAttachments();
          }
        }, (err) => {
          this.toastService.stopLoader();
        }).catch(err => {
        })
    }, error => {
      this.attachmentsList[this.fileIndex]
      this.attachmentsList[this.fileIndex].gcUrl = result.payload.sourcePath;
      if (this.fileIndex < this.attachmentsList.length - 1) {
        this.fileIndex = this.fileIndex + 1;
        this.uploadToGC(this.attachmentsList[this.fileIndex], this.storageUrls[this.fileIndex]);
      } else {
        this.mapAttachments();
      }
    })
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      const path = this.platform.is('ios') ? cordova.file.documentsDirectory : cordova.file.externalDataDirectory
      return path + 'attachments/' + img;
    }
  }
  // map attachments to task and sync
  mapAttachments() {
    if (this.projectToSync[0].tasks && this.projectToSync[0].tasks.length > 0) {
      this.projectToSync[0].tasks.forEach(task => {
        if (task.attachments && task.attachments.length > 0) {
          this.attachmentsList.forEach(attachment => {
            if (task._id == attachment.taskId) {
              task.attachments.forEach(function (ta, i) {
                if (ta.isNew && ta.name == attachment.name) {
                  ta.sourcePath = attachment.gcUrl;
                  ta.isUploaded = true;
                  ta.isNew = false;
                }
              });
            }
          });
        }
      });
      this.sync();
    }
  }

  sync() {
    this.toastService.startLoader('Loading, please wait');
    if (this.projectToSync[0].tasks && this.projectToSync[0].tasks.length > 0) {
      this.projectToSync[0].tasks.forEach(task => {
        if (task.subTasks && task.subTasks.length > 0) {
          task.subTasks.forEach(subtasks => {
            if (subtasks.isNew && subtasks._id) {
              delete subtasks._id;
            }
          })
        }
        if (task.isNew && task._id) {
          delete task._id;
        }
        if (task.isSync) {
          task.isNew = false;
        }
      });
    }
    let metaData: any = [];
    metaData.push(this.projectToSync);
    let projects = {
      projects: this.projectToSync
    }
    this.projectService.sync(projects).subscribe((data: any) => {
      if (data.status == "success" || data.status == "succes") {
        this.toastService.stopLoader();
        data.allProjects.data.forEach(projects => {
          projects.projects.forEach(sproject => {
            if (sproject.share) {
              this.getPDF(sproject._id);
            }
          })
        });
        // this.DismissClick();
        this.syncUpdateInLocal(data.allProjects.data);
      } else {
        // this.DismissClick();
        this.toastService.stopLoader();
        this.toastService.errorToast1(data.message);
      }
    }, error => {
      this.toastService.stopLoader();
      this.errorHandle.errorHandle(error);
    })
  }

  public action(action) {
    this.toastService.startLoader('Loading, Please wait');
    this.apiProvider.checkAppUpdate().then(data => {
      this.toastService.stopLoader();
      if (data) {
        this.homeService.forceAppUpdate(data);
      } else {
        switch (action) {
          case 'deleteProject': {
            this.deleteConfirmation('project', this.deleteProjectConfirm);
            break;
          }
          case 'shareProject': {
            if (this.networkService.isConnected) {
              this.syncProject();
            } else {
              this.toastService.errorToast('Your offline, Please try again')
            }
            break;
          } 
          case 'shareTask': {
            this.shareTask();
            break;
          }
          case 'deleteTask': {
            this.deleteConfirmation('task', this.deleteTaskConfirm);
            break;
          }
          case 'editTask': {
            this.taskView();
            break;
          }
        }
      }
    }, error => {
      this.toastService.stopLoader();
    })
    this.DismissClick();
  }
  public shareTask() {
    let files = [];
    if (this.project.tasks[0].attachments) {
      this.project.tasks[0].attachments.forEach(element => {
        let data = {
          name: element.name
        }
        files.push(data);
      });
      this.project.tasks[0].attachments = files;
    }
    this.projectData = {
      projectName: this.project.title,
      goal: this.project.goal,
      duration: this.project.duration,
      projectId: this.project._id,
      tasks: this.project.tasks[0]
    }
    this.toastService.startLoader('Loading, please wait');
    this.createProjectService.getTaskPDF(this.projectData).subscribe(data => {
      this.toastService.stopLoader();
      this.sharePdf(data);
    }, error => {
      this.errorHandle.errorHandle(error);
    })
  }
  // mark the task as deleted
  public deleteTask() {
    this.project.tasks[0].isDeleted = true;
    this.project.tasks[0].status = 'Completed';
    this.storage.set('cTask', this.project.tasks[0]).then(ct => {
      this.projectService.taskDelete(this.project.tasks[0]);
      this.toastService.successToast('message.task_is_deleted');
    })
  }
  // navigate to view task
  public taskView() {
    // if (this.project.isStarted) {
    this.storage.set(LocalKeys.newcreatedproject, this.project).then(cmp => {
      this.storage.set('cTask', this.project.tasks[0]).then(ct => {
        this.router.navigate(['/project-view/current-task', this.project.tasks[0]._id, 'pd']);
      });
    })
    // }
  }

  sharePdf(data) {
    this.toastService.startLoader('Loading Please wait');
    const fileName = 'Unnati Task';
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = data.pdfUrl;
    fileTransfer.download(url, this.appFolderPath + '/' + fileName).then((entry) => {
      let fileName1 = entry.nativeURL.split('/').pop();
      let path = entry.nativeURL.substring(0, entry.nativeURL.lastIndexOf("/") + 1);
      this.file.readAsDataURL(path, fileName)
        .then(base64File => {
          let data = base64File.split(',');
          let base64Data = "data:application/pdf;base64," + data[1];
          this.socialSharing.share("", fileName, base64Data, "").then((data) => {
            this.toastService.stopLoader();
          }, error => {
            this.toastService.stopLoader();
            // intentially left blank
          });
        }, (err) => {
          this.toastService.stopLoader();
        });
    }, (error) => {
      this.toastService.stopLoader();
    });
  }
}