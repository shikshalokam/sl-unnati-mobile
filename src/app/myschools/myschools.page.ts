import { Component, ViewChild } from '@angular/core';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Platform, NavController, MenuController } from '@ionic/angular';
import { Market } from '@ionic-native/market/ngx';
import { NetworkService } from '../network.service';
import { MyschoolsService } from './myschools.service';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-myschools',
  templateUrl: './myschools.page.html',
  styleUrls: ['./myschools.page.scss'],
})
export class MyschoolsPage {
  @ViewChild(NavController) nav: NavController;
  searchInput;
  connected: any = localStorage.getItem('networkStatus');
  mySchools = [];
  back = "project-view/home"
  noSchools: boolean = true;
  page: number = 1;
  count: number = 5;
  skeletons = [{}, {}, {}, {}, {}, {}];
  constructor(public networkService: NetworkService,
    public menuCtrl: MenuController,
    public router: Router,
    public navctrl: NavController,
    public api: ApiProvider,
    public mySchoolsService: MyschoolsService,
    public storage: Storage,
    public platform: Platform,
    public appLauncher: AppLauncher,
    public market: Market) {
    this.menuCtrl.enable(true);
    this.networkService.emit.subscribe(value => {
      this.connected = value;
    });
  }
  ionViewDidEnter() {
    this.searchInput = '';
    this.menuCtrl.enable(true);
    this.getSchools();
    this.storage.get('userTokens').then(data => {
      let userDetails = jwt_decode(data.access_token);
      this.storage.set('userDetails', userDetails);
    })
  }
  // get schools list
  public getSchools(event?) {
    if (this.connected) {
      // event.target.complete();
      this.mySchoolsService.getSchools(this.count, this.page).subscribe((data: any) => {
        if (data.data && data.status != 'failed') {
          this.mySchools = this.mySchools.concat(data.data);
          this.page = this.page + 1;
          this.noSchools = false;
          // event.target.disabled = true;
        } else {
          this.noSchools = true;
        }
      }, error => { })
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
  // Search School
  public searchSchool(keyword) {
    this.connected = localStorage.getItem("networkStatus");
    let connected = navigator.onLine;
    if (connected) {
      this.mySchoolsService.searchScool(keyword).subscribe((data: any) => {
        if (data.status != 'failed') {
          this.mySchools = data.data;
          this.noSchools = false;
          if (data.data.length == 0) {
            this.noSchools = true;
          }
        } else {
          this.noSchools = false;
        }
      }, error => {
      })
    } else {
      this.networkService.networkErrorToast();
    }
  }
}
