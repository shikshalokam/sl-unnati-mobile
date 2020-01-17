import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import $ from 'jquery'
import { MyReportsService } from '../my-reports/my-reports.service';
@Component({
  selector: 'app-last-month-reports',
  templateUrl: './last-month-reports.page.html',
  styleUrls: ['./last-month-reports.page.scss'],
})
export class LastMonthReportsPage implements OnInit {
  public currentMonth;
  public showChart: boolean = false;
  public report;
  public chartOptions;
  public showSkeleton: boolean = false;
  public skeletons = [{}, {}, {}, {}, {}];
  highcharts = Highcharts;
  // chartOptions = {
  //   chart: {
  //     type: 'pie',
  //     plotBorderWidth: null,
  //     plotShadow: false
  //   },
  //   title: {
  //     text: ''
  //   },
  //   tooltip: {
  //     pointFormat: '{series.name}: <b>{point.percentage:}%</b>'
  //   },
  //   plotOptions: {
  //     pie: {
  //       shadow: false,
  //       center: ['50%', '50%'],
  //     }
  //   },
  //   series: [{
  //     name: 'Tasks',
  //     data: [["Completed", 5], ["Pending", 3]],
  //     size: '70%',
  //     innerSize: '50%',
  //     showInLegend: true,
  //     dataLabels: {
  //       enabled: false
  //     }
  //   }]
  // };
  color = "#20ba8d";
  constructor(
    public router: Router, 
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
    // this.getChart();
    if (navigator.onLine) {
      this.getData();
    } else {
      this.errorToast('Please check your internet connection.');
    }
  }

  getChart() {
    this.showChart = true;

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
            this.myReportsService.getReports(userTokens.access_token, 'lastMonth').subscribe((data: any) => {
              this.report = data.data;
              this.setupChart();
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
  }
  public setupChart() {
    let totalTask = this.report.completed + this.report.pending;
    let completed: any = (this.report.completed / totalTask) * 100;
    completed = completed.toFixed(0);
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
        data: [ ["Pending", this.report.pending],["Completed", this.report.completed]],
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
      this.errorToast('Please check your internet connection.');
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
}
