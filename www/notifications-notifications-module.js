(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");









var routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_8__["NotificationsPage"]
    }
];
var NotificationsPageModule = /** @class */ (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_8__["NotificationsPage"]]
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/notifications/notifications.page.html":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header\n    [title]=\"'notifications.title' | translate\"\n    [showMenu]=\"false\"\n    [showBack]=\"true\"\n    [isGoBack]=\"back\"\n    [noBorder]=\"false\"\n  ></app-header>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"!showSkeleton\">\n    <ion-list class=\"noPadding\">\n      <app-notification-card\n        [notifications]=\"notifications\"\n      ></app-notification-card>\n    </ion-list>\n    <div\n      class=\"_flex-box _justify-content-center\"\n      *ngIf=\"page * limit < totalCount\"\n    >\n      <ion-button expand=\"block\" class=\"loadMore\" (click)=\"loadMore()\">\n        {{ \"button.loadMore\" | translate }}\n      </ion-button>\n    </div>\n  </div>\n  <div *ngIf=\"showSkeleton\">\n    <ion-card *ngFor=\"let skeleton of skeletons\">\n      <ion-card-header>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card-header>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noPadding {\n  padding-left: 0;\n  padding-top: 10px; }\n\n.loadMore {\n  max-width: 300px;\n  --border-radius: 20px;\n  margin: auto;\n  margin-bottom: 50px;\n  margin-top: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vUGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ubG9hZE1vcmUge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_card_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification-card/notification.service */ "./src/app/notification-card/notification.service.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(notificationCardService, api, storage) {
        this.notificationCardService = notificationCardService;
        this.api = api;
        this.storage = storage;
        this.notifications = [];
        this.page = 1;
        this.limit = 20;
        this.showSkeleton = false;
        this.back = "/project-view/home";
        this.skeletons = [{}, {}, {}, {}, {}, {}];
    }
    NotificationsPage.prototype.ngOnInit = function () {
        //this.fetchAllNotifications();
    };
    NotificationsPage.prototype.ionViewDidEnter = function () {
        this.fetchAllNotifications();
    };
    NotificationsPage.prototype.fetchAllNotifications = function (infinateScrollRefrnc) {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens_1 = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens_1).then(function (usertoken) {
                        _this.showSkeleton = true;
                        _this.notificationCardService.getAllNotifications(userTokens_1.access_token, _this.page, _this.limit).subscribe(function (success) {
                            _this.totalCount = success.result.count;
                            // this.notificationCardService.getCount(this.totalCount);
                            _this.notifications = _this.notifications.concat(success.result.data);
                            _this.showSkeleton = false;
                        }, function (error) {
                            _this.showSkeleton = false;
                        });
                    }, function (error) {
                    });
                }
            });
        });
    };
    NotificationsPage.prototype.loadMore = function () {
        this.page++;
        this.fetchAllNotifications();
    };
    NotificationsPage.prototype.doInfinite = function (infiniteScroll) {
        if ((this.page * this.limit) < this.totalCount) {
            this.page++;
            this.fetchAllNotifications(infiniteScroll);
        }
        else {
            infiniteScroll.enable(false);
        }
    };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.page.html */ "./src/app/notifications/notifications.page.html"),
            styles: [__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_notification_card_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationCardService"], _api_api__WEBPACK_IMPORTED_MODULE_3__["ApiProvider"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], NotificationsPage);
    return NotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module.js.map