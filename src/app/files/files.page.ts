import { Component, OnInit } from '@angular/core';
import { CreateTaskService } from '../create-task/create-task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
import { Base64 } from '@ionic-native/base64/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Storage } from '@ionic/storage';

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
    public fileChooser: FileChooser,
    public file: File,
    public fileOpener: FileOpener,
    public storage: Storage
  ) {
    route.params.subscribe(params => {
      this.activeTab = 'images';
      this.getCurrentProject(params.id);
    })
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.isIos = this.platform.is('ios') ? true : false;
      this.appFolderPath = this.isIos ? this.file.documentsDirectory : this.file.externalApplicationStorageDirectory;
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
                  if (task.imageUrl) {
                    let value = task.imageUrl.split(",");
                    if (value[1]) {
                      task.imageUrl = 'data:image/jpeg;base64,' + value[1];
                    } else {
                      task.imageUrl = 'data:image/jpeg;base64,' + value[0];
                    }
                  }
                });
              }
              this.currentMyProject = project;
              console.log(this.currentMyProject, "this.currentMyProject sssss");
            }
          });
        });
      } else {
        projectList.forEach(projectsList => {
          projectsList.projects.forEach(project => {
            if (project._id == id) {
              if (project.tasks && project.tasks.length > 0) {
                project.tasks.forEach(task => {
                  if (task.imageUrl) {
                    let value = task.imageUrl.split(",");
                    if (value[1]) {
                      task.imageUrl = 'data:image/jpeg;base64,' + value[1];
                    } else {
                      task.imageUrl = 'data:image/jpeg;base64,' + value[0];
                    }
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
  downloadFile(task) {
    // const fileTransfer: FileTransferObject = this.transfer.create();

    // fileTransfer.download(task.data, this.appFolderPath + 'file.pdf').then((entry) => {
    //   console.log('download complete: ' + entry.toURL());
    // }, (error) => {
    //   console.log(error, "console.log");
    //   // handle error
    // });

    fetch(task.data,
      {
        method: "GET"
      }).then(res => res.blob()).then(blob => {
        this.appFolderPath = decodeURIComponent(this.appFolderPath);
        task.name = decodeURIComponent(task.name);
        this.file.writeFile(this.appFolderPath, task.name, blob, { replace: true }).then(res => {
          console.log(res, "res");
          this.fileOpener.open(
            res.toInternalURL(),
            'application/pdf'
          ).then((res) => {
          }).catch(err => {
          });
        }).catch(err => {
        });
      }).catch(err => {
      });
  }
}
