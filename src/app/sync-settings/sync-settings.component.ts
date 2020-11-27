import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService, NetworkService, ToastMessageService } from '../core';
import { localStorageConstants } from '../core/constants/localStorageConstants';


@Component({
  selector: 'app-sync-settings',
  templateUrl: './sync-settings.component.html',
  styleUrls: ['./sync-settings.component.scss'],
})
export class SyncSettingsComponent implements OnInit {
  syncData: any;
  syncList = [
    {
      label: 'LABELS.OFF',
      value: 'OFF'
    },
    {
      label: 'LABELS.ALWAYS_ON',
      value: 'ON'
    }
  ]
  constructor(private storage: LocalStorageService,
    private toast: ToastMessageService,
    private translate: TranslateService,
    private router: Router,
    private networkService: NetworkService) { }

  ngOnInit() {
    this.storage.getLocalStorage(localStorageConstants.SYNC_VARIABLE).then(success => {
      this.syncData = success;
    }).catch(error => {
    });
  }

  doSync() {
    if (this.networkService.isNetworkAvailable) {
      this.router.navigate(['/menu/sync']);
    } else {
      this.translate.get('MESSAGES.YOU_ARE_WORKING_OFFLINE').subscribe(data => {
        this.toast.showMessage(data, 'danger');
      })
    }
  }

  selectSyncOption(data) {
    this.storage.setLocalStorage(localStorageConstants.SYNC_VARIABLE, data.value).then(success => {
      this.syncCheck();
    }).catch(error => {
    });

    // if (data.value == 'WIFI') {

    // }
  }

  syncCheck() {
    this.networkService.checkSyncSettings().then(success => {
      console.log('success', success)
    }).catch(error => {
      console.log('error', error)
    })
  }

}
