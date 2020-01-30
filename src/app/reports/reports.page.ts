import { Component, OnInit, ViewChild } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { NetworkService } from '../network.service';
import { ReportsService } from './reports.service';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../api/api';
import { IonInfiniteScroll } from '@ionic/angular';
import { Location } from '@angular/common';
import { HomeService } from '../home/home.service';
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
    this.storage.get('userTokens').then(data => {
      this.api.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.page = this.page + 1;
            this.reportsService.getReports(userTokens.access_token, 2, this.page).subscribe((data: any) => {
              event.target.disabled = true;
              // this.reports.push(data.data);
              this.reports = data.data;
              this.showSkeleton = false;
            }, error => {
            })
          }, error => {
          })
        }
      })
    })
  }
  // Get reports
  public getReports() {
    this.storage.get('userTokens').then(data => {
      this.api.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.showSkeleton = true;
            this.page = this.page + 1;
            this.reportsService.getReports(userTokens.access_token, 2, this.page).subscribe((data: any) => {
              if (data.data) {

                this.reports = data.data;
              }
              this.showSkeleton = false;
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

  // get report file
  public getReportFile(id, title) {
    this.storage.get('userTokens').then(data => {
      this.api.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.showSkeleton = true;
            this.reportsService.getReportFile(userTokens.access_token, id).subscribe((data: any) => {
              //  window.open(data.pdfUrl)
              let report = {
                title: title,
                id: id
              }
              this.storage.get('myReports').then(rprts => {
                if (rprts) {
                  if (rprts.find((pro) => pro.id === report.id) === undefined) {
                    rprts.push(report);
                    this.storage.set('myReports', rprts).then((uprep: any) => {
                      this.homeService.loadMyProjects();
                    });
                  }
                } else {
                  let data1: any = [];
                  data1.push(report);
                  this.storage.set('myReports', data1).then((data: any) => {
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
          }, error => {
          })
        }
      })
    });
  }
  // Search School
  public searchReport(keyword) {
    this.storage.get('userTokens').then(data => {
      this.api.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.showSkeleton = true;
            this.page = this.page + 1;
            this.reportsService.searchReports(userTokens.access_token, keyword).subscribe((data: any) => {
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
          }, error => {
            this.showSkeleton = false;
          })
        }
      })
    })
  }
  public goBack() {
    this.location.back();
  }
}
