import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { MenuController } from "@ionic/angular";
import { Platform } from "@ionic/angular";
import { ConfigService, localStorageConstants, LocalStorageService, urlConstants } from '../core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.page.html',
  styleUrls: ['./permissions.page.scss'],
})
export class PermissionsPage implements OnInit {
  requests = [];
  isIos;
  dynamicLinks: any;
  disableBtn: boolean = true;
  requiredPermissions = [
    {
      icon: "camera-outline",
      title: "LABELS.CAMERA",
      subTitle: "MESSAGES.ALLOW_PERMISSION",
      isChecked: false,
      id: this.androidPermissions.PERMISSION.CAMERA,
    },
    {
      icon: "folder-outline",
      title: "LABELS.READ_WRITE",
      subTitle: "MESSAGES.ALLOW_LOCAL_FILES",
      isChecked: false,
      id: this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
    },
  ]
  constructor(private router: Router,
    private androidPermissions: AndroidPermissions,
    public menuController: MenuController,
    private storage: LocalStorageService,
    private alertController: AlertController,
    private translate: TranslateService,
    private configService: ConfigService,
    public platform: Platform) {
    // this.getPermissions();
  }

  ngOnInit() {
    this.isIos = this.platform.is('ios') ? true : false;
    this.storage.getLocalStorage(localStorageConstants.DYNAMIC_LINKS).then(success => {
      this.dynamicLinks = success;
    }).catch(error => {
      this.configService.getDynamicLinks().then(data =>{
      }).catch(error =>{
        console.log('configService error', error);
      })
    });
   
  }

  public permissionGivenTo(request) {
    this.disableBtn = true;
    if (this.requests.length > 0) {
      let data = this.requests.find((ob) => ob.title === request.title);
      if (!data) {
        this.requests.push(request);
      } else {
        this.requests.forEach((element) => {
          if (element.isChecked) {
            this.disableBtn = false;
          }
          if (element.title === request.title) {
            element.isChecked = request.isChecked;
          }
        });
      }
    } else {
      this.requests.push(request);
    }
    this.requests.forEach((element) => {
      if (element.isChecked) {
        this.disableBtn = false;
      }
    });
  }

  public getPermissions() {
    let request: any = [];
    this.requests.forEach((element) => {
      if (element.isChecked) {
        request.push(element.id);
      }
    });
    request.forEach((element) => {
      this.androidPermissions.checkPermission(element).then(
        (result) => {
          if (!result.hasPermission) {
            this.androidPermissions.requestPermission(element).then(
              (resp) => { },
              (error) => {
              }
            );
            this.storage.setLocalStorage(localStorageConstants.FIRST_TIME, "false")
            this.router.navigate(["/menu/tabs/home"]);
          }
        },
        (err) => this.androidPermissions.requestPermission(element)
      );
    });
  }

  submit() {
    let request: any = [];
    this.requests.forEach((element) => {
      if (element.isChecked) {
        request.push(element.id);
      }
    });
    if (request.length == this.requiredPermissions.length) {
      if (!this.isIos) {
        this.getPermissions();
      } else {
        this.menuController.enable(true);
        this.router.navigate(['/menu/tabs/home']);
      }
    } else {
      this.confirmData('LABELS.WARNING', 'MESSAGES.PERMISSION_MESSAGE_ACCEPT', 'LABELS.BACK', 'LABELS.CONTINUE');
    }
  }

  inAppBrowser(url) {
    let browserRef = (<any>window).cordova.InAppBrowser.open(url, "_blank", "zoom=no");
  }


  public openTermsAndPolicy() {
    this.storage.getLocalStorage(localStorageConstants.DYNAMIC_LINKS).then(success => {
      this.dynamicLinks = success;
      if (this.dynamicLinks && this.dynamicLinks['terms-of-use']) {
        this.inAppBrowser(this.dynamicLinks['terms-of-use']['link']);
      }
    }).catch(error => {
      console.log('openTermsAndPolicy-error', error);
    });

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
            this.getPermissions();
            this.router.navigate(['/menu/tabs/home', {}]);
          },
        },
      ],
    });
    await alert.present();
  }

}
