import { Component, OnInit } from '@angular/core';
import { urlConstants, KendraApiService, LoaderService, ToastMessageService, NetworkService } from '../core';
import { Router } from '@angular/router';


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
    private loader: LoaderService,
    private router: Router,
    private toast:ToastMessageService,
    private networkService: NetworkService
  ) { }

  ngOnInit() {
    this.networkService.isNetworkAvailable ? this.getNotifications() : this.toast.showMessage('MESSAGES.YOU_ARE_WORKING_OFFLINE_TRY_AGAIN')
    
  }

  ionViewWillEnter() {
    this.networkService.isNetworkAvailable ? this.getNotifications() : this.toast.showMessage('MESSAGES.YOU_ARE_WORKING_OFFLINE_TRY_AGAIN')

  }

  notificationClick(data) {
    switch (data.action) {
      case "profile_update": {
        this.markAsRead(data.id)
        this.router.navigate(['menu/profile-update']);
        break
      }
    }
  }


  markAsRead(id) {
    const config = {
      url: urlConstants.API_URLS.MARK_AS_READ + id
    }
    this.kendraApi.get(config).subscribe(data => {

    }, error => {

    })
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
