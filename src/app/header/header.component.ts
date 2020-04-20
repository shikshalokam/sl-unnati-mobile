import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationCardService } from '../notification-card/notification.service';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { Badge } from '@ionic-native/badge/ngx';
import { MenuController } from '@ionic/angular';
import { HomeService } from '../home/home.service';
import { Platform } from '@ionic/angular';
import { UpdateProfileService } from '../update-profile/update-profile.service';
import { NetworkService } from '../network.service';
import { AppConfigs } from '../app.config';

// import { AppVersion } from '@ionic-native/app-version';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  timeInterval;
  @Input() title: string;
  @Input() showMenu: boolean = true;
  @Input() showBack: boolean;
  @Input() noBorder: boolean = true;
  @Input() isGoBack: boolean = false;
  @Input() isParam;
  @Input() bg = '#fff'
  public connected: any = navigator.onLine;
  page = 1;
  isIos;
  limit = 20;
  public notificationCount;
  constructor(public router: Router,
    public notificationCardService: NotificationCardService,
    public storage: Storage,
    public platform: Platform,
    public menuController: MenuController,
    public badge: Badge, public api: ApiProvider,
    public homeService: HomeService,
    public updateProfileService: UpdateProfileService,
    public networkService: NetworkService,
    // public appVersion: AppVersion
  ) {
    networkService.emit.subscribe(status => {
      this.connected = status;
    })
    this.isIos = this.platform.is('ios') ? true : false;
    notificationCardService.notificationCount.subscribe((count: any) => {
      this.notificationCount = count;
      this.badge.set(this.notificationCount);
    })
    this.startNotificationPooling();
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.storage.get('userTokens').then(data => {
        if (data) {
          console.log(data, "data");
          this.getNotificationCount();
        }
      })
      this.isIos = this.platform.is('ios') ? true : false;
    })
  }

  public getNotificationCount(infinateScrollRefrnc?) {
    this.notificationCardService.checkForNotificationApi().subscribe((data: any) => {
      if (data.result) {
        this.notificationCardService.getCount(data.result.count);
        this.initiatePopup(data.result.data);
      }
    }, error => {
    })
  }
  // Navigate to notification screen
  public navigateToNotification() {
    this.router.navigate(['project-view/notifications']);
  }

  public goBack() {
    if (this.isParam) {
      this.router.navigate([this.isGoBack, this.isParam]);
    } else {
      this.router.navigate([this.isGoBack]);
    }
  }
  public menuToggle() {
    this.menuController.toggle();
  }

  public initiatePopup(data) {
    let isRejected;
    data.forEach(element => {
      if (element.action == "versionUpdate") {
        if (element.payload.appVersion != AppConfigs.appVersion) {
          this.storage.get('appUpdateVersions').then(statusObj => {
            if (statusObj) {
              if (element.payload.appVersion != statusObj) {
                this.storage.set('appUpdateVersions', element.payload.appVersion).then(statusObj => {
                })
                this.notificationCardService.AppupdateEvent(element);
              }
            } else {
              this.notificationCardService.AppupdateEvent(element);
            }
          }).catch(error => {
            this.notificationCardService.AppupdateEvent(element);
          })
        }
      }
    });

  }
  startNotificationPooling() {
    this.timeInterval = setInterval(() => {
      if (this.connected) {
        this.getNotificationCount();
      }
    }, 12000);
    this.getNotificationCount();
  }
}
