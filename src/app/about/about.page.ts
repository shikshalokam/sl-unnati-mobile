import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { AppConfigs } from '../core-module/constants/app-config';
import { Network } from '@ionic-native/network/ngx';
import { CurrentUserProvider } from '../current-user';
import { Router } from '@angular/router';
import { Login } from '../login.service';
import { Storage } from '@ionic/storage';
import * as jwt_decode from "jwt-decode";
import { Badge } from '@ionic-native/badge/ngx';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from '../home/home.service';
import { ToastService } from '../toast.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  public connected: any = false;
  public token;
  back = "project-view/home"
  public userDetails;
  public infoData = {
    showEraseBtn: true,
    app_name: ` ${AppConfigs.appName}`,
    app_version: `${AppConfigs.appVersion}`

  }
  constructor(public storage: Storage,
    public router: Router,
    public badge: Badge,
    public networkService: NetworkService,
    public login: Login,
    public network: Network,
    public currentUser: CurrentUserProvider,
    public alertController: AlertController,
    public homeService: HomeService,
    public ToastService: ToastService,
    public translateService: TranslateService) {
    if (localStorage.getItem('networkStatus') != null) {
      this.connected = localStorage.getItem('networkStatus');
    } else {
      this.connected = false;
    }
    this.networkService.emit.subscribe(value => {
      this.connected = value;
      localStorage.setItem('networkStatus', this.connected);
    });
  }
  ionViewDidEnter() {
    this.storage.get('userTokens').then(data => {
      this.userDetails = jwt_decode(data.access_token);
    })
  }
  ngOnInit() {
    if (localStorage.getItem('networkStatus') != null) {
      this.connected = localStorage.getItem('networkStatus');
    } else {
      this.connected = false;
    }
  }
  public logout() {
    // localStorage.removeItem("token");
    localStorage.clear();
    this.storage.clear();
    this.storage.get('latestProjects').then(projects => {
    })
    this.storage.set('veryFirstTime', 'false').then(data => {
    });
    this.login.loggedIn('false');
    this.login.doLogout().then(data => {
      this.badge.clear();
      this.login.loggedIn('false');
      this.router.navigateByUrl('/login');
    }, error => {
      //  alert(error + "Logout error") 
    })
    if (!localStorage.getItem("token")) {
      this.router.navigateByUrl('/login');
    }
  }
  public checkLocalData() {
    let isDirty: boolean = false;
  }

  async showConfirmAlert() {
    let alertTexts;
    this.translateService.get(['message.local_data_changes'], ['message.please_sync_before_logout']).subscribe((texts: string) => {
      alertTexts = texts;
    });
    const alert = await this.alertController.create({
      header: alertTexts['message.local_data_changes'],
      message: alertTexts['message.want_sync_before_erase'],
      buttons: [
        {
          text: 'Okay',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        },
        {
          text: 'Logout',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
    await alert.present();
  }
}
