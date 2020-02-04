(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myschools-myschools-module"],{

/***/ "./src/app/myschools/myschools.module.ts":
/*!***********************************************!*\
  !*** ./src/app/myschools/myschools.module.ts ***!
  \***********************************************/
/*! exports provided: MyschoolsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyschoolsPageModule", function() { return MyschoolsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _myschools_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myschools.page */ "./src/app/myschools/myschools.page.ts");









var routes = [
    {
        path: '',
        component: _myschools_page__WEBPACK_IMPORTED_MODULE_8__["MyschoolsPage"]
    }
];
var MyschoolsPageModule = /** @class */ (function () {
    function MyschoolsPageModule() {
    }
    MyschoolsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({})
            ],
            declarations: [_myschools_page__WEBPACK_IMPORTED_MODULE_8__["MyschoolsPage"]]
        })
    ], MyschoolsPageModule);
    return MyschoolsPageModule;
}());



/***/ }),

/***/ "./src/app/myschools/myschools.page.html":
/*!***********************************************!*\
  !*** ./src/app/myschools/myschools.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title\n      >{{ \"mySchools.my_schools\" | translate }}\n      <ion-icon\n        name=\"wifi\"\n        class=\"network-icon\"\n        [ngClass]=\"{\n          'no-connection': connected == 'false',\n          connected: connected == 'true'\n        }\"\n        float-right\n      ></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header>\n  <app-header [title]=\"'mySchools.my_schools' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n  [noBorder]=\"false\"> </app-header>\n</ion-header>\n\n<ion-content>\n  <ion-item class=\"search-bar-custom\" *ngIf=\"mySchools\">\n    <ion-input\n      type=\"text\"\n      placeholder=\"Search\"\n      [(ngModel)]=\"searchInput\"\n      (keyup)=\"searchSchool(searchInput)\"\n    ></ion-input>\n    <ion-icon name=\"search\" item-right></ion-icon>\n  </ion-item>\n  <ion-card *ngIf=\"noSchools\" class=\"noschools\">\n    No Schools found.\n  </ion-card>\n  <ion-card class=\"custom-card\" *ngIf=\"mySchools && !noSchools\">\n    <ion-card-header>\n      {{ \"mySchools.list_of_schools\" | translate }}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-card *ngFor=\"let mySchool of mySchools\">\n        <ion-card-header>\n          {{ mySchool.name }}\n        </ion-card-header>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row\n              ><ion-col>\n                <ion-button\n                  size=\"small\"\n                  color=\"primary\"\n                  (click)=\"navigateToSchool(mySchool.entityId, mySchool.name)\"\n                >\n                  {{ \"mySchools.view_projects\" | translate }}\n                </ion-button>\n              </ion-col>\n              <ion-col>\n                <ion-button\n                  size=\"small\"\n                  color=\"primary\"\n                  routerLink=\"/project-view/reports\"\n                  class=\"ion-float-right\"\n                  id=\"open-app\"\n                >\n                  {{ \"mySchools.observation_reports\" | translate }}\n                </ion-button></ion-col\n              >\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Skeleton screen -->\n  <div *ngIf=\"!mySchools\">\n    <ion-card>\n      <ion-card-header>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card-header>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-header>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </ion-card-header>\n          <ion-card-content class=\"skeleton-card-content\">\n            <p>\n              <ion-skeleton-text\n                animated\n                style=\"\n                        width: 48%;\n                        float: left;\n                        margin-right: 2%;\"\n              ></ion-skeleton-text>\n              <ion-skeleton-text\n                animated\n                style=\" width: 48%;\n                        float: left;\n                        margin-left: 2%;\"\n              ></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\"\n      >\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/myschools/myschools.page.scss":
/*!***********************************************!*\
  !*** ./src/app/myschools/myschools.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card ion-card-header {\n  background: #e3e3e3;\n  padding: 10px;\n  color: #000; }\n\n.custom-card ion-button {\n  --border-radius: 20px;\n  text-transform: none; }\n\n.custom-card ion-card-content {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important; }\n\n.noschools {\n  padding: 20px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvbXlzY2hvb2xzL215c2Nob29scy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFKZjtFQU9JLHFCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTs7QUFSeEI7RUFXSSxxQ0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLG1DQUFrQztVQUFsQyxrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9teXNjaG9vbHMvbXlzY2hvb2xzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2FyZCB7XG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIGlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLm5vc2Nob29scyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/myschools/myschools.page.ts":
/*!*********************************************!*\
  !*** ./src/app/myschools/myschools.page.ts ***!
  \*********************************************/
/*! exports provided: MyschoolsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyschoolsPage", function() { return MyschoolsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/app-launcher/ngx */ "./node_modules/@ionic-native/app-launcher/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
/* harmony import */ var _myschools_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myschools.service */ "./src/app/myschools/myschools.service.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_11__);












var MyschoolsPage = /** @class */ (function () {
    function MyschoolsPage(networkService, menuCtrl, router, navctrl, network, api, mySchoolsService, storage, platform, appLauncher, market) {
        var _this = this;
        this.networkService = networkService;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.navctrl = navctrl;
        this.network = network;
        this.api = api;
        this.mySchoolsService = mySchoolsService;
        this.storage = storage;
        this.platform = platform;
        this.appLauncher = appLauncher;
        this.market = market;
        this.connected = localStorage.getItem('networkStatus');
        this.back = "project-view/home";
        this.noSchools = false;
        this.page = 1;
        this.count = 5;
        this.skeletons = [{}, {}, {}, {}, {}, {}];
        this.menuCtrl.enable(true);
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
            if (_this.connected) {
                _this.getSchools();
            }
            localStorage.setItem("networkStatus", _this.connected);
        });
    }
    MyschoolsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        this.checkNetwork();
        this.getSchools();
        this.connected = localStorage.getItem("networkStatus");
        this.storage.get('userTokens').then(function (data) {
            var userDetails = jwt_decode__WEBPACK_IMPORTED_MODULE_11__(data.access_token);
            _this.storage.set('userDetails', userDetails);
        });
    };
    MyschoolsPage.prototype.ngOnInit = function () {
    };
    // get schools list
    MyschoolsPage.prototype.getSchools = function () {
        var _this = this;
        this.connected = localStorage.getItem("networkStatus");
        var connected = navigator.onLine;
        if (connected) {
            this.storage.get('userTokens').then(function (data) {
                _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                    var parsedData = JSON.parse(data._body);
                    if (parsedData && parsedData.access_token) {
                        var userTokens = {
                            access_token: parsedData.access_token,
                            refresh_token: parsedData.refresh_token,
                        };
                        _this.storage.set('userTokens', userTokens).then(function (data) {
                            _this.mySchoolsService.getSchools(parsedData.access_token, _this.count, _this.page).subscribe(function (data) {
                                _this.mySchools = data.data;
                            }, function (error) { });
                        });
                        //resolve()
                    }
                }, function (error) {
                });
            });
        }
        else {
            this.networkService.networkErrorToast();
        }
    };
    // Navigate to school
    MyschoolsPage.prototype.navigateToSchool = function (id, name) {
        var connected = navigator.onLine;
        if (connected) {
            localStorage.setItem('from1', 'mySchools');
            this.router.navigate(['/project-view/school-task-report', id, name]);
        }
        else {
            this.networkService.networkErrorToast();
        }
    };
    //Launch learner App
    MyschoolsPage.prototype.openApp = function () {
        var _this = this;
        this.market.open('org.shikshalokam.samiksha.staging');
        // org.shikshalokam.app://community.shikshalokam.org/learn
        var options = {
            packageName: 'org.shikshalokam.samiksha.staging',
        };
        this.appLauncher.canLaunch(options).then(function (canLaunch) {
            if (canLaunch) {
                _this.appLauncher.launch(options).then(function () {
                }, function (err) {
                });
            }
            else {
                window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.samiksha.staging&hl=en,_system');
            }
        }, function (error) {
            window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.samiksha.staging&hl=en,_system');
        });
    };
    MyschoolsPage.prototype.checkNetwork = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.network.onDisconnect()
                .subscribe(function () {
                _this.connected = false;
                _this.networkService.status(_this.connected);
                localStorage.setItem("networkStatus", _this.connected);
            }, function (error) {
            });
            _this.network.onConnect()
                .subscribe(function () {
                _this.connected = true;
                _this.networkService.status(_this.connected);
            });
            // this.networkSubscriber();
        });
    };
    // Search School
    MyschoolsPage.prototype.searchSchool = function (keyword) {
        var _this = this;
        this.connected = localStorage.getItem("networkStatus");
        var connected = navigator.onLine;
        if (connected) {
            this.storage.get('userTokens').then(function (data) {
                _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                    var parsedData = JSON.parse(data._body);
                    if (parsedData && parsedData.access_token) {
                        var userTokens = {
                            access_token: parsedData.access_token,
                            refresh_token: parsedData.refresh_token,
                        };
                        _this.storage.set('userTokens', userTokens).then(function (data) {
                            _this.mySchoolsService.searchScool(parsedData.access_token, keyword).subscribe(function (data) {
                                _this.mySchools = data.data;
                                _this.noSchools = false;
                                if (data.data.length == 0) {
                                    _this.noSchools = true;
                                }
                            });
                        });
                        //resolve()
                    }
                }, function (error) {
                });
            });
        }
        else {
            this.networkService.networkErrorToast();
        }
    };
    // Load Data for infinite scroll
    MyschoolsPage.prototype.loadData = function (event) {
        var _this = this;
        event.target.complete();
        //getReports(data,limit,page)
        this.storage.get('userTokens').then(function (data) {
            _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens_1 = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens_1).then(function (usertoken) {
                        _this.mySchoolsService.getSchools(userTokens_1.access_token, _this.count, _this.page).subscribe(function (data) {
                            _this.page = _this.page + 1;
                            event.target.disabled = true;
                            _this.mySchools.push(data.data);
                        }, function (error) {
                        });
                    }, function (error) {
                    });
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"])
    ], MyschoolsPage.prototype, "nav", void 0);
    MyschoolsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myschools',
            template: __webpack_require__(/*! ./myschools.page.html */ "./src/app/myschools/myschools.page.html"),
            styles: [__webpack_require__(/*! ./myschools.page.scss */ "./src/app/myschools/myschools.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"], _api_api__WEBPACK_IMPORTED_MODULE_7__["ApiProvider"], _myschools_service__WEBPACK_IMPORTED_MODULE_6__["MyschoolsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_3__["AppLauncher"], _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_5__["Market"]])
    ], MyschoolsPage);
    return MyschoolsPage;
}());



/***/ })

}]);
//# sourceMappingURL=myschools-myschools-module.js.map