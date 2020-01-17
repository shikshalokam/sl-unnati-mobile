(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");









var routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]
    }
];
var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                // loader: {
                //     provide: TranslateLoader,
                //     useFactory: (createTranslateLoader),
                //     deps: [HttpClient]
                // }
                })
            ],
            declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
        })
    ], DetailPageModule);
    return DetailPageModule;
}());



/***/ }),

/***/ "./src/app/detail/detail.page.html":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=project?.title [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\">\n  </app-header>\n</ion-header>\n<ion-content>\n  <div class=\"project-detail\" *ngIf=\"project\">\n    <div padding>\n      <ion-row *ngIf=\"!editGoal\">\n        <ion-col size=\"5\" class=\"label-box\">\n          {{'projectDetail.goal'|translate}}\n        </ion-col>\n        <ion-col size=\"7\" (click)=\"allowEdit('goal')\">\n          {{project?.goal}}\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"custom-ion-item\" *ngIf=\"editGoal\" (mouseout)=\"blockEdit('goal')\">\n        <ion-label class=\"custom-label\" position=\"floating\"\n          [ngClass]=\"{'required-field':markLabelsAsInvalid && !project.goal}\">\n          {{'create_project.goal' | translate}}</ion-label>\n        <ion-textarea type=\"text\" [(ngModel)]=\"project.goal\" name=\"goal\" (mouseout)=\"blockEdit('goal')\"\n          placeholder=\"{{'create_project.placeholder_goal'| translate}}\" maxlength=\"1000\"></ion-textarea>\n      </ion-item>\n      <ion-row *ngIf=\"project?.duration\">\n        <ion-col size=\"5\" class=\"label-box\">\n          {{'projectDetail.duration' | translate}}\n        </ion-col>\n        <ion-col size=\"7\">\n          {{project?.duration}}\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"project?.startDate\">\n        <ion-col size=\"5\" class=\"label-box\">\n          {{'projectDetail.start_date' | translate}}\n        </ion-col>\n        <ion-col size=\"7\" (click)=\"setDate('sd')\">\n          {{project?.startDate}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"5\" class=\"label-box\">\n          {{'projectDetail.end_date' | translate}}\n        </ion-col>\n        <ion-col size=\"7\" (click)=\"setDate('ed')\">\n          {{project?.endDate}}\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"project?.status\">\n        <ion-col size=\"5\" class=\"label-box\">\n          {{'projectDetail.status' | translate}}\n        </ion-col>\n        <ion-col size=\"7\" *ngIf=\"project?.status\">\n          <ion-select [(ngModel)]=\"project.status\" class=\"custom-select\" placeholder=\"Select Status\" [disabled]=\"true\">\n            <ion-select-option  *ngFor=\"let status of statuses\"  value=\"{{status.title}}\"\n              selected=\"status.title === project.status\">{{status.title}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-button class=\"round-corner-btn prjdetail-btn\" expand=\"block\" color=\"secondary\"\n        (click)=\"navigateToResources()\" *ngIf=\"category != 'my_projects'\">\n        {{'button.learning_resources' | translate}}\n      </ion-button>\n    </div>\n  </div>\n\n  <div *ngIf=\"project && !showSkeleton\">\n    <h4 style=\"padding: 0px 10px;\">{{ project.title }}</h4>\n    <ion-card class=\"welcome-card custom-card\">\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-label>{{ \"projectDetail.duration\" | translate }} </ion-label><br />\n              <p>{{ project.duration }}</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-label style=\"float:left;\">{{ \"projectDetail.status\" | translate }}\n              </ion-label>\n              <p class=\"status notyetstarted\" *ngIf=\"\n                  project.status == 'not started yet' ||\n                  project.status == 'not yet started'\n                \">\n                {{ project.status }}\n              </p>\n              <p class=\"status inprogress\" *ngIf=\"project.status == 'in progress'\">\n                {{ project.status }}\n              </p>\n              <p class=\"status completed\" *ngIf=\"project.status == 'completed'\">\n                {{ project.status }}\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div style=\"text-align: center;\">\n          <ion-button style=\"--border-radius: 20px;\" size=\"small\" [routerLink]=\"['/project-view/courses']\">\n            {{ \"projectDetail.view_resources\" | translate }}\n          </ion-button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <div class=\"task-board\" *ngIf=\"project.tasks\">\n      <h4 style=\"padding: 10px;\">{{ \"tasks.title\" | translate }}</h4>\n      <div *ngFor=\"let task of project.tasks\">\n        <ion-card *ngIf=\"!project.isDeleted\" (click)=\"navigateToView(task._id)\">\n          <ion-card-content>\n            <ion-row>\n              <ion-col style=\"min-width: 85%;\"> {{ task.title }}</ion-col>\n              <ion-col>\n                <i class=\"material-icons\" style=\"float: right;\">\n                  add_circle\n                </i></ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n    <div class=\"featured-btn\">\n      <ion-button size=\"small\" (click)=\"createTask()\">\n        {{ \"projectDetail.create_task\" | translate }}\n        <i class=\"material-icons\" style=\" margin-left: 5px;\">\n          add_box\n        </i>\n      </ion-button>\n    </div>\n    <div class=\"featured-btn\">\n      <ion-button style=\"--border-radius:20px;\" color=\"success\" size=\"small\" (click)=\"syncConfirm()\">\n        {{ \"sync\" | translate }}\n      </ion-button>\n    </div>\n  </div>\n  <div *ngIf=\"showSkeleton\">\n    <ion-card *ngFor=\"let skeleton of skeletons\" class=\"custom-card\">\n      <ion-card-header>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card-header>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/detail/detail.page.scss":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col div {\n  color: #000; }\n  ion-col div ion-label {\n    font-weight: 600; }\n  .label-divider {\n  border-bottom: 1px solid #eee; }\n  .label-divider p {\n    text-align: justify; }\n  ion-progress-bar {\n  height: 8px; }\n  .can-go-back header-component ion-back-button {\n  display: block; }\n  #title {\n  padding-left: 10px;\n  padding-right: 10px; }\n  .progress-bar {\n  font-size: 16px;\n  margin-bottom: 5px; }\n  .md .toolbar-title {\n  text-overflow: inherit;\n  white-space: normal;\n  text-align: left;\n  font-size: 1.3em; }\n  .task-board {\n  background: #e4e4e4;\n  margin: 10px;\n  padding-bottom: 5px; }\n  .task-board ion-card {\n    background: #fff;\n    color: #000;\n    border-radius: 0px; }\n  .task-board ion-button {\n    --border-radius: 20px; }\n  .featured-btn {\n  text-align: center;\n  padding-bottom: 10px; }\n  .status {\n  float: right;\n  color: #fff;\n  padding: 0px 10px 0px 10px;\n  border-radius: 20px; }\n  .inprogress {\n  background: #ef4e35; }\n  .completed {\n  background: #70ef35; }\n  .notyetstarted {\n  background: #e4e4e4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9Vbm5hdGktbW9iaWxlL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVUsRUFBQTtFQUZkO0lBSUksZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSw2QkFBNEIsRUFBQTtFQURoQztJQUdRLG1CQUFtQixFQUFBO0VBRzNCO0VBRUksV0FBVSxFQUFBO0VBRWQ7RUFDSSxjQUFjLEVBQUE7RUFFaEI7RUFFSSxrQkFBa0I7RUFDbEIsbUJBQWtCLEVBQUE7RUFFdEI7RUFFRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZSxFQUFBO0VBRWxCO0VBQ0csbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxtQkFBbUIsRUFBQTtFQUh0QjtJQUtPLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7RUFQekI7SUFVTyxxQkFBZ0IsRUFBQTtFQUd2QjtFQUNHLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTtFQUV2QjtFQUNHLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLG1CQUFtQixFQUFBO0VBRXRCO0VBRUksbUJBQW1CLEVBQUE7RUFFdkI7RUFFSSxtQkFBbUIsRUFBQTtFQUV2QjtFQUVJLG1CQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wgZGl2IFxue1xuICAgIGNvbG9yOiMwMDA7XG4gICAgaW9uLWxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG59XG4ubGFiZWwtZGl2aWRlcntcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWVlO1xuICAgIHB7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxufVxuaW9uLXByb2dyZXNzLWJhclxue1xuICAgIGhlaWdodDo4cHg7XG59XG4uY2FuLWdvLWJhY2sgaGVhZGVyLWNvbXBvbmVudCBpb24tYmFjay1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICN0aXRsZVxuICB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gIH1cbiAgLnByb2dyZXNzLWJhclxuICB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tZCAudG9vbGJhci10aXRsZSB7XG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOjEuM2VtO1xuIH1cbiAudGFzay1ib2FyZHtcbiAgICBiYWNrZ3JvdW5kOiNlNGU0ZTQ7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBpb24tY2FyZHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbiB9XG4gLmZlYXR1cmVkLWJ0bntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gfVxuIC5zdGF0dXN7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gfVxuIC5pbnByb2dyZXNzXG4ge1xuICAgICBiYWNrZ3JvdW5kOiAjZWY0ZTM1O1xuIH1cbiAuY29tcGxldGVkXG4ge1xuICAgICBiYWNrZ3JvdW5kOiAjNzBlZjM1O1xuIH1cbiAubm90eWV0c3RhcnRlZFxuIHtcbiAgICAgYmFja2dyb3VuZDogI2U0ZTRlNFxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/detail/detail.page.ts":
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _project_view_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project-view/project.service */ "./src/app/project-view/project.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tasks/tasks.service */ "./src/app/tasks/tasks.service.ts");
/* harmony import */ var _projects_projects_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../projects/projects.service */ "./src/app/projects/projects.service.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../edit-task/edit-task.page */ "./src/app/edit-task/edit-task.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");
















var DetailPage = /** @class */ (function () {
    function DetailPage(tasksService, storage, homeService, screenOrientation, location, translate, modalController, apiProvider, projectsService, api, alertController, toastController, translateService, projectService, networkService, route, router) {
        var _this = this;
        this.tasksService = tasksService;
        this.storage = storage;
        this.homeService = homeService;
        this.screenOrientation = screenOrientation;
        this.location = location;
        this.translate = translate;
        this.modalController = modalController;
        this.apiProvider = apiProvider;
        this.projectsService = projectsService;
        this.api = api;
        this.alertController = alertController;
        this.toastController = toastController;
        this.translateService = translateService;
        this.projectService = projectService;
        this.networkService = networkService;
        this.route = route;
        this.router = router;
        this.navigatedFromHome = false;
        this.skeletons = [{}, {}, {}, {}, {}, {}];
        this.showSkeleton = false;
        this.notFromLocal = true;
        this.navigatedFromSchoolTasks = '';
        this.language = this.translateService.currentLang;
        this.tasksService.emit.subscribe(function (value) {
            if (_this.pfrom != 'goBack' && _this.back && _this.back != '/notifications') {
                _this.getProject();
            }
        });
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
            _this.connected = localStorage.getItem("networkStatus");
        });
        this.id = localStorage.getItem("id");
        this.route.params.subscribe(function (params) {
            _this.pid = params.id;
            _this.pfrom = params.from;
            _this.navigatedFromHome = false;
            _this.navigatedFromSchoolTasks = '';
            if (params.from == 'school') {
                _this.notFromLocal = false;
                _this.navigatedFromSchoolTasks = params.id;
            }
            else if (params.from == 'home') {
                _this.navigatedFromSchoolTasks = '';
                _this.navigatedFromHome = true;
                _this.notFromLocal = true;
                _this.getProject();
            }
            else if (params.from == 'notifications') {
                _this.getProjectsFromService();
            }
        });
    }
    DetailPage.prototype.ionViewDidEnter = function () {
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
        if (localStorage.getItem('from') === 'home') {
            this.back = 'project-view/home';
            localStorage.setItem('gobackis', 'project-view/home');
        }
        else if (localStorage.getItem('from') === 'projects') {
            this.back = 'project-view/projects';
            localStorage.setItem('gobackis', 'project-view/projects');
        }
        else if (localStorage.getItem('from') === 'notifications') {
            this.back = '/notifications';
            localStorage.setItem('gobackis', 'notifications');
        }
        else {
            if (this.project) {
                this.back = 'project-view/school-task-report/' + this.project.entityId + '/school';
            }
        }
    };
    DetailPage.prototype.ngOnInit = function () {
        if (this.back != '/notifications') {
            this.getProject();
        }
    };
    // get projects
    DetailPage.prototype.getProject = function () {
        var _this = this;
        var notYetStarted = 0, inProgress = 0, completed = 0;
        this.storage.get('currentProject').then(function (data) {
            if (data) {
                _this.showSkeleton = true;
                if (data.tasks) {
                    data.tasks.forEach(function (task) {
                        if (task.status == 'not yet started') {
                            notYetStarted++;
                        }
                        else if (task.status == 'in progress') {
                            inProgress++;
                        }
                        else if (task.status == 'completed') {
                            completed++;
                        }
                    });
                    if (data.tasks.length === notYetStarted) {
                        data.status = 'not yet started';
                    }
                    if (data.tasks.length === completed) {
                        data.status = 'completed';
                    }
                    if (inProgress > 0 || completed != data.tasks.length) {
                        data.status = 'in progress';
                    }
                }
                _this.project = data;
                if (localStorage.getItem('from') === 'school') {
                    localStorage.setItem('entityKey', _this.project.entityId);
                    _this.back = 'project-view/school-task-report/' + _this.project.entityId + '/school';
                }
                _this.storage.set('currentProject', _this.project).then(function (response) {
                });
                _this.showSkeleton = false;
            }
            else {
                _this.getProjectsFromService();
            }
        });
    };
    // Sync project
    DetailPage.prototype.syncProject = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.refreshToken = data.refresh_token;
            _this.api.refershToken(_this.refreshToken).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (data) {
                        _this.showSkeleton = true;
                        _this.projectService.sync(_this.project, data.access_token).subscribe(function (data) {
                            _this.showSkeleton = false;
                            if (data.status == "failed") {
                                _this.errorToast(data.message);
                            }
                            else if (data.status == "succes") {
                                _this.successToast(data.message);
                                _this.showSkeleton = false;
                                _this.storage.get('projects').then(function (projects) {
                                    projects.data.forEach(function (project) {
                                        project.projects.forEach(function (pro) {
                                            if (pro._id == data.data._id) {
                                                pro = data.data;
                                                _this.storage.set('projects', projects).then(function (resp1) {
                                                    _this.project = resp1.data;
                                                }, function (error) {
                                                    _this.showSkeleton = false;
                                                });
                                            }
                                        });
                                    });
                                });
                                _this.storage.get('myProjects').then(function (mp) {
                                    if (mp.find(function (pro) { return pro._id === data._id; })) {
                                        data.push(data);
                                        _this.storage.set('myProjects', data).then(function (data) {
                                            _this.homeService.loadMyProjects();
                                        });
                                    }
                                });
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
    // Get projects 
    DetailPage.prototype.getProjectsFromService = function () {
        var _this = this;
        this.project = [];
        this.storage.get('userTokens').then(function (data) {
            _this.showSkeleton = true;
            _this.refreshToken = data.refresh_token;
            _this.apiProvider.refershToken(_this.refreshToken).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (usertoken) {
                        _this.showSkeleton = true;
                        var id = {
                            projectId: _this.pid
                        };
                        _this.showSkeleton = true;
                        _this.projectService.projectDetails(parsedData.access_token, id).subscribe(function (resp) {
                            _this.project = [];
                            _this.showSkeleton = false;
                            if (resp.status != 'failed') {
                                _this.tasksService.loadProject();
                                if (resp.data) {
                                    _this.project = resp.data;
                                    _this.storage.set('currentProject', _this.project.projects[0]).then(function (cpsetup) {
                                        _this.project = cpsetup;
                                        // this.getProject();
                                    });
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
    DetailPage.prototype.errorToast = function (msg) {
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
    DetailPage.prototype.syncConfirm = function () {
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
    DetailPage.prototype.goBack = function () {
    };
    // Create task
    DetailPage.prototype.createTask = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_task_edit_task_page__WEBPACK_IMPORTED_MODULE_12__["EditTaskPage"],
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
    DetailPage.prototype.successToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.translate.get('task_is_created').subscribe(function (text) {
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
    DetailPage.prototype.navigateToView = function (id) {
        var _this = this;
        this.project.tasks.forEach(function (task) {
            if (id == task._id) {
                _this.storage.set('currentTask', task).then(function (data) {
                    _this.router.navigateByUrl('/project-view/task-view');
                });
            }
        });
    };
    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.page.html */ "./src/app/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/detail/detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_8__["TasksService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _home_home_service__WEBPACK_IMPORTED_MODULE_14__["HomeService"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__["ScreenOrientation"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _api_api__WEBPACK_IMPORTED_MODULE_10__["ApiProvider"],
            _projects_projects_service__WEBPACK_IMPORTED_MODULE_9__["ProjectsService"], _api_api__WEBPACK_IMPORTED_MODULE_10__["ApiProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _project_view_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"], _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DetailPage);
    return DetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=detail-detail-module.js.map