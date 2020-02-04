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

module.exports = ".status-card {\n  border-radius: 5px;\n  color: #fff; }\n  .status-card span {\n    border-bottom: 2px solid #fff;\n    font-size: 36px; }\n  .status-card h1 {\n    margin-top: 10px; }\n  .task-completed-box {\n  background: linear-gradient(140deg, #5bd895 32%, #45673b 71%, #1a4b00 88%);\n  margin-right: 3px; }\n  .task-pending-box {\n  background: linear-gradient(140deg, #d8735b 32%, #a31919 71%, #9f0303 88%);\n  margin-left: 3px; }\n  .action-item {\n  color: #3b86ff;\n  text-align: center;\n  border-bottom: 1px solid #000;\n  margin: 30px 0px;\n  padding-bottom: 10px; }\n  .dot-pending {\n  height: 16px;\n  width: 16px;\n  background-color: #bfbfbf;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5px; }\n  .dot-completed {\n  height: 16px;\n  width: 16px;\n  background-color: #20ba8d;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5px; }\n  .legend-left {\n  text-align: center;\n  padding: 0px;\n  font-weight: 500;\n  margin-left: -9%; }\n  .legend-right {\n  text-align: center;\n  margin-right: -7%;\n  padding: 0px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvbGFzdC1xdWFydGVyLXJlcG9ydHMvbGFzdC1xdWFydGVyLXJlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtFQUZiO0lBSUksNkJBQTZCO0lBQzdCLGVBQWUsRUFBQTtFQUxuQjtJQVFJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0UsMEVBQTBFO0VBQzFFLGlCQUFpQixFQUFBO0VBRW5CO0VBQ0UsMEVBQTBFO0VBQzFFLGdCQUFnQixFQUFBO0VBRWxCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBO0VBRXRCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTtFQUVuQjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7RUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtFQUVsQjtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFzdC1xdWFydGVyLXJlcG9ydHMvbGFzdC1xdWFydGVyLXJlcG9ydHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgc3BhbiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICB9XG4gIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG4udGFzay1jb21wbGV0ZWQtYm94IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0MGRlZywgIzViZDg5NSAzMiUsICM0NTY3M2IgNzElLCAjMWE0YjAwIDg4JSk7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLnRhc2stcGVuZGluZy1ib3gge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCAjZDg3MzViIDMyJSwgI2EzMTkxOSA3MSUsICM5ZjAzMDMgODglKTtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbi5hY3Rpb24taXRlbSB7XG4gIGNvbG9yOiAjM2I4NmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBtYXJnaW46IDMwcHggMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5kb3QtcGVuZGluZyB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5kb3QtY29tcGxldGVkIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwYmE4ZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmxlZ2VuZC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1sZWZ0OiAtOSU7XG59XG4ubGVnZW5kLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IC03JTtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuIl19 */"

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
        var totalTask;
        var completed;
        if (this.report.completed > 0 || this.report.pending > 0) {
            totalTask = this.report.completed + this.report.pending;
            completed = (this.report.completed / totalTask) * 100;
            completed = completed.toFixed(0);
        }
        else {
            this.report.completed = 0;
            this.report.pending = 0;
            completed = 0;
        }
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