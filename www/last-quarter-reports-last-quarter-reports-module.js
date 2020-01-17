(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["last-quarter-reports-last-quarter-reports-module"],{

/***/ "./src/app/last-quarter-reports/last-quarter-reports.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/last-quarter-reports/last-quarter-reports.module.ts ***!
  \*********************************************************************/
/*! exports provided: LastQuarterReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastQuarterReportsPageModule", function() { return LastQuarterReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _last_quarter_reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./last-quarter-reports.page */ "./src/app/last-quarter-reports/last-quarter-reports.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");










var routes = [
    {
        path: '',
        component: _last_quarter_reports_page__WEBPACK_IMPORTED_MODULE_6__["LastQuarterReportsPage"]
    }
];
var LastQuarterReportsPageModule = /** @class */ (function () {
    function LastQuarterReportsPageModule() {
    }
    LastQuarterReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
            ],
            declarations: [_last_quarter_reports_page__WEBPACK_IMPORTED_MODULE_6__["LastQuarterReportsPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__["ScreenOrientation"]]
        })
    ], LastQuarterReportsPageModule);
    return LastQuarterReportsPageModule;
}());



/***/ }),

/***/ "./src/app/last-quarter-reports/last-quarter-reports.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/last-quarter-reports/last-quarter-reports.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div *ngIf=\"report\">\n    <h5>\n      {{ \"last_quarter_report.projects_cmpltd_lstqrtr\" | translate }}\n    </h5>\n    <div>{{ report.startMonth }} - {{ report.endMonth }}</div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"status-card task-completed-box\">\n          <h3>{{ \"last_quarter_report.completed\" | translate }}</h3>\n          <h1>\n            <span  *ngIf=\"report.completed <= 9\"> 0{{ report.completed }} &nbsp;</span>\n            <span  *ngIf=\"report.completed >= 10\"> {{ report.completed }} &nbsp;</span>\n          </h1>\n        </ion-col>\n        <ion-col class=\"status-card task-pending-box\">\n          <h3>{{ \"last_quarter_report.pending\" | translate }}</h3>\n          <h1>\n            <span *ngIf=\"report.pending <= 9\"> 0{{ report.pending }} &nbsp;</span>\n            <span *ngIf=\"report.pending >= 10\"> {{ report.pending }} &nbsp;</span>\n          </h1>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class=\"action-item\" (click)=\"viewFullReport('lastQuarter')\">\n      {{ \"last_quarter_report.view_full_reports\" | translate }}\n    </div>\n    <!-- <div class=\"action-item\"></div> -->\n    <h5>\n      {{ \"last_quarter_report.tasks_cmpltd_lstmnth\" | translate }}\n    </h5>\n    <div>{{ report.startMonth }} - {{ report.endMonth }}</div>\n    <div *ngIf=\"chartOptions\">\n      <highcharts-chart\n        [Highcharts]=\"highcharts\"\n        [options]=\"chartOptions\"\n        style=\"width: 100%; height: 400px; display: block;\"\n      >\n      </highcharts-chart>\n    </div>\n    <ion-row>\n      <ion-col class=\"legend-left\">\n        <span class=\"dot-pending\"> &nbsp; </span> Tasks Pending <br />\n        <span style=\"font-size:24px; \">{{ report.pending }}</span>\n      </ion-col>\n      <ion-col class=\"legend-right\">\n        <span class=\"dot-completed\"> &nbsp; </span> Tasks Completed <br />\n        <span style=\"font-size:24px; \">{{ report.completed }}</span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div *ngIf=\"showSkeleton\">\n    <div class=\"skeleton-card-content\">\n      <ion-card *ngFor=\"let skeleton of skeletons\">\n        <ion-card-content class=\"skeleton-card-content\">\n          <p><ion-skeleton-text animated></ion-skeleton-text></p>\n          <p>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/last-quarter-reports/last-quarter-reports.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/last-quarter-reports/last-quarter-reports.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-card {\n  border-radius: 5px;\n  color: #fff; }\n  .status-card span {\n    border-bottom: 2px solid #fff;\n    font-size: 36px; }\n  .status-card h1 {\n    margin-top: 10px; }\n  .task-completed-box {\n  background: linear-gradient(140deg, #5bd895 32%, #45673b 71%, #1a4b00 88%);\n  margin-right: 3px; }\n  .task-pending-box {\n  background: linear-gradient(140deg, #d8735b 32%, #a31919 71%, #9f0303 88%);\n  margin-left: 3px; }\n  .action-item {\n  color: #3b86ff;\n  text-align: center;\n  border-bottom: 1px solid #000;\n  margin: 30px 0px;\n  padding-bottom: 10px; }\n  .dot-pending {\n  height: 16px;\n  width: 16px;\n  background-color: #bfbfbf;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5px; }\n  .dot-completed {\n  height: 16px;\n  width: 16px;\n  background-color: #20ba8d;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5px; }\n  .legend-left {\n  text-align: center;\n  padding: 0px;\n  font-weight: 500;\n  margin-left: -9%; }\n  .legend-right {\n  text-align: center;\n  margin-right: -7%;\n  padding: 0px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9Vbm5hdGktbW9iaWxlL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9sYXN0LXF1YXJ0ZXItcmVwb3J0cy9sYXN0LXF1YXJ0ZXItcmVwb3J0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBRmI7SUFJSSw2QkFBNkI7SUFDN0IsZUFBZSxFQUFBO0VBTG5CO0lBUUksZ0JBQWdCLEVBQUE7RUFHcEI7RUFDRSwwRUFBMEU7RUFDMUUsaUJBQWlCLEVBQUE7RUFFbkI7RUFDRSwwRUFBMEU7RUFDMUUsZ0JBQWdCLEVBQUE7RUFFbEI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7RUFFdEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBO0VBRW5CO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTtFQUVuQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0VBRWxCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXN0LXF1YXJ0ZXItcmVwb3J0cy9sYXN0LXF1YXJ0ZXItcmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBzcGFuIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gIH1cbiAgaDEge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi50YXNrLWNvbXBsZXRlZC1ib3gge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAjNWJkODk1IDMyJSwgIzQ1NjczYiA3MSUsICMxYTRiMDAgODglKTtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG4udGFzay1wZW5kaW5nLWJveCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsICNkODczNWIgMzIlLCAjYTMxOTE5IDcxJSwgIzlmMDMwMyA4OCUpO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmFjdGlvbi1pdGVtIHtcbiAgY29sb3I6ICMzYjg2ZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIG1hcmdpbjogMzBweCAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmRvdC1wZW5kaW5nIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmRvdC1jb21wbGV0ZWQge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBiYThkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubGVnZW5kLWxlZnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWxlZnQ6IC05JTtcbn1cbi5sZWdlbmQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogLTclO1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/last-quarter-reports/last-quarter-reports.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/last-quarter-reports/last-quarter-reports.page.ts ***!
  \*******************************************************************/
/*! exports provided: LastQuarterReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastQuarterReportsPage", function() { return LastQuarterReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _my_reports_my_reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../my-reports/my-reports.service */ "./src/app/my-reports/my-reports.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");









var LastQuarterReportsPage = /** @class */ (function () {
    function LastQuarterReportsPage(router, myReportsService, toastController, api, storage, screenOrientation) {
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
        // chartOptions = {
        //   chart: {
        //     type: 'pie',
        //     plotBorderWidth: null,
        //     plotShadow: false
        //   },
        //   title: {
        //     text: ''
        //   },
        //   tooltip: {
        //     pointFormat: '{series.name}: <b>{point.percentage:}%</b>'
        //   },
        //   plotOptions: {
        //     pie: {
        //       shadow: false,
        //       center: ['50%', '50%'],
        //     }
        //   },
        //   series: [{
        //     name: 'Tasks',
        //     data: [["Completed", 6], ["Pending", 4]],
        //     size: '70%',
        //     innerSize: '50%',
        //     showInLegend: true,
        //     dataLabels: {
        //       enabled: false
        //     }
        //   }]
        // };
        this.color = "#20ba8d";
    }
    LastQuarterReportsPage.prototype.ionViewDidEnter = function () {
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
    };
    LastQuarterReportsPage.prototype.ngOnInit = function () {
        if (navigator.onLine) {
            this.getData();
        }
        else {
            this.errorToast('Please check your internet connection.');
        }
    };
    LastQuarterReportsPage.prototype.getChart = function () {
        this.showChart = true;
    };
    LastQuarterReportsPage.prototype.viewFullReport = function (value) {
        if (navigator.onLine) {
            this.router.navigate(['project-view/fullreports', value]);
        }
        else {
            this.errorToast('Please check your internet connection.');
        }
    };
    LastQuarterReportsPage.prototype.getData = function () {
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
                        _this.myReportsService.getReports(userTokens_1.access_token, 'lastQuarter').subscribe(function (data) {
                            _this.report = data.data;
                            _this.setupChart();
                            _this.showSkeleton = false;
                        });
                    }, function (error) {
                        _this.showSkeleton = false;
                    });
                }
            }, function (error) {
                _this.showSkeleton = true;
            });
        });
    };
    LastQuarterReportsPage.prototype.setupChart = function () {
        var totalTask = this.report.completed + this.report.pending;
        var completed = (this.report.completed / totalTask) * 100;
        completed = completed.toFixed(0);
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
                        '#20ba8d',
                        '#adafad'
                    ],
                }
            },
            series: [{
                    name: "Tasks",
                    data: [["Pending", this.report.pending], ["Completed", this.report.completed]],
                    size: '90%',
                    innerSize: '70%',
                    showInLegend: true,
                    dataLabels: {
                        enabled: false
                    }
                }]
        };
    };
    // Display error Message
    LastQuarterReportsPage.prototype.errorToast = function (msg) {
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
    LastQuarterReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-last-quarter-reports',
            template: __webpack_require__(/*! ./last-quarter-reports.page.html */ "./src/app/last-quarter-reports/last-quarter-reports.page.html"),
            styles: [__webpack_require__(/*! ./last-quarter-reports.page.scss */ "./src/app/last-quarter-reports/last-quarter-reports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _my_reports_my_reports_service__WEBPACK_IMPORTED_MODULE_6__["MyReportsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _api_api__WEBPACK_IMPORTED_MODULE_4__["ApiProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]])
    ], LastQuarterReportsPage);
    return LastQuarterReportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=last-quarter-reports-last-quarter-reports-module.js.map