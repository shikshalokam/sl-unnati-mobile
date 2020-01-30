import { Component, OnInit } from '@angular/core';
import { CreateTaskService } from '../create-task/create-task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
import { Base64 } from '@ionic-native/base64/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
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
  back = 'project-view/project-detail/my_projects';
  constructor(public createTaskService: CreateTaskService,
    public route: ActivatedRoute,
    public platform: Platform,
    public transfer: FileTransfer,
    public base64: Base64,
    public fileChooser: FileChooser,
    public file: File
  ) {
    route.params.subscribe(params => {
      this.getCurrentProject(params.id);
    })
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.isIos = this.platform.is('ios') ? true : false;
      this.appFolderPath = this.isIos ? cordova.file.documentsDirectory + 'projects' : cordova.file.externalDataDirectory + 'projects';
    })
  }
  public getCurrentProject(id) {
    this.createTaskService.getProjectById(id).then(project => {
      if (project.tasks && project.tasks.length > 0) {
        project.tasks.forEach(task => {
          if (task.imageUrl) {
            task.imageUrl = 'data:image/jpeg;base64,' + task.imageUrl
          } if (task.file) {
            this.downloadFile(task);
          }
        });
      }

      this.currentMyProject = project;
    })
  }
  public selectTab(type) {
    this.activeTab = type;
  }
  downloadFile(task) {
    const downloadLink = document.createElement("a");
    const fileName = task.file.name;
    downloadLink.href = task.file.url;
    downloadLink.download = fileName;
    task.downloadLink = downloadLink.download;
    // downloadLink.click();
    // downloadLink.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

    // const fileName = name.replace(/\s/g, "");
    // const fileTransfer: FileTransferObject = this.transfer.create();
    // const url = base64Content;
    // fileTransfer.download(url, this.appFolderPath + '/' + fileName).then((entry) => {
    //   this.base64.encodeFile(entry.nativeURL).then((base64File: string) => {
    //     let data = base64File.split(',');
    //     let base64Data = data;
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }, (error) => {
    //   console.log(error);
    // });

  }
}
