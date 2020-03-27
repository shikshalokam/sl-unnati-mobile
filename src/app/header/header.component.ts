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
    notificationCardService.notificationCount.subscribe(count => {
      this.notificationCount = count;
      this.badge.set(this.notificationCount);
    })
  }

  ngOnInit() {
    this.storage.set('appUpdateVersions', AppConfigs.appVersion);
    this.isIos = this.platform.is('ios') ? true : false;
    this.getNotificationCount();
  }

  public getNotificationCount(infinateScrollRefrnc?) {
    this.notificationCardService.checkForNotificationApi().subscribe((data: any) => {
      if (data.result.data && data.result.data.length) {
        this.initiatePopup(data.result.data);
      }
      this.notificationCardService.getCount(data.result.count);
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
        // this.appVersion.getVersionNumber().then(currentVersion => {
        if (element.payload.appVersion != parseInt(AppConfigs.appVersion)) {
          this.storage.get('isRejected').then(data => {
            isRejected = data;
          })
          this.storage.get('appUpdateVersions').then(statusObj => {
            if (statusObj && element.payload.appVersion != statusObj && !isRejected) {
              this.notificationCardService.AppupdateEvent(element);
            }
          }).catch(error => {
            this.notificationCardService.AppupdateEvent(element);
          })
        }
        // })
      }
    });
  }
}
