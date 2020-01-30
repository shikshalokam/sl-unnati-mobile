import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController } from '@ionic/angular';
@Injectable({

    providedIn: 'root',
})
export class ToastService {
    loading: any;
    pending: boolean = false;
    constructor(
        public toastController: ToastController,
        public translateService: TranslateService,
        public loadingController: LoadingController
    ) { }
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
    async loader() {
        const loading = await this.loadingController.create({
            message: 'Syncing your data.',
        });
        await loading.present();
        const { role, data } = await loading.onDidDismiss();
    }

    async startLoader(msg: string) {
        // if (!this.pending) {
        this.pending = true;
        this.loading = await this.loadingController.create({
            message: msg
        });
        await this.loading.present();
        // }
    }
    async stopLoader() {
        // if (this.pending) {
        this.pending = false;
        return await this.loadingController.dismiss().then(() => console.log('dismissed'));
        // }
    }
}