import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { NetworkService } from '../network.service';
import { MyReportsService } from '../my-reports/my-reports.service';
import { ToastService } from '../toast.service';
import { MyschoolsService } from '../myschools/myschools.service';

@Component({
  selector: 'app-last-month-reports',
  templateUrl: './last-month-reports.page.html',
  styleUrls: ['./last-month-reports.page.scss'],
})
export class LastMonthReportsPage implements OnInit {
  currentMonth;
  showChart: boolean = false;
  report;
  connected: any = navigator.onLine;
  chartOptions;
  mySchools: any;
  appFolderPath;
  isIos;
  page: number = 1;
  count: number = 5;
  showSkeleton: boolean = false;
  skeletons = [{}, {}, {}, {}, {}];
  highcharts = Highcharts;
  color = "#20ba8d";
  constructor(
    public router: Router,
    public myReportsService: MyReportsService,
    public toastController: ToastController,
    public api: ApiProvider,
    public storage: Storage,
    public networkService: NetworkService,
    public toastService: ToastService,
    public mySchoolsService: MyschoolsService,
    public screenOrientation: ScreenOrientation,
  ) {
    this.networkService.emit.subscribe(value => {
      this.connected = value;
    });
  }
  ionViewDidEnter() {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
    this.getSchools();
  }
  ngOnInit() {
    // this.getChart();
    this.getData();

  }

  getChart() {
    this.showChart = true;
  }
  public getData() {
    if (this.connected) {
      this.storage.get('userTokens').then(data => {
        this.api.refershToken(data.refresh_token).subscribe((data: any) => {
          this.showSkeleton = true;
          let parsedData = JSON.parse(data._body);
          if (parsedData && parsedData.access_token) {
            let userTokens = {
              access_token: parsedData.access_token,
              refresh_token: parsedData.refresh_token,
            };
            this.storage.set('userTokens', userTokens).then(usertoken => {
              this.myReportsService.getReports(userTokens.access_token, 'lastMonth').subscribe((data: any) => {
                this.report = data.data;
                if (data.status != "failed") {
                  this.setupChart();
                }
                this.showSkeleton = false;
              })
            }, error => {
              this.showSkeleton = false;
            })
          }
        }, error => {
          this.showSkeleton = false;
        })
      })
    } else {
      this.toastService.errorToast('message.nerwork_connection_check');
    }
  }
  public setupChart() {
    let totalTask;
    let completed: any;
    if (this.report.tasksCompleted > 0 || this.report.tasksPending > 0) {
      totalTask = this.report.tasksCompleted + this.report.tasksPending;
      completed = (this.report.tasksCompleted / totalTask) * 100;
      completed = completed.toFixed(0);
    } else {
      this.report.tasksCompleted = 0;
      this.report.tasksPending = 0;
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
        data: [["Pending", this.report.tasksPending], ["Completed", this.report.tasksCompleted]],
        size: '90%',
        innerSize: '70%',
        showInLegend: true,
        dataLabels: {
          enabled: false
        }
      }]
    };
  }

  public viewFullReport(value) {
    if (navigator.onLine) {
      this.router.navigate(['project-view/fullreports', value]);
    } else {
      this.toastService.errorToast('message.nerwork_connection_check');
    }
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
  public getSchools() {
    if (this.connected) {
      this.mySchoolsService.getSchools(this.count, this.page).subscribe((data: any) => {
        if (data.status != 'failed') {
          this.mySchools = data.data;
        }
      }, error => { })
    } else {
      this.toastService.errorToast('message.nerwork_connection_check');
    }
  }

  public getReport(type) {
    let obj: any;
    let obj1: any = {};
    if (this.mySchools) {
      this.mySchools[0].type = type;
      this.mySchools[0].isFullReport = false;
      this.mySchools[0].reportType = 'lastMonth';
      obj = this.mySchools[0];
    } else {
      obj1.type = type;
      obj1.isFullReport = false;
      obj1.reportType = 'lastMonth';
      obj1.name = '';
      obj1.entityId = '';
      obj = obj1;
    }
    console.log(obj);
    this.myReportsService.getReportEvent(obj);
  }
}