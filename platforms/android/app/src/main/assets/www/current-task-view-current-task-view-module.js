(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["current-task-view-current-task-view-module"],{

/***/ "./src/app/current-task-view/current-task-view.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/current-task-view/current-task-view.module.ts ***!
  \***************************************************************/
/*! exports provided: CurrentTaskViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentTaskViewPageModule", function() { return CurrentTaskViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _current_task_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./current-task-view.page */ "./src/app/current-task-view/current-task-view.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _current_task_view_page__WEBPACK_IMPORTED_MODULE_6__["CurrentTaskViewPage"]
    }
];
var CurrentTaskViewPageModule = /** @class */ (function () {
    function CurrentTaskViewPageModule() {
    }
    CurrentTaskViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
            ],
            declarations: [_current_task_view_page__WEBPACK_IMPORTED_MODULE_6__["CurrentTaskViewPage"]]
        })
    ], CurrentTaskViewPageModule);
    return CurrentTaskViewPageModule;
}());



/***/ }),

/***/ "./src/app/current-task-view/current-task-view.page.html":
/*!***************************************************************!*\
  !*** ./src/app/current-task-view/current-task-view.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'current_task.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [noBorder]=\"false\"\n    [isGoBack]=\"back\" [isParam]=\"parameter\">\n  </app-header>\n</ion-header>\n\n<ion-content padding *ngIf=\"task\" class=\"task-view-container\">\n  <div style=\"min-height:85%\">\n    <h3 (click)=\"allowEdit('title')\" *ngIf=\"!editTitle\">{{task?.title}}\n    </h3>\n    <ion-item class=\"custom-ion-item\" *ngIf=\"editTitle\" (mouseout)=\"blockEdit('title')\">\n      <ion-label class=\"custom-label\" position=\"floating\" style=\"text-transform: none; margin: 0px;font-size: 20px;\"\n        [ngClass]=\"{'required-field':markLabelsAsInvalid}\">{{'add_task.add_a_task'| translate}}\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"task.title\" name=\"title\"\n        placeholder=\"{{'add_task.edit_task_title'| translate}}\" style=\"border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"3\" style=\"padding: 0px;\">\n        <img src=\"assets/images/timetable.png\" style=\"max-width: 40%;\" (click)=\"setDate('task')\"> </ion-col>\n      <ion-col size=\"9\" class=\"col-9-custom\" (click)=\"setDate('task')\">{{task.endDate | date : \"dd-MM-yyyy\"}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\" style=\"margin: auto;\">\n        <ion-label>\n          {{'current_task.status' | translate}}\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-item class=\"custom-ion-item\">\n          <ion-select [(ngModel)]=\"task.status\" class=\"custom-select\" placeholder=\"Select Status\"\n            (ionChange)=\"selectedStatus($event)\">\n            <ion-select-option  *ngFor=\"let status of statuses\"  value=\"{{status.title}}\"\n              selected=\"status.title === task.status\">{{status.title}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <h4 style=\"width: 100%;\n        margin: 0px;\">{{'current_task.subtasks' | translate}} </h4>\n      <ion-col size=\"3\" style=\"padding: 10px 0px;\">\n        <img src=\"assets/images/subdirectory_arrow.png\" style=\"width: 35%; margin-top: 5px;\"> </ion-col>\n      <ion-col size=\"9\">\n        <ion-item style=\"--border-color: #af4038;\">\n          <ion-input type=\"text\" placeholder=\"Add Subtask task name\" [(ngModel)]=\"subtask.title\">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"margin-top: -20px;\">\n      <ion-col size=\"3\">\n      </ion-col>\n      <ion-col size=\"9\">\n        <ion-button color=\"primary\" class=\"text-notransform\" (click)=\"addSubtask()\">\n          {{'current_task.add_subtask' | translate}}\n        </ion-button>\n        <img src=\"assets/images/timetable.png\"\n          style=\"margin-top: 5px;margin-right: 10px; float: right; max-width: 30px;\" (click)=\"setDate('subtask')\">\n      </ion-col>\n    </ion-row>\n    <div class=\"subtask-box\" *ngFor=\"let subtask of task?.subTasks\">\n      <ion-row *ngIf=\"!subtask.allowEdit && !subtask.isDelete\">\n        <ion-col size=\"1\">\n          <ion-icon ios=\"ios-radio-button-off\" md=\"md-radio-button-off\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"subtask-title\" (click)=\"subTaskEdit(subtask)\"> {{subtask.title}}\n        </ion-col>\n        <ion-col size=\"1\" style=\"margin: auto;\n        text-align: center;\">\n          <img src=\"assets/images/delete.png\" style=\"width: 30px;\" (click)=\"delete(subtask)\">\n        </ion-col>\n      </ion-row>\n      <ion-item class=\"custom-ion-item\" *ngIf=\"subtask.allowEdit\" (mouseout)=\"subTaskEditBlock(subtask)\">\n        <ion-input type=\"text\" [(ngModel)]=\"subtask.title\" name=\"title\"\n          placeholder=\"{{'current_task.edit_subtask_title'| translate}}\" style=\"border-top-right-radius: 0px;\n          border-bottom-right-radius: 0px;\"></ion-input>\n      </ion-item>\n      <ion-row *ngIf=\"!subtask.isDelete\">\n        <ion-col size=\"1\"> </ion-col>\n        <ion-col size=\"5\" (click)=\"setSubTaskDate(subtask)\"> <img src=\"assets/images/timetable.png\"\n            style=\"margin-top: 5px; max-width: 25px; float: left; margin-right: 10px;\">\n          <div style=\"margin-top: 10px; font-size: 14px;\">{{subtask.endDate | date : \"dd-MM-yyyy\"}}</div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-select [(ngModel)]=\"subtask.status\" class=\"custom-select\" placeholder=\"Select Status\"\n            (ionChange)=\"selectedSubTaskStatus($event,subtask)\">\n            <ion-select-option  *ngFor=\"let status of statuses\"  value=\"{{status.title}}\"\n              selected=\"status.title === subtask.status\">{{status.title}}</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <div style=\"margin-top:30px;\">\n    <ion-button (click)=\"markTaskAsCompleted()\" color=\"secondary\" class=\"round-corner-btn\" expand=\"block\"\n      [disabled]=\"!enableMarkButton\">\n      {{'button.mark_task_complete' | translate}}\n    </ion-button>\n  </div>\n\n  <!-- Popup -->\n  <div *ngIf=\"showpopup\" class=\"custom-popup\">\n    <div class=\"pop-container\">\n      <div class=\"pop-msg\">\n        <ion-row>\n          <ion-col size=\"10\">\n            <h5>{{'message.heading_complete_task_popup' | translate}} </h5>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"10\">\n            <ion-textarea placeholder=\"{{'add_remarks' | translate}}\">\n            </ion-textarea>\n          </ion-col>\n          <ion-col size=\"2\" class=\"attachment-action\">\n            <div>\n              <img src=\"assets/images/gallery.png\">\n            </div>\n            <div>\n              <img src=\"assets/images/attach-pin.png\">\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-row class=\"pop-btn\">\n        <ion-col size=\"5\">\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"close()\"> {{'button.attach' | translate}}</ion-button>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"close()\"> {{'button.mark_complete' | translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <!-- Popup ends here -->\n</ion-content>"

/***/ }),

/***/ "./src/app/current-task-view/current-task-view.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/current-task-view/current-task-view.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-view-container ion-row {\n  margin: 5px 0px; }\n\n.task-view-container h3 {\n  margin-bottom: 15px; }\n\n.task-view-container .col-9-custom {\n  font-size: 18px;\n  font-family: 'SourceSansPro-Bold' !important;\n  font-weight: 500;\n  color: #4b4b4b; }\n\n.task-view-container ion-label {\n  font-family: 'SourceSansPro-Bold' !important;\n  font-weight: 600;\n  margin: auto; }\n\n.task-view-container .custom-select {\n  border: 1px solid #ccc;\n  padding: 5px;\n  min-width: 70%;\n  max-width: 70%;\n  height: 36px;\n  border-radius: 4px; }\n\n.task-view-container .subtask-box {\n  margin: 15px 0px; }\n\n.task-view-container .subtask-box ion-icon {\n    color: #af4038; }\n\n.task-view-container .subtask-box .subtask-title {\n    font-family: 'SourceSansPro-Bold' !important;\n    font-weight: 600; }\n\n.task-view-container .subtask-box ion-row, .task-view-container .subtask-box ion-col {\n    margin: 0px;\n    padding: 0px; }\n\n.pop-container {\n  margin: auto;\n  max-width: 80%;\n  box-shadow: 0px 3px 8px 4px #e2e2e2;\n  background: #fff;\n  padding: 10px;\n  border-radius: 1em; }\n\n.pop-container .pop-msg {\n    margin: 0px 0.2em; }\n\n.pop-container .pop-msg h5 {\n      font-size: 1rem; }\n\n.pop-container .pop-msg ion-textarea {\n      box-shadow: 1px 2px 3px 0px #95989a;\n      border-radius: 1em;\n      font-size: 1rem;\n      background: #fafafa;\n      padding: 10px 5px; }\n\n.pop-container .pop-msg .attachment-action {\n      margin: auto;\n      text-align: center; }\n\n.pop-container .pop-msg .attachment-action img {\n        width: 2em; }\n\n.pop-container .pop-btn ion-button {\n    text-transform: none;\n    font-family: 'SourceSansPro-Bold' !important;\n    font-size: 1rem; }\n\n.custom-popup {\n  position: fixed;\n  z-index: 10;\n  left: 0;\n  top: 30%;\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvY3VycmVudC10YXNrLXZpZXcvY3VycmVudC10YXNrLXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsZUFBYyxFQUFBOztBQUh0QjtFQU1RLG1CQUFtQixFQUFBOztBQU4zQjtFQVVRLGVBQWU7RUFDZiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFidEI7RUFnQlEsNENBQTRDO0VBQzVDLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBbEJwQjtFQXFCSSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQTFCdEI7RUE2QlEsZ0JBQWdCLEVBQUE7O0FBN0J4QjtJQStCWSxjQUFhLEVBQUE7O0FBL0J6QjtJQWtDUSw0Q0FBNEM7SUFDNUMsZ0JBQWdCLEVBQUE7O0FBbkN4QjtJQXNDWSxXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQUt4QjtFQUVJLFlBQVk7RUFDWixjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBUHRCO0lBVUksaUJBQWlCLEVBQUE7O0FBVnJCO01BWVEsZUFBZSxFQUFBOztBQVp2QjtNQWVRLG1DQUFtQztNQUNuQyxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQixpQkFBaUIsRUFBQTs7QUFuQnpCO01BdUJRLFlBQVk7TUFDWixrQkFBa0IsRUFBQTs7QUF4QjFCO1FBMEJZLFVBQVUsRUFBQTs7QUExQnRCO0lBZ0NZLG9CQUFvQjtJQUNwQiw0Q0FBNEM7SUFDNUMsZUFBZSxFQUFBOztBQUkzQjtFQUVBLGVBQWU7RUFDZixXQUFXO0VBQ1gsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2N1cnJlbnQtdGFzay12aWV3L2N1cnJlbnQtdGFzay12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLXZpZXctY29udGFpbmVye1xuICAgIGlvbi1yb3dcbiAgICB7XG4gICAgICAgIG1hcmdpbjo1cHggMHB4O1xuICAgIH1cbiAgICBoM3tcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICB9XG4gICAgLmNvbC05LWN1c3RvbVxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZVNhbnNQcm8tQm9sZCcgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICM0YjRiNGI7XG4gICAgfVxuICAgIGlvbi1sYWJlbHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2VTYW5zUHJvLUJvbGQnICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLmN1c3RvbS1zZWxlY3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWluLXdpZHRoOiA3MCU7XG4gICAgbWF4LXdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgLnN1YnRhc2stYm94e1xuICAgICAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGNvbG9yOiNhZjQwMzg7XG4gICAgICAgIH1cbiAgICAgICAgLnN1YnRhc2stdGl0bGV7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU291cmNlU2Fuc1Byby1Cb2xkJyAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1yb3csIGlvbi1jb2x7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBvcC1jb250YWluZXJcbntcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggNHB4ICNlMmUyZTI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAucG9wLW1zZ1xuICAgIHtcbiAgICBtYXJnaW46IDBweCAwLjJlbTtcbiAgICBoNXtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggM3B4IDBweCAjOTU5ODlhO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgfVxuICAgIC5hdHRhY2htZW50LWFjdGlvblxuICAgIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxuICAgIC5wb3AtYnRue1xuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZVNhbnNQcm8tQm9sZCcgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5jdXN0b20tcG9wdXBcbntcbnBvc2l0aW9uOiBmaXhlZDtcbnotaW5kZXg6IDEwO1xubGVmdDogMDtcbnRvcDogMzAlO1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG5vdmVyZmxvdzogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/current-task-view/current-task-view.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/current-task-view/current-task-view.page.ts ***!
  \*************************************************************/
/*! exports provided: CurrentTaskViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentTaskViewPage", function() { return CurrentTaskViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_project_create_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create-project/create-project.service */ "./src/app/create-project/create-project.service.ts");







var CurrentTaskViewPage = /** @class */ (function () {
    function CurrentTaskViewPage(storage, datepipe, datePicker, router, route, createProjectService) {
        var _this = this;
        this.storage = storage;
        this.datepipe = datepipe;
        this.datePicker = datePicker;
        this.router = router;
        this.route = route;
        this.createProjectService = createProjectService;
        this.showpopup = false;
        this.enableMarkButton = false;
        this.markLabelsAsInvalid = false;
        this.statuses = [
            { title: 'Not started' },
            { title: 'In Progress' },
            { title: 'Completed' }
        ];
        this.subtask = {};
        route.params.subscribe(function (param) {
            _this.from = param.from;
            _this.id = param.id;
        });
    }
    CurrentTaskViewPage.prototype.ionViewDidEnter = function () {
        this.getTask();
        this.enableMarkButton = false;
    };
    CurrentTaskViewPage.prototype.ngOnInit = function () {
    };
    CurrentTaskViewPage.prototype.getTask = function () {
        var _this = this;
        this.storage.get('cTask').then(function (task) {
            _this.enableMarkTaskComplete(task);
            _this.task = task;
            _this.storage.get('myprojects').then(function (myProjects) {
                if (myProjects) {
                    myProjects.forEach(function (project) {
                        project.tasks.forEach(function (tasks) {
                            if (tasks._id == task._id) {
                                // this.task = tasks;
                            }
                        });
                    });
                }
            });
            if (_this.from == 'pd') {
                _this.back = "project-view/project-detail";
                _this.parameter = 'my_projects';
            }
            else {
                _this.back = "project-view/create-task/" + _this.task.projectId + '/' + _this.from;
            }
        });
    };
    CurrentTaskViewPage.prototype.enableMarkTaskComplete = function (task) {
        if (task.subTasks && task.subTasks.length > 0) {
            var subTasksCompleted_1 = 0;
            task.subTasks.forEach(function (subtask) {
                if (subtask.status === 'Completed') {
                    subTasksCompleted_1 + 1;
                }
            });
            if (subTasksCompleted_1 === task.subTasks.length) {
                this.enableMarkButton = true;
            }
            else {
                this.enableMarkButton = false;
            }
        }
        else {
            this.enableMarkButton = true;
        }
    };
    // set date
    CurrentTaskViewPage.prototype.setDate = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            if (type == 'subtask') {
                _this.subtask.endDate = _this.datepipe.transform(new Date(date));
                _this.updateTask();
            }
            else if (type == 'task') {
                _this.task.endDate = _this.datepipe.transform(new Date(date));
                _this.updateTask();
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    CurrentTaskViewPage.prototype.setSubTaskDate = function (subTask) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            subTask.endDate = _this.datepipe.transform(new Date(date));
            _this.upDateSubTask(subTask);
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    CurrentTaskViewPage.prototype.addSubtask = function () {
        if (this.subtask.title) {
            this.subtask.status = 'Not started';
            if (this.task.subTasks) {
                this.subtask._id = this.task.subTasks.length + 2;
            }
            else {
                this.subtask._id = 1;
                this.task.subTasks = [];
            }
            this.subtask.isNew = true;
            this.task.subTasks.push(this.subtask);
            this.updateStatus();
            this.enableMarkTaskComplete(this.task);
            this.subtask = {};
        }
    };
    CurrentTaskViewPage.prototype.updateCurrentProject = function (ct) {
        this.createProjectService.UpdateCurrentMyProject(ct).then(function (currentMyProject) {
            //  this.getTask();
        });
    };
    CurrentTaskViewPage.prototype.markTaskAsCompleted = function () {
        var _this = this;
        this.showpopup = true;
        this.task.status = 'Completed';
        if (this.task.subTasks) {
            this.task.subTasks.forEach(function (subtask) {
                subtask.status = 'Completed';
            });
        }
        var task = this.task;
        this.task = task;
        this.storage.set('cTask', task).then(function (updatedTask) {
            _this.updateCurrentProject(updatedTask);
        });
    };
    CurrentTaskViewPage.prototype.selectedStatus = function (event) {
        if (this.task.status != 'Completed') {
            this.task.status = event.detail.value;
            this.updateTask();
        }
    };
    CurrentTaskViewPage.prototype.allowEdit = function (field) {
        switch (field) {
            case 'goal': {
                this.editGoal = true;
                break;
            }
            case 'title': {
                this.editTitle = true;
                break;
            }
            case 'subTaskTitle': {
                this.subTaskTitle = true;
                break;
            }
        }
    };
    CurrentTaskViewPage.prototype.blockEdit = function (field) {
        switch (field) {
            case 'goal': {
                if (this.task.goal) {
                    this.editGoal = false;
                    this.markLabelsAsInvalid = false;
                }
                else {
                    this.markLabelsAsInvalid = true;
                }
                break;
            }
            case 'title': {
                if (this.task.title) {
                    this.editTitle = false;
                    this.markLabelsAsInvalid = false;
                }
                else {
                    this.markLabelsAsInvalid = true;
                }
                break;
            }
            case 'subTaskTitle': {
                if (this)
                    this.subTaskTitle = false;
                break;
            }
        }
        this.updateTask();
    };
    CurrentTaskViewPage.prototype.subTaskEditBlock = function (subtask) {
        this.task.subTasks.forEach(function (subTask) {
            subTask.allowEdit = false;
        });
        if (subtask.title.length > 0) {
            this.subTaskTitle = false;
            subtask.allowEdit = false;
            this.upDateSubTask(subtask);
        }
        else {
            subtask.allowEdit = true;
        }
    };
    CurrentTaskViewPage.prototype.subTaskEdit = function (subtask) {
        subtask.allowEdit = !subtask.allowEdit;
    };
    CurrentTaskViewPage.prototype.selectedSubTaskStatus = function (event, subtask) {
        subtask.status = event.detail.value;
        this.upDateSubTask(subtask);
    };
    // Delete subtask
    CurrentTaskViewPage.prototype.delete = function (subtask) {
        subtask.isDelete = true;
        this.upDateSubTask(subtask);
    };
    CurrentTaskViewPage.prototype.updateTask = function () {
        var _this = this;
        this.updateStatus();
        this.storage.set('cTask', this.task).then(function (ct) {
            _this.updateCurrentProject(ct);
        });
    };
    // update subtasks in task
    CurrentTaskViewPage.prototype.upDateSubTask = function (upDatedsubtask) {
        this.task.subTasks.forEach(function (subtask, i) {
            if (subtask._id == upDatedsubtask._id) {
                subtask = upDatedsubtask;
            }
        });
        this.updateStatus();
    };
    CurrentTaskViewPage.prototype.updateStatus = function () {
        var _this = this;
        if (this.task.status != 'Completed' || this.task.status != 'completed') {
            this.enableMarkTaskComplete(this.task);
            var notStarted_1 = 0, inProgress_1 = 0, completed_1 = 0;
            this.task.subTasks.forEach(function (subTask) {
                subTask.status == 'Not started' ? notStarted_1++
                    : subTask.status == 'In Progress' ? inProgress_1++
                        : completed_1++;
            });
            this.task.subTasks.length === notStarted_1 ? this.task.status = 'Not started'
                : this.task.subTasks.length === completed_1 ? this.task.status = 'Completed'
                    : this.task.status = 'In Progress';
            if (this.task.status == 'Completed' || this.task.status == 'completed') {
                this.enableMarkButton = true;
            }
            this.storage.set('cTask', this.task).then(function (ct) {
                _this.task = ct;
                _this.updateCurrentProject(ct);
            });
        }
        else {
            if (this.task.subTask && this.task.subTask.length > 0) {
                this.task.subTask.forEach(function (subtask) {
                    subtask.status = 'Completed';
                });
                this.storage.set('cTask', this.task).then(function (ct) {
                    _this.task = ct;
                    _this.enableMarkTaskComplete(_this.task);
                    _this.updateCurrentProject(ct);
                });
            }
        }
    };
    CurrentTaskViewPage.prototype.close = function () {
        this.showpopup = false;
        if (this.task.projectStarted) {
            this.router.navigate(['/project-view/project-detail', this.parameter]);
        }
        else {
            this.router.navigate(['/project-view/create-task', this.task.projectId, this.from]);
        }
    };
    CurrentTaskViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-task-view',
            template: __webpack_require__(/*! ./current-task-view.page.html */ "./src/app/current-task-view/current-task-view.page.html"),
            styles: [__webpack_require__(/*! ./current-task-view.page.scss */ "./src/app/current-task-view/current-task-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["DatePicker"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _create_project_create_project_service__WEBPACK_IMPORTED_MODULE_6__["CreateProjectService"]])
    ], CurrentTaskViewPage);
    return CurrentTaskViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=current-task-view-current-task-view-module.js.map