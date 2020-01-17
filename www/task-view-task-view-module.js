(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-view-task-view-module"],{

/***/ "./src/app/task-view/task-view.module.ts":
/*!***********************************************!*\
  !*** ./src/app/task-view/task-view.module.ts ***!
  \***********************************************/
/*! exports provided: TaskViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewPageModule", function() { return TaskViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_view_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-view.page */ "./src/app/task-view/task-view.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");









var routes = [
    {
        path: '',
        component: _task_view_page__WEBPACK_IMPORTED_MODULE_7__["TaskViewPage"]
    }
];
var TaskViewPageModule = /** @class */ (function () {
    function TaskViewPageModule() {
    }
    TaskViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({})
            ],
            declarations: [_task_view_page__WEBPACK_IMPORTED_MODULE_7__["TaskViewPage"]]
        })
    ], TaskViewPageModule);
    return TaskViewPageModule;
}());



/***/ }),

/***/ "./src/app/task-view/task-view.page.html":
/*!***********************************************!*\
  !*** ./src/app/task-view/task-view.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'task_detail' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\">\n  </app-header>\n</ion-header>\n<ion-content>\n  <!-- Task view -->\n  <ion-card class=\"welcome-card\">\n    <ion-card-content *ngIf=\"task\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div class=\"label-divider\">\n              <ion-label>\n                <img src=\"../../assets/images/tasks.png\" />{{\n                  \"tasks.title\" | translate\n                }}</ion-label><br />\n              {{ task.title }}\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"label-divider\">\n              <ion-label>\n                <img src=\"../../assets/images/startDate.png\" />\n                {{ \"tasks.start_date\" | translate }}</ion-label><br />\n              {{ task.startDate | date: \"dd-MM-yyyy\" }}\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"label-divider\">\n              <ion-label><img src=\"../../assets/images/endDate.png\" />\n                {{ \"tasks.end_date\" | translate }}</ion-label><br />\n              {{ task.endDate | date: \"dd-MM-yyyy\" }}\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"label-divider\">\n              <ion-label>\n                <img src=\"../../assets/images/status.png\" />\n                {{ \"tasks.status\" | translate }}</ion-label><br />\n              {{ task.status }}\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"label-divider\" *ngIf=\"task.assignedTo\">\n              <ion-label><img src=\"../../assets/images/assigned.png\" />\n                {{ \"tasks.assigned_to\" | translate }}</ion-label><br />\n              <p *ngFor=\"let assign of task.assignedTo\">{{ assign.name }}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"label-divider\">\n              <ion-label>{{ \"tasks.last_sync\" | translate }}</ion-label><br />\n              <p>{{ task.lastSync | date: \"MMM dd,yyyy\" }}</p>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"label-divider\" style=\"float:right;\">\n              <ion-button color=\"success\" (click)=\"syncConfirm()\" size=\"small\" style=\"text-transform: none;\">\n                {{ \"sync\" | translate }} <ion-icon name=\"repeat\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row class=\"action-list\">\n          <ion-col style=\"max-width: 43%;\">\n            <ion-button (click)=\"navigateToSubtasks()\" color=\"light\" size=\"small\" style=\"text-transform: none;\">\n              <ion-icon name=\"add\" class=\"subtasksBtn\"></ion-icon>{{ \"subtasks\" | translate }}\n            </ion-button>\n          </ion-col>\n          <ion-col style=\"float: right; margin-right: -15px;\">\n            <ion-button color=\"dark\" (click)=\"openDelete()\" size=\"small\" style=\"text-transform: none; \">\n              {{ \"delete\" | translate }}\n              <ion-icon name=\"trash\" style=\"font-size: 16px; vertical-align: middle;\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"primary\" (click)=\"editTask()\" size=\"small\" style=\"text-transform: none; float: right;\">\n              {{ \"edit\" | translate }}\n              <ion-icon name=\"create\" style=\"font-size: 16px; vertical-align: middle;\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"!task\">\n      No Task Available.\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/task-view/task-view.page.scss":
/*!***********************************************!*\
  !*** ./src/app/task-view/task-view.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subtasksBtn {\n  padding: 2px;\n  height: 20px;\n  width: 20px;\n  color: #fff;\n  background: #af4038;\n  border-radius: 15px;\n  margin-right: 5px; }\n\n.label-divider {\n  font-size: 16px; }\n\n.label-divider ion-label {\n    font-size: 16px;\n    color: #000000; }\n\n.label-divider ion-label img {\n      width: 22px;\n      float: left;\n      margin-right: 10px; }\n\n.ion-color-light {\n  --ion-color-base: #ffffff !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244,245,248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0,0,0) !important;\n  --ion-color-shade: #ffffff !important;\n  --ion-color-tint: #ffffff !important;\n  --box-shadow: none;\n  text-transform: none; }\n\n.ion-color-dark {\n  --ion-color-base: #5b514f !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34,36,40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255,255,255) !important;\n  --ion-color-shade: #5b514f !important;\n  --ion-color-tint: #5b514f !important; }\n\n.action-list {\n  list-style: none;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9Vbm5hdGktbW9iaWxlL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC90YXNrLXZpZXcvdGFzay12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWMsRUFBQTs7QUFEbEI7SUFHUSxlQUFjO0lBQ2QsY0FBYyxFQUFBOztBQUp0QjtNQU1ZLFdBQVc7TUFDWCxXQUFXO01BQ1gsa0JBQWtCLEVBQUE7O0FBSTlCO0VBQ0ksb0NBQWlCO0VBQ2pCLHdFQUFxQjtFQUNyQixzRUFBcUI7RUFDckIsK0VBQXlCO0VBQ3pCLHFDQUFrQjtFQUNsQixvQ0FBaUI7RUFDakIsa0JBQWE7RUFDYixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxvQ0FBaUI7RUFDakIsb0VBQXFCO0VBQ3JCLHFFQUFxQjtFQUNyQixvRkFBeUI7RUFDekIscUNBQWtCO0VBQ2xCLG9DQUFpQixFQUFBOztBQUVyQjtFQUVJLGdCQUFlO0VBQ2YsMkJBQW1CO0VBQW5CLG9CQUFtQjtFQUNuQiwwQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rhc2stdmlldy90YXNrLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRhc2tzQnRuXG57XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjYWY0MDM4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubGFiZWwtZGl2aWRlcntcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaW9uLWNvbG9yLWxpZ2h0IHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwyNDUsMjQ4KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLDAsMCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uaW9uLWNvbG9yLWRhcmsge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICM1YjUxNGYgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstcmdiLCAzNCwzNiw0MCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiAjNWI1MTRmICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogIzViNTE0ZiAhaW1wb3J0YW50O1xufVxuLmFjdGlvbi1saXN0XG57XG4gICAgbGlzdC1zdHlsZTpub25lOyBcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/task-view/task-view.page.ts":
/*!*********************************************!*\
  !*** ./src/app/task-view/task-view.page.ts ***!
  \*********************************************/
/*! exports provided: TaskViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewPage", function() { return TaskViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-task/edit-task.page */ "./src/app/edit-task/edit-task.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tasks/tasks.service */ "./src/app/tasks/tasks.service.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");












var TaskViewPage = /** @class */ (function () {
    function TaskViewPage(storage, taskService, apiProvider, location, alertController, translate, route, router, networkService, modalController, actionSheetController) {
        var _this = this;
        this.storage = storage;
        this.taskService = taskService;
        this.apiProvider = apiProvider;
        this.location = location;
        this.alertController = alertController;
        this.translate = translate;
        this.route = route;
        this.router = router;
        this.networkService = networkService;
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.loaded = false;
        this.language = this.translate.currentLang;
        // Triggering network change status
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
            localStorage.setItem("networkStatus", _this.connected);
        });
        this.route.params.subscribe(function (params) {
            if (params.projectId && params.taskId) {
                _this.back = 'notifications';
                localStorage.setItem('goBackis', 'notifications');
                _this.getTaskById(params);
            }
            else {
                _this.back = localStorage.getItem('goBackis');
                _this.getTask();
            }
        });
    }
    TaskViewPage.prototype.ngOnInit = function () {
        this.connected = localStorage.getItem("networkStatus");
    };
    TaskViewPage.prototype.ionViewDidEnter = function () {
        this.back = localStorage.getItem('goBackis');
        if (!this.back) {
            this.back = 'project-view/detail';
        }
    };
    //get Task
    TaskViewPage.prototype.getTask = function () {
        var _this = this;
        this.storage.get('currentTask').then(function (task) {
            _this.storage.get('userDetails').then(function (data) {
                task.assignedTo = [{ name: data.name, id: data.sub }];
                _this.task = task;
            });
        }, function (error) {
        });
    };
    // sync confirm popup
    TaskViewPage.prototype.syncConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var syncConfirm, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.translate.get('sync_confirm_subtask').subscribe(function (text) { syncConfirm = text; });
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Sync Confirm!',
                                message: syncConfirm,
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
                                            _this.sync();
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
    //Sync operation
    TaskViewPage.prototype.sync = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.apiProvider.refershToken(data.refresh_token).subscribe(function (refreshToken) {
                var parsedData = JSON.parse(refreshToken._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (usertoken) {
                        _this.taskService.syncTask(_this.task, usertoken.access_token).subscribe(function (sync) {
                            _this.storage.get('projects').then(function (projects) {
                                if (typeof projects == 'string') {
                                    projects = JSON.parse(projects);
                                }
                                _this.storage.set('currentProject', sync.data).then(function (data) {
                                });
                                projects.data.forEach(function (project) {
                                    project.projects.forEach(function (pro) {
                                        if (pro._id == sync.data._id) {
                                            // project = sync;
                                            pro.tasks = sync.data.tasks;
                                            _this.storage.set('projects', projects).then(function (projectsUpdated) {
                                                _this.taskService.loadProject();
                                                _this.router.navigate(['/project-view/detail']);
                                            });
                                        }
                                        else {
                                            _this.router.navigate(['/project-view/detail']);
                                        }
                                    });
                                });
                            });
                        });
                    });
                }
            }, function (error) {
            });
        });
    };
    //Sub Task View
    TaskViewPage.prototype.showSubTasks = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_5__["EditTaskPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // navigate To subtask
    TaskViewPage.prototype.navigateToSubtasks = function () {
        this.router.navigate(['project-view/subtasks']);
    };
    //edit Task
    TaskViewPage.prototype.editTask = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_5__["EditTaskPage"],
                            componentProps: {
                                editTask: this.task,
                                back: this.back,
                                title: "Edit Task",
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data.data != undefined && data.data.name != null) {
                                _this.storage.get('currentProject').then(function (data) {
                                    _this.taskService.loadProject();
                                });
                            }
                        });
                        this.taskService.modalActive('true');
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //  create task
    TaskViewPage.prototype.create = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_5__["EditTaskPage"],
                            componentProps: {
                                editTask: this.task,
                                title: "Create Task",
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data.data != undefined && data.data.name != null) {
                                // code
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // open delete confirm alert
    TaskViewPage.prototype.openDelete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete!',
                            message: 'Delete the task?',
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
                                        _this.delete();
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
    // delete task
    TaskViewPage.prototype.delete = function () {
        var _this = this;
        this.storage.get('currentProject').then(function (data) {
            for (var i = 0; i < data.tasks.length; i++) {
                if (data.tasks[i]._id === _this.task._id) {
                    data.tasks[i].isDeleted = true;
                    //   data.tasks.splice(i,1);
                    _this.storage.set('currentProject', data).then(function (data) {
                        _this.storage.get('projects').then(function (schema) {
                            if (typeof schema == "string") {
                                schema = JSON.parse(schema);
                            }
                            schema.data.forEach(function (projects) {
                                projects.projects.forEach(function (project) {
                                    if (project._id == data._id) {
                                        project.tasks.forEach(function (task) {
                                            if (task._id == _this.task._id) {
                                                task.isDeleted = true;
                                                _this.storage.set('projects', schema).then(function (data) {
                                                    _this.taskService.loadProject();
                                                    _this.location.back();
                                                });
                                            }
                                        });
                                    }
                                });
                            });
                        });
                    });
                }
            }
        });
    };
    TaskViewPage.prototype.goBack = function () {
        this.back = 'project-view/detail';
        this.router.navigateByUrl('project-view/detail');
    };
    // get Task from server
    TaskViewPage.prototype.getTaskById = function (parameters) {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.apiProvider.refershToken(data.refresh_token).subscribe(function (refreshToken) {
                var parsedData = JSON.parse(refreshToken._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (usertoken) {
                        _this.taskService.getTaskById(usertoken.access_token, parameters).subscribe(function (data) {
                            // this.task = data.data;
                            _this.storage.set('currentTask', data.data).then(function (data) {
                                _this.getTask();
                            });
                        }, function (error) {
                            _this.loaded = false;
                        });
                    });
                }
            }, function (error) {
            });
        });
    };
    TaskViewPage.prototype.ngOnDestroy = function () {
        localStorage.setItem('goBackis', '');
    };
    TaskViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-view',
            template: __webpack_require__(/*! ./task-view.page.html */ "./src/app/task-view/task-view.page.html"),
            styles: [__webpack_require__(/*! ./task-view.page.scss */ "./src/app/task-view/task-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_9__["TasksService"],
            _api_api__WEBPACK_IMPORTED_MODULE_10__["ApiProvider"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], TaskViewPage);
    return TaskViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=task-view-task-view-module.js.map