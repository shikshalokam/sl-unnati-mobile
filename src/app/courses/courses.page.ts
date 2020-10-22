import { Component, OnInit } from "@angular/core";
import { NetworkService } from "../network.service";
import {
  AppLauncher,
} from "@ionic-native/app-launcher/ngx";
import { Location } from "@angular/common";
import { Network } from "@ionic-native/network/ngx";
import { Storage } from "@ionic/storage";
import { ToastController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability';
@Component({
  selector: "app-courses",
  templateUrl: "./courses.page.html",
  styleUrls: ["./courses.page.scss"],
})
export class CoursesPage implements OnInit {
  public connected;
  public id;
  public parameter;
  level;
  public back = "";
  public projectResources;
  public showSkeleton: boolean = false;
  constructor(
    public networkService: NetworkService,
    public network: Network,
    public storage: Storage,
    public location: Location,
    public appLauncher: AppLauncher,
    public toastController: ToastController,
    public route: ActivatedRoute,
    public inAppBrowser: InAppBrowser,
  ) {
    route.params.subscribe((param) => {
      this.level = param.level;
      if (param.cat) {
        if (param.cat == "template-view") {
          if (param.programId) {
            this.back =
              "project-view/template-view/" +
              param.projectId +
              "/" +
              param.programId;
          } else {
            this.back = "project-view/template-view/" + param.projectId;
          }
        } else {
          this.parameter = param.cat;
          this.back = "project-view/project-detail";
        }
      } else {
        this.parameter = param.cat;
        this.back = "project-view/detail";
      }
    });
    this.route.queryParams.subscribe((params) => { });
    this.networkService.emit.subscribe((value) => {
      this.connected = value;
      this.checkNetwork();
    });
    this.id = localStorage.getItem("id");
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getResourceFn();
  }


  getResourceFn() {
    if (this.level == 'project') {
      this.showSkeleton = true;
      this.storage
        .get("projectToBeView")
        .then((project) => {
          this.projectResources = project["resources"];
          this.showSkeleton = false;
        })
        .catch((er) => {
          this.showSkeleton = false;
        });
    } else if (this.level == 'task') {
      this.showSkeleton = true;
      this.storage.get('resourcesofTask').then(task => {
        this.parameter = '';
        this.projectResources = task["resources"];
        this.showSkeleton = false;
      })
    }
  }

  // openBodh(link) {
  //   // window.open(link, "_blank");
  //   // window.open(link, '_self');
  //   // this.inAppBrowser.create(link, '_blank');
  //   (<any>window).cordova.InAppBrowser.open(link, "_blank", "zoom=no");
  // }



  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string) {
    let app: string;
    app = 'org.shikshalokam.bodh';
    AppAvailability.check(app).then(
      () => { // success callback
        (<any>window).cordova.InAppBrowser.open(httpUrl, '_system');
      },
      () => { // error callback
        (<any>window).cordova.InAppBrowser.open(httpUrl, '_system');
      }
    );
  }

  openBodh(link: string) {
    this.launchExternalApp('', 'org.shikshalokam.bodh', 'bodh://play/content/do_11309585387098112011502', link);
  }

  // Location Back
  public goBack() {
    this.location.back();
  }
  // netwrok Connection
  checkNetwork() {
    this.network.onDisconnect().subscribe(() => {
      this.connected = false;
    });
    this.network.onConnect().subscribe(() => {
      this.connected = true;
    });
    // this.networkSubscriber();
  }
  // On destroy
  ngOnDestroy() {
    this.checkNetwork();
  }
  // Error toast message
  async errorMessage(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: "danger",
      duration: 2000,
    });
    toast.present();
  }
}
