import { Injectable } from '@angular/core';
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

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // convert promise to observable using 'from' operator
        return from(this.handle(req, next))
    }
    async handle(req: HttpRequest<any>, next: HttpHandler) {
        // if your getAuthToken() function declared as "async getAuthToken() {}"
        const token:any = await this.api.validateToken();
        // if your getAuthToken() function declared to return an observable then you can use
        // await this.auth.getAuthToken().toPromise()
        const authReq = req.clone({
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
        // Important: Note the .toPromise()
        return next.handle(authReq).toPromise()
    }
    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     this.api.validateToken().then(token => {
    //         this.token = token;
    //         console.log(this.token, "this.token");
    //         request = request.clone({
    //             setHeaders: {
    //                 'x-auth-token': this.token.access_token,
    //                 'x-authenticated-user-token': this.token.access_token,
    //                 'gpsLocation': '0,0',
    //                 'appVersion': AppConfigs.appVersion,
    //                 'appName': AppConfigs.appName,
    //                 'appType': "improvement-project",
    //                 'os': this.platform.is('ios') ? 'ios' : 'android'
    //             }
    //         });
    //         if (!request.headers.has('Content-Type')) {
    //             request = request.clone({
    //                 setHeaders: {
    //                     'content-type': 'application/json'
    //                 }
    //             });
    //         }

    //         request = request.clone({
    //             headers: request.headers.set('Accept', 'application/json')
    //         });
    //         next.handle(request);

    //     })
    //     return next.handle(request).pipe(
    //         map((event: HttpEvent<any>) => {
    //             if (event instanceof HttpResponse) {
    //             }
    //             return event;
    //         }),
    //         catchError((error: HttpErrorResponse) => {
    //             if (error.status === 401) {
    //                 // if (!this.refreshTokenInProgress) {
    //                 //     this.storage.get('userTokens').then(token => {
    //                 //         this.api.refershToken(token.refresh_token).subscribe((data: any) => {
    //                 //             let parsedData = JSON.parse(data._body);
    //                 //             if (parsedData && parsedData.access_token) {
    //                 //                 let userTokens = {
    //                 //                     access_token: parsedData.access_token,
    //                 //                     refresh_token: parsedData.refresh_token,
    //                 //                 };
    //                 //                 this.storage.set('userTokens', userTokens).then(data => {
    //                 //                 })
    //                 //                 this.refreshTokenInProgress = true;
    //                 //                 request = request.clone({
    //                 //                     setHeaders: {
    //                 //                         'x-auth-token': this.token.access_token,
    //                 //                         'x-authenticated-user-token': this.token.access_token,
    //                 //                         'gpsLocation': '0,0',
    //                 //                         'appVersion': AppConfigs.appVersion,
    //                 //                         'appName': AppConfigs.appName,
    //                 //                         'appType': "improvement-project",
    //                 //                         'os': this.platform.is('ios') ? 'ios' : 'android'
    //                 //                     }
    //                 //                 });
    //                 //                 return next.handle(request);
    //                 //             }
    //                 //         })
    //                 //     })
    //                 // } else {
    //                 //     this.router.navigate(['login']);
    //                 // }
    //             }
    //             return throwError(error);
    //         }));

    // }
    async presentToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }
}