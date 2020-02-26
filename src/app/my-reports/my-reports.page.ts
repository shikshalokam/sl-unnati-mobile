import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ToastService } from '../toast.service';
import { MyReportsService } from './my-reports.service';
declare var cordova: any;
@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.page.html',
  styleUrls: ['./my-reports.page.scss'],
})
export class MyReportsPage implements OnInit {
  isIos;
  appFolderPath;
  constructor(
    public router: Router,
    public screenOrientation: ScreenOrientation,
    public file: File,
    public platform: Platform,
    public socialSharing: SocialSharing,
    public fileChooser: FileChooser,
    public base64: Base64,
    public fileOpener: FileOpener,
    public transfer: FileTransfer,
    public toastService: ToastService,
    public myReportsService: MyReportsService
  ) {
    myReportsService.shareEvent.subscribe(data => {
      this.share(data);
    });
    myReportsService.downloadEvent.subscribe(data => {
      this.download(data);
    })
    this.platform.ready().then(() => {
      this.isIos = this.platform.is('ios') ? true : false;
      this.appFolderPath = this.isIos ? cordova.file.documentsDirectory + 'projects' : cordova.file.externalDataDirectory + 'projects';
    })
  }
  public back = "project-view/home";
  ngOnInit() {
  }
  ionViewDidEnter() {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
  }
  //  Go back 
  public goBack() {
    this.router.navigate(['/project-view/home']);
  }
  public share(data) {
    const fileName = 'LastMonthReport';
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = data.pdfUrl;
    fileTransfer.download(url, this.appFolderPath + '/' + fileName).then((entry) => {
      this.base64.encodeFile(entry.nativeURL).then((base64File: string) => {
        let data = base64File.split(',');
        let base64Data = "data:application/pdf;base64," + data[1];
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
  }

  public download(data) {
    fetch(data.pdfUrl,
      {
        method: "GET"
      }).then(res => res.blob()).then(blob => {
        this.appFolderPath = decodeURIComponent(this.appFolderPath);
        // task.file.name = decodeURIComponent(task.file.name);
        this.file.writeFile(this.appFolderPath, 'LastMonthReport', blob, { replace: true }).then(res => {
          this.fileOpener.open(
            res.toInternalURL(),
            'application/pdf'
          ).then((res) => {
            console.log(res, 'sucess');
          }).catch(err => {
            console.log(err, 'error');
          });
        }).catch(err => {
          console.log('error in catch');
        });
      }).catch(err => {
        console.log('error');
      });
  }
}