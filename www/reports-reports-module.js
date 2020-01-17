(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "./src/app/reports/reports.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reports.page */ "./src/app/reports/reports.page.ts");









var routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_8__["ReportsPage"]
    }
];
var ReportsPageModule = /** @class */ (function () {
    function ReportsPageModule() {
    }
    ReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({})
            ],
            declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_8__["ReportsPage"]]
        })
    ], ReportsPageModule);
    return ReportsPageModule;
}());



/***/ }),

/***/ "./src/app/reports/reports.page.html":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header\n    [title]=\"'reports.title' | translate\"\n    [showMenu]=\"false\"\n    [noBorder]=\"false\"\n    [showBack]=\"true\"\n    [noBorder]=\"false\"\n    [isGoBack]=\"back\"\n  >\n  </app-header>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"showSkeleton\">\n    <ion-card>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-content class=\"skeleton-card-content\">\n            <p><ion-skeleton-text animated></ion-skeleton-text></p>\n            <p>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div *ngIf=\"reports && !showSkeleton\">\n    <ion-card *ngIf=\"reports.length == 0\" padding>\n      No Reports available.\n    </ion-card>\n    <ion-card *ngIf=\"noSchools\" class=\"noschools\"  padding>\n      No Reports available.\n    </ion-card>\n    <ion-card\n      class=\"report-card\"\n      *ngFor=\"let report of reports\"\n      (click)=\"\n        getReportFile(report.observationSubmissionId, report.observationName)\n      \"\n    >\n      <ion-card-content style=\"padding-inline-start: 10px;\">\n        <ion-grid>\n          <ion-row>\n            <ion-col style=\"min-width:90%;\">\n              <ion-row>\n                <ion-col>\n                  <label>{{ \"reports.name\" | translate }} : </label\n                  ><b> {{ report.entityName }} </b> <br />\n                  <label>{{ \"reports.obsr_name\" | translate }} : </label>\n                  <b> {{ report.observationName }}</b> <br />\n                  <label>{{ \"reports.date\" | translate }} : </label>\n                  <b>{{ report.date }}</b\n                  ><br />\n                </ion-col> </ion-row\n            ></ion-col>\n            <ion-col> <ion-icon name=\"ios-arrow-forward\"> </ion-icon></ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <ion-infinite-scroll threshold=\"50px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/reports/reports.page.scss":
/*!*******************************************!*\
  !*** ./src/app/reports/reports.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".report-card {\n  font-size: 30px;\n  color: #000;\n  margin-top: 5%;\n  background: #e3e3e3; }\n  .report-card ion-card-content {\n    -webkit-padding-start: 10px !important;\n            padding-inline-start: 10px !important;\n    color: #000; }\n  .report-card ion-col, .report-card ion-row, .report-card ion-grid {\n    padding: 0px !important; }\n  .report-card ion-icon {\n    font-size: 30px;\n    margin-top: 35%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9Vbm5hdGktbW9iaWxlL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsZUFBZTtFQUNuQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFrQixFQUFBO0VBTHRCO0lBUVEsc0NBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxXQUFXLEVBQUE7RUFUbkI7SUFZUSx1QkFBdUIsRUFBQTtFQVovQjtJQWdCUSxlQUFlO0lBQ2YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnJlcG9ydC1jYXJkXG57XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBiYWNrZ3JvdW5kOiNlM2UzZTM7XG4gICAgaW9uLWNhcmQtY29udGVudFxuICAgIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIGlvbi1jb2wsaW9uLXJvdyxpb24tZ3JpZHtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pY29uXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDM1JTtcbiAgICB9IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/reports/reports.page.ts":
/*!*****************************************!*\
  !*** ./src/app/reports/reports.page.ts ***!
  \*****************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reports.service */ "./src/app/reports/reports.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");










var ReportsPage = /** @class */ (function () {
    function ReportsPage(network, homeService, location, networkService, storage, reportsService, api) {
        var _this = this;
        this.network = network;
        this.homeService = homeService;
        this.location = location;
        this.networkService = networkService;
        this.storage = storage;
        this.reportsService = reportsService;
        this.api = api;
        this.skeletons = [{}, {}, {}, {}, {}];
        this.showSkeleton = false;
        this.noReports = false;
        this.connected = localStorage.getItem('networkStatus');
        this.page = 0;
        this.back = 'project-view/my-schools';
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
            localStorage.setItem("networkStatus", _this.connected);
        });
    }
    ReportsPage.prototype.ngOnInit = function () {
    };
    ReportsPage.prototype.ionViewDidEnter = function () {
        if (!this.reports) {
            this.getReports();
        }
    };
    // infinite scroll
    ReportsPage.prototype.loadData = function (event) {
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
                        _this.page = _this.page + 1;
                        _this.reportsService.getReports(userTokens_1.access_token, 2, _this.page).subscribe(function (data) {
                            event.target.disabled = true;
                            // this.reports.push(data.data);
                            _this.reports = data.data;
                            _this.showSkeleton = false;
                        }, function (error) {
                        });
                    }, function (error) {
                    });
                }
            });
        });
    };
    // Get reports
    ReportsPage.prototype.getReports = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens_2 = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens_2).then(function (usertoken) {
                        _this.showSkeleton = true;
                        _this.page = _this.page + 1;
                        _this.reportsService.getReports(userTokens_2.access_token, 2, _this.page).subscribe(function (data) {
                            if (data.data) {
                                _this.reports = data.data;
                            }
                            _this.showSkeleton = false;
                        }, function (error) {
                            _this.showSkeleton = false;
                        });
                    }, function (error) {
                        _this.showSkeleton = false;
                    });
                }
            });
        });
    };
    // get report file
    ReportsPage.prototype.getReportFile = function (id, title) {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens_3 = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens_3).then(function (usertoken) {
                        _this.showSkeleton = true;
                        _this.reportsService.getReportFile(userTokens_3.access_token, id).subscribe(function (data) {
                            //  window.open(data.pdfUrl)
                            var report = {
                                title: title,
                                id: id
                            };
                            _this.storage.get('myReports').then(function (rprts) {
                                if (rprts) {
                                    if (rprts.find(function (pro) { return pro.id === report.id; }) === undefined) {
                                        rprts.push(report);
                                        _this.storage.set('myReports', rprts).then(function (uprep) {
                                            _this.homeService.loadMyProjects();
                                        });
                                    }
                                }
                                else {
                                    var data1 = [];
                                    data1.push(report);
                                    _this.storage.set('myReports', data1).then(function (data) {
                                        _this.homeService.loadMyProjects();
                                    });
                                }
                            });
                            var link = document.createElement('a');
                            link.href = data.pdfUrl;
                            link.download = "report.pdf";
                            // this is necessary as link.click() does not work on the latest firefox
                            link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
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
    // Search School
    ReportsPage.prototype.searchReport = function (keyword) {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens_4 = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens_4).then(function (usertoken) {
                        _this.showSkeleton = true;
                        _this.page = _this.page + 1;
                        _this.reportsService.searchReports(userTokens_4.access_token, keyword).subscribe(function (data) {
                            if (data.data) {
                                _this.reports = data.data;
                            }
                            if (data.data.length == 0) {
                                _this.noReports = true;
                            }
                            _this.showSkeleton = false;
                        }, function (error) {
                            _this.showSkeleton = false;
                        });
                    }, function (error) {
                        _this.showSkeleton = false;
                    });
                }
            });
        });
    };
    ReportsPage.prototype.goBack = function () {
        this.location.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"])
    ], ReportsPage.prototype, "infiniteScroll", void 0);
    ReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.page.html */ "./src/app/reports/reports.page.html"),
            styles: [__webpack_require__(/*! ./reports.page.scss */ "./src/app/reports/reports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"],
            _home_home_service__WEBPACK_IMPORTED_MODULE_9__["HomeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _reports_service__WEBPACK_IMPORTED_MODULE_4__["ReportsService"],
            _api_api__WEBPACK_IMPORTED_MODULE_6__["ApiProvider"]])
    ], ReportsPage);
    return ReportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=reports-reports-module.js.map