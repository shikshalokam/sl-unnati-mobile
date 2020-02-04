(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/operator/debounceTime.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.debounceTime = _operator_debounceTime__WEBPACK_IMPORTED_MODULE_1__["debounceTime"];
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/debounceTime.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/debounceTime.js ***!
  \*****************************************************************/
/*! exports provided: debounceTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceTime", function() { return debounceTime; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = rxjs__WEBPACK_IMPORTED_MODULE_0__["asyncScheduler"]; }
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ "./src/app/fcm.ts":
/*!************************!*\
  !*** ./src/app/fcm.ts ***!
  \************************/
/*! exports provided: FcmProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcmProvider", function() { return FcmProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/api */ "./src/app/api/api.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_card_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification-card/notification.service */ "./src/app/notification-card/notification.service.ts");


// import { FCM } from '@ionic-native/fcm/ngx';
// import { FCM } from '@ionic-native/fcm';
// import { FCM } from '@ionic-native/fcm/ngx';



// import { LocalNotifications } from '@ionic-native/local-notifications';





var FcmProvider = /** @class */ (function () {
    function FcmProvider(http, router, 
    // public fcm: FCM, 
    api, localNotification, notificationCardService, localStorage, 
    //   public currentUser: CurrentUserProvider,
    platform) {
        this.http = http;
        this.router = router;
        this.api = api;
        this.localNotification = localNotification;
        this.notificationCardService = notificationCardService;
        this.localStorage = localStorage;
        this.platform = platform;
    }
    FcmProvider.prototype.initializeFCM = function () {
        if (this.platform.is('android')) {
            // this.initializeFirebaseAndroid()
        }
        else {
            // this.initializeFirebaseIOS()
        }
    };
    FcmProvider.prototype.initializeFirebaseAndroid = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.subscribeToPushNotifications();
                this.localNotificationClickHandler();
                this.localStorage.get('deviceId').then(function (token) {
                    if (token) {
                        _this.fcmDeviceId = token;
                    }
                    else {
                        // this.fcm.getToken().then(token => {
                        //     this.fcmDeviceId = token;
                        //     this.localStorage.set('deviceId', token).then(token => {
                        //         // this.subscribeToChannels('allUsers');
                        //         this.registerDeviceID();
                        //     });
                        // })
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    FcmProvider.prototype.subscribeToPushNotifications = function () {
        // this.fcm.onNotification().subscribe(notificationData => {
        //     //Will be triggered if the user clicks on the notification and come to the app
        //     if (notificationData.wasTapped) {
        //         this.onNotificationClick(notificationData);
        //     } else {
        //         //Will be triggered if the user is using the app(foreground);
        //         this.triggerLocalNotification(notificationData);
        //     };
        // }, error => {
        // });
    };
    FcmProvider.prototype.localNotificationClickHandler = function () {
        var _this = this;
        this.localNotification.on('click').subscribe(function (success) {
            _this.onNotificationClick(success);
        });
    };
    FcmProvider.prototype.triggerLocalNotification = function (notificationData) {
        delete notificationData.body;
        delete notificationData.wasTapped;
        this.localNotification.schedule(notificationData);
    };
    FcmProvider.prototype.registerDeviceID = function (token) {
        var _this = this;
        this.localStorage.get('userTokens').then(function (data) {
            _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens_1 = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.localStorage.set('userTokens', userTokens_1).then(function (usertoken) {
                        var url = _app_config__WEBPACK_IMPORTED_MODULE_7__["AppConfigs"].notification.kendra_base_url + _app_config__WEBPACK_IMPORTED_MODULE_7__["AppConfigs"].notification.registerDevice;
                        var payload = {
                            deviceId: _this.fcmDeviceId
                        };
                        var httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'x-authenticated-user-token': userTokens_1.access_token,
                                'app': 'unnati',
                                'os': _this.platform.is('android') ? 'android' : 'ios'
                            })
                        };
                        _this.http.post(url, payload, httpOptions).subscribe(function (success) {
                        }, function (error) {
                        });
                    }, function (error) {
                    });
                }
            });
        });
    };
    FcmProvider.prototype.initializeFirebaseIOS = function () {
    };
    // subscribeToChannels(topic: string) {
    //   this.fcm.subscribeToTopic(topic).then(success => {
    //     this.subscribeToPushNotifications();
    //   }).catch(error => { })
    // }
    FcmProvider.prototype.notificationClickActions = function (notificationMeta) {
    };
    // nagivation after clicking on push notifications
    FcmProvider.prototype.onNotificationClick = function (notificationMeta) {
        if (typeof notificationMeta.payload == 'string') {
            notificationMeta.payload = JSON.parse(notificationMeta.payload);
        }
        switch (notificationMeta.type) {
            case 'project assigned':
                localStorage.setItem('from', 'notifications');
                this.router.navigate(['project-view/detail/' + notificationMeta.payload.projectID + '/notifications']);
                break;
            case 'taskPending':
                this.router.navigate(['project-view/task-view/' + notificationMeta.payload.projectId + '/' + notificationMeta.payload.taskId + '/notifications']);
                break;
            case 'projectPending':
                this.router.navigate(['project-view/detail/' + notificationMeta.payload.projectID + '/notifications']);
                break;
            case 'subTaskPending':
                this.router.navigate(['project-view/subtask-view/' + notificationMeta.payload.subTaskId + '/' + notificationMeta.payload.taskId + '/' + notificationMeta.payload.projectID + '/notifications']);
                break;
        }
        this.markAsRead(notificationMeta);
        // this.markAsRead(notificationMeta);
        // } else {
        // }
    };
    /**
   * Mark notification as read if user clicks on it.
   * @param notificationMeta
   */
    FcmProvider.prototype.markAsRead = function (notificationMeta) {
        var _this = this;
        if (navigator.onLine) {
            this.localStorage.get('userTokens').then(function (data) {
                _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                    var parsedData = JSON.parse(data._body);
                    if (parsedData && parsedData.access_token) {
                        var userTokens_2 = {
                            access_token: parsedData.access_token,
                            refresh_token: parsedData.refresh_token,
                        };
                        _this.localStorage.set('userTokens', userTokens_2).then(function (usertoken) {
                            _this.notificationCardService.markAsRead(userTokens_2.access_token, notificationMeta.id).subscribe(function (data) {
                                notificationMeta.is_read = true;
                                // this.notificationCardService.checkForNotificationApi(userTokens.access_token).subscribe((data1: any) => {
                                //     // this.fetchAllNotifications();
                                //     this.notificationCardService.getCount(data1.result.count);
                                // }, error => {
                                // })
                            }, function (error) {
                            });
                        }, function (error) {
                        });
                    }
                });
            });
        }
        else {
            //this.errorToast('Please check your internet connection.');
        }
    };
    FcmProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _api_api__WEBPACK_IMPORTED_MODULE_3__["ApiProvider"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"], _notification_card_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationCardService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], FcmProvider);
    return FcmProvider;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fcm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fcm */ "./src/app/fcm.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../safe-pipe */ "./src/app/safe-pipe.ts");









var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _safe_pipe__WEBPACK_IMPORTED_MODULE_8__["SafePipe"]],
            providers: [_fcm__WEBPACK_IMPORTED_MODULE_5__["FcmProvider"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" *ngIf=\"show\">\n\n\n\n  <!-- <iframe style=\"height: 600px;\n    padding-left: 30px;\n    padding-right: 30px;\" *ngIf=\"showLogin\"\n    src=\"https://dev.shikshalokam.org/auth/realms/sunbird/protocol/openid-connect/auth?response_type=code&scope=offline_access&client_id=sl-ionic-connect&redirect_uri=http://localhost:8100/project-view/home\"></iframe> -->\n\n  <!-- On boarding screens -->\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"min-height: 100%;\"\n    (ionSlidePrevEnd)=\"slideDidChangePrev($event)\" (ionSlideNextEnd)=\"slideDidChangeNext($event)\">\n    <ion-slide *ngIf=\"veryFirstTime\">\n      <ion-grid>\n        <ion-row>\n          <div class=\"img-container\">\n            <img src=\"../../assets/images/onboarding1.png\" />\n          </div>\n        </ion-row>\n        <div>\n          <div class=\"onboard-header\">\n            Planning Improvement Projects\n          </div>\n          <p>\n            Create and track projects towards improving school and school\n            support system.\n          </p>\n        </div>\n      </ion-grid>\n    </ion-slide>\n    <ion-slide *ngIf=\"veryFirstTime\">\n      <ion-grid>\n        <ion-row>\n          <div class=\"img-container\">\n            <img src=\"../../assets/images/onboarding2.png\" />\n          </div>\n        </ion-row>\n        <div>\n          <div class=\"onboard-header\">\n            Assign Tasks and Subtasks\n          </div>\n          <p>\n            Divide your plans into tasks and sub-tasks and assign it to other\n            users.\n          </p>\n        </div>\n      </ion-grid>\n    </ion-slide>\n    <ion-slide *ngIf=\"!veryFirstTime\">\n      <ion-grid style=\"margin-top: 50%;\">\n        <ion-col>\n          <ion-icon name=\"ios-key\" style=\"font-size: 140px;color: #777;\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <br />\n          <br />\n          <a (click)=\"loginClick()\">\n            <div>\n              <h1>\n                LOGIN\n                <span>\n                  <ion-icon name=\"ios-log-in\" style=\"vertical-align: middle;\">\n                  </ion-icon>\n                </span>\n              </h1>\n            </div>\n          </a>\n        </ion-col>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n<ion-footer class=\"ion-footer-custom\" *ngIf=\"show && veryFirstTime\">\n  <ion-button *ngIf=\"buttonTitle == 'Skip'\" expand=\"block\" (click)=\"loginClick()\">\n    {{ buttonTitle }}\n  </ion-button>\n  <ion-button *ngIf=\"buttonTitle == 'Get started'\" class=\"brdr-radius-30\" (click)=\"loginClick()\">\n    {{ buttonTitle }}\n  </ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slide h5 {\n  text-align: center; }\n\nion-slide p {\n  text-align: justify;\n  font-size: 16px;\n  color: #707070; }\n\nion-slide img {\n  width: 100%;\n  max-width: 350px;\n  min-height: 325px;\n  max-height: 325px;\n  margin: 20% 0px; }\n\n.footer-md:before {\n  background-image: none !important; }\n\n.ion-footer-custom {\n  text-align: center !important;\n  background: #fff !important; }\n\n.ion-footer-custom .brdr-radius-30 {\n    --border-radius: 30px; }\n\n.onboard-header {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 900;\n  margin-top: 7%; }\n\n.onboard-header p {\n    text-align: center; }\n\n.img-container {\n  display: block;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWtCLEVBQUE7O0FBRnRCO0VBS0ksbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBUGxCO0VBVUksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxpQ0FBaUMsRUFBQTs7QUFFbkM7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCLEVBQUE7O0FBRjdCO0lBSUkscUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUpoQjtJQU1JLGtCQUFrQixFQUFBOztBQUd0QjtFQUNFLGNBQWM7RUFDZCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xuICBoNSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHAge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICB9XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNTBweDtcbiAgICBtaW4taGVpZ2h0OiAzMjVweDtcbiAgICBtYXgtaGVpZ2h0OiAzMjVweDtcbiAgICBtYXJnaW46IDIwJSAwcHg7XG4gIH1cbn1cblxuLmZvb3Rlci1tZDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG4uaW9uLWZvb3Rlci1jdXN0b20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAuYnJkci1yYWRpdXMtMzAge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfVxufVxuLm9uYm9hcmQtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG1hcmdpbi10b3A6IDclO1xuICBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmltZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs-compat/_esm5/add/operator/debounceTime.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fcm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../fcm */ "./src/app/fcm.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
















var LoginPage = /** @class */ (function () {
    function LoginPage(storage, router, iab, login, translateService, menuCtrl, networkService, network, fcm, sanitizer) {
        this.storage = storage;
        this.router = router;
        this.iab = iab;
        this.login = login;
        this.translateService = translateService;
        this.menuCtrl = menuCtrl;
        this.networkService = networkService;
        this.network = network;
        this.fcm = fcm;
        this.sanitizer = sanitizer;
        this.veryFirstTime = false;
        this.showLogin = false;
        this.show = false;
        this.buttonTitle = "Skip";
        this.language = this.translateService.currentLang;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            zoom: false
        };
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (localStorage.getItem("token") != null) {
            this.menuCtrl.enable(true, 'unnati');
            this.router.navigateByUrl('/project-view/home');
        }
        else {
            this.show = true;
            this.storage.get('veryFirstTime').then(function (data) {
                if (data == null || data == undefined)
                    _this.veryFirstTime = true;
            });
        }
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("token") != null) {
            this.menuCtrl.enable(true, 'unnati');
            this.router.navigateByUrl('/project-view/home');
        }
        else {
            this.show = true;
            this.storage.get('veryFirstTime').then(function (data) {
                if (data == null || data == undefined)
                    _this.veryFirstTime = true;
            });
        }
        //this.checkUser();
    };
    //Login 
    LoginPage.prototype.doOAuthStepOne = function () {
        this.base_url = _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfigs"].app_url;
        this.redirect_url = _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfigs"].keyCloak.redirection_url;
        this.auth_url = this.base_url + "/auth/realms/sunbird/protocol/openid-connect/auth?response_type=code&scope=offline_access&client_id=" + _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfigs"].clientId + "&redirect_uri=" +
            this.redirect_url;
        //  this.auth_url =  this.sanitizer.bypassSecurityTrustResourceUrl(auth_url);
        var that = this;
        return new Promise(function (resolve, reject) {
            var closeCallback = function (event) {
                reject("The Sunbird sign in flow was canceled");
            };
            var browserRef = window.cordova.InAppBrowser.open(that.auth_url, "_blank", "zoom=no");
            browserRef.addEventListener('loadstart', function (event) {
                if (event.url && ((event.url).indexOf(that.redirect_url) === 0)) {
                    browserRef.removeEventListener("exit", closeCallback);
                    var responseParameters = (((event.url).split("?")[1]).split("="))[1];
                    if (responseParameters !== undefined) {
                        this.show = false;
                        browserRef.close();
                        resolve(responseParameters);
                    }
                    else {
                        reject("Problem authenticating with Sunbird");
                    }
                }
            });
        });
    };
    // Login call
    LoginPage.prototype.loginClick = function () {
        var _this = this;
        // this.showLogin = true;
        this.doOAuthStepOne().then(function (success) {
            _this.menuCtrl.enable(true);
            _this.login.doOAuthStepTwo(success).then(function (success1) {
                _this.menuCtrl.enable(true);
                _this.login.checkForCurrentUserLocalData(success1);
                var userDetails = jwt_decode__WEBPACK_IMPORTED_MODULE_12__(success1.access_token);
                _this.menuCtrl.enable(true);
                _this.storage.set('userDetails', userDetails).then(function (userData) {
                });
                _this.storage.set('userTokens', success1).then(function (data) {
                    _this.router.navigateByUrl('/project-view/home');
                    _this.fcm.initializeFCM();
                    _this.login.loggedIn('true');
                    _this.menuCtrl.enable(true);
                    _this.storage.set('veryFirstTime', 'false').then(function (data) {
                        _this.veryFirstTime = false;
                    });
                });
                localStorage.setItem('token', success1);
                _this.networkService.status(true);
                _this.menuCtrl.enable(true);
                _this.login.loggedIn('true');
                localStorage.setItem("networkStatus", 'true');
            }).catch(function (error1) {
            });
        }).catch(function (error) {
        });
    };
    LoginPage.prototype.slideDidChangePrev = function (event) {
        this.buttonTitle = "Skip";
    };
    LoginPage.prototype.slideDidChangeNext = function (event) {
        this.buttonTitle = "Get started";
    };
    //Check User is logged in or not
    LoginPage.prototype.checkUser = function () {
        if (localStorage.getItem("token") != null) {
            this.router.navigateByUrl('/project-view/home');
        }
        else {
            this.show = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonSlides"])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            _login_service__WEBPACK_IMPORTED_MODULE_10__["Login"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"],
            _network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _fcm__WEBPACK_IMPORTED_MODULE_13__["FcmProvider"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/safe-pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe-pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map