import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CurrentUserService, NotificationService, NetworkService, FcmProvider, UnnatiDataService,
    LoaderService, ToastMessageService, LocalStorageService, localStorageConstants } from './core';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { TemplateViewPage } from './template-view/template-view.page';
import { Router } from '@angular/router';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic';
import { TranslateService } from '@ngx-translate/core';
import { AboutPage } from './about/about.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private notificationServ: NotificationService,
    private currentUser: CurrentUserService,
    private networkService: NetworkService,
    private deeplinks: Deeplinks,
    private navController: NavController,
    private router: Router,
    private fcm: FcmProvider,
    private unnatiService: UnnatiDataService,
    private loader: LoaderService,
    private toast: ToastMessageService,
    private translate: TranslateService,
    private localStorage: LocalStorageService
  ) {

    this.initializeApp();
    // this.translate.setDefaultLang('en')
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.languageSetting();
      this.networkService.netWorkCheck();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.currentUser.getUser().then(success => {
        if (success) {
          this.fcm.initializeFCM();
          this.deeplinkNav();
          this.notificationServ.startNotificationPooling();
        }
      }).catch(error => { 
      })
    });
  }

  languageSetting(){
    this.localStorage.getLocalStorage(localStorageConstants.SELECTED_LANGUAGE)
    .then(data =>{
      this.translate.use(data);
    }).catch(error =>{
      this.translate.use('en');
    })
  }

  public deeplinkNav() {
    this.deeplinks
      .routeWithNavController(this.navController, {
        "/template-view/:id": TemplateViewPage,
        "/about": AboutPage,
      })
      .subscribe(
        (match) => {
          let route=`/menu${match.$link.path}`
          this.router.navigate([route], { queryParams: { programId: match.$link.queryString } });
        },
        (nomatch) => {
        }
      );
  }
}