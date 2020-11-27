import { Component, OnInit } from '@angular/core';
import { urlConstants, KendraApiService, LoaderService } from '../core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notifications: any = [];
  notificationsCount: number = 0;
  page: number = 0;
  limit: number = 20;
  enableLoadMore: boolean = false;

  constructor(
    private kendraApi: KendraApiService,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications() {
    const config = {
      url: `${urlConstants.API_URLS.NOTIFICATIONs_LIST}?page=${this.page}&limit=${this.limit}`,
    }
    this.loader.startLoader();
    this.kendraApi.get(config).subscribe(success => {
      this.notifications = success.result ? this.notifications.concat(success.result.data) : this.notifications;
      this.notificationsCount = success.result ? success.result.count : 0;
      this.enableLoadMore = (this.notificationsCount > this.notifications.length) ? true : false;
      this.loader.stopLoader();
    }, error => {
      this.loader.stopLoader();
    })
  }

  loadMore() {
    this.page++;
    this.getNotifications();
  }

}
