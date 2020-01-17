import { Component, OnInit, ViewChild } from '@angular/core';
import { NetworkService } from '../network.service';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Platform, NavController, MenuController } from '@ionic/angular';
import { Market } from '@ionic-native/market/ngx';
import { MyschoolsService } from './myschools.service'
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-myschools',
  templateUrl: './myschools.page.html',
  styleUrls: ['./myschools.page.scss'],
})
export class MyschoolsPage implements OnInit {
  @ViewChild(NavController) nav: NavController;
  connected: any = localStorage.getItem('networkStatus');
  mySchools;
  back ="project-view/home"
  noSchools:boolean = false;
  page: number = 1;
  count: number = 5;
  skeletons = [{}, {}, {}, {}, {}, {}];
  constructor(public networkService: NetworkService, public menuCtrl: MenuController, public router: Router, public navctrl: NavController,public network: Network, public api: ApiProvider, public mySchoolsService: MyschoolsService, public storage: Storage, public platform: Platform, public appLauncher: AppLauncher, public market: Market) {
    this.menuCtrl.enable(true);
    this.networkService.emit.subscribe(value => {
      this.connected = value;
      if (this.connected) {
        this.getSchools();
      }
      localStorage.setItem("networkStatus", this.connected);
    });
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.checkNetwork();
    this.getSchools();
    this.connected = localStorage.getItem("networkStatus");
    this.storage.get('userTokens').then(data => {
      let userDetails = jwt_decode(data.access_token);
      this.storage.set('userDetails', userDetails);
    })
  }
  ngOnInit() {
  }
  // get schools list
  public getSchools() {
    this.connected = localStorage.getItem("networkStatus");
    let connected = navigator.onLine;
    if (connected) {
      this.storage.get('userTokens').then(data => {
        this.api.refershToken(data.refresh_token).subscribe((data: any) => {
          let parsedData = JSON.parse(data._body);
          if (parsedData && parsedData.access_token) {
            let userTokens = {
              access_token: parsedData.access_token,
              refresh_token: parsedData.refresh_token,
            };
            this.storage.set('userTokens', userTokens).then(data => {
              this.mySchoolsService.getSchools(parsedData.access_token, this.count, this.page).subscribe((data: any) => {
                this.mySchools = data.data;
              }, error => {  })
            })
            //resolve()
          }
        }, error => {
        })
      })
    } else {
      this.networkService.networkErrorToast();
    }
  }
  // Navigate to school
  public navigateToSchool(id, name) {
    let connected = navigator.onLine;
    if (connected) {
      localStorage.setItem('from1', 'mySchools');
      this.router.navigate(['/project-view/school-task-report', id, name]);
    } else {
      this.networkService.networkErrorToast();
    }
  }

  //Launch learner App
  public openApp() {
    this.market.open('org.shikshalokam.samiksha.staging');
    // org.shikshalokam.app://community.shikshalokam.org/learn
    const options: AppLauncherOptions = {
      packageName: 'org.shikshalokam.samiksha.staging',
    }
    this.appLauncher.canLaunch(options).then((canLaunch: boolean) => {
      if (canLaunch) {
        this.appLauncher.launch(options).then(() => {
        }, (err) => {
        })
      } else {
        window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.samiksha.staging&hl=en,_system');
      }
    }, error => {
      window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.samiksha.staging&hl=en,_system');
    })
  }
  checkNetwork() {
    this.platform.ready().then(() => {
      this.network.onDisconnect()
        .subscribe(() => {
          this.connected = false;
          this.networkService.status(this.connected);
          localStorage.setItem("networkStatus", this.connected);
        }, error => {
        });
      this.network.onConnect()
        .subscribe(() => {
          this.connected = true;
          this.networkService.status(this.connected);
        });
      // this.networkSubscriber();
    });
  }
  // Search School
  public searchSchool(keyword) {
    this.connected = localStorage.getItem("networkStatus");
    let connected = navigator.onLine;
    
    if (connected ) {
      this.storage.get('userTokens').then(data => {
        this.api.refershToken(data.refresh_token).subscribe((data: any) => {
          let parsedData = JSON.parse(data._body);
          if (parsedData && parsedData.access_token) {
            let userTokens = {
              access_token: parsedData.access_token,
              refresh_token: parsedData.refresh_token,
            };
            this.storage.set('userTokens', userTokens).then(data => {
              this.mySchoolsService.searchScool(parsedData.access_token, keyword).subscribe((data:any) => {
                this.mySchools = data.data;
                this.noSchools = false;
                if(data.data.length ==0 )
                {
                  this.noSchools = true;
                }
              })
            })
            //resolve()
          }
        }, error => {
        })
      })
    } else {
      this.networkService.networkErrorToast();
    }
  }
  // Load Data for infinite scroll
  public loadData(event) {
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
            this.mySchoolsService.getSchools(userTokens.access_token, this.count, this.page).subscribe((data: any) => {
              this.page = this.page + 1;
              event.target.disabled = true;
              this.mySchools.push(data.data);
            }, error => {
            })
          }, error => {
          })
        }
      })
    })
  }
}
