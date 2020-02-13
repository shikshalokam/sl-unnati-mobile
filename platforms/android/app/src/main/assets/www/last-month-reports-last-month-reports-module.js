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

module.exports = "<ion-content class=\"ion-padding\">\n  <div *ngIf=\"report\">\n    <h5>\n      {{ \"last_month_report.projects_cmpltd_lstmnth\" | translate }}\n    </h5>\n    <div>{{ report.startMonth }}</div>\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"status-card task-completed-box\">\n          <h3>{{ \"last_month_report.completed\" | translate }}</h3>\n          <h1>\n            <span *ngIf=\"report.projectsCompleted <= 9\">\n              0{{ report.projectsCompleted }} &nbsp;</span>\n            <span *ngIf=\"report.projectsCompleted >= 10\">\n              {{ report.projectsCompleted }} &nbsp;</span>\n          </h1>\n        </ion-col>\n        <ion-col class=\"status-card task-pending-box\">\n          <h3>{{ \"last_month_report.pending\" | translate }}</h3>\n          <h1>\n            <span *ngIf=\"report.projectsPending <= 9\">\n              0{{ report.projectsPending }} &nbsp;</span>\n            <span *ngIf=\"report.projectsPending >= 10\">\n              {{ report.projectsPending }} &nbsp;</span>\n          </h1>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class=\"action-item\" (click)=\"viewFullReport('lastMonth')\">\n      {{ \"last_month_report.view_full_reports\" | translate }}\n    </div>\n    <h5>\n      {{ \"last_month_report.tasks_cmpltd_lstmnth\" | translate }}\n    </h5>\n    {{ report.startMonth }}\n    <div>\n      <highcharts-chart [Highcharts]=\"highcharts\" [options]=\"chartOptions\"\n        style=\"width: 100%; height: 400px; display: block;\">\n      </highcharts-chart>\n    </div>\n    <ion-row>\n      <ion-col class=\"legend-left\">\n        <span class=\"dot-pending\"> &nbsp; </span> {{'myreports.tasks_pending' | translate}} <br />\n        <span style=\"font-size:24px; \">{{ report.tasksPending }}</span>\n      </ion-col>\n      <ion-col class=\"legend-right\">\n        <span class=\"dot-completed\"> &nbsp; </span> {{'myreports.tasks_completed' | translate}} <br />\n        <span style=\"font-size:24px; \"> {{ report.tasksCompleted }} </span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div *ngIf=\"showSkeleton\">\n    <div class=\"skeleton-card-content\">\n      <ion-card *ngFor=\"let skeleton of skeletons\">\n        <ion-card-content class=\"skeleton-card-content\">\n          <p>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/last-month-reports/last-month-reports.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/last-month-reports/last-month-reports.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-card {\n  border-radius: 5px;\n  color: #fff; }\n  .status-card span {\n    border-bottom: 2px solid #fff;\n    font-size: 36px; }\n  .status-card h1 {\n    margin-top: 10px; }\n  .task-completed-box {\n  background: linear-gradient(140deg, #5bd895 32%, #45673b 71%, #1a4b00 88%);\n  margin-right: 3px; }\n  .task-pending-box {\n  background: linear-gradient(140deg, #d8735b 32%, #a31919 71%, #9f0303 88%);\n  margin-left: 3px; }\n  .action-item {\n  color: #3b86ff;\n  text-align: center;\n  border-bottom: 1px solid #000;\n  margin: 30px 0px;\n  padding-bottom: 10px; }\n  .dot-pending {\n  height: 16px;\n  width: 16px;\n  background-color: #bfbfbf;\n  border-radius: 50%;\n  display: inline-block; }\n  .dot-completed {\n  height: 16px;\n  width: 16px;\n  background-color: #20ba8d;\n  border-radius: 50%;\n  display: inline-block; }\n  .legend-left {\n  text-align: center;\n  padding: 0px;\n  margin-left: -9%;\n  font-weight: 500; }\n  .legend-right {\n  text-align: center;\n  margin-right: -7%;\n  padding: 0px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvbGFzdC1tb250aC1yZXBvcnRzL2xhc3QtbW9udGgtcmVwb3J0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBRmI7SUFJSSw2QkFBNkI7SUFDN0IsZUFBZSxFQUFBO0VBTG5CO0lBUUksZ0JBQWdCLEVBQUE7RUFHcEI7RUFDRSwwRUFBMEU7RUFDMUUsaUJBQWlCLEVBQUE7RUFFbkI7RUFDRSwwRUFBMEU7RUFDMUUsZ0JBQWdCLEVBQUE7RUFFbEI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7RUFFdEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7RUFFdkI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7RUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtFQUVsQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFzdC1tb250aC1yZXBvcnRzL2xhc3QtbW9udGgtcmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBzcGFuIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gIH1cbiAgaDEge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi50YXNrLWNvbXBsZXRlZC1ib3gge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAjNWJkODk1IDMyJSwgIzQ1NjczYiA3MSUsICMxYTRiMDAgODglKTtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG4udGFzay1wZW5kaW5nLWJveCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICNkODczNWIgMzIlLCAjYTMxOTE5IDcxJSwgIzlmMDMwMyA4OCUpO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmFjdGlvbi1pdGVtIHtcbiAgY29sb3I6ICMzYjg2ZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIG1hcmdpbjogMzBweCAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmRvdC1wZW5kaW5nIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZG90LWNvbXBsZXRlZCB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMGJhOGQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmxlZ2VuZC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtOSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubGVnZW5kLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IC03JTtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuIl19 */"

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
/* harmony import */ var _my_reports_my_reports_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../my-reports/my-reports.service */ "./src/app/my-reports/my-reports.service.ts");









var LastMonthReportsPage = /** @class */ (function () {
    function LastMonthReportsPage(router, myReportsService, toastController, api, storage, screenOrientation) {
        this.router = router;
        this.myReportsService = myReportsService;
        this.toastController = toastController;
        this.api = api;
        this.storage = storage;
        this.screenOrientation = screenOrientation;
        this.showChart = false;
        this.showSkeleton = false;
        this.skeletons = [{}, {}, {}, {}, {}];
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_3__;
        this.color = "#20ba8d";
    }
    LastMonthReportsPage.prototype.ionViewDidEnter = function () {
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
    };
    LastMonthReportsPage.prototype.ngOnInit = function () {
        // this.getChart();
        if (navigator.onLine) {
            this.getData();
        }
        else {
            this.errorToast('Please check your internet connection.');
        }
    };
    LastMonthReportsPage.prototype.getChart = function () {
        this.showChart = true;
    };
    LastMonthReportsPage.prototype.getData = function () {
        var _this = this;
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
                            _this.report = data.data;
                            _this.setupChart();
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
            this.errorToast('Please check your internet connection.');
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
    LastMonthReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-last-month-reports',
            template: __webpack_require__(/*! ./last-month-reports.page.html */ "./src/app/last-month-reports/last-month-reports.page.html"),
            styles: [__webpack_require__(/*! ./last-month-reports.page.scss */ "./src/app/last-month-reports/last-month-reports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _my_reports_my_reports_service__WEBPACK_IMPORTED_MODULE_8__["MyReportsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _api_api__WEBPACK_IMPORTED_MODULE_4__["ApiProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]])
    ], LastMonthReportsPage);
    return LastMonthReportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=last-month-reports-last-month-reports-module.js.map