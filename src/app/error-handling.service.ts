import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.service';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({

    providedIn: 'root',
})
export class ErrorHandle {
    popOpen: boolean = false;
    constructor(
        public router: Router,
        public login: Login,
        public alertController: AlertController,
        public translateService: TranslateService
    ) { }
    errorHandle(error) {
        if (error.status === 401) {
            if (!this.popOpen) {
                this.popOpen = true;
                this.sessionExpired();
            }
        }
    }

    async sessionExpired() {
        let translateObject;
        this.translateService
            .get([
                "actionSheet.sessionExpired",
                "actionSheet.login"
            ])
            .subscribe((translations) => {
                translateObject = translations;
            });
        const alert = await this.alertController.create({
            header: translateObject["actionSheet.sessionExpired"],
            buttons: [
                {
                    text: translateObject["actionSheet.login"],
                    role: "role",
                    handler: (data) => {
                        this.login.doLogout();
                        this.router.navigateByUrl(`/login`);
                    },
                },
            ],
        });
        await alert.present();
    }
    setPopup(){
        this.popOpen = false;
    }
}