import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Subject } from 'rxjs';
import { ToastMessageService } from '../toast-messages/toast-message.service';
import { TranslateService } from '@ngx-translate/core';
import { localStorageConstants } from '../../constants/localStorageConstants';
import { LocalStorageService } from '../local-storage/local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  connectSubscription;
  disconnectSubscription;
  syncSettingData: any;
  $networkStatus = new Subject();
  isNetworkAvailable: boolean = false;
  constructor(
    private network: Network,
    private toast: ToastMessageService,
    private translate: TranslateService,
    private storage: LocalStorageService,
  ) { }

  public netWorkCheck() {
    this.getCurrentStatus();
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      //alert('network was disconnected :-(');
      this.isNetworkAvailable = false;
      this.$networkStatus.next(this.isNetworkAvailable);
      this.translate.get('MESSAGES.YOU_ARE_WORKING_OFFLINE').subscribe(data => {
        this.toast.showMessage(data, 'danger');
      })
    });
    this.connectSubscription = this.network.onConnect().subscribe(() => {
      this.isNetworkAvailable = true;
      this.$networkStatus.next(this.isNetworkAvailable);
    });
  }

  public getCurrentStatus() {
    if (this.network.type == 'none') {
      this.isNetworkAvailable = false;
      this.$networkStatus.next(this.isNetworkAvailable);
    } else {
      this.isNetworkAvailable = true;
      this.$networkStatus.next(this.isNetworkAvailable);
    }
  }
  // public stopNetworkService() {
  //   this.connectSubscription.unsubscribe();
  //   this.disconnectSubscription.unsubscribe();
  // }

  // method to handle on sync setting change
  checkSyncSettings(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.getLocalStorage(localStorageConstants.SYNC_VARIABLE).then(success => {
        this.syncSettingData = success;
        if ((this.network.type === 'wifi' && this.syncSettingData == 'WIFI') || (this.network.type !== 'none' && this.syncSettingData == 'ON')) {
          resolve();
          console.log('we got a wifi connection, woohoo!');
        } else {
          reject();
        }
      }).catch(error => {
      });
      
    });
  }

}
