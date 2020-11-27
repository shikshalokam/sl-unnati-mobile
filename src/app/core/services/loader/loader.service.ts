import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loaderRef: any;

  constructor(private loader: LoadingController) { }

  async startLoader(message?: string) {
    this.loaderRef = await this.loader.create({
      cssClass: 'my-custom-class',
      spinner: 'circular',
      message: message ? message : 'Please wait while loading ...',
      translucent: true,
      backdropDismiss: true
    });

    await this.loaderRef.present()
  }

  stopLoader() {
    this.loaderRef ? this.loaderRef.dismiss() : null;
  }
}
