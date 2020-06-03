import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import {environment} from '../../environments/environment';
@Injectable({
    providedIn: 'root',
})
export class NotificationCardService {
    timeInterval;
    token;
    notificationCount = new Subject();
    appUpdatePopUp = new Subject();
    appUpdate = new Subject();
    constructor(public http: HttpClient,
        public storage: Storage,
        public platform: Platform) {
        // this.startNotificationPooling();
    }
    public getAllNotifications(pageCount, limit) {
        return this.http.get(environment.notification.kendra_base_url + 'v1' + environment.notification.getAllNotifications + '?page=' + pageCount + '&limit=' + limit)
    }

    markAsRead(id) {
        return this.http.get(environment.notification.kendra_base_url + 'v1' + environment.notification.markAsRead + id + '?appName=unnati')
    }

    checkForNotificationApi() {
        return this.http.get(environment.notification.kendra_base_url + 'v1' + environment.notification.getUnreadNotificationCount + '?appName=unnati')
    }
    //   getMappedAssessment(notificationMeta) {
    //     switch (notificationMeta.payload.type) {
    //       case 'observation':
    //         this.getMappedObservation(notificationMeta);
    //         break

    //       case 'institutional':
    //       case 'individual':
    //         this.getMappedInstitutionalAssessment(notificationMeta);
    //         break
    //     }
    //   }

    /**
     *  Get updated notification counts.
     * @param count 
     */

    startNotificationPooling() {
        this.timeInterval = setInterval(() => {
            if (navigator.onLine) {
                this.checkForNotificationApi();
            }
        }, 12000);
        this.checkForNotificationApi();
    }

    getCount(count) {
        this.notificationCount.next(count);
    }

    AppupdateEvent(data) {
        this.appUpdate.next(data);
    }
    popClose() {
        this.appUpdatePopUp.next();
    }
}
