import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { Observable, throwError, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
    Router
} from '@angular/router';
import { AppConfigs } from '../app.config';
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

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.api.validateToken().then(token => {
            this.token = token
        })
        // this.getFreshToken();
        if (this.token) {
            request = request.clone({
                setHeaders: {
                    'x-auth-token': this.token.access_token,
                    'x-authenticated-user-token': this.token.access_token,
                    'gpsLocation': '0,0',
                    'appVersion': AppConfigs.appVersion,
                    'appName': AppConfigs.appName,
                    'appType': "improvement-project",
                    'os': this.platform.is('ios') ? 'ios' : 'android'
                }
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    if (!this.refreshTokenInProgress) {
                        this.api.validateToken().then(token => {
                            this.token = token;
                            if (this.token) {
                                request = request.clone({
                                    setHeaders: {
                                        'x-auth-token': this.token.access_token,
                                        'x-authenticated-user-token': this.token.access_token,
                                        'gpsLocation': '0,0',
                                        'appVersion': AppConfigs.appVersion,
                                        'appName': AppConfigs.appName,
                                        'appType': "improvement-project",
                                        'os': this.platform.is('ios') ? 'ios' : 'android'
                                    }
                                });
                            }
                            return next.handle(request);
                        })
                    } else {
                        this.router.navigate(['login']);
                    }
                }
                return throwError(error);
            }));
    }
    async presentToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }
}