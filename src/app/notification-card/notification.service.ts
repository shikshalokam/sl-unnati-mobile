import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigs } from '../app.config'
import { Subject } from 'rxjs/Subject';
import { Storage } from '@ionic/storage';
@Injectable({
    providedIn: 'root',
})
export class NotificationCardService {
    timeInterval;
    token;
    public notificationCount = new Subject();
    constructor(public http: HttpClient, public storage: Storage) {
      //  this.startNotificationPooling();
    }
    public getAllNotifications(token, pageCount, limit) {
        let httpHeaders = new HttpHeaders({
            'x-authenticated-user-token': token
        })
        return this.http.get(AppConfigs.notification.kendra_base_url + 'v1' + AppConfigs.notification.getAllNotifications + '?page=' + pageCount + '&limit=' + limit +'&appName=unnati', { headers: httpHeaders })
    }

    markAsRead(token, id) {
        let httpHeaders = new HttpHeaders({
            'x-authenticated-user-token': token
        })
        return this.http.get(AppConfigs.notification.kendra_base_url + 'v1' + AppConfigs.notification.markAsRead + id+'?appName=unnati', { headers: httpHeaders })
    }

    checkForNotificationApi(token) {
        let httpHeaders = new HttpHeaders({
            'x-authenticated-user-token': token
        })
        return this.http.get(AppConfigs.notification.kendra_base_url + 'v1' + AppConfigs.notification.getUnreadNotificationCount+'?appName=unnati', { headers: httpHeaders })
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
        // this.timeInterval = setInterval(() => {
        //     if (navigator.onLine) {
        //         this.storage.get('userTokens').then(token => {
        //             this.checkForNotificationApi(token.access_token);
        //         })
        //     }
        // }, 12000);
        this.storage.get('userTokens').then(token => {
            this.checkForNotificationApi(token.access_token);
        })
    }

    getCount(count) {
        this.notificationCount.next(count);
    }

}
