import { Component, OnInit } from '@angular/core';
import { NotificationCardService } from '../notification-card/notification.service';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import * as jwt_decode from "jwt-decode";
import { UpdateProfileService } from '../update-profile/update-profile.service';
import { ErrorHandle } from '../error-handling.service';
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
  public showSkeleton: boolean = true;
  back = "/project-view/home";
  public skeletons = [{}, {}, {}, {}, {}, {}];
  constructor(public notificationCardService: NotificationCardService,
    public api: ApiProvider,
    public storage: Storage,
    public errorHandle: ErrorHandle,
    public updateProfileService: UpdateProfileService) { }
  ngOnInit() {
    // this.fetchAllNotifications();
  }
  ionViewDidEnter() {
    this.fetchAllNotifications();
  }
  fetchAllNotifications(infinateScrollRefrnc?) {
    this.showSkeleton = true;
    this.notificationCardService.getAllNotifications(this.page, this.limit).subscribe((success: any) => {
      this.totalCount = success.result.count;
      // this.notificationCardService.getCount(this.totalCount);
      this.notifications = this.notifications.concat(success.result.data);
      this.showSkeleton = false;
    }, error => {
      this.showSkeleton = false;
      this.errorHandle.errorHandle(error);
    })
  }

  loadMore() {
    this.page++;
    this.fetchAllNotifications();
  }
  doInfinite(infiniteScroll) {
    if ((this.page * this.limit) < this.totalCount) {
      this.page++
      this.fetchAllNotifications(infiniteScroll);
    } else {
      infiniteScroll.enable(false)
    }
  }
}
