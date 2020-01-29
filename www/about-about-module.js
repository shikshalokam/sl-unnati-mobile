(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");









var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_8__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_8__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'about.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"false\">\n  </app-header>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <h3>{{ \"about.app_info\" | translate }}</h3>\n  </ion-list>\n  <div style=\"text-align:center;\">\n    <img src=\"../assets/icon/unnati-prod.png\" style=\"width: 100px;\" />\n  </div>\n  <ion-list>\n    {{ \"about.app_name\" | translate }} : {{ infoData.app_name }}\n  </ion-list>\n  <ion-list>\n    {{ \"about.app_version\" | translate }} : {{ infoData.app_version }}\n  </ion-list>\n  <ion-list *ngIf=\"userDetails\">\n    {{ \"about.user\" | translate }} : {{ userDetails.preferred_username }}\n  </ion-list>\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"showConfirmAlert()\">\n    <ion-icon name=\"trash\"></ion-icon>{{ \"button.erase_data\" | translate }}\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../current-user */ "./src/app/current-user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/badge/ngx */ "./node_modules/@ionic-native/badge/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");















var AboutPage = /** @class */ (function () {
    function AboutPage(storage, router, badge, networkService, login, network, currentUser, alertController, homeService, ToastService, translateService) {
        var _this = this;
        this.storage = storage;
        this.router = router;
        this.badge = badge;
        this.networkService = networkService;
        this.login = login;
        this.network = network;
        this.currentUser = currentUser;
        this.alertController = alertController;
        this.homeService = homeService;
        this.ToastService = ToastService;
        this.translateService = translateService;
        this.connected = false;
        this.back = "project-view/home";
        this.infoData = {
            showEraseBtn: true,
            app_name: " " + _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfigs"].appName,
            app_version: "" + _app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfigs"].appVersion
        };
        if (localStorage.getItem('networkStatus') != null) {
            this.connected = localStorage.getItem('networkStatus');
        }
        else {
            this.connected = false;
        }
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
            localStorage.setItem('networkStatus', _this.connected);
        });
    }
    AboutPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.userDetails = jwt_decode__WEBPACK_IMPORTED_MODULE_9__(data.access_token);
        });
    };
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.userDetails = jwt_decode__WEBPACK_IMPORTED_MODULE_9__(data.access_token);
        });
        if (localStorage.getItem('networkStatus') != null) {
            this.connected = localStorage.getItem('networkStatus');
        }
        else {
            this.connected = false;
        }
    };
    AboutPage.prototype.logout = function () {
        var _this = this;
        // localStorage.removeItem("token");
        localStorage.clear();
        this.storage.clear();
        this.storage.set('veryFirstTime', 'false').then(function (data) {
        });
        this.login.loggedIn('false');
        this.login.doLogout().then(function (data) {
            _this.badge.clear();
            _this.login.loggedIn('false');
            _this.router.navigateByUrl('/login');
        }, function (error) {
            //  alert(error + "Logout error")
        });
        if (!localStorage.getItem("token")) {
            this.router.navigateByUrl('/login');
        }
    };
    AboutPage.prototype.checkLocalData = function () {
        var isDirty = false;
        console.log(isDirty, "isDirty");
        // this.storage.get('myprojects').then(myProjects => {
        //   console.log(myProjects, "myProjects");
        //   if (myProjects && navigator.onLine) {
        //     myProjects.forEach(project => {
        //       console.log(project, "project", project.isEdited, project.isNew);
        //       if (project.isEdited || project.isNew) {
        //         console.log(project.isEdited, project.isNew, "project edit and isNew");
        //         isDirty = true;
        //       }
        //     })
        //     console.log(isDirty, "isDirty");
        //     if (isDirty) {
        //       this.showConfirmAlert();
        //     } else {
        //       this.logout();
        //     }
        //   } else {
        //     this.logout();
        //   }
        // })
    };
    AboutPage.prototype.showConfirmAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertTexts, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.translateService.get(['message.local_data_changes'], ['message.please_syc_before_logout']).subscribe(function (texts) {
                            alertTexts = texts;
                        });
                        return [4 /*yield*/, this.alertController.create({
                                header: alertTexts['message.local_data_changes'],
                                message: alertTexts['message.want_sync_before_erase'],
                                buttons: [
                                    {
                                        text: 'Logout',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            _this.logout();
                                        }
                                    },
                                    {
                                        text: 'Okay',
                                        handler: function () {
                                            // this.homeService.syncProjects();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_10__["Badge"],
            _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"],
            _login_service__WEBPACK_IMPORTED_MODULE_7__["Login"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
            _current_user__WEBPACK_IMPORTED_MODULE_5__["CurrentUserProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"],
            _home_home_service__WEBPACK_IMPORTED_MODULE_13__["HomeService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map