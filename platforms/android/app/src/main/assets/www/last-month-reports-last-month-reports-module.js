(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["last-month-reports-last-month-reports-module"],{

/***/ "./src/app/last-month-reports/last-month-reports.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/last-month-reports/last-month-reports.module.ts ***!
  \*****************************************************************/
/*! exports provided: LastMonthReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastMonthReportsPageModule", function() { return LastMonthReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _last_month_reports_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./last-month-reports.page */ "./src/app/last-month-reports/last-month-reports.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");










var routes = [
    {
        path: '',
        component: _last_month_reports_page__WEBPACK_IMPORTED_MODULE_7__["LastMonthReportsPage"]
    }
];
var LastMonthReportsPageModule = /** @class */ (function () {
    function LastMonthReportsPageModule() {
    }
    LastMonthReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()
            ],
            declarations: [_last_month_reports_page__WEBPACK_IMPORTED_MODULE_7__["LastMonthReportsPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__["ScreenOrientation"]]
        })
    ], LastMonthReportsPageModule);
    return LastMonthReportsPageModule;
}());



/***/ }),

/***/ "./src/app/last-month-reports/last-month-reports.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/last-month-reports/last-month-reports.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\">\n  <div *ngIf=\"report\">\n    <ion-fab vertical=\"top\" horizontal=\"end\">\n      <ion-fab-button size=\"small\">\n        <ion-icon ios=\"ios-more\" md=\"md-more\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"start\">\n        <ion-fab-button color=\"medium\" (click)=\"getReport('share')\">\n          <ion-icon ios=\"ios-share\" md=\"md-share\" style=\"color: #000;\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"medium\" (click)=\"getReport('download')\">\n          <ion-icon ios=\"ios-download\" md=\"md-download\" style=\"color: #000;\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n    <div *ngIf=\"mySchools\" style=\"width: 90%;\">\n      <h5>\n        {{mySchools[0].name }}\n      </h5>\n    </div>\n    <div style=\" margin-top: 2.5em;\">\n      <h5>\n        {{ \"last_month_report.projects_cmpltd_lstmnth\" | translate }}\n      </h5>\n      {{ report.startMonth }}\n    </div>\n    <ion-grid style=\"padding: 0px;\n    margin-top: 2.5em;\">\n      <ion-row>\n        <ion-col class=\"status-card task-completed-box\">\n          <h3>{{ \"last_month_report.completed\" | translate }}</h3>\n          <h1>\n            <span *ngIf=\"report.projectsCompleted <= 9\">\n              0{{ report.projectsCompleted }} &nbsp;</span>\n            <span *ngIf=\"report.projectsCompleted >= 10\">\n              {{ report.projectsCompleted }} &nbsp;</span>\n          </h1>\n        </ion-col>\n        <ion-col class=\"status-card task-pending-box\">\n          <h3>{{ \"last_month_report.pending\" | translate }}</h3>\n          <h1>\n            <span *ngIf=\"report.projectsPending <= 9\">\n              0{{ report.projectsPending }} &nbsp;</span>\n            <span *ngIf=\"report.projectsPending >= 10\">\n              {{ report.projectsPending }} &nbsp;</span>\n          </h1>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class=\"action-item\" (click)=\"viewFullReport('lastMonth')\">\n      {{ \"last_month_report.view_full_reports\" | translate }}\n    </div>\n    <h5>\n      {{ \"last_month_report.tasks_cmpltd_lstmnth\" | translate }}\n    </h5>\n    {{ report.startMonth }}\n    <div>\n      <highcharts-chart [Highcharts]=\"highcharts\" [options]=\"chartOptions\"\n        style=\"width: 100%; height: 400px; display: block;\">\n      </highcharts-chart>\n    </div>\n    <ion-row>\n      <ion-col class=\"legend-left\">\n        <span class=\"dot-pending\"> &nbsp; </span> {{'myreports.tasks_pending' | translate}} <br />\n        <span style=\"font-size:24px; \">{{ report.tasksPending }}</span>\n      </ion-col>\n      <ion-col class=\"legend-right\">\n        <span class=\"dot-completed\"> &nbsp; </span> {{'myreports.tasks_completed' | translate}} <br />\n        <span style=\"font-size:24px; \"> {{ report.tasksCompleted }} </span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div *ngIf=\"showSkeleton\">\n    <div class=\"skeleton-card-content\">\n      <ion-card *ngFor=\"let skeleton of skeletons\">\n        <ion-card-content class=\"skeleton-card-content\">\n          <p>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/last-month-reports/last-month-reports.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/last-month-reports/last-month-reports.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-card {\n  border-radius: 5px;\n  color: #fff; }\n  .status-card span {\n    border-bottom: 2px solid #fff;\n    font-size: 36px; }\n  .status-card h1 {\n    margin-top: 10px; }\n  .task-completed-box {\n  background: linear-gradient(140deg, #5bd895 32%, #45673b 71%, #1a4b00 88%);\n  margin-right: 3px; }\n  .task-pending-box {\n  background: linear-gradient(140deg, #d8735b 32%, #a31919 71%, #9f0303 88%);\n  margin-left: 3px; }\n  .action-item {\n  color: #3b86ff;\n  text-align: center;\n  border-bottom: 1px solid #000;\n  margin: 30px 0px;\n  padding-bottom: 10px; }\n  .dot-pending {\n  height: 16px;\n  width: 16px;\n  background-color: #bfbfbf;\n  border-radius: 50%;\n  display: inline-block; }\n  .dot-completed {\n  height: 16px;\n  width: 16px;\n  background-color: #20ba8d;\n  border-radius: 50%;\n  display: inline-block; }\n  .legend-left {\n  text-align: center;\n  padding: 0px;\n  margin-left: -9%;\n  font-weight: 500; }\n  .legend-right {\n  text-align: center;\n  margin-right: -7%;\n  padding: 0px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9sYXN0LW1vbnRoLXJlcG9ydHMvbGFzdC1tb250aC1yZXBvcnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7RUFGYjtJQUlJLDZCQUE2QjtJQUM3QixlQUFlLEVBQUE7RUFMbkI7SUFRSSxnQkFBZ0IsRUFBQTtFQUdwQjtFQUNFLDBFQUEwRTtFQUMxRSxpQkFBaUIsRUFBQTtFQUVuQjtFQUNFLDBFQUEwRTtFQUMxRSxnQkFBZ0IsRUFBQTtFQUVsQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTtFQUV0QjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTtFQUV2QjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTtFQUV2QjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0VBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXN0LW1vbnRoLXJlcG9ydHMvbGFzdC1tb250aC1yZXBvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNmZmY7XG4gIHNwYW4ge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgfVxuICBoMSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuLnRhc2stY29tcGxldGVkLWJveCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICM1YmQ4OTUgMzIlLCAjNDU2NzNiIDcxJSwgIzFhNGIwMCA4OCUpO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cbi50YXNrLXBlbmRpbmctYm94IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0MGRlZywgI2Q4NzM1YiAzMiUsICNhMzE5MTkgNzElLCAjOWYwMzAzIDg4JSk7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uYWN0aW9uLWl0ZW0ge1xuICBjb2xvcjogIzNiODZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uZG90LXBlbmRpbmcge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5kb3QtY29tcGxldGVkIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwYmE4ZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubGVnZW5kLWxlZnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC05JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5sZWdlbmQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogLTclO1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/last-month-reports/last-month-reports.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/last-month-reports/last-month-reports.page.ts ***!
  \***************************************************************/
/*! exports provided: LastMonthReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastMonthReportsPage", function() { return LastMonthReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _my_reports_my_reports_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../my-reports/my-reports.service */ "./src/app/my-reports/my-reports.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _myschools_myschools_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../myschools/myschools.service */ "./src/app/myschools/myschools.service.ts");












var LastMonthReportsPage = /** @class */ (function () {
    function LastMonthReportsPage(router, myReportsService, toastController, api, storage, networkService, toastService, mySchoolsService, screenOrientation) {
        var _this = this;
        this.router = router;
        this.myReportsService = myReportsService;
        this.toastController = toastController;
        this.api = api;
        this.storage = storage;
        this.networkService = networkService;
        this.toastService = toastService;
        this.mySchoolsService = mySchoolsService;
        this.screenOrientation = screenOrientation;
        this.showChart = false;
        this.connected = navigator.onLine;
        this.page = 1;
        this.count = 5;
        this.showSkeleton = false;
        this.skeletons = [{}, {}, {}, {}, {}];
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_3__;
        this.color = "#20ba8d";
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
        });
    }
    LastMonthReportsPage.prototype.ionViewDidEnter = function () {
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
        this.getSchools();
    };
    LastMonthReportsPage.prototype.ngOnInit = function () {
        // this.getChart();
        this.getData();
    };
    LastMonthReportsPage.prototype.getChart = function () {
        this.showChart = true;
    };
    LastMonthReportsPage.prototype.getData = function () {
        var _this = this;
        if (this.connected) {
            this.storage.get('userTokens').then(function (data) {
                _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                    _this.showSkeleton = true;
                    var parsedData = JSON.parse(data._body);
                    if (parsedData && parsedData.access_token) {
                        var userTokens_1 = {
                            access_token: parsedData.access_token,
                            refresh_token: parsedData.refresh_token,
                        };
                        _this.storage.set('userTokens', userTokens_1).then(function (usertoken) {
                            _this.myReportsService.getReports(userTokens_1.access_token, 'lastMonth').subscribe(function (data) {
                                console.log(data, "resp");
                                _this.report = data.data;
                                if (data.status != "failed") {
                                    _this.setupChart();
                                }
                                _this.showSkeleton = false;
                            });
                        }, function (error) {
                            _this.showSkeleton = false;
                        });
                    }
                }, function (error) {
                    _this.showSkeleton = false;
                });
            });
        }
        else {
            this.toastService.errorToast('message.nerwork_connection_check');
        }
    };
    LastMonthReportsPage.prototype.setupChart = function () {
        var totalTask;
        var completed;
        if (this.report.tasksCompleted > 0 || this.report.tasksPending > 0) {
            totalTask = this.report.tasksCompleted + this.report.tasksPending;
            completed = (this.report.tasksCompleted / totalTask) * 100;
            completed = completed.toFixed(0);
        }
        else {
            this.report.tasksCompleted = 0;
            this.report.tasksPending = 0;
            completed = 0;
        }
        this.chartOptions = {
            chart: {
                type: 'pie'
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: '<b>' + completed + ' % <br>Completed</b>'
            },
            // xAxis: {
            //   categories: data
            // },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            legend: {
                enabled: false
            }, credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%'],
                    colors: [
                        '#adafad',
                        '#20ba8d'
                    ],
                }
            },
            series: [{
                    name: "Tasks",
                    data: [["Pending", this.report.tasksPending], ["Completed", this.report.tasksCompleted]],
                    size: '90%',
                    innerSize: '70%',
                    showInLegend: true,
                    dataLabels: {
                        enabled: false
                    }
                }]
        };
    };
    LastMonthReportsPage.prototype.viewFullReport = function (value) {
        if (navigator.onLine) {
            this.router.navigate(['project-view/fullreports', value]);
        }
        else {
            this.toastService.errorToast('message.nerwork_connection_check');
        }
    };
    // Display error Message
    LastMonthReportsPage.prototype.errorToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            color: 'danger',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LastMonthReportsPage.prototype.getSchools = function () {
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
    LastMonthReportsPage.prototype.getReport = function (type) {
        var obj;
        var obj1 = {};
        if (this.mySchools) {
            this.mySchools[0].type = type;
            this.mySchools[0].isFullReport = false;
            this.mySchools[0].reportType = 'lastMonth';
            obj = this.mySchools[0];
        }
        else {
            obj1.type = type;
            obj1.isFullReport = false;
            obj1.reportType = 'lastMonth';
            obj1.name = '';
            obj1.entityId = '';
            obj = obj1;
        }
        this.myReportsService.getReportEvent(obj);
    };
    LastMonthReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-last-month-reports',
            template: __webpack_require__(/*! ./last-month-reports.page.html */ "./src/app/last-month-reports/last-month-reports.page.html"),
            styles: [__webpack_require__(/*! ./last-month-reports.page.scss */ "./src/app/last-month-reports/last-month-reports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _my_reports_my_reports_service__WEBPACK_IMPORTED_MODULE_9__["MyReportsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _api_api__WEBPACK_IMPORTED_MODULE_4__["ApiProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"],
            _myschools_myschools_service__WEBPACK_IMPORTED_MODULE_11__["MyschoolsService"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]])
    ], LastMonthReportsPage);
    return LastMonthReportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=last-month-reports-last-month-reports-module.js.map