import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { fromEvent, merge, of, Observable, Subject } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable()
export class NetworkService {
    connectSubscription;
    disconnectSubscription;
    public emit = new Subject();
    public langEmit = new Subject();
    public isConnected;
    constructor(public network: Network, public platform: Platform, public toastController: ToastController, ) {
    }

    public getNetworkType(): string {
        return this.network.type;
    }

    public getNetworkStatus() {
        this.getCurrentStatus();
        this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            // alert('network was disconnected :-(');
            this.isConnected = false;
            this.emit.next(this.isConnected);
        });
        this.connectSubscription = this.network.onConnect().subscribe(() => {
            // alert('network connected!');
            this.isConnected = true;
            this.emit.next(this.isConnected);
        });
    }

    public status(status) {
        this.isConnected = status;
        this.emit.next(status);
    }
    public setLang(lang) {
        this.langEmit.next(lang);
    }


    // Success message
    async networkErrorToast() {
        const toast = await this.toastController.create({
            message: 'Please check your internet connection.',
            color: 'danger',
            duration: 2000
        });
        toast.present();
    }

    public getCurrentStatus() {
        if (this.network.type == 'none') {
            this.isConnected = false;
            this.emit.next(this.isConnected);
        } else {
            this.isConnected = true;
            this.emit.next(this.isConnected);
        }
    }
}