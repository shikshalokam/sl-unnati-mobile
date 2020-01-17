import { Component, OnInit, Input } from '@angular/core';
import { NotificationCardService } from './notification.service';
import { ApiProvider } from '../api/api';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, ModalController } from '@ionic/angular';

import * as moment from 'moment';
@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent implements OnInit {
  ngOnInit() {
  }
  // text: string;
  // page = 1;
  // limit = 5;
  // totalCount;
  @Input() notifications;
  @Input() showViewMore;
  public skeletons = [{}, {}, {}, {}, {}, {}];
  public showSkeleton: boolean = false;
  time = Date.now()
  momentInstance = moment;

  constructor(public notificationCardService: NotificationCardService, public toastController: ToastController, public router: Router,
    public api: ApiProvider, public storage: Storage) {
  }

  goToAllNotifications() {

  }
  /**
   * Click on notification to actions
   * Navigation to relevant screens based on notification type 
   * @param notificationMeta 
   */
  onNotificationClick(notificationMeta) {
    if (!notificationMeta.is_read) {
      switch (notificationMeta.type) {
        case 'projectAdded':
          localStorage.setItem('from', 'notifications');
          this.router.navigate(['project-view/detail/' + notificationMeta.payload.projectID + '/notifications'])
          break
        case 'projectCompleted':
          localStorage.setItem('from', 'notifications');
          this.router.navigate(['project-view/detail/' + notificationMeta.payload.projectID + '/notifications'])
          break
        case 'taskPending':
          localStorage.setItem('gobackis', 'notifications')
          this.router.navigate(['project-view/task-view/' + notificationMeta.payload.projectId + '/' + notificationMeta.payload.taskId + '/notifications'])
          break
        case 'projectPending':
          localStorage.setItem('from', 'notifications');
          this.router.navigate(['project-view/detail/' + notificationMeta.payload.projectID + '/notifications'])
          break
        case 'subTaskPending':
          this.router.navigate(['subtask-view/' + notificationMeta.payload.subTaskId + '/' + notificationMeta.payload.taskId + '/' + notificationMeta.payload.projectID + '/notifications'])
          break
      }
     // this.markAsRead(notificationMeta);
    }
  }
  /**
   * Mark notification as read if user clicks on it.
   * @param notificationMeta 
   */
  public markAsRead(notificationMeta) {
    if (navigator.onLine) {
      this.storage.get('userTokens').then(data => {
        this.api.refershToken(data.refresh_token).subscribe((data: any) => {
          let parsedData = JSON.parse(data._body);
          if (parsedData && parsedData.access_token) {
            let userTokens = {
              access_token: parsedData.access_token,
              refresh_token: parsedData.refresh_token,
            };
            // this.showSkeleton = true;
            // this.storage.set('userTokens', userTokens).then(usertoken => {
            //   this.notificationCardService.markAsRead(userTokens.access_token, notificationMeta.id).subscribe(data => {
            //     notificationMeta.is_read = true;
            //     this.showSkeleton = false;
            //     this.notificationCardService.checkForNotificationApi(userTokens.access_token).subscribe((data1: any) => {
            //       // this.fetchAllNotifications();
            //       this.showSkeleton = false;
            //       this.notificationCardService.getCount(data1.result.count);
            //     }, error => {
            //       this.showSkeleton = false;
            //     })
            //   }, error => {

            //     this.showSkeleton = false;
            //   })
            // }, error => {
            //   this.showSkeleton = false;
            // })
          }
        })
      })
    } else {
      this.errorToast('Please check your internet connection.');
    }
  }
 
  // Display error Message
  async errorToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }


  public naviage() {
    this.router.navigate(['subtask-view/2/3/4/notifications'])

  }
}
