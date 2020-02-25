(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses-courses-module"],{

/***/ "./src/app/courses/courses.module.ts":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageModule", function() { return CoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses.page */ "./src/app/courses/courses.page.ts");









var routes = [
    {
        path: '',
        component: _courses_page__WEBPACK_IMPORTED_MODULE_8__["CoursesPage"]
    }
];
var CoursesPageModule = /** @class */ (function () {
    function CoursesPageModule() {
    }
    CoursesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_courses_page__WEBPACK_IMPORTED_MODULE_8__["CoursesPage"]]
        })
    ], CoursesPageModule);
    return CoursesPageModule;
}());



/***/ }),

/***/ "./src/app/courses/courses.page.html":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'resources.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"false\" [isParam]=\"parameter\"> </app-header>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor=\"let resource of projectResources\" (click)=\"openApp(resource.id)\">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col style=\"min-width: 90%;\">\n            {{resource.title}}\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"ios-arrow-forward\"> </ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/courses/courses.page.scss":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%;\n  height: 100%; }\n\n.myCard {\n  position: relative; }\n\n.myOverlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 99;\n  bottom: 0px;\n  opacity: 0.5;\n  background: #000;\n  color: #fff; }\n\n.myOverlay .text {\n    position: absolute;\n    bottom: 0;\n    text-align: center;\n    padding: 10px;\n    font-weight: bold; }\n\nion-card-header + .card-content-md {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9jb3Vyc2VzL2NvdXJzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFpQixFQUFBOztBQUluQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBUmY7SUFVTSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7O0FBR3ZCO0VBRUUsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy9jb3Vyc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICB9XG4gIFxuICAubXlDYXJke1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBcbiAgfVxuICBcbiAgLm15T3ZlcmxheXtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgICBib3R0b206IDBweDtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAudGV4dHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG4gIGlvbi1jYXJkLWhlYWRlcisuY2FyZC1jb250ZW50LW1kXG4gIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/courses/courses.page.ts":
/*!*****************************************!*\
  !*** ./src/app/courses/courses.page.ts ***!
  \*****************************************/
/*! exports provided: CoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPage", function() { return CoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/app-launcher/ngx */ "./node_modules/@ionic-native/app-launcher/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var CoursesPage = /** @class */ (function () {
    function CoursesPage(networkService, network, storage, location, appLauncher, toastController, route) {
        var _this = this;
        this.networkService = networkService;
        this.network = network;
        this.storage = storage;
        this.location = location;
        this.appLauncher = appLauncher;
        this.toastController = toastController;
        this.route = route;
        this.back = '';
        this.projectResources = [{
                title: 'Library Setup',
                id: 'https://bodh.shikshalokam.org/resources/play/content/do_312826092077654016251',
            },
            {
                title: 'Enrollment Drive',
                id: 'https://bodh.shikshalokam.org/resources/play/content/do_3126782017974927362928',
            },
            {
                title: 'student led Assembly',
                id: 'https://bodh.shikshalokam.org/resources/play/collection/do_3128579711319326721444?contentId=do_3127638365193584642461',
            }
        ];
        this.resources = [{
                project: [{
                        projectId: '5d7b81512550177ef7f08c78',
                        resourcesList: [{
                                title: 'Pratibha Karinji',
                                id: 'https://bodh.shikshalokam.org/resources/play/content/do_312828319912845312280',
                            },
                            {
                                title: 'Backward Planning',
                                id: 'https://bodh.shikshalokam.org/resources/play/content/do_3127328250837155841890',
                            },
                            {
                                title: 'Table 2 Audit of your school’s engagement with parents',
                                id: 'https://bodh.shikshalokam.org/resources/play/content/do_3126235500899614722134',
                            }
                        ]
                    },
                    {
                        projectId: '5d7b81512550177ef7f08c79',
                        resourcesList: [{
                                title: 'Developing leadership skills through the Student Parliament program',
                                id: 'https://bodh.shikshalokam.org/resources/play/content/do_3127734629782978561755',
                            }
                        ]
                    },
                    {
                        projectId: '5d7b81512550177ef7f08c7b',
                        resourcesList: [{
                                title: 'Enrolment Drive',
                                id: 'https://bodh.shikshalokam.org/resources/play/content/do_3126782017974927362928',
                            }
                        ]
                    },
                    {
                        projectId: '5d7b81512550177ef7f08c7d',
                        resourcesList: [{
                                title: 'Library: Guidelines',
                                id: 'https://bodh.shikshalokam.org/resources/play/content/do_312826092077654016251',
                            },
                            {
                                title: 'Resource 2: Storytelling, songs, role play and drama',
                                id: 'https://bodh.shikshalokam.org/resources/play/content/do_312465962347151360216433',
                            }
                        ]
                    },
                    {
                        projectId: '5d7b81512550177ef7f08c7c',
                        resourcesList: [{
                                title: 'Zilpa - Students entrepreneurship program',
                                id: 'https://bodh.shikshalokam.org/resources/play/content/do_3127525419856117762135',
                            },
                            {
                                title: 'SLDP -SDI-Approach 1 School Physical Environment-SALA( School as a learning aid - a concept note)',
                                id: 'https://bodh.shikshalokam.org/play/content/do_31268446159337881621295',
                            }
                        ]
                    }
                ]
            }];
        route.params.subscribe(function (param) {
            if (param.cat) {
                _this.parameter = param.cat;
                _this.back = 'project-view/project-detail';
            }
            else {
                _this.back = 'project-view/detail';
            }
        });
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
            _this.checkNetwork();
        });
        this.id = localStorage.getItem("id");
    }
    CoursesPage.prototype.ngOnInit = function () {
        //this.prepareResources();
    };
    //Launch learner App
    CoursesPage.prototype.openApp = function () {
        var _this = this;
        // org.shikshalokam.app://community.shikshalokam.org/learn
        var options = {
            packageName: 'org.shikshalokam.bodh',
        };
        this.appLauncher.canLaunch(options).then(function (canLaunch) {
            if (canLaunch) {
                _this.appLauncher.launch(options).then(function () {
                }, function (err) {
                    if (navigator.onLine) {
                        window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.bodh&hl=en', '_system');
                    }
                    else {
                        _this.errorMessage('Check your internet Connection.');
                    }
                });
            }
            else {
                if (navigator.onLine) {
                    window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.bodh&hl=en', '_system');
                }
                else {
                    _this.errorMessage('Check your internet Connection.');
                }
            }
        }, function (error) {
            if (navigator.onLine) {
                window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.bodh&hl=en', '_system');
            }
            else {
                _this.errorMessage('Check your internet Connection.');
            }
        });
    };
    // Prepare resources
    CoursesPage.prototype.prepareResources = function () {
        var _this = this;
        this.storage.get('currentProject').then(function (cp) {
            _this.resources.forEach(function (resource) {
                resource.project.forEach(function (project) {
                    if (cp._id == project.projectId) {
                        _this.projectResources = project.resourcesList;
                    }
                });
            });
        });
    };
    // Location Back
    CoursesPage.prototype.goBack = function () {
        this.location.back();
    };
    // netwrok Connection
    CoursesPage.prototype.checkNetwork = function () {
        var _this = this;
        this.network.onDisconnect()
            .subscribe(function () {
            _this.connected = false;
        });
        this.network.onConnect()
            .subscribe(function () {
            _this.connected = true;
        });
        // this.networkSubscriber();
    };
    // On destroy
    CoursesPage.prototype.ngOnDestroy = function () {
        this.checkNetwork();
    };
    // Error toast message
    CoursesPage.prototype.errorMessage = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg, color: 'danger',
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
    CoursesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.page.html */ "./src/app/courses/courses.page.html"),
            styles: [__webpack_require__(/*! ./courses.page.scss */ "./src/app/courses/courses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_3__["AppLauncher"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], CoursesPage);
    return CoursesPage;
}());



/***/ })

}]);
//# sourceMappingURL=courses-courses-module.js.map