import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { NetworkService } from '../network.service';
import { Platform } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ToastService } from '../toast.service';
import { MyReportsService } from './my-reports.service';
import { MyschoolsService } from '../myschools/myschools.service';
import { ApiProvider } from '../api/api';
import { ProjectService } from '../project-view/project.service';
import { Storage } from '@ionic/storage';
import * as Highcharts from 'highcharts';
import { ErrorHandle } from '../error-handling.service';
import { HomeService } from '../home/home.service';
declare var cordova: any;
@Component({
  selector: 'app-my-reports',
  templateUrl: './my-reports.page.html',
  styleUrls: ['./my-reports.page.scss'],
})
export class MyReportsPage {
  isIos;
  appFolderPath;
  back = "project-view/home";
  showChart: boolean = false;
  showNoReports: boolean = false;
  report;
  chartOptions;
  mappedSchool;
  showSkeleton: boolean = false;
  skeletons = [{}, {}, {}, {}, {}];
  highcharts = Highcharts;
  color = "#20ba8d";
  connected: any = navigator.onLine;
  tabs = [{
    title: 'School Wise',
    id: 'school',
    isActive: true
  },
  {
    title: 'Last Month',
    id: 'lastMonth',
    isActive: false
  },
  {
    title: 'Last Quarter',
    id: 'lastQuarter',
    isActive: false
  }];
  activeTab;
  count = 20;
  page = 1;
  schools = [];
  entityId;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public screenOrientation: ScreenOrientation,
    public file: File,
    public platform: Platform,
    public socialSharing: SocialSharing,
    public fileChooser: FileChooser,
    public networkService: NetworkService,
    public base64: Base64,
    public fileOpener: FileOpener,
    public transfer: FileTransfer,
    public toastService: ToastService,
    public myReportsService: MyReportsService,
    public mySchoolsService: MyschoolsService,
    public api: ApiProvider,
    public homeService: HomeService,
    public storage: Storage,
    public projectService: ProjectService,
    public errorHandle: ErrorHandle
  ) {
    activatedRoute.params.subscribe((params: any) => {
      this.mappedSchool = '';
      if (params.id) {
        this.back = "project-view/my-reports";
        this.schools = [];
        this.mappedSchool = params.school;
        this.tabs = [
          {
            title: 'Last Month',
            id: 'lastMonth',
            isActive: true
          },
          {
            title: 'Last Quarter',
            id: 'lastQuarter',
            isActive: false
          }];
        this.entityId = params.id;
        this.selectTab('lastMonth');
      } else {
        this.entityId = '';
        this.tabs = [{
          title: 'School Wise',
          id: 'school',
          isActive: true
        },
        {
          title: 'Last Month',
          id: 'lastMonth',
          isActive: false
        },
        {
          title: 'Last Quarter',
          id: 'lastQuarter',
          isActive: false
        }];
        this.selectTab('school');
      }
    })
    myReportsService.reportEvent.subscribe((data: any) => {
      // this.share(data);
      this.platform.ready().then(() => {
        this.isIos = this.platform.is('ios') ? true : false;
        this.appFolderPath = this.isIos ? cordova.file.documentsDirectory + 'projects' : cordova.file.externalDataDirectory + 'projects';
      })
      if (data.isFullReport) {
        data.isFullReport = !data.isFullReport;
        this.getFullReport(data);
      }
    });
  }


  ionViewDidEnter() {
    this.projectService.setTitle("reports_tab");
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
    this.platform.ready().then(() => {
      this.isIos = this.platform.is('ios') ? true : false;
      this.appFolderPath = this.isIos ? cordova.file.documentsDirectory + 'projects' : cordova.file.externalDataDirectory + 'projects';
    })
  }
  //  Go back 
  public goBack() {
    this.router.navigate(['/project-view/home']);
  }

  selectTab(tab) {
    this.toastService.startLoader('Loading, Please wait');
    this.api.checkAppUpdate().then(data => {
      this.toastService.stopLoader();
      if (data) {
        this.homeService.forceAppUpdate(data);
      } else {
        this.activeTab = tab;
        this.tabs.forEach(element => {
          if (element.id == tab) {
            element.isActive = true;
          } else {
            element.isActive = false;
          }
        });
        if (this.activeTab != 'school') {
          this.getData();
        } else {
          this.schools = [];
          this.page = 1;
          this.getSchools();
        }
      }
    }, error => {
      this.toastService.stopLoader();
    })
  }

  public getSchools(event?) {
    if (this.networkService.isConnected) {
      this.showSkeleton = true;
      this.mySchoolsService.getSchools(this.count, this.page).subscribe((data: any) => {
        if (data.data && data.data.length > 0 && data.status != 'failed') {
          this.schools = this.schools.concat(data.data);
          this.page = this.page + 1;
          this.showSkeleton = false;
        } else {
          this.schools = [];
          this.tabs = [
            {
              title: 'Last Month',
              id: 'lastMonth',
              isActive: true
            },
            {
              title: 'Last Quarter',
              id: 'lastQuarter',
              isActive: false
            }];
          this.showSkeleton = false;
          this.selectTab('lastMonth');
        }
      }, error => {
        this.showSkeleton = false;
        this.errorHandle.errorHandle(error);
      })
    }
    else {
      this.toastService.stopLoader();
      this.toastService.errorToast('message.nerwork_connection_check');
    }
  }
  // download and Share Reports
  public getReport(type: any) {
    if (this.networkService.isConnected) {
      this.toastService.startLoader('Loading, Please wait');
      this.api.checkAppUpdate().then(data => {
        this.toastService.stopLoader();
        if (data) {
          this.homeService.forceAppUpdate(data);
        } else {
          this.toastService.startLoader('Loading, Please wait');
          let tempData = {
            type: type,
            reportType: this.activeTab,
            entityId: this.entityId,
            name: this.mappedSchool,
            isFullReport: false
          }
          this.myReportsService.getReportData(tempData).subscribe((data: any) => {
            this.toastService.stopLoader();
            if (data.status != 'failed') {
              if (tempData.type === 'share') {
                this.share(data);
              } else {
                this.toastService.stopLoader();
                this.download(data);
              }
            } else {
              this.toastService.errorToast(data.message);
            }
          }, error => {
            this.toastService.stopLoader();
            this.errorHandle.errorHandle(error);
          })
        }
      }, error => { this.toastService.stopLoader(); })
    } else {
      this.toastService.stopLoader();
      this.toastService.errorToast('message.nerwork_connection_check');
    }
  }

  // download and Share Full Reports
  public getFullReport(type: any) {
    if (this.networkService.isConnected) {
      this.toastService.startLoader('Loading, Please wait');
      let tempData = {
        type: type.type,
        reportType: type.reportType,
        entityId: this.entityId,
        name: this.mappedSchool,
        isFullReport: type.isFullReport
      }
      this.myReportsService.getFullReportData(tempData).subscribe((data: any) => {
        this.toastService.stopLoader();
        if (data.status != 'failed') {
          if (tempData.type === 'share') {
            this.share(data);
          } else {
            this.toastService.stopLoader();
            this.download(data);
          }
        } else {
          this.toastService.errorToast(data.message);
        }
      }, error => {
        this.toastService.stopLoader();
        this.errorHandle.errorHandle(error);
      })
    } else {
      this.toastService.errorToast('message.nerwork_connection_check');
    }
  }

  // Share reports
  public share(data) {
    this.toastService.startLoader('Loading Please wait');
    const fileName = 'Report';
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = data.pdfUrl;
    fileTransfer.download(url, this.appFolderPath + '/' + fileName).then((entry) => {
      let path = entry.nativeURL.substring(0, entry.nativeURL.lastIndexOf("/") + 1);
      this.file.readAsDataURL(path, fileName)
        .then(base64File => {
          // this.base64.encodeFile(entry.nativeURL).then((base64File: string) => {
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

  download(data) {
    this.toastService.presentLoading('Downloading, Please wait');
    const fileTransfer: FileTransferObject = this.transfer.create();
    let d = new Date(),
      n = d.getTime(),
      newFileName = n + ".pdf";
    fileTransfer.download(data.pdfUrl, this.appFolderPath + '/' + newFileName).then(success => {
      this.fileOpener.open(this.appFolderPath + '/' + newFileName, 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    }).catch(error => {
    });
  }
  public getData() {
    if (this.networkService.isConnected) {
      this.showSkeleton = true;
      this.myReportsService.getReports(this.activeTab, this.entityId).subscribe((data: any) => {
        if (data.status != "failed" && data.data) {
          this.setupChart(data.data);
        } else {
          this.showNoReports = true;
          this.showSkeleton = false;
        }
      }, error => {
        this.showSkeleton = false;
        this.errorHandle.errorHandle(error);
      })
    } else {
      this.toastService.errorToast('message.nerwork_connection_check');
    }
  }
  public setupChart(data) {
    let totalTask;
    let completed: any;
    if (data.tasksCompleted > 0 || data.tasksPending > 0) {
      totalTask = data.tasksCompleted + data.tasksPending;
      completed = (data.tasksCompleted / totalTask) * 100;
      completed = completed.toFixed(0);
    } else {
      data.tasksCompleted = 0;
      data.tasksPending = 0;
      completed = 0;
    }
    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        verticalAlign: 'middle',
        floating: true,
        text: '<b>' + completed + ' % <br>Completed</b>'
      },
      // xAxis: {
      //   categories: data
      // },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      legend: {
        enabled: false
      }, credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%'],
          colors: [
            '#adafad',
            '#20ba8d'
          ],
        }
      },
      series: [{
        name: "Tasks",
        data: [["Pending", data.tasksPending], ["Completed", data.tasksCompleted]],
        size: '90%',
        innerSize: '70%',
        showInLegend: true,
        dataLabels: {
          enabled: false
        }
      }]
    };
    this.report = data;
    this.showSkeleton = false;
  }

  public viewFullReport() {
    if (this.connected) {
      this.router.navigate(['project-view/fullreports', this.activeTab, this.entityId, this.mappedSchool]);
    } else {
      this.toastService.errorToast('message.nerwork_connection_check');
    }
  }
  public getReportsBySchool(entityId, mappedSchool) {
    this.router.navigate(["project-view/my-reports", entityId, mappedSchool]);
  }
}