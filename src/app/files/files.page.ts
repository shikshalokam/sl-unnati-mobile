import { Component, OnInit } from '@angular/core';
import { CreateTaskService } from '../create-task/create-task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
import { Base64 } from '@ionic-native/base64/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Storage } from '@ionic/storage';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { ToastService } from '../toast.service';
declare var cordova: any;

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {
  currentMyProject;
  activeTab = 'images';
  isIos;
  appFolderPath;
  showSkeleton: boolean = false;
  skeletons = [{}, {}, {}, {}, {}, {}];
  back = 'project-view/project-detail/my_projects';
  constructor(public createTaskService: CreateTaskService,
    public route: ActivatedRoute,
    public platform: Platform,
    public transfer: FileTransfer,
    public base64: Base64,
    public file: File,
    public fileOpener: FileOpener,
    public storage: Storage,
    private document: DocumentViewer,
    public toastService: ToastService
  ) {
    route.params.subscribe(params => {
      this.activeTab = 'images';
      this.getCurrentProject(params.id);
    })
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.isIos = this.platform.is('ios') ? true : false;
      this.appFolderPath = this.isIos ? cordova.file.documentsDirectory + 'attachments' : cordova.file.externalDataDirectory + 'attachments';
    })
  }
  public getCurrentProject(id) {
    this.showSkeleton = true;
    this.storage.get('latestProjects').then(projectList => {
      if (projectList.programs) {
        projectList.programs.forEach(programsList => {
          programsList.projects.forEach(project => {
            if (project._id == id) {
              if (project.tasks && project.tasks.length > 0) {
                project.tasks.forEach(task => {
                  if (task.attachments && task.attachments.length > 0) {
                    task.imageList = [];
                    task.fileList = [];
                    task.attachments.forEach(attachment => {
                      if (attachment.isNew && !attachment.isUploaded) {
                        if (attachment.type == 'application/pdf') {
                          attachment.url = this.appFolderPath + '/' + attachment.name;
                          task.fileList.push(attachment);
                        } else {
                          let win: any = window;
                          attachment.url = win.Ionic.WebView.convertFileSrc(this.appFolderPath + '/' + attachment.name);
                          task.imageList.push(attachment);
                        }
                      } else {
                        if (attachment.type == 'application/pdf') {
                          attachment.url = this.appFolderPath + '/' + attachment.name;
                          task.fileList.push(attachment);
                        } else {
                          let win: any = window;
                          attachment.url = win.Ionic.WebView.convertFileSrc(this.appFolderPath + '/' + attachment.name);
                          task.imageList.push(attachment);
                        }
                      }
                    });
                  }
                });
              }
              this.currentMyProject = project;
            }
          });
        });
      } else {
        projectList.forEach(projectsList => {
          projectsList.projects.forEach(project => {
            if (project._id == id) {
              if (project.tasks && project.tasks.length > 0) {
                project.tasks.forEach(task => {
                  if (task.attachments && task.attachments.length > 0) {
                    task.imageList = [];
                    task.fileList = [];
                    task.attachments.forEach(attachment => {
                      let isInLocal = this.checkFileInLocal(attachment);
                      if (attachment.isNew && !attachment.isUploaded) {
                        if (attachment.type == 'application/pdf') {
                          attachment.url = this.appFolderPath + '/' + attachment.name;
                          task.fileList.push(attachment);
                        } else {
                          let win: any = window;
                          attachment.url = win.Ionic.WebView.convertFileSrc(this.appFolderPath + '/' + attachment.name);
                          task.imageList.push(attachment);
                        }
                      } else {
                        attachment.notInLocal = true;
                        if (attachment.type == 'application/pdf') {
                          // attachment.url = this.appFolderPath + '/' + attachment.name;
                          task.fileList.push(attachment);
                        } else {
                          // let win: any = window;
                          // attachment.url = win.Ionic.WebView.convertFileSrc(this.appFolderPath + '/' + attachment.name);
                          task.imageList.push(attachment);
                        }
                      }
                    });
                  }
                });
              }
              this.currentMyProject = project;
            }
          });
        });
      }
    })
    this.showSkeleton = false;

  }
  public selectTab(type) {
    this.activeTab = type;
  }

  viewDocument(attachment) {
    if (attachment.notInLocal) {
      this.downloadFile(attachment);
    } else {
      this.fileOpener.open(this.appFolderPath + '/' + attachment.name, attachment.type)
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    }
  }
  downloadFile(attachment) {
    this.toastService.presentLoading('Downloading, Please wait');
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(attachment.url, this.appFolderPath + '/' + attachment.name).then(success => {
      attachment.notInLocal = false;
    }).catch(error => {
    });
  }

  checkFileInLocal(attachment) {
    if (this.isIos) {
      this.file.checkDir(this.file.documentsDirectory, 'attachments').then(_ => {
        this.file.checkFile(this.appFolderPath, attachment.name).then(success => {
          attachment.notInLocal = false;
        }, error => {
          attachment.notInLocal = true;
        })
      }).catch(err => {
        this.file.createDir(this.file.documentsDirectory, 'attachments', false).then(response => {
          this.file.checkFile(this.appFolderPath, attachment.name).then(success => {
            attachment.notInLocal = false;
          }, error => {
            attachment.name = attachment.name.trim();
            attachment.name = attachment.name.replace(/ /g, "_");
            this.file.checkFile(this.appFolderPath, attachment.name).then(success => {
            }, error => {
              console.log(error, "success file check");
              attachment.notInLocal = true;
            })
          })
        }).catch(err => {
        });
      });
    } else {
      this.file.checkDir(this.file.dataDirectory, 'attachments').then(_ => {
        this.file.checkFile(this.appFolderPath + '/', attachment.name).then(success => {
          attachment.notInLocal = false;
        }, error => {
          console.log(error, "success file check");
          attachment.notInLocal = true;
        })
      }).catch(err => {
        this.file.createDir(this.file.dataDirectory, 'attachments', false).then(response => {
          this.file.checkFile(this.appFolderPath + '/', attachment.name).then(success => {
            attachment.notInLocal = false;
          }, error => {
            console.log(error, "success file check");
            attachment.notInLocal = true;
          })
        }).catch(err => {
        });
      });
    }
  }
}
