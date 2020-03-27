import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyReportsService } from '../my-reports/my-reports.service';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import * as Highcharts from 'highcharts/highcharts-gantt';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { MyschoolsService } from '../myschools/myschools.service';
import { NetworkService } from '../network.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-fullreports',
  templateUrl: './fullreports.page.html',
  styleUrls: ['./fullreports.page.scss'],
})
export class FullreportsPage implements OnInit {
  state;
  timeInterval
  reports
  idvalue = 'container';
  connected: any = navigator.onLine;
  page: number = 1;
  count: number = 5;
  highcharts = Highcharts;
  showCharts: boolean = false;
  chartOptions;
  showSkeleton: boolean = false;
  skeleton = [{}, {}, {}, {}];
  mySchools;
  back = "/project-view/my-reports/last-month-reports"
  constructor(public activatedRoute: ActivatedRoute,
    public screenOrientation: ScreenOrientation,
    public router: Router,
    public myReportsService: MyReportsService,
    public api: ApiProvider,
    public storage: Storage,
    public mySchoolsService: MyschoolsService,
    public networkService: NetworkService,
    public toastService: ToastService,
  ) {
    this.networkService.emit.subscribe(value => {
      this.connected = value;
    });
    activatedRoute.params.subscribe((params: any) => {
      this.state = params.state;
      this.getSchools();
      this.getReports(params.state);
      try {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      } catch (error) {
      }
    })
  }
  ngOnInit() {
  }
  public getReports(state) {
    this.storage.get('userTokens').then(data => {
      this.api.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.showSkeleton = true;
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.myReportsService.getFullReports(userTokens.access_token, state).subscribe((data: any) => {
              data.data.forEach(report => {
              });
              this.reports = data.data;
              if (this.reports.length > 0) {

                setTimeout(() => {
                  this.showCharts = true;
                  this.setUpChart(this.reports[0]);
                }, 1000);
              } else {
                this.showSkeleton = false;
              }
            }, error => {
              this.showSkeleton = false;
            })
          }, error => {
            this.showSkeleton = false;
          })
        }
      })
    })
  }
  public setUpChart(data) {
    this.showSkeleton = true;
    for (let i = 0; i < this.reports.length; i++) {
      let minDate = new Date(this.reports[i].xAxis.min);
      let maxDate = new Date(this.reports[i].xAxis.max);
      let sdate = minDate.getDate();
      let smonth = minDate.getMonth() + 1;
      let syear = minDate.getFullYear();
      let edate = maxDate.getDate();
      let emonth = maxDate.getMonth() + 1;
      let eyear = maxDate.getFullYear();
      let minDate1 = Date.UTC(syear, smonth, sdate);
      let maxDate1 = Date.UTC(eyear, emonth, edate);
      Highcharts.ganttChart('container' + i, {
        title: {
          text: ''
        },
        xAxis: {
          min: minDate1,
          max: maxDate1
        },
        legend: {
          enabled: false
        }, credits: {
          enabled: false
        },
        series: [{
          type: 'gantt',
          data: this.reports[i].series[0].data
        }]
      });
    }
    this.showSkeleton = false;
  }
  // go back
  public goBack() {
    this.router.navigate(['/project-view/my-reports/last-' + this.state + '-reports']);
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
      this.mySchools[0].isFullReport = true;
      this.mySchools[0].reportType = this.state;
      obj = this.mySchools[0];
    } else {
      obj1.type = type;
      obj1.isFullReport = true;
      obj1.reportType = this.state;;
      obj1.name = '';
      obj1.entityId = '';
      obj = obj1;
    }
    this.myReportsService.getReportEvent(obj);
  }
}