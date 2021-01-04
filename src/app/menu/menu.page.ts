import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { ConfigService, KendraApiService, LocalStorageService, ToastMessageService, urlConstants } from '../core';
import { localStorageConstants } from '../core/constants/localStorageConstants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  navigate = [
    {
      title: "LABELS.HOME",
      url: "/menu/tabs/home",
      icon: "home-outline",
      key: '',
    },
    // {
    //   title: 'LABELS.SYNC',
    //   icon: 'sync',
    //   url: '',
    // externallink: "false"
    // },
    {
      title: 'LABELS.TUTORIAL_VIDEO',
      icon: 'play-outline',
      url: '/menu/tutorial-videos',
      key: '',
    },
    {
      title: "LABELS.SYNC",
      url: '/menu/syncsettings',
      icon: 'sync-outline',
      key: '',
    },
    {
      title: "LABELS.FAQ",
      url: '',
      icon: 'help',
      key: 'faqs',
    },
    {
      title: "LABELS.GUIDELINES",
      url: '/menu/guidelines',
      icon: 'list',
      key: '',
    },
    // {
    //   title: "LABELS.SETTINGS",
    //   url: 'menu/settings',
    //   icon: 'settings-outline',
    //   key: '',
    // },
    {
      title: "LABELS.PROFILE_UPDATE",
      url: 'menu/profile-update',
      icon: 'person-add-outline',
      key: '',
    },
    {
      title: "LABELS.ABOUT",
      url: "/menu/about",
      icon: "information-circle-outline",
      key: '',
    },
    {
      title: "LABELS.PRIVACY",
      url: '',
      icon: 'person-outline',
      key: 'privacy-policy',
    },
   
  ];
  selectedPath: string;
  appName: string
  dynamicLinks: any;
  syncOption: any;
  constructor(
    private appDetails: AppVersion,
    private router: Router,
    private storage: LocalStorageService,
    private toast: ToastMessageService,
    private kendraService: KendraApiService,
    private translate: TranslateService,
    private configService: ConfigService
  ) {
    // this.router.events.subscribe((event: RouterEvent) => {
    //   if (event && event.url) {
    //     this.selectedPath = event.url;
    //   }
    // })
  }

  ngOnInit() {
    this.getAppDetails();

  }

  ionViewWillEnter() {
    this.storage.getLocalStorage(localStorageConstants.DYNAMIC_LINKS).then(success => {
      this.dynamicLinks = success;
    }).catch(error => {
      this.configService.getDynamicLinks().then(data => {
      }).catch(error => {
      })
    });
  }


  async getAppDetails() {
    this.appName = await this.appDetails.getAppName();
  }

  async callDynamicLinks(data) {
    await this.storage.getLocalStorage(localStorageConstants.DYNAMIC_LINKS).then(success => {
      this.dynamicLinks = success;
      if (this.dynamicLinks && this.dynamicLinks[data.key] && this.dynamicLinks[data.key]['link'] && this.dynamicLinks[data.key]['link'].length) {
        this.inAppBrowser(this.dynamicLinks[data.key]['link']);
      } else {
        let text;
        this.translate.get('MESSAGES.NO_LINK').subscribe(data => {
          text = data;
        })
        this.toast.showMessage(text, 'danger')
      }
    }).catch(error => {
      console.log('this.error', error)
    })
  }

  navigationLink(data) {
    if (data.key) {
      this.callDynamicLinks(data);
    } else {
      this.router.navigate([data.url]);

    }
  }



  inAppBrowser(url) {
    let browserRef = (<any>window).cordova.InAppBrowser.open(url, "_blank", "zoom=no");
  }

}
