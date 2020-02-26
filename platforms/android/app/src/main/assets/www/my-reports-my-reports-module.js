(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-reports-my-reports-module"],{

/***/ "./src/app/my-reports/my-reports.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-reports/my-reports.module.ts ***!
  \*************************************************/
/*! exports provided: MyReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyReportsPageModule", function() { return MyReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _my_reports_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-reports.page */ "./src/app/my-reports/my-reports.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");










var routes = [
    {
        path: '',
        component: _my_reports_page__WEBPACK_IMPORTED_MODULE_7__["MyReportsPage"],
        children: [
            { path: 'last-month-reports', loadChildren: '../last-month-reports/last-month-reports.module#LastMonthReportsPageModule' },
            { path: 'last-quarter-reports', loadChildren: '../last-quarter-reports/last-quarter-reports.module#LastQuarterReportsPageModule' }
        ]
    }
];
var MyReportsPageModule = /** @class */ (function () {
    function MyReportsPageModule() {
    }
    MyReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({})
            ],
            declarations: [_my_reports_page__WEBPACK_IMPORTED_MODULE_7__["MyReportsPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__["ScreenOrientation"]]
        })
    ], MyReportsPageModule);
    return MyReportsPageModule;
}());



/***/ }),

/***/ "./src/app/my-reports/my-reports.page.html":
/*!*************************************************!*\
  !*** ./src/app/my-reports/my-reports.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n    <ion-header\n      style=\"position: initial; z-index: auto;\"\n    >\n      <app-header\n        [title]=\"'myreports.title' | translate\"\n        [showMenu]=\"false\"\n        [showBack]=\"true\"\n        [noBorder]=\"false\"\n      [isGoBack]=\"back\"\n      >\n      </app-header>\n      <ion-tab-bar slot=\"top\">\n        <ion-tab-button tab=\"last-month-reports\">\n          <ion-label>{{ \"myreports.last_month\" | translate }}</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"last-quarter-reports\">\n          <ion-label>{{ \"myreports.last_quarter\" | translate }}</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-header>\n  </ion-tabs>"

/***/ }),

/***/ "./src/app/my-reports/my-reports.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-reports/my-reports.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-selected {\n  border-bottom: 4px solid #b23e33; }\n\nion-tab-button ion-label {\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9teS1yZXBvcnRzL215LXJlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQStCLEVBQUE7O0FBRW5DO0VBRVEsZUFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXktcmVwb3J0cy9teS1yZXBvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItc2VsZWN0ZWRcbntcbiAgICBib3JkZXItYm90dG9tOjRweCBzb2xpZCAjYjIzZTMzO1xufVxuaW9uLXRhYi1idXR0b24ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/my-reports/my-reports.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-reports/my-reports.page.ts ***!
  \***********************************************/
/*! exports provided: MyReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyReportsPage", function() { return MyReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _my_reports_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-reports.service */ "./src/app/my-reports/my-reports.service.ts");













var MyReportsPage = /** @class */ (function () {
    function MyReportsPage(router, screenOrientation, file, platform, socialSharing, fileChooser, base64, fileOpener, transfer, toastService, myReportsService) {
        var _this = this;
        this.router = router;
        this.screenOrientation = screenOrientation;
        this.file = file;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.fileChooser = fileChooser;
        this.base64 = base64;
        this.fileOpener = fileOpener;
        this.transfer = transfer;
        this.toastService = toastService;
        this.myReportsService = myReportsService;
        this.back = "project-view/home";
        myReportsService.shareEvent.subscribe(function (data) {
            _this.share(data);
        });
        myReportsService.downloadEvent.subscribe(function (data) {
            _this.download(data);
        });
        this.platform.ready().then(function () {
            _this.isIos = _this.platform.is('ios') ? true : false;
            _this.appFolderPath = _this.isIos ? cordova.file.documentsDirectory + 'projects' : cordova.file.externalDataDirectory + 'projects';
        });
    }
    MyReportsPage.prototype.ngOnInit = function () {
    };
    MyReportsPage.prototype.ionViewDidEnter = function () {
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
    };
    //  Go back 
    MyReportsPage.prototype.goBack = function () {
        this.router.navigate(['/project-view/home']);
    };
    MyReportsPage.prototype.share = function (data) {
        var _this = this;
        var fileName = 'LastMonthReport';
        var fileTransfer = this.transfer.create();
        var url = data.pdfUrl;
        fileTransfer.download(url, this.appFolderPath + '/' + fileName).then(function (entry) {
            _this.base64.encodeFile(entry.nativeURL).then(function (base64File) {
                var data = base64File.split(',');
                var base64Data = "data:application/pdf;base64," + data[1];
                _this.socialSharing.share("", fileName, base64Data, "").then(function () {
                }, function (error) {
                    // intentially left blank
                });
            }, function (err) {
                _this.toastService.stopLoader();
            });
        }, function (error) {
            _this.toastService.stopLoader();
        });
    };
    MyReportsPage.prototype.download = function (data) {
        var _this = this;
        fetch(data.pdfUrl, {
            method: "GET"
        }).then(function (res) { return res.blob(); }).then(function (blob) {
            _this.appFolderPath = decodeURIComponent(_this.appFolderPath);
            // task.file.name = decodeURIComponent(task.file.name);
            _this.file.writeFile(_this.appFolderPath, 'LastMonthReport', blob, { replace: true }).then(function (res) {
                _this.fileOpener.open(res.toInternalURL(), 'application/pdf').then(function (res) {
                    console.log(res, 'sucess');
                }).catch(function (err) {
                    console.log(err, 'error');
                });
            }).catch(function (err) {
                console.log('error in catch');
            });
        }).catch(function (err) {
            console.log('error');
        });
    };
    MyReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-reports',
            template: __webpack_require__(/*! ./my-reports.page.html */ "./src/app/my-reports/my-reports.page.html"),
            styles: [__webpack_require__(/*! ./my-reports.page.scss */ "./src/app/my-reports/my-reports.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_9__["Base64"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__["FileOpener"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
            _toast_service__WEBPACK_IMPORTED_MODULE_11__["ToastService"],
            _my_reports_service__WEBPACK_IMPORTED_MODULE_12__["MyReportsService"]])
    ], MyReportsPage);
    return MyReportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-reports-my-reports-module.js.map