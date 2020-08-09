import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { fromEvent, merge, of, Observable, Subject } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable()
export class NetworkService {
    public online$: Observable<boolean> = undefined;
    public emit = new Subject();
    public langEmit = new Subject();
    constructor(public network: Network, public platform: Platform, public toastController: ToastController, ) {
        this.online$ = Observable.create(observer => {
            observer.next(true);
        }).pipe(mapTo(true));

        if (this.platform.is('cordova')) {
            // on Device
            this.online$ = merge(
                this.network.onConnect().pipe(mapTo(true)),
                this.network.onDisconnect().pipe(mapTo(false))
            );
        } else {
            // on Browser
            this.online$ = merge(
                of(navigator.onLine),
                fromEvent(window, 'online').pipe(mapTo(true)),
                fromEvent(window, 'offline').pipe(mapTo(false))
            );
        }
    }

    public getNetworkType(): string {
        return this.network.type;
    }

    public getNetworkStatus(): Observable<boolean> {
        return this.online$;
    }

    public status(status) {
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
}