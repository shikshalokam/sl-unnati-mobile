(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subtasks-subtasks-module"],{

/***/ "./src/app/subtasks/subtasks.module.ts":
/*!*********************************************!*\
  !*** ./src/app/subtasks/subtasks.module.ts ***!
  \*********************************************/
/*! exports provided: SubtasksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtasksPageModule", function() { return SubtasksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subtasks_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subtasks.page */ "./src/app/subtasks/subtasks.page.ts");









var routes = [
    {
        path: '',
        component: _subtasks_page__WEBPACK_IMPORTED_MODULE_8__["SubtasksPage"]
    }
];
var SubtasksPageModule = /** @class */ (function () {
    function SubtasksPageModule() {
    }
    SubtasksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({})
            ],
            declarations: [_subtasks_page__WEBPACK_IMPORTED_MODULE_8__["SubtasksPage"]]
        })
    ], SubtasksPageModule);
    return SubtasksPageModule;
}());



/***/ }),

/***/ "./src/app/subtasks/subtasks.page.html":
/*!*********************************************!*\
  !*** ./src/app/subtasks/subtasks.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'subtasks' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"> </app-header>\n</ion-header>\n<ion-content>\n  <div *ngFor=\"let task of tasks; let i = index\">\n    <ion-item (click)=\"navigateToView(task)\" *ngIf=\"!task.isDeleted\">\n      <ion-thumbnail slot=\"start\" style=\"font-size: 11px;width: 60px;padding-top: 16px;\"\n        [ngClass]=\"{'st-completed': task.status == 'completed', 'st-notstarted': task.status == 'not yet started', 'st-inprogress': task.status == 'in progress'}\">\n        {{task.endDate | date: 'dd-MM-yyyy'}}\n        <p> {{task.status}}</p>\n      </ion-thumbnail>\n      <ion-label style=\"font-size: 14px;\n          font-weight: 400;\n    white-space: unset !important;\"> {{task.title}} </ion-label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-forward\"> </ion-icon>\n    </ion-item>\n  </div>\n  <!-- fab placed to the bottom end -->\n  <div style=\"height:70px;\"></div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\" style=\"margin-bottom: 40px;\">\n    <ion-fab-button color=\"success\" (click)=\"createTask()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/subtasks/subtasks.page.scss":
/*!*********************************************!*\
  !*** ./src/app/subtasks/subtasks.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col div {\n  color: #000; }\n  ion-col div ion-label {\n    font-weight: 600; }\n  ion-col p {\n  text-align: justify; }\n  .st-completed {\n  color: green; }\n  .st-notstarted {\n  color: #000; }\n  .st-inprogress {\n  color: orange; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvVW5uYXRpL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9zdWJ0YXNrcy9zdWJ0YXNrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFSSxXQUFVLEVBQUE7RUFGZDtJQUlJLGdCQUFnQixFQUFBO0VBSXBCO0VBR0ksbUJBQW1CLEVBQUE7RUFHdkI7RUFFRSxZQUFXLEVBQUE7RUFFYjtFQUVFLFdBQVUsRUFBQTtFQUVaO0VBRUUsYUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3VidGFza3Mvc3VidGFza3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGlvbi1jb2wgZGl2IFxuICB7XG4gICAgICBjb2xvcjojMDAwO1xuICAgICAgaW9uLWxhYmVse1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgXG4gICAgfVxuICB9XG4gIGlvbi1jb2xcbiAge1xuICAgIHB7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cbiAgfVxuICAuc3QtY29tcGxldGVkXG4gIHtcbiAgICBjb2xvcjpncmVlbjtcbiAgfVxuICAuc3Qtbm90c3RhcnRlZFxuICB7XG4gICAgY29sb3I6IzAwMDtcbiAgfVxuICAuc3QtaW5wcm9ncmVzc1xuICB7XG4gICAgY29sb3I6b3JhbmdlO1xuICB9XG4gIl19 */"

/***/ }),

/***/ "./src/app/subtasks/subtasks.page.ts":
/*!*******************************************!*\
  !*** ./src/app/subtasks/subtasks.page.ts ***!
  \*******************************************/
/*! exports provided: SubtasksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtasksPage", function() { return SubtasksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-task/edit-task.page */ "./src/app/edit-task/edit-task.page.ts");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tasks/tasks.service */ "./src/app/tasks/tasks.service.ts");










var SubtasksPage = /** @class */ (function () {
    function SubtasksPage(tasksService, storage, modalController, network, translateService, route, router, networkService) {
        var _this = this;
        this.tasksService = tasksService;
        this.storage = storage;
        this.modalController = modalController;
        this.network = network;
        this.translateService = translateService;
        this.route = route;
        this.router = router;
        this.networkService = networkService;
        this.back = 'project-view/task-view';
        this.tasks = [];
        this.language = this.translateService.currentLang;
        if (localStorage.getItem('networkStatus') != null) {
            this.connected = localStorage.getItem('networkStatus');
        }
        else {
            this.connected = false;
        }
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
        });
        this.tasksService.emit.subscribe(function (value) {
            _this.storage.get('currentTask').then(function (currentTask) {
                if (typeof currentTask == "string") {
                    currentTask = JSON.parse(currentTask);
                }
                _this.tasks = currentTask.subTasks;
            });
        });
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
            localStorage.setItem('networkStatus', _this.connected);
        });
    }
    SubtasksPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('networkStatus') != null) {
            this.connected = localStorage.getItem('networkStatus');
        }
        else {
            this.connected = false;
        }
        this.getTasks();
    };
    SubtasksPage.prototype.ionViewDidEnter = function () {
        this.getTasks();
    };
    // Back button
    SubtasksPage.prototype.goBack = function () {
        var pid = localStorage.getItem("id");
        this.router.navigateByUrl('project-view/task-view');
    };
    //Toggle menu
    SubtasksPage.prototype.toggleSection = function (index) {
        this.tasks[index].open = !this.tasks[index].open;
    };
    // Create task
    SubtasksPage.prototype.createTask = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_4__["EditTaskPage"],
                            componentProps: {
                                title: "Create Sub task",
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.getTasks();
                            if (data.data != undefined) {
                                data.data.completionDate = new Date(data.data.completionDate);
                                _this.tasks.push(data.data);
                                //this.successToast('Task is created.');
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //Change status of task
    SubtasksPage.prototype.changeStatus = function (id, status) {
        this.tasks.forEach(function (task) {
            if (task.id == id) {
                task.status = status;
            }
        });
    };
    //edit Task
    SubtasksPage.prototype.editTask = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var taskToBeEdit, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tasks.forEach(function (task) {
                            if (task.id == id) {
                                taskToBeEdit = task;
                            }
                        });
                        return [4 /*yield*/, this.modalController.create({
                                component: _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_4__["EditTaskPage"],
                                componentProps: {
                                    editTask: taskToBeEdit,
                                    title: "Edit Task",
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            _this.getTasks();
                            if (data.data != undefined && data.data.name != null) {
                                data.data.completionDate = new Date(data.data.completionDate);
                                //this.successToast('Task is edited.');
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // get Sub tasks
    SubtasksPage.prototype.getTasks = function () {
        var _this = this;
        this.storage.get('currentTask').then(function (currentTask) {
            _this.tasks = currentTask.subTasks;
        });
    };
    // navigate to sub tasks view.
    SubtasksPage.prototype.navigateToView = function (subTask) {
        var _this = this;
        this.storage.set('currentSubtask', subTask).then(function (data) {
            _this.router.navigateByUrl('/subtask-view');
        });
    };
    SubtasksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subtasks',
            template: __webpack_require__(/*! ./subtasks.page.html */ "./src/app/subtasks/subtasks.page.html"),
            styles: [__webpack_require__(/*! ./subtasks.page.scss */ "./src/app/subtasks/subtasks.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_9__["TasksService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]])
    ], SubtasksPage);
    return SubtasksPage;
}());



/***/ })

}]);
//# sourceMappingURL=subtasks-subtasks-module.js.map