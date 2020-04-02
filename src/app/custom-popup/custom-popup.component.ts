import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Market } from '@ionic-native/market/ngx';
import { Storage } from '@ionic/storage';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { AppConfigs } from '../app.config';

@Component({
  selector: 'app-custom-popup',
  templateUrl: './custom-popup.component.html',
  styleUrls: ['./custom-popup.component.scss'],
})
export class CustomPopupComponent implements OnInit {
  @Input() header;
  @Input() body;
  @Input() button;
  @Input() isActionable;
  @Input() showPopup: boolean;
  @Input() appUpdate;
  @Input() showUpdatePopup;
  @Input() showCloseButton: boolean;
  currentAppVersionObj;
  releaseNote;
  constructor(
    public router: Router,
    public translate: TranslateService,
    public market: Market,
    public storage: Storage,
    public appLauncher: AppLauncher,
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
      this.button = 'button.update';
      this.translate.get([this.button]).subscribe((text: string) => {
        this.button = text[this.button];
      });
    }
    this.getTranslateKeys();
  }
  closepopup() {
    this.showPopup = false;
  }
  cancel() {
    this.closepopup();
    localStorage.setItem('isPopUpShowen', 'true');
  }
  public navigateToProfile() {
    this.closepopup();
    if (this.isActionable) {
      this.router.navigate([this.isActionable]);
    }
    this.showPopup = false;
  }
  public getTranslateKeys() {
    if (this.header && this.body && this.button) {
      this.translate.get([this.header, this.body, this.button]).subscribe((text: string) => {
        this.header = text[this.header];
        this.body = text[this.body];
        this.button = text[this.button];
      });
    }
  }

  public openApp() {
    // org.shikshalokam.app://community.shikshalokam.org/learn
    const options: AppLauncherOptions = {
      packageName: 'org.shikshalokam.unnati',
    }
    this.appLauncher.canLaunch(options).then((canLaunch: boolean) => {
      if (canLaunch) {
        this.currentAppVersionObj = AppConfigs.appVersion;
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
    this.showUpdatePopup = false;
    this.currentAppVersionObj = ''
    this.storage.set('isRejected', true).then(data => {

    })
    this.storage.set('appUpdateVersions', this.currentAppVersionObj);
  }
}