import { Component, OnInit, ViewChild } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { NetworkService } from '../network.service';
import { ReportsService } from './reports.service';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../api/api';
import { IonInfiniteScroll } from '@ionic/angular';
import { Location } from '@angular/common';
import { HomeService } from '../home/home.service';
import { LocalKeys } from '../shared-module/localstorage-keys';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public skeletons = [{}, {}, {}, {}, {}];
  public showSkeleton: boolean = false;
  public noReports: boolean = false;
  public connected: any = localStorage.getItem('networkStatus');
  public page: number = 0;
  public reports;
  back = 'project-view/my-schools';
  constructor(public network: Network,
    public homeService: HomeService,
    public location: Location,
    public networkService: NetworkService,
    public storage: Storage,
    public reportsService: ReportsService,
    public api: ApiProvider) {
    this.networkService.emit.subscribe(value => {
      this.connected = value;
      localStorage.setItem("networkStatus", this.connected);
    });
  }

  ngOnInit() {
  }
  ionViewDidEnter() {
    if (!this.reports) {
      this.getReports();
    }
  }

  // infinite scroll
  loadData(event) {
    event.target.complete();
    //getReports(data,limit,page)
    this.showSkeleton = true;
    this.page = this.page + 1;
    this.reportsService.getReports(10, this.page).subscribe((data: any) => {
      event.target.disabled = true;
      // this.reports.push(data.data);
      this.reports = data.data;
      this.showSkeleton = false;
    }, error => {
      this.showSkeleton = false;
    })
  }
  // Get reports
  public getReports() {
    this.showSkeleton = true;
    this.page = this.page + 1;
    this.reportsService.getReports(10, this.page).subscribe((data: any) => {
      if (data.data) {
        this.reports = data.data;
      }
      this.showSkeleton = false;
    }, error => {
      this.showSkeleton = false;
    })
  }

  // get report file
  public getReportFile(id, title) {
    this.showSkeleton = true;
    this.reportsService.getReportFile(id).subscribe((data: any) => {
      //  window.open(data.pdfUrl)
      let report = {
        title: title,
        id: id
      }
      this.storage.get(LocalKeys.allProjects).then(rprts => {
        if (rprts) {
          if (rprts.find((pro) => pro.id === report.id) === undefined) {
            rprts.push(report);
            this.storage.set(LocalKeys.allProjects, rprts).then((uprep: any) => {
              this.homeService.loadMyProjects();
            });
          }
        } else {
          let data1: any = [];
          data1.push(report);
          this.storage.set(LocalKeys.allProjects, data1).then((data: any) => {
            this.homeService.loadMyProjects();
          });
        }
      })

      var link = document.createElement('a');
      link.href = data.pdfUrl;
      link.download = "report.pdf";
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      this.showSkeleton = false;
    }, error => {
      this.showSkeleton = false;
    })
  }
  // Search School
  public searchReport(keyword) {
    this.showSkeleton = true;
    this.page = this.page + 1;
    this.reportsService.searchReports(keyword).subscribe((data: any) => {
      if (data.data) {
        this.reports = data.data;
      }
      if (data.data.length == 0) {
        this.noReports = true;
      }
      this.showSkeleton = false;
    }, error => {
      this.showSkeleton = false;
    })
  }
  public goBack() {
    this.location.back();
  }
}
