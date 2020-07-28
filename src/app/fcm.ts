import { Injectable } from '@angular/core';
// import { FCM } from '@ionic-native/fcm/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from './api/api';
import { Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NotificationCardService } from './notification-card/notification.service';
import { environment } from '../environments/environment';
@Injectable()
export class FcmProvider {

    fcmDeviceId: string;

    constructor(
        public http: HttpClient, public router: Router,
        // public fcm: FCM,
        public api: ApiProvider,
        public localNotification: LocalNotifications, public notificationCardService: NotificationCardService,
        public localStorage: Storage,
        public platform: Platform) {
    }

    initializeFCM() {
        if (this.platform.is('android')) {
            // this.initializeFirebaseAndroid()
        } else {
            this.initializeFirebaseIOS()
        }
    }

    // async initializeFirebaseAndroid() {
    //     this.subscribeToPushNotifications();
    //     this.localNotificationClickHandler();
    //     this.localStorage.get('deviceId').then(token => {
    //         if (token) {
    //             this.fcmDeviceId = token;
    //         } else {
    //             this.fcm.getToken().then(token => {
    //                 this.fcmDeviceId = token;
    //                 this.localStorage.set('deviceId', token).then(token => {
    //                     // this.subscribeToChannels('allUsers');
    //                     this.registerDeviceID();
    //                 });
    //             })
    //         }
    //     })
    //     this.fcm.onTokenRefresh().subscribe(token => {
    //         this.fcmDeviceId = token;
    //         this.localStorage.set('deviceId', token);
    //         this.registerDeviceID();
    //     })
    // }

    // subscribeToPushNotifications() {
    //     this.fcm.onNotification().subscribe(notificationData => {
    //         //Will be triggered if the user clicks on the notification and come to the app
    //         if (notificationData.wasTapped) {
    //             this.onNotificationClick(notificationData);
    //         } else {
    //             //Will be triggered if the user is using the app(foreground);
    //             this.triggerLocalNotification(notificationData);
    //         };
    //     }, error => {
    //     });
    // }

    localNotificationClickHandler() {
        this.localNotification.on('click').subscribe(success => {
            this.onNotificationClick(success);
        })
    }

    triggerLocalNotification(notificationData) {
        delete notificationData.body
        delete notificationData.wasTapped;
        this.localNotification.schedule(notificationData);
    }

    registerDeviceID(token?: string) {
        this.localStorage.get('userTokens').then(data => {
            this.api.refershToken(data.refresh_token).subscribe((data: any) => {
                let parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    let userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    this.localStorage.set('userTokens', userTokens).then(usertoken => {
                        const url = environment.notification.kendra_base_url + 'v1' + environment.notification.registerDevice;
                        const payload = {
                            deviceId: this.fcmDeviceId,
                            os: this.platform.is('android') ? 'android' : 'ios',
                            'app': 'unnati',
                            'apptype': 'improvement-project',
                        }
                        const httpOptions = {
                            headers: new HttpHeaders({
                                'x-authenticated-user-token': userTokens.access_token,
                                'app': 'unnati',
                                'apptype': 'improvement-project',
                                'os': this.platform.is('android') ? 'android' : 'ios'
                            })
                        };
                        this.http.post(url, payload, httpOptions).subscribe(success => {
                        }, error => {
                        })
                    }, error => {
                    })
                }
            })
        })
    }

    initializeFirebaseIOS() {
    }

    subscribeToChannels(topic: string) {
        // this.fcm.subscribeToTopic(topic).then(success => {
        //     this.subscribeToPushNotifications();
        // }).catch(error => { })
    }

    notificationClickActions(notificationMeta) {
    }

    // nagivation after clicking on push notifications
    onNotificationClick(notificationMeta) {
        if (typeof notificationMeta.payload == 'string') {
            notificationMeta.payload = JSON.parse(notificationMeta.payload);
        }
        switch (notificationMeta.type) {
            case 'project assigned':
                localStorage.setItem('from', 'notifications');
                this.router.navigate(['project-view/detail/' + notificationMeta.payload.projectID + '/notifications'])
                break
            case 'taskPending':
                this.router.navigate(['project-view/task-view/' + notificationMeta.payload.projectId + '/' + notificationMeta.payload.taskId + '/notifications'])
                break
            case 'projectPending':
                this.router.navigate(['project-view/detail/' + notificationMeta.payload.projectID + '/notifications'])
                break
            case 'subTaskPending':
                this.router.navigate(['project-view/subtask-view/' + notificationMeta.payload.subTaskId + '/' + notificationMeta.payload.taskId + '/' + notificationMeta.payload.projectID + '/notifications'])
                break
        }
        this.markAsRead(notificationMeta);
        // this.markAsRead(notificationMeta);
        // } else {
        // }
    }

    /**
   * Mark notification as read if user clicks on it.
   * @param notificationMeta 
   */
    public markAsRead(notificationMeta) {
        if (navigator.onLine) {
            this.notificationCardService.markAsRead(notificationMeta.id).subscribe(data => {
                notificationMeta.is_read = true;
                // this.notificationCardService.checkForNotificationApi(userTokens.access_token).subscribe((data1: any) => {
                //     // this.fetchAllNotifications();
                //     this.notificationCardService.getCount(data1.result.count);
                // }, error => {
                // })
            }, error => {

            })
        } else {
            //this.errorToast('Please check your internet connection.');
        }
    }
}