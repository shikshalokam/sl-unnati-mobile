import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
import $ from 'jquery';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { MyReportsService } from '../my-reports/my-reports.service';
import { ToastController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-last-quarter-reports',
  templateUrl: './last-quarter-reports.page.html',
  styleUrls: ['./last-quarter-reports.page.scss'],
})
export class LastQuarterReportsPage implements OnInit {
  public currentMonth;
  public chartOptions;
  public showChart: boolean = false;
  public report;
  public showSkeleton: boolean = false;
  public skeletons = [{}, {}, {}, {}, {}]
  highcharts = Highcharts;
  color = "#20ba8d";
  constructor(public router: Router,
    public myReportsService: MyReportsService,
    public toastController: ToastController,
    public api: ApiProvider,
    public storage: Storage,
    public screenOrientation: ScreenOrientation
  ) { }
  ionViewDidEnter() {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
  }
  ngOnInit() {
    if (navigator.onLine) {
      this.getData();
    } else {
      this.errorToast('Please check your internet connection.');
    }
  }

  getChart() {
    this.showChart = true;
  }

  public viewFullReport(value) {
    if (navigator.onLine) {
      this.router.navigate(['project-view/fullreports', value]);
    } else {
      this.errorToast('Please check your internet connection.');
    }
  }

  public getData() {
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
            this.myReportsService.getReports(userTokens.access_token, 'lastQuarter').subscribe((data: any) => {
              this.report = data.data;
              this.setupChart();
              this.showSkeleton = false;
            })
          }, error => {
            this.showSkeleton = false;
          })
        }
      }, error => {
        this.showSkeleton = true;
      })
    })
  }
  public setupChart() {
    // let totalTask = this.report.completed + this.report.pending;
    // let completed: any = (this.report.completed / totalTask) * 100;
    // completed = completed.toFixed(0);
    let totalTask;
    let completed: any;
    if (this.report.completed > 0 || this.report.pending > 0) {
      totalTask = this.report.completed + this.report.pending;
      completed = (this.report.completed / totalTask) * 100;
      completed = completed.toFixed(0);
    } else {
      this.report.completed = 0;
      this.report.pending = 0;
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
            '#20ba8d',
            '#adafad'
          ],
        }
      },
      series: [{
        name: "Tasks",
        data: [["Pending", this.report.pending], ["Completed", this.report.completed]],
        size: '90%',
        innerSize: '70%',
        showInLegend: true,
        dataLabels: {
          enabled: false
        }
      }]
    };
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
}
