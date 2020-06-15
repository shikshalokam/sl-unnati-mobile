import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Market } from '@ionic-native/market/ngx';
import { Storage } from '@ionic/storage';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { NotificationCardService } from '../notification-card/notification.service';
import { ToastService } from '../toast.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
@Component({
  selector: 'app-custom-popup',
  templateUrl: './custom-popup.component.html',
  styleUrls: ['./custom-popup.component.scss'],
})
export class CustomPopupComponent implements OnInit {
  @Input() showPopup: boolean;
  @Input() content;
  @Input() showAlert: boolean;
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
    public toastService: ToastService,
    private appVersion: AppVersion,
    // public appVersion: AppVersion,
  ) {
    this.storage.get('appUpdateVersions').then(obj => {
      this.currentAppVersionObj = obj;
    }).catch(error => {
      this.currentAppVersionObj = {};
    })
  }
  ngOnInit() {
    console.log(this.showAlert, "showAlert");
    console.log(this.content, "content");
    if (this.content.titleCss && this.content.titleCss.bottomBorder) {
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
      localStorage.setItem('isPopUpShowen', 'true');
      this.currentAppVersionObj = this.content.payload.appVersion;
      this.storage.set('appUpdateVersions', this.currentAppVersionObj);
      this.storage.set('isRejected', true).then(data => {
      })
    }
    this.closepopup();
  }
  public navigateTo(url) {
    console.log('in navigateTo');
    this.closepopup();
    if (this.content.type != 'appUpdate') {
      if (url) {
        this.router.navigate([url]);
      }
      this.showPopup = false;
    } else if (this.content.type == 'exitApp') {
      console.log('exitApp');
      navigator['app'].exitApp();
    } else {
      this.openApp();
      if (this.content.type == 'permissions' && url) {
        this.toastService.getPermissions();
      }
    }
  }

  public openApp() {
    this.appVersion.getPackageName().then(success => {
      this.currentAppVersionObj = this.content.payload.appVersion;
      this.storage.set('appUpdateVersions', this.currentAppVersionObj);
      this.storage.set('isRejected', false).then(data => {
      })
      this.showPopup = false;
      this.market.open(success)
    })
  }
  bottompopuPAction(status) {
    this.closepopup();
    console.log(status, "status");
    if (status == 'cancel') {
    } else if (status == 'submit') {
      navigator['app'].exitApp();
    }
  }
}