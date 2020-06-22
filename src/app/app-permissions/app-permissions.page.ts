import { Component, OnInit } from "@angular/core";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Router } from "@angular/router";
import { ToastService } from "../toast.service";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { MenuController } from "@ionic/angular";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-app-permissions",
  templateUrl: "./app-permissions.page.html",
  styleUrls: ["./app-permissions.page.scss"],
})
export class AppPermissionsPage implements OnInit {
  disableBtn: boolean = true;
  showWarning: boolean = false;
  isIos;
  popMsg = {
    type: "permissions",
    title: "Warning !",
    text:
      "Dear user, you have not provided us permissions to access certain resources",
    showCloseButton: false,
    titleCss: {
      fontSize: "24px",
      color: "#b23e33",
      bottomBorder: false,
    },
    textCss: {
      fontSize: "16px",
      color: "#b23e33;",
    },
    buttons: [
      {
        title: "Back",
        color: "primary",
      },
      {
        title: "Continue",
        color: "primary",
        isActionable: "/project-view/home",
      },
    ],
  };
  requiredPermissions = [
    {
      icon: "../assets/images/camera1.svg",
      title: "Camera",
      subTitle: "Allows app to take photos and videos",
      isChecked: false,
      id: this.androidPermissions.PERMISSION.CAMERA,
    },
    {
      icon: "../assets/images/folder.svg",
      title: "Read and Write Files",
      subTitle: "Allows app to save and upload local files",
      isChecked: false,
      id: this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
    },
    // {
    //   icon: '../assets/images/notifications.svg',
    //   title: 'Notifications',
    //   subTitle: 'Allows app to send you information',
    //   isChecked: false,
    //   id: [this.androidPermissions.PERMISSION.ACCESS_NOTIFICATION_POLICY]
    // }
  ];
  requests = [];
  constructor(
    private androidPermissions: AndroidPermissions,
    private toastService: ToastService,
    public router: Router,
    public iab: InAppBrowser,
    public menuController: MenuController,
    public platform: Platform
  ) {
    toastService.popClose.subscribe((data) => {
      this.showWarning = false;
    });
    toastService.requestPermissions.subscribe((data) => {
      this.showWarning = false;
      menuController.enable(true);
      this.getPermissions();
    });
  }

  ngOnInit() {
    this.isIos = this.platform.is("ios") ? true : false;
    // this.menuController.enable(false);
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
        this.router.navigate(["/project-view/home"]);
      }
    } else {
      this.showWarning = true;
    }
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
              (resp) => {},
              (error) => {
                console.log(error, "error");
              }
            );
            this.router.navigate(["/project-view/home"]);
          }
        },
        (err) => this.androidPermissions.requestPermission(element)
      );
    });
  }

  public openTermsAndPolicy() {
    (<any>window).cordova.InAppBrowser.open(
      "https://shikshalokam.org/wp-content/uploads/2019/05/Final-ShikshaLokam-Terms-of-Use-MCM-08052019-Clean-copy-1.html",
      "_system",
      "zoom=no"
    );
  }
}
