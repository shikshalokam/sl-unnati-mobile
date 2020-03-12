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

module.exports = "<ion-tabs>\n    <ion-header\n      style=\"position: initial; z-index: auto;\"\n    >\n      <app-header\n        [title]=\"'myreports.title' | translate\"\n        [showMenu]=\"false\"\n        [showBack]=\"true\"\n        [noBorder]=\"true\"\n      [isGoBack]=\"back\"\n      >\n      </app-header>\n      <ion-tab-bar slot=\"top\" style=\" border-bottom:2px solid #b23e33;\">\n        <ion-tab-button tab=\"last-month-reports\" style=\"max-width: 50%;\">\n          <ion-label>{{ \"myreports.last_month\" | translate }}</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"last-quarter-reports\" style=\"max-width: 50%;\">\n          <ion-label>{{ \"myreports.last_quarter\" | translate }}</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-header>\n  </ion-tabs>"

/***/ }),

/***/ "./src/app/my-reports/my-reports.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-reports/my-reports.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-selected {\n  background: #b23e33;\n  color: #fff; }\n\nion-tab-button ion-label {\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9teS1yZXBvcnRzL215LXJlcG9ydHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQW1CO0VBQ25CLFdBQVUsRUFBQTs7QUFFZDtFQUVRLGVBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL215LXJlcG9ydHMvbXktcmVwb3J0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLXNlbGVjdGVkXG57XG4gICAgYmFja2dyb3VuZDogI2IyM2UzMztcbiAgICBjb2xvcjojZmZmO1xufVxuaW9uLXRhYi1idXR0b24ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIH1cbn0iXX0= */"

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
/* harmony import */ var _myschools_myschools_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../myschools/myschools.service */ "./src/app/myschools/myschools.service.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
















var MyReportsPage = /** @class */ (function () {
    function MyReportsPage(router, screenOrientation, file, platform, socialSharing, fileChooser, base64, fileOpener, transfer, toastService, myReportsService, mySchoolsService, api, storage) {
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
        this.mySchoolsService = mySchoolsService;
        this.api = api;
        this.storage = storage;
        this.back = "project-view/home";
        this.connected = navigator.onLine;
        myReportsService.reportEvent.subscribe(function (data) {
            // this.share(data);
            _this.platform.ready().then(function () {
                _this.isIos = _this.platform.is('ios') ? true : false;
                _this.appFolderPath = _this.isIos ? cordova.file.documentsDirectory + 'projects' : cordova.file.externalDataDirectory + 'projects';
                if (data.isFullReport) {
                    _this.getFullReport(data);
                }
                else {
                    _this.getReport(data);
                }
            });
        });
    }
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
    MyReportsPage.prototype.getReport = function (mySchools) {
        var _this = this;
        if (this.connected) {
            this.storage.get('userTokens').then(function (data) {
                _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                    var parsedData = JSON.parse(data._body);
                    if (parsedData && parsedData.access_token) {
                        var userTokens = {
                            access_token: parsedData.access_token,
                            refresh_token: parsedData.refresh_token,
                        };
                        _this.storage.set('userTokens', userTokens).then(function (data) {
                            _this.toastService.startLoader('Loading Please wait');
                            _this.myReportsService.getReportData(parsedData.access_token, mySchools).subscribe(function (data) {
                                _this.toastService.stopLoader();
                                if (data.status != 'failed') {
                                    if (mySchools.type === 'share') {
                                        _this.share(data);
                                    }
                                    else {
                                        _this.toastService.stopLoader();
                                        _this.download(data);
                                    }
                                }
                            }, function (error) {
                                _this.toastService.stopLoader();
                            });
                        });
                        //resolve()
                    }
                }, function (error) {
                });
            });
        }
        else {
            this.toastService.errorToast('message.nerwork_connection_check');
        }
    };
    MyReportsPage.prototype.getFullReport = function (mySchools) {
        var _this = this;
        if (this.connected) {
            this.storage.get('userTokens').then(function (data) {
                _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                    var parsedData = JSON.parse(data._body);
                    if (parsedData && parsedData.access_token) {
                        var userTokens = {
                            access_token: parsedData.access_token,
                            refresh_token: parsedData.refresh_token,
                        };
                        _this.storage.set('userTokens', userTokens).then(function (data) {
                            _this.toastService.startLoader('Loading Please wait');
                            _this.myReportsService.getFullReportData(parsedData.access_token, mySchools).subscribe(function (data) {
                                _this.toastService.stopLoader();
                                if (data.status != 'failed') {
                                    if (mySchools.type === 'share') {
                                        _this.share(data);
                                    }
                                    else {
                                        _this.download(data);
                                    }
                                }
                            }, function (error) {
                                _this.toastService.stopLoader();
                            });
                        });
                        //resolve()
                    }
                }, function (error) {
                });
            });
        }
        else {
            this.toastService.errorToast('message.nerwork_connection_check');
        }
    };
    MyReportsPage.prototype.share = function (data) {
        var _this = this;
        this.toastService.startLoader('Loading Please wait');
        var fileName = 'Report';
        var fileTransfer = this.transfer.create();
        var url = data.pdfUrl;
        fileTransfer.download(url, this.appFolderPath + '/' + fileName).then(function (entry) {
            _this.base64.encodeFile(entry.nativeURL).then(function (base64File) {
                var data = base64File.split(',');
                var base64Data = "data:application/pdf;base64," + data[1];
                _this.socialSharing.share("", fileName, base64Data, "").then(function (data) {
                    _this.toastService.stopLoader();
                }, function (error) {
                    _this.toastService.stopLoader();
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
            var filename = decodeURIComponent('Report');
            _this.file.writeFile(_this.appFolderPath, 'Report', blob, { replace: true }).then(function (res) {
                _this.fileOpener.open(res.toInternalURL(), 'application/pdf').then(function (res) {
                }).catch(function (err) {
                });
            }).catch(function (err) {
            });
        }).catch(function (err) {
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
            _my_reports_service__WEBPACK_IMPORTED_MODULE_12__["MyReportsService"],
            _myschools_myschools_service__WEBPACK_IMPORTED_MODULE_13__["MyschoolsService"],
            _api_api__WEBPACK_IMPORTED_MODULE_14__["ApiProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["Storage"]])
    ], MyReportsPage);
    return MyReportsPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-reports-my-reports-module.js.map