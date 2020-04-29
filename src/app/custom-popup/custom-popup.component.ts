import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Market } from '@ionic-native/market/ngx';
import { Storage } from '@ionic/storage';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { AppConfigs } from '../app.config';
import { NotificationCardService } from '../notification-card/notification.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
@Component({
  selector: 'app-custom-popup',
  templateUrl: './custom-popup.component.html',
  styleUrls: ['./custom-popup.component.scss'],
})
export class CustomPopupComponent implements OnInit {
  @Input() button;
  @Input() isActionable;
  @Input() showPopup: boolean;
  @Input() appUpdate;
  @Input() showUpdatePopup;
  @Input() showCloseButton: boolean;
  @Input() projectCreatePopup;
  currentAppVersionObj;
  releaseNote;
  constructor(
    public router: Router,
    public translate: TranslateService,
    public market: Market,
    public storage: Storage,
    public appLauncher: AppLauncher,
    private appVersion: AppVersion,
    public notificationCardService: NotificationCardService
    // public appVersion: AppVersion,
  ) {
    this.storage.get('appUpdateVersions').then(obj => {
      this.currentAppVersionObj = obj;
    }).catch(error => {
      this.currentAppVersionObj = {};
    })
  }

  ngOnInit() {
    if (this.appUpdate) {
      if (this.appUpdate.payload && this.appUpdate.payload.releaseNotes) {
        this.releaseNote = this.appUpdate.payload.releaseNotes.includes('.') ?
          this.appUpdate.payload.releaseNotes.split('.') :
          [this.appUpdate.payload.releaseNotes]
      }
      if (!this.button) {
        this.button = 'button.update';
        this.translate.get([this.button]).subscribe((text: string) => {
          this.button = text[this.button];
        });
      }

    }
    this.getTranslateKeys();
  }
  closepopup() {
    this.showPopup = false;
    this.projectCreatePopup = false; 
  }
  cancel() {
    this.closepopup();
    localStorage.setItem('isPopUpShowen', 'true');
  }
  public navigateTo() {
    this.closepopup();
    if (this.appUpdate.isActionable) {
      this.router.navigate([this.appUpdate.isActionable]);
    }
    this.showPopup = false;
  }
  public getTranslateKeys() {
    if (this.projectCreatePopup) {
      this.translate.get([this.appUpdate.message, this.appUpdate.button]).subscribe((text: string) => {
        this.appUpdate.message = text[this.appUpdate.message];
        this.appUpdate.button = text[this.appUpdate.button];
      });
    }
  }

  public openApp() {
    // org.shikshalokam.app://community.shikshalokam.org/learn
    // const options: AppLauncherOptions = {
    //   packageName: 'org.shikshalokam.unnati',
    // }
    // this.appLauncher.canLaunch(options).then((canLaunch: boolean) => {
    //   if (canLaunch) {
    //     this.currentAppVersionObj = this.appUpdate.payload.appVersion;
    //     this.storage.set('appUpdateVersions', this.currentAppVersionObj);
    //     this.storage.set('isRejected', false).then(data => {

    //     })
    //     this.appLauncher.launch(options).then(() => {
    //     }, (err) => {
    //       if (navigator.onLine) {
    //         window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.unnati&hl=en', '_system')
    //       }
    //     })
    //   } else {
    //     if (navigator.onLine) {
    //       window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.unnati&hl=en', '_system')
    //     }
    //   }
    // }, error => {
    //   if (navigator.onLine) {
    //     window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.unnati&hl=en', '_system')
    //   }
    // })

    this.appVersion.getPackageName().then(success => {
      this.currentAppVersionObj = this.appUpdate.payload.appVersion;
      this.storage.set('appUpdateVersions', this.currentAppVersionObj);
      this.storage.set('isRejected', false).then(data => {
      })
      this.showUpdatePopup = false;
      this.market.open(success)
    })
  }
  close() {
    this.notificationCardService.popClose();
    this.showUpdatePopup = false;
    this.currentAppVersionObj = this.appUpdate.payload.appVersion;
    this.storage.set('appUpdateVersions', this.currentAppVersionObj);
    this.storage.set('isRejected', true).then(data => {
    })
  }
}