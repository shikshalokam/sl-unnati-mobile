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
  ionViewWillEnter(){
   
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
        // this.fcm.initializeFCM();
        this.getProfile();
          this.router.navigateByUrl('/permissions');
        this.localStorage.setLocalStorage(localStorageConstants.SYNC_VARIABLE, 'OFF').then(sucess => {
        }).catch(error => {
        })
       
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
  getProfile() {
    let state;
    const config = {
      url: urlConstants.API_URLS.GET_PROFILE
    }
    this.kendraApiService.get(config).subscribe(data => {
      if (data.result.roles && data.result.roles.length) {
        data.result.roles.forEach(role => {
          if (role.entities && role.entities.length) {
            role.entities.forEach(entity => {
              if (entity.relatedEntities && entity.relatedEntities.length && !state) {
                entity.relatedEntities.forEach(re => {
                  if (re.entityType == "state") {
                    state = re;
                    data.result.selectedState = state;
                    this.localStorage.setLocalStorage(localStorageConstants.PROFILE_DATA, data.result).then(data => {
                    })
                  }
                });
              } else {
              }
            });
          }
        });
      }
    }, error => {
    })
  }
}
