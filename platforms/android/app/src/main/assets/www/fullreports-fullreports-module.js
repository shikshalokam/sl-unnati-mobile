(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fullreports-fullreports-module"],{

/***/ "./src/app/fullreports/fullreports.module.ts":
/*!***************************************************!*\
  !*** ./src/app/fullreports/fullreports.module.ts ***!
  \***************************************************/
/*! exports provided: FullreportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullreportsPageModule", function() { return FullreportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _fullreports_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fullreports.page */ "./src/app/fullreports/fullreports.page.ts");










var routes = [
    {
        path: '',
        component: _fullreports_page__WEBPACK_IMPORTED_MODULE_9__["FullreportsPage"]
    }
];
var FullreportsPageModule = /** @class */ (function () {
    function FullreportsPageModule() {
    }
    FullreportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
            ],
            declarations: [_fullreports_page__WEBPACK_IMPORTED_MODULE_9__["FullreportsPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]]
        })
    ], FullreportsPageModule);
    return FullreportsPageModule;
}());



/***/ }),

/***/ "./src/app/fullreports/fullreports.page.html":
/*!***************************************************!*\
  !*** ./src/app/fullreports/fullreports.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'fullreports.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"false\">\n  </app-header>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-fab vertical=\"top\" horizontal=\"end\">\n    <ion-fab-button size=\"small\">\n      <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button color=\"medium\" (click)=\"getReport('share')\">\n        <ion-icon ios=\"ios-share\" md=\"md-share\" style=\"color: #000;\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"medium\" (click)=\"getReport('download')\">\n        <ion-icon ios=\"ios-download\" md=\"md-download\" style=\"color: #000;\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <div *ngIf=\"mySchools && mySchools[0].name\" style=\"width: 90%;\">\n    <h5>\n      {{mySchools[0].name }}\n    </h5>\n  </div>\n\n  <h5 *ngIf=\"state == 'latsMonth'\">\n    {{ \"fullreports.undertaken_prjcts_inmonth\" | translate }}\n  </h5>\n  <h5 *ngIf=\"state == 'lastQuarter'\">\n    {{ \"fullreports.undertaken_prjcts_inqrtr\" | translate }}\n  </h5>\n  <div *ngFor=\"let report of reports; let i = index\">\n    <ion-card style=\"background: #f5f5f5b8;\n    border-radius: 10px;\" *ngIf=\" report?.title?.text\">\n      <ion-card-header class=\"chart-title\">\n        {{ report.title.text }}\n      </ion-card-header>\n      <ion-card-content>\n        <div id=\"{{ idvalue }}{{ i }}\"></div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div *ngIf=\"showSkeleton == 'true'\">\n    <ion-card>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-content class=\"skeleton-card-content\">\n            <p>\n              <ion-skeleton-text animated style=\" width: 48%;\n                        float: left;height: 200px;\n                        margin-left: 2%;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\" width: 48%;\n                        float: left;\n                        margin-left: 2%;height: 200px;\"></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/fullreports/fullreports.page.scss":
/*!***************************************************!*\
  !*** ./src/app/fullreports/fullreports.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-title {\n  color: #4d4f5c;\n  margin-bottom: 20px;\n  font-family: Source Code Pro-Bold; }\n\n.highcharts-yaxis .highcharts-axis-line {\n  stroke-width: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9mdWxscmVwb3J0cy9mdWxscmVwb3J0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlDQUFpQyxFQUFBOztBQTZCbkM7RUFDRSw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Z1bGxyZXBvcnRzL2Z1bGxyZXBvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydC10aXRsZSB7XG4gIGNvbG9yOiAjNGQ0ZjVjO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LWZhbWlseTogU291cmNlIENvZGUgUHJvLUJvbGQ7XG59XG5cbi8vICNjb250YWluZXIwLFxuLy8gI2NvbnRhaW5lcjEsXG4vLyAjY29udGFpbmVyMixcbi8vICNjb250YWluZXIzLFxuLy8gI2NvbnRhaW5lcjQsXG4vLyAjY29udGFpbmVyNSxcbi8vICNjb250YWluZXI2LFxuLy8gI2NvbnRhaW5lcjcsXG4vLyAjY29udGFpbmVyOCxcbi8vICNjb250YWluZXI5LFxuLy8gI2NvbnRhaW5lcjEwLFxuLy8gI2NvbnRhaW5lcjExLFxuLy8gI2NvbnRhaW5lcjEyLFxuLy8gI2NvbnRhaW5lcjEzLFxuLy8gI2NvbnRhaW5lcjE0LFxuLy8gI2NvbnRhaW5lcjE1LFxuLy8gI2NvbnRhaW5lcjE2LFxuLy8gI2NvbnRhaW5lcjE3LFxuLy8gI2NvbnRhaW5lcjE4LFxuLy8gI2NvbnRhaW5lcjE5LFxuLy8gI2NvbnRhaW5lcjIwIHtcbi8vICAgbWF4LXdpZHRoOiAzNTBweDtcbi8vICAgbWluLXdpZHRoOiAzNTBweDtcbi8vICAgaGVpZ2h0OiA0MDBweDtcbi8vICAgd2lkdGg6IDQwMHB4O1xuLy8gfVxuLmhpZ2hjaGFydHMteWF4aXMgLmhpZ2hjaGFydHMtYXhpcy1saW5lIHtcbiAgc3Ryb2tlLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/fullreports/fullreports.page.ts":
/*!*************************************************!*\
  !*** ./src/app/fullreports/fullreports.page.ts ***!
  \*************************************************/
/*! exports provided: FullreportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullreportsPage", function() { return FullreportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_reports_my_reports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-reports/my-reports.service */ "./src/app/my-reports/my-reports.service.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var highcharts_highcharts_gantt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts/highcharts-gantt */ "./node_modules/highcharts/highcharts-gantt.js");
/* harmony import */ var highcharts_highcharts_gantt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_gantt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _myschools_myschools_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../myschools/myschools.service */ "./src/app/myschools/myschools.service.ts");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");











var FullreportsPage = /** @class */ (function () {
    function FullreportsPage(activatedRoute, screenOrientation, router, myReportsService, api, storage, mySchoolsService, networkService, toastService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.screenOrientation = screenOrientation;
        this.router = router;
        this.myReportsService = myReportsService;
        this.api = api;
        this.storage = storage;
        this.mySchoolsService = mySchoolsService;
        this.networkService = networkService;
        this.toastService = toastService;
        this.idvalue = 'container';
        this.connected = navigator.onLine;
        this.page = 1;
        this.count = 5;
        this.highcharts = highcharts_highcharts_gantt__WEBPACK_IMPORTED_MODULE_6__;
        this.showCharts = false;
        this.showSkeleton = false;
        this.skeleton = [{}, {}, {}, {}];
        this.back = "/project-view/my-reports/last-month-reports";
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
        });
        activatedRoute.params.subscribe(function (params) {
            _this.state = params.state;
            _this.getSchools();
            _this.getReports(params.state);
            try {
                _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.LANDSCAPE);
            }
            catch (error) {
            }
        });
    }
    FullreportsPage.prototype.ngOnInit = function () {
    };
    FullreportsPage.prototype.getReports = function (state) {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens_1 = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.showSkeleton = true;
                    _this.storage.set('userTokens', userTokens_1).then(function (usertoken) {
                        _this.myReportsService.getFullReports(userTokens_1.access_token, state).subscribe(function (data) {
                            data.data.forEach(function (report) {
                            });
                            _this.reports = data.data;
                            if (_this.reports.length > 0) {
                                setTimeout(function () {
                                    _this.showCharts = true;
                                    _this.setUpChart(_this.reports[0]);
                                }, 1000);
                            }
                            else {
                                _this.showSkeleton = false;
                            }
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
    FullreportsPage.prototype.setUpChart = function (data) {
        this.showSkeleton = true;
        for (var i = 0; i < this.reports.length; i++) {
            var minDate = new Date(this.reports[i].xAxis.min);
            var maxDate = new Date(this.reports[i].xAxis.max);
            var sdate = minDate.getDate();
            var smonth = minDate.getMonth() + 1;
            var syear = minDate.getFullYear();
            var edate = maxDate.getDate();
            var emonth = maxDate.getMonth() + 1;
            var eyear = maxDate.getFullYear();
            var minDate1 = Date.UTC(syear, smonth, sdate);
            var maxDate1 = Date.UTC(eyear, emonth, edate);
            highcharts_highcharts_gantt__WEBPACK_IMPORTED_MODULE_6__["ganttChart"]('container' + i, {
                title: {
                    text: ''
                },
                xAxis: {
                    min: minDate1,
                    max: maxDate1
                },
                legend: {
                    enabled: false
                }, credits: {
                    enabled: false
                },
                series: [{
                        type: 'gantt',
                        data: this.reports[i].series[0].data
                    }]
            });
        }
        this.showSkeleton = false;
    };
    // go back
    FullreportsPage.prototype.goBack = function () {
        this.router.navigate(['/project-view/my-reports/last-' + this.state + '-reports']);
    };
    FullreportsPage.prototype.getSchools = function () {
        var _this = this;
        if (this.connected) {
            this.mySchoolsService.getSchools(this.count, this.page).subscribe(function (data) {
                if (data.status != 'failed') {
                    _this.mySchools = data.data;
                }
            }, function (error) { });
        }
        else {
            this.toastService.errorToast('message.nerwork_connection_check');
        }
    };
    FullreportsPage.prototype.getReport = function (type) {
        var obj;
        var obj1 = {};
        if (this.mySchools) {
            this.mySchools[0].type = type;
            this.mySchools[0].isFullReport = true;
            this.mySchools[0].reportType = this.state;
            obj = this.mySchools[0];
        }
        else {
            obj1.type = type;
            obj1.isFullReport = true;
            obj1.reportType = this.state;
            ;
            obj1.name = '';
            obj1.entityId = '';
            obj = obj1;
        }
        this.myReportsService.getReportEvent(obj);
    };
    FullreportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fullreports',
            template: __webpack_require__(/*! ./fullreports.page.html */ "./src/app/fullreports/fullreports.page.html"),
            styles: [__webpack_require__(/*! ./fullreports.page.scss */ "./src/app/fullreports/fullreports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _my_reports_my_reports_service__WEBPACK_IMPORTED_MODULE_3__["MyReportsService"],
            _api_api__WEBPACK_IMPORTED_MODULE_4__["ApiProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _myschools_myschools_service__WEBPACK_IMPORTED_MODULE_8__["MyschoolsService"],
            _network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]])
    ], FullreportsPage);
    return FullreportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=fullreports-fullreports-module.js.map