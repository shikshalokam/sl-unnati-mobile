import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';
import {
  LoggerService, CurrentUserService, DbService, LocalStorageService,
  urlConstants, SunbirdService, localStorageConstants, NotificationService
} from '../core';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  public userDetails;
  appVersion: string;
  appName: string;
  profileInfo: any;

  constructor(private auth: AuthService,
    public router: Router,
    public appDetails: AppVersion,
    public loger: LoggerService,
    public currentUser: CurrentUserService,
    public storage: LocalStorageService,
    private alertController: AlertController,
    private translate: TranslateService,
    public db: DbService,
    private sunbird: SunbirdService,
    private notificationServ: NotificationService
  ) { }

  ngOnInit() {
    this.getAppDetails();
    this.storage.getLocalStorage(localStorageConstants.USER_DETAILS).then(data => {
      this.profileInfo = data;
    }).catch(error => {
      
    })

  }
  async getAppDetails() {
    this.appVersion = await this.appDetails.getVersionNumber();
    this.appName = await this.appDetails.getAppName();
  }


  confirmLogout() {
    this.confirmData('LABELS.WARNING', 'MESSAGES.LOGOUT_CONFIRMATION', 'LABELS.BACK', 'LABELS.CONTINUE');
  }

  doLogout() {
    this.auth.doLogout().then(data => {
      this.notificationServ.stopNotificationPooling();
      this.storage.deleteAllStorage();
      this.currentUser.deleteUser().then(user => {
        this.db.dropDb();
        this.router.navigateByUrl('/login');
      }, error => {
        this.loger.log(error, "error CurrentUserService 35")
      })
      this.storage.setLocalStorage(localStorageConstants.FIRST_TIME, "false")
    }, error => {
      this.loger.log(error, "error doLogout 39")
    })
  }

  async confirmData(title, body, btnback, btnContinue) {
    let texts;
    this.translate.get([title, body, btnback, btnContinue]).subscribe(data => {
      texts = data;
    })
    const alert = await this.alertController.create({
      cssClass: 'c-permission',
      header: texts[title],
      message: texts[body],
      buttons: [
        {
          text: texts[btnback],
          role: "cancel",
          cssClass: 'secondary',
          handler: (data) => {

          },
        },
        {
          text: texts[btnContinue],
          role: "role",
          cssClass: 'secondary',
          handler: (data) => {
            this.doLogout();
          },
        },
      ],
    });
    await alert.present();
  }
}
