import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController } from '@ionic/angular';
@Injectable({

    providedIn: 'root',
})
export class ToastService {
    loading: any;
    constructor(
        public toastController: ToastController,
        public translateService: TranslateService,
        public loadingController: LoadingController
    ) { }

    // error toast
    async errorToast(msg) {
        this.translateService.get(msg).subscribe((text: string) => {
            msg = text;
        });
        const toast = await this.toastController.create({
            message: msg,
            color: 'danger',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }
    async errorToast1(msg) {
        const toast = await this.toastController.create({
            message: msg,
            color: 'danger',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }
    // sucess toast
    async successToast(msg) {
        this.translateService.get(msg).subscribe((text: string) => {
            msg = text;
        });
        const toast = await this.toastController.create({
            message: msg,
            color: 'success',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }

    // Start laoder
    async startLoader(msg: string) {
        this.loading = await this.loadingController.create({
            message: msg
        });
        await this.loading.present();
    }

    // Stop laoder
    async stopLoader() {
        return await this.loadingController.dismiss().then(() => console.log('dismissed'));
    }
}