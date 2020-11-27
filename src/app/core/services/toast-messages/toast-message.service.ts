import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(
    public toastController: ToastController,
    private translate: TranslateService
  ) { }
  async showMessage(msg, color = 'success', icon?) {
    let text;
    this.translate.get([msg]).subscribe(data => {
      text = data;
    })
    const toast = await this.toastController.create({
      message: text[msg],
      color: color,
      cssClass: 'custom-toast',
      duration: 5000,
      position: 'top',
      buttons: [
        {
          side: 'end',
          icon: icon,
          handler: () => {
          }
        }
      ]
    });
    toast.present();
  }
}