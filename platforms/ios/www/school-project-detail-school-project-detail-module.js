(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["school-project-detail-school-project-detail-module"],{

/***/ "./src/app/school-project-detail/school-project-detail.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/school-project-detail/school-project-detail.module.ts ***!
  \***********************************************************************/
/*! exports provided: SchoolProjectDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolProjectDetailPageModule", function() { return SchoolProjectDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _school_project_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./school-project-detail.page */ "./src/app/school-project-detail/school-project-detail.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");









var routes = [
    {
        path: '',
        component: _school_project_detail_page__WEBPACK_IMPORTED_MODULE_6__["SchoolProjectDetailPage"]
    }
];
var SchoolProjectDetailPageModule = /** @class */ (function () {
    function SchoolProjectDetailPageModule() {
    }
    SchoolProjectDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_school_project_detail_page__WEBPACK_IMPORTED_MODULE_6__["SchoolProjectDetailPage"]]
        })
    ], SchoolProjectDetailPageModule);
    return SchoolProjectDetailPageModule;
}());



/***/ }),

/***/ "./src/app/school-project-detail/school-project-detail.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/school-project-detail/school-project-detail.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <app-header\n      [title]=\"'projectDetail.title' | translate\"\n      [showMenu]=\"false\"\n      [showBack]=\"true\"\n      [isGoBack]=\"back\"\n      [noBorder]=\"false\"\n    >\n    </app-header>\n  </ion-header>\n  <ion-content>\n    <div *ngIf=\"project && !showSkeleton\">\n      <h4 style=\"padding: 0px 10px;\">{{ project.title }}</h4>\n      <ion-card class=\"welcome-card custom-card\">\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-label>{{ \"projectDetail.goal\" | translate }} </ion-label\n                ><br />\n                <p>{{ project.goal }}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-label>{{ \"projectDetail.duration\" | translate }} </ion-label\n                ><br />\n                <p>{{ project.duration }}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-label style=\"float:left;\"\n                  >{{ \"projectDetail.status\" | translate }}\n                </ion-label>\n                <p\n                  class=\"status notyetstarted\"\n                  *ngIf=\"\n                    project.status == 'not started yet' ||\n                    project.status == 'not yet started'\n                  \"\n                >\n                  {{ project.status }}\n                </p>\n                <p\n                  class=\"status inprogress\"\n                  *ngIf=\"project.status == 'in progress'\"\n                >\n                  {{ project.status }}\n                </p>\n                <p class=\"status completed\" *ngIf=\"project.status == 'completed'\">\n                  {{ project.status }}\n                </p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <div style=\"text-align: center;\">\n            <ion-button\n              style=\"--border-radius: 20px;\"\n              size=\"small\"\n              [routerLink]=\"['/project-view/courses']\"\n            >\n              {{ \"projectDetail.view_resources\" | translate }}\n            </ion-button>\n          </div>\n        </ion-card-content>\n      </ion-card>\n      <div class=\"task-board\" *ngIf=\"project.tasks\">\n        <h4 style=\"padding: 10px;\">{{ \"tasks.title\" | translate }}</h4>\n        <div *ngFor=\"let task of project.tasks\">\n          <ion-card *ngIf=\"!project.isDeleted\" (click)=\"navigateToView(task._id)\">\n            <ion-card-content\n              ><ion-row>\n                <ion-col style=\"min-width: 85%;\"> {{ task.title }}</ion-col\n                ><ion-col>\n                  <i class=\"material-icons\" style=\"float: right;\">\n                    add_circle\n                  </i></ion-col\n                ></ion-row\n              >\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n      <div class=\"featured-btn\">\n        <ion-button size=\"small\" (click)=\"createTask()\">\n          {{ \"projectDetail.create_task\" | translate }}\n          <i class=\"material-icons\" style=\" margin-left: 5px;\">\n            add_box\n          </i>\n        </ion-button>\n      </div>\n      <div class=\"featured-btn\">\n        <ion-button\n          style=\"--border-radius:20px;\"\n          color=\"success\"\n          size=\"small\"\n          (click)=\"syncConfirm()\"\n        >\n          {{ \"sync\" | translate }}\n        </ion-button>\n      </div>\n    </div>\n    <div *ngIf=\"showSkeleton\">\n      <ion-card *ngFor=\"let skeleton of skeletons\" class=\"custom-card\">\n        <ion-card-header>\n          <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        </ion-card-header>\n        <ion-card-content class=\"skeleton-card-content\">\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/school-project-detail/school-project-detail.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/school-project-detail/school-project-detail.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col div {\n  color: #000; }\n  ion-col div ion-label {\n    font-weight: 600; }\n  .label-divider {\n  border-bottom: 1px solid #eee; }\n  .label-divider p {\n    text-align: justify; }\n  ion-progress-bar {\n  height: 8px; }\n  .can-go-back header-component ion-back-button {\n  display: block; }\n  #title {\n  padding-left: 10px;\n  padding-right: 10px; }\n  .progress-bar {\n  font-size: 16px;\n  margin-bottom: 5px; }\n  .md .toolbar-title {\n  text-overflow: inherit;\n  white-space: normal;\n  text-align: left;\n  font-size: 1.3em; }\n  .task-board {\n  background: #e4e4e4;\n  margin: 10px;\n  padding-bottom: 5px; }\n  .task-board ion-card {\n    background: #fff;\n    color: #000;\n    border-radius: 0px; }\n  .task-board ion-button {\n    --border-radius: 20px; }\n  .featured-btn {\n  text-align: center;\n  padding-bottom: 10px; }\n  .status {\n  float: right;\n  color: #fff;\n  padding: 0px 10px 0px 10px;\n  border-radius: 20px; }\n  .inprogress {\n  background: #ef4e35; }\n  .completed {\n  background: #70ef35; }\n  .notyetstarted {\n  background: #e4e4e4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvc2Nob29sLXByb2plY3QtZGV0YWlsL3NjaG9vbC1wcm9qZWN0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFVLEVBQUE7RUFGZDtJQUlJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0ksNkJBQTRCLEVBQUE7RUFEaEM7SUFHUSxtQkFBbUIsRUFBQTtFQUczQjtFQUVJLFdBQVUsRUFBQTtFQUVkO0VBQ0ksY0FBYyxFQUFBO0VBRWhCO0VBRUksa0JBQWtCO0VBQ2xCLG1CQUFrQixFQUFBO0VBRXRCO0VBRUUsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBRXRCO0VBQ0ksc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWUsRUFBQTtFQUVsQjtFQUNHLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsbUJBQW1CLEVBQUE7RUFIdEI7SUFLTyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQixFQUFBO0VBUHpCO0lBVU8scUJBQWdCLEVBQUE7RUFHdkI7RUFDRyxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUE7RUFFdkI7RUFDRyxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtFQUMxQixtQkFBbUIsRUFBQTtFQUV0QjtFQUVJLG1CQUFtQixFQUFBO0VBRXZCO0VBRUksbUJBQW1CLEVBQUE7RUFFdkI7RUFFSSxtQkFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2Nob29sLXByb2plY3QtZGV0YWlsL3NjaG9vbC1wcm9qZWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIGRpdiBcbntcbiAgICBjb2xvcjojMDAwO1xuICAgIGlvbi1sYWJlbHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxufVxuLmxhYmVsLWRpdmlkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2VlZTtcbiAgICBwe1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cbn1cbmlvbi1wcm9ncmVzcy1iYXJcbntcbiAgICBoZWlnaHQ6OHB4O1xufVxuLmNhbi1nby1iYWNrIGhlYWRlci1jb21wb25lbnQgaW9uLWJhY2stYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAjdGl0bGVcbiAge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDoxMHB4O1xuICB9XG4gIC5wcm9ncmVzcy1iYXJcbiAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWQgLnRvb2xiYXItdGl0bGUge1xuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZToxLjNlbTtcbiB9XG4gLnRhc2stYm9hcmR7XG4gICAgYmFja2dyb3VuZDojZTRlNGU0O1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgaW9uLWNhcmR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gfVxuIC5mZWF0dXJlZC1idG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuIH1cbiAuc3RhdHVze1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuIH1cbiAuaW5wcm9ncmVzc1xuIHtcbiAgICAgYmFja2dyb3VuZDogI2VmNGUzNTtcbiB9XG4gLmNvbXBsZXRlZFxuIHtcbiAgICAgYmFja2dyb3VuZDogIzcwZWYzNTtcbiB9XG4gLm5vdHlldHN0YXJ0ZWRcbiB7XG4gICAgIGJhY2tncm91bmQ6ICNlNGU0ZTRcbiB9Il19 */"

/***/ }),

/***/ "./src/app/school-project-detail/school-project-detail.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/school-project-detail/school-project-detail.page.ts ***!
  \*********************************************************************/
/*! exports provided: SchoolProjectDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolProjectDetailPage", function() { return SchoolProjectDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _project_view_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project-view/project.service */ "./src/app/project-view/project.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tasks/tasks.service */ "./src/app/tasks/tasks.service.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-task/edit-task.page */ "./src/app/edit-task/edit-task.page.ts");











var SchoolProjectDetailPage = /** @class */ (function () {
    function SchoolProjectDetailPage(parameter, router, storage, api, projectService, tasksService, alertController, toastController, translateService, modalController) {
        var _this = this;
        this.parameter = parameter;
        this.router = router;
        this.storage = storage;
        this.api = api;
        this.projectService = projectService;
        this.tasksService = tasksService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.translateService = translateService;
        this.modalController = modalController;
        this.showSkeleton = false;
        this.project = [];
        this.skeletons = [{}, {}, {}, {}, {}, {}];
        parameter.params.subscribe(function (data) {
            _this.getProjectDetail(data.id);
        });
    }
    SchoolProjectDetailPage.prototype.ngOnInit = function () {
    };
    SchoolProjectDetailPage.prototype.getProjectDetail = function (id) {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.showSkeleton = true;
            _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (usertoken) {
                        _this.showSkeleton = true;
                        var pid = {
                            projectId: id
                        };
                        _this.showSkeleton = true;
                        _this.projectService.projectDetails(parsedData.access_token, id).subscribe(function (resp) {
                            _this.project = [];
                            _this.showSkeleton = false;
                            if (resp.status != 'failed') {
                                //  this.tasksService.loadProject();
                                if (resp.data) {
                                    _this.project = resp.data;
                                }
                                else {
                                }
                                _this.showSkeleton = false;
                            }
                            else {
                                _this.errorToast(resp.message);
                                _this.showSkeleton = false;
                            }
                        }, function (error) {
                            _this.showSkeleton = false;
                        });
                    });
                }
            }, function (error) {
                _this.showSkeleton = false;
            });
        });
    };
    // Display error Message
    SchoolProjectDetailPage.prototype.errorToast = function (msg) {
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
    // Sync Confirm popup
    SchoolProjectDetailPage.prototype.syncConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Sync Confirm!',
                            message: 'Project Sync',
                            buttons: [
                                {
                                    text: '✕',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                    }
                                }, {
                                    text: '✓',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.syncProject();
                                    }
                                }
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // back Button
    SchoolProjectDetailPage.prototype.goBack = function () {
    };
    // Create task
    SchoolProjectDetailPage.prototype.createTask = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_9__["EditTaskPage"],
                            componentProps: {
                                title: "Create Task",
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data.data != undefined) {
                                data.data.completionDate = new Date(data.data.completionDate);
                                _this.storage.get('currentProject').then(function (data) {
                                    _this.storage.set('currentProject', data).then(function (response) {
                                        _this.project.tasks = response.tasks;
                                        _this.storage.get('projects').then(function (data) {
                                            _this.tasksService.loadProject();
                                        });
                                    });
                                });
                                _this.successToast('task_is_created');
                            }
                        });
                        this.tasksService.modalActive('true');
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Success message 
    SchoolProjectDetailPage.prototype.successToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.translateService.get('task_is_created').subscribe(function (text) {
                            msg = text;
                        });
                        return [4 /*yield*/, this.toastController.create({
                                message: msg,
                                color: 'success',
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
    //Navigate to view and get current Task
    SchoolProjectDetailPage.prototype.navigateToView = function (id) {
        var _this = this;
        this.project.tasks.forEach(function (task) {
            if (id == task._id) {
                _this.storage.set('currentTask', task).then(function (data) {
                    _this.router.navigateByUrl('/project-view/task-view');
                });
            }
        });
    };
    // Sync project
    SchoolProjectDetailPage.prototype.syncProject = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.showSkeleton = true;
            _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (data) {
                        _this.showSkeleton = true;
                        if (_this.project.status = 'completed') {
                            _this.project.status = 'not yet started';
                        }
                        _this.projectService.sync(_this.project, data.access_token).subscribe(function (data) {
                            _this.showSkeleton = false;
                            if (data.status == "failed") {
                                _this.errorToast(data.message);
                            }
                            else if (data.status == "succes") {
                                _this.successToast(data.message);
                                _this.storage.set('projects', data).then(function (resp1) {
                                }, function (error) { });
                            }
                        }, function (error) {
                            _this.showSkeleton = false;
                            _this.errorToast(error.message);
                        });
                    });
                }
            }, function (error) {
                _this.showSkeleton = false;
                if (error.status === 0) {
                    _this.router.navigateByUrl('/login');
                }
            });
        });
    };
    SchoolProjectDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-project-detail',
            template: __webpack_require__(/*! ./school-project-detail.page.html */ "./src/app/school-project-detail/school-project-detail.page.html"),
            styles: [__webpack_require__(/*! ./school-project-detail.page.scss */ "./src/app/school-project-detail/school-project-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _api_api__WEBPACK_IMPORTED_MODULE_8__["ApiProvider"],
            _project_view_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"],
            _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], SchoolProjectDetailPage);
    return SchoolProjectDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=school-project-detail-school-project-detail-module.js.map