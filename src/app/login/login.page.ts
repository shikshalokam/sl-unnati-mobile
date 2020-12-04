import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoaderService, NotificationService, FcmProvider, KendraApiService, urlConstants, LocalStorageService, localStorageConstants } from '../core';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  veryFirstTime: any;
  buttonTitle: string;
  base_url: string;
  redirect_url: string;
  auth_url: string;
  show: boolean;
  constructor(
    public router: Router,
    private authService: AuthService,
    private loader: LoaderService,
    private notificationServ: NotificationService,
    private fcm: FcmProvider,
    private kendraApiService: KendraApiService,
    private localStorage: LocalStorageService
  ) { }
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    zoom: false
  };
  ionViewWillEnter() {
    this.localStorage.setLocalStorage(localStorageConstants.SYNC_VARIABLE, 'ON').then(sucess => {
    }).catch(error => {
    })

  }
  ionViewDidEnter() {

  }
  ngOnInit() {

  }

  // Login call
  loginClick() {
    this.authService.doOAuthStepOne().then(success => {
      // this.loader.startLoader();
      this.authService.doOAuthStepTwo(success).then(success1 => {
        // this.loader.stopLoader();
        this.notificationServ.startNotificationPooling();
        this.fcm.initializeFCM();
        this.router.navigateByUrl('/permissions');


      }).catch(error1 => {
        this.loader.stopLoader();
      })
    }).catch(error => {
      this.loader.stopLoader();
    })
  }

  slideDidChangePrev(event) {
    this.buttonTitle = "Skip";
  }
  slideDidChangeNext(event) {
    this.buttonTitle = "Get started";
  }
}
