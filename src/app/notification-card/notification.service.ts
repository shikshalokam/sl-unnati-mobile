import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigs } from '../app.config';
import { Subject } from 'rxjs/Subject';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class NotificationCardService {
    timeInterval;
    token;
    notificationCount = new Subject();
    appUpdate = new Subject();
    constructor(public http: HttpClient,
        public storage: Storage,
        public platform: Platform) {
        //  this.startNotificationPooling();
    }
    public getAllNotifications(pageCount, limit) {
        return this.http.get(AppConfigs.notification.kendra_base_url + 'v1' + AppConfigs.notification.getAllNotifications + '?page=' + pageCount + '&limit=' + limit)
    }

    markAsRead(id) {
        return this.http.get(AppConfigs.notification.kendra_base_url + 'v1' + AppConfigs.notification.markAsRead + id + '?appName=unnati')
    }

    checkForNotificationApi() {
        return this.http.get(AppConfigs.notification.kendra_base_url + 'v1' + AppConfigs.notification.getUnreadNotificationCount + '?appName=unnati')
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
                this.storage.get('userTokens').then(token => {
                    this.checkForNotificationApi();
                })
            }
        }, 12000);
        this.storage.get('userTokens').then(token => {
            this.checkForNotificationApi();
        })
    }

    getCount(count) {
        this.notificationCount.next(count);
    }

    AppupdateEvent(data) {
        this.appUpdate.next(data);
    }
}
