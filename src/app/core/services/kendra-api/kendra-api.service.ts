import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';
import { urlConstants } from '../../constants';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { ToastMessageService } from '../toast-messages/toast-message.service';

@Injectable({
  providedIn: 'root'
})
export class KendraApiService extends ApiService {
  baseUrl: string;
  constructor(public http: HttpClient,
    public auth: AuthService,
    public toast: ToastMessageService,
    public modalController: ModalController

  ) {
    super(http, auth, toast,modalController);
    this.baseUrl = urlConstants.SERVICES.KENDRA;
  }
}
