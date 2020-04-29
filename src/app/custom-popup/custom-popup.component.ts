import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Market } from '@ionic-native/market/ngx';
import { Storage } from '@ionic/storage';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { NotificationCardService } from '../notification-card/notification.service';
import { ToastService } from '../toast.service';
@Component({
  selector: 'app-custom-popup',
  templateUrl: './custom-popup.component.html',
  styleUrls: ['./custom-popup.component.scss'],
})
export class CustomPopupComponent implements OnInit {
  @Input() showPopup: boolean;
  @Input() content;
  currentAppVersionObj;
  isBorder: boolean;
  releaseNote;
  constructor(
    public router: Router,
    public translate: TranslateService,
    public market: Market,
    public storage: Storage,
    public appLauncher: AppLauncher,
    public notificationCardService: NotificationCardService,
    public toastService: ToastService
    // public appVersion: AppVersion,
  ) {
    this.storage.get('appUpdateVersions').then(obj => {
      this.currentAppVersionObj = obj;
    }).catch(error => {
      this.currentAppVersionObj = {};
    })
  }
  ngOnInit() {
    if (this.content.titleCss.bottomBorder) {
      this.isBorder = this.content.titleCss.bottomBorder;
    }
  }

  closepopup() {

    this.showPopup = false;
    this.toastService.popUpClose();
    // this.projectCreatePopup = false;
  }
  cancel() {
    if (this.content.type == 'appUpdate') {
      this.notificationCardService.popClose();
      // this.showUpdatePopup = false;
      this.currentAppVersionObj = this.content.payload.appVersion;
      this.storage.set('appUpdateVersions', this.currentAppVersionObj);
      this.storage.set('isRejected', true).then(data => {
      })
    }
    this.closepopup();
    localStorage.setItem('isPopUpShowen', 'true');
  }
  public navigateTo(url) {
    this.closepopup();
    if (this.content.type != 'appUpdate') {
      console.log(url, "url");
      if (url) {
        this.router.navigate([url]);
      }
      this.showPopup = false;
    } else {
      this.openApp();
    }
    if (this.content.type == 'permissions') {
      this.toastService.getPermissions();
    }
  }

  public openApp() {
    // org.shikshalokam.app://community.shikshalokam.org/learn
    const options: AppLauncherOptions = {
      packageName: 'org.shikshalokam.unnati',
    }
    this.appLauncher.canLaunch(options).then((canLaunch: boolean) => {
      if (canLaunch) {
        this.currentAppVersionObj = this.content.payload.appVersion;
        this.storage.set('appUpdateVersions', this.currentAppVersionObj);
        this.storage.set('isRejected', false).then(data => {

        })
        this.appLauncher.launch(options).then(() => {
        }, (err) => {
          if (navigator.onLine) {
            window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.unnati&hl=en', '_system')
          }
        })
      } else {
        if (navigator.onLine) {
          window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.unnati&hl=en', '_system')
        }
      }
    }, error => {
      if (navigator.onLine) {
        window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.unnati&hl=en', '_system')
      }
    })
  }
  close() {

  }
}