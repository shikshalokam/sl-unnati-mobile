(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-board-task-board-module"],{

/***/ "./src/app/task-board/task-board.module.ts":
/*!*************************************************!*\
  !*** ./src/app/task-board/task-board.module.ts ***!
  \*************************************************/
/*! exports provided: TaskBoardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardPageModule", function() { return TaskBoardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_board_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-board.page */ "./src/app/task-board/task-board.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");









var routes = [
    {
        path: '',
        component: _task_board_page__WEBPACK_IMPORTED_MODULE_6__["TaskBoardPage"]
    }
];
var TaskBoardPageModule = /** @class */ (function () {
    function TaskBoardPageModule() {
    }
    TaskBoardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_task_board_page__WEBPACK_IMPORTED_MODULE_6__["TaskBoardPage"]]
        })
    ], TaskBoardPageModule);
    return TaskBoardPageModule;
}());



/***/ }),

/***/ "./src/app/task-board/task-board.page.html":
/*!*************************************************!*\
  !*** ./src/app/task-board/task-board.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'open_tasks.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"true\">\n  </app-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"tabs-list\">\n    <div class=\"custom-tab\" (click)=\"selectTab('ongoing')\" [ngClass]=\"{'active-tab': activeTab == 'ongoing'}\">\n      {{ \"open_tasks.ongoing\" | translate }}</div>\n    <div class=\"custom-tab\" (click)=\"selectTab('past')\" [ngClass]=\"{'active-tab':  activeTab == 'past'}\">\n      {{ \"open_tasks.past\" | translate }}\n    </div>\n  </div>\n  <ion-item class=\"search-bar-custom\" style=\"margin-top: 70px;\">\n    <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n    <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n    <!-- (keyup)=\"searchSchool(searchInput)\" -->\n  </ion-item>\n  <div *ngIf=\"activeTab == 'ongoing'\" class=\"ongoing-container\">\n    <ion-card class=\"welcome-card custom-card\" *ngIf=\"(  ongoing | searchTasks : searchInput).length == 0\">\n      <div class=\"no-results\">\n        No Data available.\n      </div>\n    </ion-card>\n    <ion-card *ngFor=\"let task of ongoing | searchTasks : searchInput\">\n      <div class=\"title-section\">\n        {{task.title}}\n      </div>\n      <div class=\"date-section\">\n        {{task.endDate | date :'dd MMM yyyy'}}\n      </div>\n      <ion-row>\n        <ion-col size=\"5\" *ngIf=\"task?.status\" style=\"margin:auto;\">\n          <ion-progress-bar value=\"1\" color=\"success\" *ngIf=\"task.status == 'Completed'\"></ion-progress-bar>\n          <ion-progress-bar value=\"0.7\" color=\"warning\" *ngIf=\"task.status == 'In Progress'\"></ion-progress-bar>\n          <ion-progress-bar value=\"1\" color=\"medium\" *ngIf=\"task.status == 'Not started'\"></ion-progress-bar>\n        </ion-col>\n        <ion-col size=\"7\" style=\"text-align:right;\">\n          <span *ngIf=\"task.subTasks && task.subTasks.length > 0\"> {{'open_tasks.number_of_subtask' | translate}} :\n            {{task.subTasks.length}}</span>\n          <span *ngIf=\"!task.subTasks\"> {{'open_tasks.number_of_subtask' | translate}} : 0</span>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"activeTab == 'past'\" class=\"ongoing-container\">\n      <ion-card class=\"welcome-card custom-card\" *ngIf=\"(  past | searchTasks : searchInput).length == 0\">\n          <div class=\"no-results\">\n            No Data available.\n          </div>\n        </ion-card>\n    <ion-card *ngFor=\"let task of past | searchTasks : searchInput\">\n      <div class=\"title-section\">\n        {{task.title}}\n      </div>\n      <div class=\"date-section\">\n        {{task.endDate | date :'dd MMM yyyy'}}\n      </div>\n      <ion-row>\n        <ion-col size=\"5\" *ngIf=\"task?.status\" style=\"padding-left: 0px;margin:auto;\">\n          <ion-progress-bar value=\"1\" color=\"success\" *ngIf=\"task.status == 'Completed'\"></ion-progress-bar>\n        </ion-col>\n        <ion-col size=\"7\" style=\"text-align:right;\">\n          <span *ngIf=\"task.subTasks && task.subTasks.length > 0\"> {{'open_tasks.number_of_subtask' | translate}} :\n            {{task.subTasks.length}}</span>\n          <span *ngIf=\"!task.subTasks\"> {{'open_tasks.number_of_subtask' | translate}} : 0</span>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/task-board/task-board.page.scss":
/*!*************************************************!*\
  !*** ./src/app/task-board/task-board.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs-list {\n  position: fixed;\n  width: 100%;\n  z-index: 999; }\n\n.custom-card {\n  margin: 0px;\n  background: #fff; }\n\n.custom-card ion-card-content {\n    padding: 0px;\n    font-size: 16px;\n    color: #000; }\n\n.custom-tab {\n  width: 50%;\n  background: #fff;\n  color: #000;\n  float: left;\n  padding: 15px;\n  text-align: center;\n  font-size: 18px;\n  border-bottom: 2px solid #b23e33;\n  font-weight: 600; }\n\n.active-tab {\n  background: #b23e33;\n  color: #fff; }\n\n.ongoing-container {\n  margin-bottom: 3em; }\n\n.ongoing-container ion-card {\n    border-radius: 0px;\n    padding: 15px; }\n\n.ongoing-container .title-section {\n    font-family: sans-serif;\n    text-transform: capitalize;\n    color: #000;\n    font-weight: 600;\n    margin: 5px 0px;\n    font-size: 1.2em; }\n\n.ongoing-container .statusbar {\n    height: 5px;\n    width: 95%;\n    border-radius: 15px; }\n\n.ongoing-container .statusbar .status-plate {\n      text-align: center;\n      text-transform: capitalize;\n      padding-top: 10px;\n      font-size: 16px;\n      font-weight: 600; }\n\n.ongoing-container .notyetstart {\n    background: #e6e6e6; }\n\n.ongoing-container .completed {\n    background: #66f271; }\n\n.ongoing-container .inprogress {\n    background: #ed8e3b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC90YXNrLWJvYXJkL3Rhc2stYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFFRSxXQUFXO0VBQ1gsZ0JBQWUsRUFBQTs7QUFIakI7SUFLRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVM7RUFDVCxnQkFBZTtFQUNmLFdBQVc7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGdCQUFnQixFQUFBOztBQUVwQjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBaUIsRUFBQTs7QUFEbkI7SUFHSSxrQkFBa0I7SUFDbEIsYUFBYSxFQUFBOztBQUpqQjtJQU9JLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBWnBCO0lBZ0JJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CLEVBQUE7O0FBbEJ2QjtNQW9CSSxrQkFBa0I7TUFDbEIsMEJBQTBCO01BQzFCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsZ0JBQ0EsRUFBQTs7QUF6Qko7SUE2QkksbUJBQW1CLEVBQUE7O0FBN0J2QjtJQWlDSSxtQkFBbUIsRUFBQTs7QUFqQ3ZCO0lBcUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFzay1ib2FyZC90YXNrLWJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzLWxpc3R7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgfVxuICAuY3VzdG9tLWNhcmRcbiAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBpb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICB9XG4gIC5jdXN0b20tdGFie1xuICAgIHdpZHRoOjUwJTtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2IyM2UzMztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLmFjdGl2ZS10YWJ7XG4gICAgYmFja2dyb3VuZDogI2IyM2UzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAub25nb2luZy1jb250YWluZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTozZW07XG4gICAgaW9uLWNhcmR7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgICAudGl0bGUtc2VjdGlvbntcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbiAgICBcbiAgICAuc3RhdHVzYmFye1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIC5zdGF0dXMtcGxhdGV7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMFxuICAgICAgfVxuICB9XG4gIC5ub3R5ZXRzdGFydFxuICB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICB9XG4gIC5jb21wbGV0ZWRcbiAge1xuICAgICAgYmFja2dyb3VuZDogIzY2ZjI3MTtcbiAgfVxuICAuaW5wcm9ncmVzc1xuICB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWQ4ZTNiO1xuICB9XG4gIH1cbiAgXG4iXX0= */"

/***/ }),

/***/ "./src/app/task-board/task-board.page.ts":
/*!***********************************************!*\
  !*** ./src/app/task-board/task-board.page.ts ***!
  \***********************************************/
/*! exports provided: TaskBoardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardPage", function() { return TaskBoardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");



var TaskBoardPage = /** @class */ (function () {
    function TaskBoardPage(storage) {
        this.storage = storage;
        this.activeTab = 'ongoing';
        this.back = "/project-view/home";
        this.ongoing = [];
        this.past = [];
    }
    TaskBoardPage.prototype.ionViewDidEnter = function () {
        this.searchInput = '';
        this.getProjects();
    };
    TaskBoardPage.prototype.getProjects = function () {
        var _this = this;
        this.ongoing = [];
        this.past = [];
        this.storage.get('latestProjects').then(function (projects) {
            projects.forEach(function (program) {
                console.log(program, "program");
            });
            projects.forEach(function (programsList) {
                if (programsList.projects) {
                    programsList.projects.forEach(function (project) {
                        var count = 0;
                        if (!project.isDeleted && project.isStarted && project.tasks && project.tasks.length > 0) {
                            project.tasks.forEach(function (task) {
                                if (task.status == 'Completed' || task.status == 'completed') {
                                    if (count == 0) {
                                        _this.ongoing.push(task);
                                        count++;
                                    }
                                    else {
                                        _this.past.push(task);
                                    }
                                }
                                else {
                                    _this.ongoing.push(task);
                                }
                            });
                        }
                    });
                }
            });
        });
    };
    TaskBoardPage.prototype.selectTab = function (tab) {
        this.activeTab = tab;
    };
    TaskBoardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-board',
            template: __webpack_require__(/*! ./task-board.page.html */ "./src/app/task-board/task-board.page.html"),
            styles: [__webpack_require__(/*! ./task-board.page.scss */ "./src/app/task-board/task-board.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], TaskBoardPage);
    return TaskBoardPage;
}());



/***/ })

}]);
//# sourceMappingURL=task-board-task-board-module.js.map