import { Component, OnInit } from '@angular/core';
import { NotificationCardService } from '../notification-card/notification.service';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications = [];
  page = 1;
  limit = 20;
  totalCount;
  public showSkeleton: boolean = false;
  back = "/project-view/home";
  public skeletons = [{}, {}, {}, {}, {}, {}];
  constructor(public notificationCardService: NotificationCardService, public api: ApiProvider, public storage: Storage) { }
  ngOnInit() {
    //this.fetchAllNotifications();
  }
  ionViewDidEnter() {
    this.fetchAllNotifications();
  }
  fetchAllNotifications(infinateScrollRefrnc?) {
    this.storage.get('userTokens').then(data => {
      this.api.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.showSkeleton = true;
            this.notificationCardService.getAllNotifications(userTokens.access_token, this.page, this.limit).subscribe((success: any) => {
              this.totalCount = success.result.count;
              // this.notificationCardService.getCount(this.totalCount);
              this.notifications = this.notifications.concat(success.result.data);
              this.showSkeleton = false;
            }, error => {
              this.showSkeleton = false;
            })
          }, error => {
          })
        }
      })
    })
  }

  loadMore() {
    this.page++;
    this.fetchAllNotifications()
  }
  doInfinite(infiniteScroll) {
    if ((this.page * this.limit) < this.totalCount) {
      this.page++
      this.fetchAllNotifications(infiniteScroll)
    } else {
      infiniteScroll.enable(false)
    }
  }
}
