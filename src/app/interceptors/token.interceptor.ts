import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor
} from '@angular/common/http';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import {from } from 'rxjs';
import {
    Router
} from '@angular/router';
import { AppConfigs } from '../core-module/constants/app.config';
import { ToastController, Platform } from '@ionic/angular';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    token;
    refreshTokenInProgress = false;
    constructor(private router: Router,
        public toastController: ToastController,
        public storage: Storage,
        public platform: Platform,
        public api: ApiProvider) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return from(this.handle(req, next))
    }
    async handle(req: HttpRequest<any>, next: HttpHandler) {
        let authReq;
        if (!req.headers.get('skip') || req.headers.get("skip") === 'false') {
            const token: any = await this.api.validateToken();
            authReq = req.clone({
                setHeaders: {
                    'x-auth-token': token.access_token,
                    'x-authenticated-user-token': token.access_token,
                    'gpsLocation': '0,0',
                    'appVersion': AppConfigs.appVersion,
                    'appName': AppConfigs.appName,
                    'appType': "improvement-project",
                    'os': this.platform.is('ios') ? 'ios' : 'android'
                }
            })
        } else {
            authReq = req.clone({
                headers: req.headers.delete('skip')
            })
        }
        return next.handle(authReq).toPromise()
    }
}