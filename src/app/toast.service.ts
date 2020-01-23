import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Injectable({

    providedIn: 'root',
})
export class ToastService {
    constructor(
        public toastController: ToastController,
        public translateService: TranslateService
    ) {
    }
    async errorToast(msg) {
        this.translateService.get(msg).subscribe((text: string) => {
            msg = text;
        });
        const toast = await this.toastController.create({
            message: msg,
            color: 'danger',
            duration: 2000
        });
        toast.present();
    }
    async successToast(msg) {
        this.translateService.get(msg).subscribe((text: string) => {
            msg = text;
        });
        const toast = await this.toastController.create({
            message: msg,
            color: 'success',
            duration: 2000
        });
        toast.present();
    }
}