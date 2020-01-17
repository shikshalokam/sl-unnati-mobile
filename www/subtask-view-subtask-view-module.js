(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subtask-view-subtask-view-module"],{

/***/ "./src/app/subtask-view/subtask-view.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/subtask-view/subtask-view.module.ts ***!
  \*****************************************************/
/*! exports provided: SubtaskViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtaskViewPageModule", function() { return SubtaskViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _subtask_view_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subtask-view.page */ "./src/app/subtask-view/subtask-view.page.ts");









var routes = [
    {
        path: '',
        component: _subtask_view_page__WEBPACK_IMPORTED_MODULE_8__["SubtaskViewPage"]
    }
];
var SubtaskViewPageModule = /** @class */ (function () {
    function SubtaskViewPageModule() {
    }
    SubtaskViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({})
            ],
            declarations: [_subtask_view_page__WEBPACK_IMPORTED_MODULE_8__["SubtaskViewPage"]]
        })
    ], SubtaskViewPageModule);
    return SubtaskViewPageModule;
}());



/***/ }),

/***/ "./src/app/subtask-view/subtask-view.page.html":
/*!*****************************************************!*\
  !*** ./src/app/subtask-view/subtask-view.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'subtask_detail' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\">\n  </app-header>\n</ion-header>\n<ion-content>\n  <!-- Task view -->\n  <ion-card class=\"welcome-card\">\n    <ion-card-content>\n      <ion-grid *ngIf=\"task\">\n        <ion-row>\n          <ion-col>\n            <div class=\"label-divider\">\n              <ion-label> <img src=\"../../assets/images/tasks.png\"> {{'tasks.title' | translate}}</ion-label><br />\n              {{task.title}}\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"label-divider\">\n              <ion-label><img src=\"../../assets/images/startDate.png\"> {{'tasks.start_date' | translate}}</ion-label>\n              <br />\n              {{task.startDate | date: 'MMM dd,yyyy'}}\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"label-divider\">\n              <ion-label><img src=\"../../assets/images/endDate.png\"> {{'tasks.end_date' | translate}}</ion-label><br />\n              {{task.endDate | date: 'MMM dd,yyyy'}}\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"label-divider\">\n              <ion-label> <img src=\"../../assets/images/status.png\"> {{'tasks.status' | translate}}</ion-label><br />\n              {{task.status}}\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"label-divider\">\n              <ion-label><img src=\"../../assets/images/assigned.png\"> {{'tasks.assigned_to' | translate}}</ion-label>\n              <br />\n              <p *ngFor=\"let assign of task.assignedTo\"> {{assign.name}}\n              </p>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngIf=\"task.lastSync\">\n            <div class=\"label-divider\">\n              <ion-label>{{'tasks.last_sync' | translate}}</ion-label><br />\n              <p> {{task.lastSync | date: 'MMM dd,yyyy HH:mm' }}\n              </p>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"label-divider\" style=\"float:right;\">\n              <ion-button color=\"success\" (click)=\"syncConfirm()\" size=\"small\" style=\"text-transform: none;\">\n                {{'sync' | translate}} <ion-icon name=\"repeat\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row class=\"action-list\">\n          <ion-col>\n            <ion-button color=\"dark\" (click)=\"openDelete();\" size=\"small\" style=\"text-transform: none;\">\n              {{'delete' | translate}}\n              <ion-icon name=\"trash\" style=\"font-size: 16px; vertical-align: middle;\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button color=\"primary\" (click)=\"editTask()\" size=\"small\" style=\"text-transform: none; float: right;\">\n              {{'edit' | translate}} <ion-icon name=\"create\" style=\"font-size: 16px; vertical-align: middle;\">\n              </ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <!-- Task view End -->\n</ion-content>"

/***/ }),

/***/ "./src/app/subtask-view/subtask-view.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/subtask-view/subtask-view.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subtasksBtn {\n  padding: 2px;\n  height: 20px;\n  width: 20px;\n  color: #fff;\n  background: #af4038;\n  border-radius: 15px;\n  margin-right: 5px; }\n\n.label-divider {\n  font-size: 16px; }\n\n.label-divider ion-label {\n    font-size: 16px;\n    color: #000000; }\n\n.label-divider ion-label img {\n      width: 22px;\n      float: left;\n      margin-right: 10px; }\n\n.ion-color-light {\n  --ion-color-base: #ffffff !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244,245,248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0,0,0) !important;\n  --ion-color-shade: #ffffff !important;\n  --ion-color-tint: #ffffff !important;\n  --box-shadow: none;\n  text-transform: none; }\n\n.ion-color-dark {\n  --ion-color-base: #5b514f !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34,36,40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255,255,255) !important;\n  --ion-color-shade: #5b514f !important;\n  --ion-color-tint: #5b514f !important; }\n\n.action-list {\n  list-style: none;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9Vbm5hdGktbW9iaWxlL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9zdWJ0YXNrLXZpZXcvc3VidGFzay12aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWMsRUFBQTs7QUFEbEI7SUFHUSxlQUFjO0lBQ2QsY0FBYyxFQUFBOztBQUp0QjtNQU1ZLFdBQVc7TUFDWCxXQUFXO01BQ1gsa0JBQWtCLEVBQUE7O0FBSTlCO0VBQ0ksb0NBQWlCO0VBQ2pCLHdFQUFxQjtFQUNyQixzRUFBcUI7RUFDckIsK0VBQXlCO0VBQ3pCLHFDQUFrQjtFQUNsQixvQ0FBaUI7RUFDakIsa0JBQWE7RUFDYixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxvQ0FBaUI7RUFDakIsb0VBQXFCO0VBQ3JCLHFFQUFxQjtFQUNyQixvRkFBeUI7RUFDekIscUNBQWtCO0VBQ2xCLG9DQUFpQixFQUFBOztBQUVyQjtFQUVJLGdCQUFlO0VBQ2YsMkJBQW1CO0VBQW5CLG9CQUFtQjtFQUNuQiwwQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N1YnRhc2stdmlldy9zdWJ0YXNrLXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnRhc2tzQnRuXG57XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjYWY0MDM4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubGFiZWwtZGl2aWRlcntcbiAgICBmb250LXNpemU6MTZweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaW9uLWNvbG9yLWxpZ2h0IHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwyNDUsMjQ4KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLDAsMCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uaW9uLWNvbG9yLWRhcmsge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICM1YjUxNGYgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhcmstcmdiLCAzNCwzNiw0MCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwyNTUsMjU1KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXNoYWRlOiAjNWI1MTRmICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogIzViNTE0ZiAhaW1wb3J0YW50O1xufVxuLmFjdGlvbi1saXN0XG57XG4gICAgbGlzdC1zdHlsZTpub25lOyBcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/subtask-view/subtask-view.page.ts":
/*!***************************************************!*\
  !*** ./src/app/subtask-view/subtask-view.page.ts ***!
  \***************************************************/
/*! exports provided: SubtaskViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtaskViewPage", function() { return SubtaskViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tasks/tasks.service */ "./src/app/tasks/tasks.service.ts");
/* harmony import */ var _subtasks_subtasks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subtasks/subtasks.service */ "./src/app/subtasks/subtasks.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../edit-task/edit-task.page */ "./src/app/edit-task/edit-task.page.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");












var SubtaskViewPage = /** @class */ (function () {
    function SubtaskViewPage(location, modalController, apiProvider, subTasksService, alertController, tasksService, actionSheetController, storage, translate, params) {
        var _this = this;
        this.location = location;
        this.modalController = modalController;
        this.apiProvider = apiProvider;
        this.subTasksService = subTasksService;
        this.alertController = alertController;
        this.tasksService = tasksService;
        this.actionSheetController = actionSheetController;
        this.storage = storage;
        this.translate = translate;
        this.params = params;
        this.back = 'project-view/subtasks';
        this.tasksService.emit.subscribe(function (value) {
            _this.storage.get('currentSubtask').then(function (data) {
                _this.task = data;
            });
        });
        params.params.subscribe(function (parameter) {
            if (parameter.taskId && parameter.subtaskId) {
                if (parameter.from == 'notifications') {
                    _this.back = 'notifications';
                    _this.taskId = parameter.taskId;
                }
                _this.getSubTaskById(parameter);
            }
            else {
                _this.getSubTask();
            }
        });
    }
    SubtaskViewPage.prototype.ngOnInit = function () {
    };
    // Get sub tasks
    SubtaskViewPage.prototype.getSubTask = function () {
        var _this = this;
        this.storage.get('currentSubtask').then(function (task) {
            _this.storage.get('userDetails').then(function (data) {
                task.assignedTo = [{ name: data.name, id: data.sub }];
                _this.task = task;
            });
        });
    };
    // Action sheet
    SubtaskViewPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var opt_synch, opt_delete, opt_edit, opt_subtasks, cancel, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.translate.get('synch').subscribe(function (text) { opt_synch = text; });
                        this.translate.get('delete').subscribe(function (text) { opt_delete = text; });
                        this.translate.get('edit').subscribe(function (text) { opt_edit = text; });
                        this.translate.get('subtasks').subscribe(function (text) { opt_subtasks = text; });
                        this.translate.get('cancel').subscribe(function (text) { cancel = text; });
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Actions',
                                buttons: [
                                    {
                                        text: opt_synch,
                                        icon: 'sync',
                                        handler: function () {
                                        }
                                    },
                                    {
                                        text: opt_edit,
                                        icon: 'create',
                                        handler: function () {
                                            _this.editTask();
                                        }
                                    },
                                    {
                                        text: opt_delete,
                                        role: 'destructive',
                                        icon: 'trash',
                                        handler: function () {
                                            _this.delete();
                                        }
                                    }, {
                                        text: cancel,
                                        icon: 'close',
                                        role: 'cancel',
                                        handler: function () {
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Delete sutask
    SubtaskViewPage.prototype.delete = function () {
        var _this = this;
        this.task.isDeleted = true;
        this.storage.set('currentSubtask', this.task).then(function (cst) {
            _this.storage.get('currentTask').then(function (ctask) {
                ctask.subTasks.forEach(function (subTask) {
                    if (subTask._id == cst._id) {
                        subTask.isDeleted = true;
                        _this.storage.set('currentTask', ctask).then(function (ct) {
                            _this.storage.get('currentProject').then(function (cp) {
                                cp.tasks.forEach(function (task) {
                                    task.subTasks.forEach(function (subtask) {
                                        if (subtask._id == _this.task._id) {
                                            subtask.isDeleted = true;
                                            _this.storage.set('currentProject', cp).then(function (data) {
                                            });
                                        }
                                    });
                                });
                            });
                            _this.storage.get('projects').then(function (data) {
                                if (typeof data == "string") {
                                    data = JSON.parse(data);
                                }
                                data.data.forEach(function (projects) {
                                    // parsing project
                                    projects.projects.forEach(function (array) {
                                        array.tasks.forEach(function (task) {
                                            if (task._id == ctask._id) {
                                                task.subTasks.forEach(function (subtask) {
                                                    if (subtask._id == cst._id) {
                                                        subtask.isDeleted = true;
                                                        _this.storage.set('projects', JSON.stringify(data)).then(function (data) {
                                                            _this.tasksService.loadProject();
                                                            _this.location.back();
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    });
                                });
                            });
                        });
                    }
                });
            });
        });
    };
    //edit Task
    SubtaskViewPage.prototype.editTask = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_8__["EditTaskPage"],
                            componentProps: {
                                editTask: this.task,
                                back: this.back,
                                taskId: this.taskId,
                                title: "Edit sub task",
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data.data != undefined && data.data.name != null) {
                                _this.storage.get('currentProject').then(function (data) {
                                });
                            }
                        });
                        this.tasksService.modalActive('true');
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubtaskViewPage.prototype.openDelete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var opt_delete, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.translate.get('delete_alert_subtask').subscribe(function (text) { opt_delete = text; });
                        return [4 /*yield*/, this.alertController.create({
                                header: opt_delete,
                                message: 'delete_the_subtask?',
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
    SubtaskViewPage.prototype.syncConfirm = function () {
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
    // sync
    SubtaskViewPage.prototype.sync = function () {
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
                        _this.storage.get('currentTask').then(function (ct) {
                            var subTask = {
                                taskId: ct._id,
                                subTasks: [{
                                        isNew: _this.task.isNew,
                                        assignedTo: _this.task.assignedTo,
                                        title: _this.task.title,
                                        startDate: _this.task.startDate,
                                        endDate: _this.task.endDate,
                                        isDeleted: _this.task.isDeleted,
                                        status: _this.task.status,
                                    }]
                            };
                            _this.subTasksService.syncSubTask(subTask, data.access_token).subscribe(function (data) {
                                if (data.status == "success") {
                                    ct.subTasks = data.data;
                                    _this.storage.set('currentTask', ct).then(function (currentTask) {
                                        _this.storage.get('currentProject').then(function (cp) {
                                            cp.tasks.forEach(function (task) {
                                                if (task._id == currentTask._id) {
                                                    task.subTasks = currentTask.subTasks;
                                                    //  task.subTasks.push(currentTask.subTasks);
                                                    _this.storage.set('currentProject', cp).then(function (currentProject) {
                                                        _this.storage.get('projects').then(function (projectsList) {
                                                            if (typeof projectsList == "string") {
                                                                projectsList = JSON.parse(projectsList);
                                                            }
                                                            projectsList.data.forEach(function (projects) {
                                                                projects.projects.forEach(function (project) {
                                                                    if (project._id == currentProject._id) {
                                                                        project.tasks = currentProject.tasks;
                                                                        //   project.tasks.push(currentProject.tasks);
                                                                        _this.storage.set('projects', projectsList).then(function (pl) {
                                                                            _this.location.back();
                                                                            _this.tasksService.loadProject();
                                                                        });
                                                                    }
                                                                });
                                                            });
                                                        });
                                                    });
                                                }
                                            });
                                        });
                                        //this.tasksService.loadProject();
                                    });
                                }
                            }, function (error) {
                                // TODO :: Intentially left.
                            });
                        });
                    });
                }
            }, function (error) {
                // TODO :: Intentially left.
            });
        });
    };
    SubtaskViewPage.prototype.getSubTaskById = function (parameter) {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.apiProvider.refershToken(data.refresh_token).subscribe(function (refreshToken) {
                var parsedData = JSON.parse(refreshToken._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens_1 = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens_1).then(function (usertoken) {
                        _this.subTasksService.getSubtaskById(userTokens_1.access_token, parameter).subscribe(function (data) {
                            _this.task = data.data;
                        }, function (error) {
                        });
                    });
                }
            });
        });
    };
    SubtaskViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subtask-view',
            template: __webpack_require__(/*! ./subtask-view.page.html */ "./src/app/subtask-view/subtask-view.page.html"),
            styles: [__webpack_require__(/*! ./subtask-view.page.scss */ "./src/app/subtask-view/subtask-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _api_api__WEBPACK_IMPORTED_MODULE_9__["ApiProvider"],
            _subtasks_subtasks_service__WEBPACK_IMPORTED_MODULE_6__["SubTasksService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_5__["TasksService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], SubtaskViewPage);
    return SubtaskViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=subtask-view-subtask-view-module.js.map