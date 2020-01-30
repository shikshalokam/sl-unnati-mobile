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

module.exports = "<ion-header>\n  <app-header [title]=\"'open_tasks.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"true\">\n  </app-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"tabs-list\">\n    <div class=\"custom-tab\" (click)=\"selectTab('ongoing')\" [ngClass]=\"{'active-tab': activeTab == 'ongoing'}\">\n      {{ \"open_tasks.ongoing\" | translate }}</div>\n    <div class=\"custom-tab\" (click)=\"selectTab('past')\" [ngClass]=\"{'active-tab':  activeTab == 'past'}\">\n      {{ \"open_tasks.past\" | translate }}\n    </div>\n  </div>\n  <ion-item class=\"search-bar-custom\" style=\"margin-top: 70px;\">\n    <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n    <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n    <!-- (keyup)=\"searchSchool(searchInput)\" -->\n  </ion-item>\n  <div *ngIf=\"activeTab == 'ongoing'\" class=\"ongoing-container\">\n    <ion-card *ngFor=\"let task of ongoing\">\n      <div class=\"title-section\">\n        {{task.title}}\n      </div>\n      <div class=\"date-section\">\n        {{task.endDate | date :'dd MMM yyyy'}}\n      </div>\n      <ion-row>\n        <ion-col size=\"5\" *ngIf=\"task?.status\" style=\"margin:auto;\">\n          <ion-progress-bar value=\"1\" color=\"success\" *ngIf=\"task.status == 'Completed'\"></ion-progress-bar>\n          <ion-progress-bar value=\"0.7\" color=\"warning\" *ngIf=\"task.status == 'In Progress'\"></ion-progress-bar>\n          <ion-progress-bar value=\"1\" color=\"medium\" *ngIf=\"task.status == 'Not started'\"></ion-progress-bar>\n        </ion-col>\n        <ion-col size=\"7\" style=\"text-align:right;\">\n          <span *ngIf=\"task.subTasks && task.subTasks.length > 0\"> {{'open_tasks.number_of_subtask' | translate}} :\n            {{task.subTasks.length}}</span>\n          <span *ngIf=\"!task.subTasks\"> {{'open_tasks.number_of_subtask' | translate}} : 0</span>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"activeTab == 'past'\" class=\"ongoing-container\">\n    <ion-card *ngFor=\"let task of past\">\n      <div class=\"title-section\">\n        {{task.title}}\n      </div>\n      <div class=\"date-section\">\n        {{task.endDate | date :'dd MMM yyyy'}}\n      </div>\n      <ion-row>\n        <ion-col size=\"5\" *ngIf=\"task?.status\" style=\"padding-left: 0px;margin:auto;\">\n          <ion-progress-bar value=\"1\" color=\"success\" *ngIf=\"task.status == 'Completed'\"></ion-progress-bar>\n        </ion-col>\n        <ion-col size=\"7\" style=\"text-align:right;\">\n          <span *ngIf=\"task.subTasks && task.subTasks.length > 0\"> {{'open_tasks.number_of_subtask' | translate}} :\n            {{task.subTasks.length}}</span>\n          <span *ngIf=\"!task.subTasks\"> {{'open_tasks.number_of_subtask' | translate}} : 0</span>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/task-board/task-board.page.scss":
/*!*************************************************!*\
  !*** ./src/app/task-board/task-board.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs-list {\n  position: fixed;\n  width: 100%;\n  z-index: 999; }\n\n.custom-card {\n  margin: 0px;\n  background: #fff; }\n\n.custom-card ion-card-content {\n    padding: 0px;\n    font-size: 16px;\n    color: #000; }\n\n.custom-tab {\n  width: 50%;\n  background: #fff;\n  color: #000;\n  float: left;\n  padding: 10px;\n  text-align: center;\n  font-size: 18px;\n  border-bottom: 2px solid #b23e33; }\n\n.active-tab {\n  background: #b23e33;\n  color: #fff;\n  border-radius: 6px; }\n\n.ongoing-container {\n  margin-bottom: 3em; }\n\n.ongoing-container ion-card {\n    border-radius: 0px;\n    padding: 15px; }\n\n.ongoing-container .title-section {\n    font-family: sans-serif;\n    text-transform: capitalize;\n    color: #000;\n    font-weight: 600;\n    margin: 5px 0px;\n    font-size: 1.2em; }\n\n.ongoing-container .statusbar {\n    height: 5px;\n    width: 95%;\n    border-radius: 15px; }\n\n.ongoing-container .statusbar .status-plate {\n      text-align: center;\n      text-transform: capitalize;\n      padding-top: 10px;\n      font-size: 16px;\n      font-weight: 600; }\n\n.ongoing-container .notyetstart {\n    background: #e6e6e6; }\n\n.ongoing-container .completed {\n    background: #66f271; }\n\n.ongoing-container .inprogress {\n    background: #ed8e3b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvdGFzay1ib2FyZC90YXNrLWJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBRUUsV0FBVztFQUNYLGdCQUFlLEVBQUE7O0FBSGpCO0lBS0UsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXLEVBQUE7O0FBR2I7RUFDRSxVQUFTO0VBQ1QsZ0JBQWU7RUFDZixXQUFXO0VBQ1QsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdDQUFnQyxFQUFBOztBQUVwQztFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWlCLEVBQUE7O0FBRG5CO0lBR0ksa0JBQWtCO0lBQ2xCLGFBQWEsRUFBQTs7QUFKakI7SUFPSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQixFQUFBOztBQVpwQjtJQWdCSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQixFQUFBOztBQWxCdkI7TUFvQkksa0JBQWtCO01BQ2xCLDBCQUEwQjtNQUMxQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGdCQUNBLEVBQUE7O0FBekJKO0lBNkJJLG1CQUFtQixFQUFBOztBQTdCdkI7SUFpQ0ksbUJBQW1CLEVBQUE7O0FBakN2QjtJQXFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rhc2stYm9hcmQvdGFzay1ib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicy1saXN0e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbiAgLmN1c3RvbS1jYXJkXG4gIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgfVxuICAuY3VzdG9tLXRhYntcbiAgICB3aWR0aDo1MCU7XG4gICAgYmFja2dyb3VuZDojZmZmO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiMjNlMzM7XG4gIH1cbiAgLmFjdGl2ZS10YWJ7XG4gICAgYmFja2dyb3VuZDogI2IyM2UzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbiAgLm9uZ29pbmctY29udGFpbmVye1xuICAgIG1hcmdpbi1ib3R0b206M2VtO1xuICAgIGlvbi1jYXJke1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gICAgLnRpdGxlLXNlY3Rpb257XG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luOiA1cHggMHB4O1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG4gICAgXG4gICAgLnN0YXR1c2JhcntcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAuc3RhdHVzLXBsYXRle1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcbiAgICAgIH1cbiAgfVxuICAubm90eWV0c3RhcnRcbiAge1xuICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgfVxuICAuY29tcGxldGVkXG4gIHtcbiAgICAgIGJhY2tncm91bmQ6ICM2NmYyNzE7XG4gIH1cbiAgLmlucHJvZ3Jlc3NcbiAge1xuICAgICAgYmFja2dyb3VuZDogI2VkOGUzYjtcbiAgfVxuICB9XG4gIFxuIl19 */"

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
        this.getProjects();
    };
    TaskBoardPage.prototype.getProjects = function () {
        var _this = this;
        this.ongoing = [];
        this.past = [];
        this.storage.get('myprojects').then(function (projects) {
            if (projects) {
                projects.forEach(function (project) {
                    var count = 0;
                    if (project.tasks && project.tasks.length > 0) {
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