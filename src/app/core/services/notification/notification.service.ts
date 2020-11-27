import { Injectable } from '@angular/core';
import { KendraApiService } from '../kendra-api/kendra-api.service';
import { urlConstants } from '../../constants/urlConstants';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  timeInterval: any;
  $notificationSubject = new Subject<any>();

  constructor(private kendraService: KendraApiService) { }

  startNotificationPooling() {
    this.timeInterval = setInterval(() => {
      // if (this.networkAvailable) {
      this.checkForNotificationApi();
      // }
      // else {
      //   console.log("no internet");
      // }
    }, 120000);
    this.checkForNotificationApi();
  }

  checkForNotificationApi() {
    const config = {
      url: `${urlConstants.API_URLS.NOTIFICATION_COUNT}`
    }
    this.kendraService.get(config).subscribe(success => {
      if (success.result && success.result.data && success.result.data.length) {
        this.internalNotificationsHandler(success.result.data)
      }
      this.$notificationSubject.next(success.result);
    }, error => {

    })

  }

  internalNotificationsHandler(notifications) {

  }

  stopNotificationPooling() {
    clearInterval(this.timeInterval);
  }


}
