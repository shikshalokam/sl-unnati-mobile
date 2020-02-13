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

module.exports = "<ion-header>\n  <app-header\n    [title]=\"'fullreports.title' | translate\"\n    [showMenu]=\"false\"\n    [showBack]=\"true\"\n    [isGoBack]=\"back\"\n    [noBorder]=\"false\"\n  >\n  </app-header>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h5 *ngIf=\"state == 'latsMonth'\">\n    {{ \"fullreports.undertaken_prjcts_inmonth\" | translate }}\n  </h5>\n  <h5 *ngIf=\"state == 'lastQuarter'\">\n    {{ \"fullreports.undertaken_prjcts_inqrtr\" | translate }}\n  </h5>\n  <!-- <ion-card *ngFor=\"let report of reports; let i = index\">\n    <ion-card-header>\n      {{ report.title.text }}\n    </ion-card-header>\n  </ion-card> -->\n  <!-- <div >\n    <ion-card>\n      <ion-card-header> Project Name </ion-card-header>\n      <ion-card-content id=\"container0\"> </ion-card-content>\n    </ion-card>\n    <ion-card id=\"container1\"></ion-card>\n    <ion-card id=\"container2\"></ion-card>\n    <ion-card id=\"container3\"></ion-card>\n    <ion-card id=\"container4\"></ion-card>\n    <ion-card id=\"container5\"></ion-card>\n    <ion-card id=\"container6\"></ion-card>\n    <ion-card id=\"container7\"></ion-card>\n    <ion-card id=\"container8\"></ion-card>\n    <ion-card id=\"container9\"></ion-card>\n  </div> -->\n\n  <div>\n    <ion-card\n      *ngFor=\"let report of reports; let i = index\"\n      style=\"background: #f5f5f5b8;\n    border-radius: 10px;\"\n    >\n      <ion-card-header class=\"chart-title\">\n        {{ report.title.text }}\n      </ion-card-header>\n      <ion-card-content>\n        <div id=\"{{ idvalue }}{{ i }}\"></div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <!-- <div *ngIf=\"chartOptions\">\n    <highcharts-chart\n      [Highcharts]=\"highcharts\"\n      [options]=\"chartOptions\"\n      style=\"width: 100%; height: 400px; display: block;\"\n    >\n    </highcharts-chart>\n  </div> -->\n  <div *ngIf=\"showSkeleton\">\n    <ion-card>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-content class=\"skeleton-card-content\">\n            <p>\n              <ion-skeleton-text\n                animated\n                style=\" width: 48%;\n                        float: left;height: 200px;\n                        margin-left: 2%;\"\n              ></ion-skeleton-text>\n              <ion-skeleton-text\n                animated\n                animated\n                style=\" width: 48%;\n                        float: left;\n                        margin-left: 2%;height: 200px;\"\n              ></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/fullreports/fullreports.page.scss":
/*!***************************************************!*\
  !*** ./src/app/fullreports/fullreports.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-title {\n  color: #4d4f5c;\n  margin-bottom: 20px;\n  font-family: Source Code Pro-Bold; }\n\n.highcharts-yaxis .highcharts-axis-line {\n  stroke-width: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvZnVsbHJlcG9ydHMvZnVsbHJlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQ0FBaUMsRUFBQTs7QUE2Qm5DO0VBQ0UsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mdWxscmVwb3J0cy9mdWxscmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQtdGl0bGUge1xuICBjb2xvcjogIzRkNGY1YztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBDb2RlIFByby1Cb2xkO1xufVxuXG4vLyAjY29udGFpbmVyMCxcbi8vICNjb250YWluZXIxLFxuLy8gI2NvbnRhaW5lcjIsXG4vLyAjY29udGFpbmVyMyxcbi8vICNjb250YWluZXI0LFxuLy8gI2NvbnRhaW5lcjUsXG4vLyAjY29udGFpbmVyNixcbi8vICNjb250YWluZXI3LFxuLy8gI2NvbnRhaW5lcjgsXG4vLyAjY29udGFpbmVyOSxcbi8vICNjb250YWluZXIxMCxcbi8vICNjb250YWluZXIxMSxcbi8vICNjb250YWluZXIxMixcbi8vICNjb250YWluZXIxMyxcbi8vICNjb250YWluZXIxNCxcbi8vICNjb250YWluZXIxNSxcbi8vICNjb250YWluZXIxNixcbi8vICNjb250YWluZXIxNyxcbi8vICNjb250YWluZXIxOCxcbi8vICNjb250YWluZXIxOSxcbi8vICNjb250YWluZXIyMCB7XG4vLyAgIG1heC13aWR0aDogMzUwcHg7XG4vLyAgIG1pbi13aWR0aDogMzUwcHg7XG4vLyAgIGhlaWdodDogNDAwcHg7XG4vLyAgIHdpZHRoOiA0MDBweDtcbi8vIH1cbi5oaWdoY2hhcnRzLXlheGlzIC5oaWdoY2hhcnRzLWF4aXMtbGluZSB7XG4gIHN0cm9rZS13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

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








var FullreportsPage = /** @class */ (function () {
    function FullreportsPage(activatedRoute, screenOrientation, router, myReportsService, api, storage) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.screenOrientation = screenOrientation;
        this.router = router;
        this.myReportsService = myReportsService;
        this.api = api;
        this.storage = storage;
        this.idvalue = 'container';
        this.highcharts = highcharts_highcharts_gantt__WEBPACK_IMPORTED_MODULE_6__;
        this.showCharts = false;
        this.showSkeleton = false;
        this.skeleton = [{}];
        this.back = "/project-view/my-reports/last-month-reports";
        activatedRoute.params.subscribe(function (params) {
            _this.state = params.state;
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
        this.showSkeleton = false;
        for (var i = 0; i <= this.reports.length; i++) {
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
    };
    // go back
    FullreportsPage.prototype.goBack = function () {
        this.router.navigate(['/project-view/my-reports/last-' + this.state + '-reports']);
    };
    FullreportsPage.prototype.ngOnDestroy = function () {
        // try {
        //   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        // } catch (error) {
        // }
    };
    FullreportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fullreports',
            template: __webpack_require__(/*! ./fullreports.page.html */ "./src/app/fullreports/fullreports.page.html"),
            styles: [__webpack_require__(/*! ./fullreports.page.scss */ "./src/app/fullreports/fullreports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _my_reports_my_reports_service__WEBPACK_IMPORTED_MODULE_3__["MyReportsService"], _api_api__WEBPACK_IMPORTED_MODULE_4__["ApiProvider"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], FullreportsPage);
    return FullreportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=fullreports-fullreports-module.js.map