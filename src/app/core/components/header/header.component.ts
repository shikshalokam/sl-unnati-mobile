import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';
import { NetworkService } from '../../services/network/network.service';
import { ToastMessageService } from '../../services/toast-messages/toast-message.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() title: string;
  @Input() hideNotification: boolean;
  @Input() showMenu: boolean = false;
  @Input() showSearch: boolean = false;
  @Input() enableBox: boolean = false;
  @Output() onSearch = new EventEmitter();
  @Input() showReload: boolean = false;
  @Input() showSync: boolean = false;
  @Input() showMore: boolean = false;
  @Output() onMore = new EventEmitter();
  @Input() bottomBorder;
  @Input() showSkip: boolean = false;
  @Output() onAction = new EventEmitter();
  @Input() synced: boolean = true;

  notificationSubscription: any;
  notificationData: any;
  newNotificationPresent: boolean = false;

  constructor(
    private notificationServ: NotificationService,
    private networkService: NetworkService,
    private toast: ToastMessageService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    // this.translate.get('MESSAGES.YOU_ARE_WORKING_OFFLINE').subscribe(data => {
    //   !this.networkService.isNetworkAvailable ? this.toast.showMessage(data, 'danger', 'construct-outline') : ''
    // })
    this.notificationSubscription = this.notificationServ.$notificationSubject.subscribe(data => {
      this.notificationData = data;
      this.newNotificationPresent = (this.notificationData && this.notificationData.count) ? true : false;
    })
  }


  ngOnDestroy() {
    if (this.notificationSubscription) {
      this.notificationSubscription.unsubscribe();
    }
  }

  actions(event) {
    this.onAction.emit(event);
  }
  popover(event) {
    this.onMore.emit(event);
  }

  showToast() {
    this.translate.get("MESSAGES.PROJCET_ALREADY_UPTODATE").subscribe(text => {
      this.toast.showMessage(text);
    })
  }
}
