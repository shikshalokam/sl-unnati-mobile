import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.service';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CurrentUserProvider } from './current-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({

    providedIn: 'root',
})
export class ErrorHandle {
    popOpen: boolean = false;
    tokens;
    constructor(
        public router: Router,
        public login: Login,
        public alertController: AlertController,
        public translateService: TranslateService,
        private currentUser: CurrentUserProvider,
        private http: HttpClient

    ) {
        this.tokens = this.currentUser.getCurrentUserData();
    }
    errorHandle(error) {
        if (error.status === 401) {
            if (!this.popOpen) {
                this.popOpen = true;
                this.sessionExpired();
            }
        }
    }

    async pushException(request,errorDetails?: any) {
        const details = await  this.currentUser.checkForTokens();
        const payload = {
            "text": "Mobile Exception Log. ",
            "attachments": [
                {
                    "fallback": "App Name",
                    "title": `App Name`,
                    "text": `Unnati`
                },
                {
                    "fallback": "Environment",
                    "title": `Environment`,
                    "text": `Prod`
                },
                {
                    "fallback": "User Details",
                    "title": `User Details`,
                    "text": `${JSON.stringify(details)}`
                },
                {
                    "fallback": "Error details",
                    "title": `Error details`,
                    "text": `${JSON.stringify(errorDetails)}`
                },
                {
                    "fallback": "Request",
                    "title": `Payload`,
                    "text": `${JSON.stringify(request)}`
                }

            ]

        }
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('skip', 'true')
          };
        this.http.post(environment.exceptionUrl, payload, options).subscribe(result => {
        }, error => {
        })
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
    setPopup() {
        this.popOpen = false;
    }
}