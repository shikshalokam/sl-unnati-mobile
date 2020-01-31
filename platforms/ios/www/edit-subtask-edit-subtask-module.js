(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-subtask-edit-subtask-module"],{

/***/ "./src/app/edit-subtask/edit-subtask.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-subtask/edit-subtask.module.ts ***!
  \*****************************************************/
/*! exports provided: EditSubtaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubtaskPageModule", function() { return EditSubtaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_subtask_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-subtask.page */ "./src/app/edit-subtask/edit-subtask.page.ts");







var routes = [
    {
        path: '',
        component: _edit_subtask_page__WEBPACK_IMPORTED_MODULE_6__["EditSubtaskPage"]
    }
];
var EditSubtaskPageModule = /** @class */ (function () {
    function EditSubtaskPageModule() {
    }
    EditSubtaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_subtask_page__WEBPACK_IMPORTED_MODULE_6__["EditSubtaskPage"]]
        })
    ], EditSubtaskPageModule);
    return EditSubtaskPageModule;
}());



/***/ }),

/***/ "./src/app/edit-subtask/edit-subtask.page.html":
/*!*****************************************************!*\
  !*** ./src/app/edit-subtask/edit-subtask.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{title}}\n      <ion-icon name=\"close-circle\" (click)=\"close()\" style=\" float: right;\n        font-size: larger;\"></ion-icon>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"propertyForm\" novalidate>\n    <div class=\"form-group\">\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"{{'tasks.title_placeholder' |translate }}\" class=\"form-control\"\n          formControlName=\"title\" [(ngModel)]=\"task.title\" required></ion-input>\n      </ion-item>\n      <div *ngIf=\"!propertyForm.controls.title.valid && propertyForm.controls.title.dirty\" class=\"validator-error\">\n        Please enter title of Task.\n      </div>\n    </div>\n    <!-- Start date -->\n    <div class=\"form-group\">\n      <ion-item>\n        <ion-datetime style=\"--padding-start: 0px;\" placeholder=\"{{'tasks.start_date' |translate }}\"\n          display-format=\"DD MM YYYY\" picker-format=\"MMMM DD YYYY\" formControlName=\"startDate\"\n          [(ngModel)]=\"task.startDate\" required></ion-datetime>\n      </ion-item>\n      <div *ngIf=\"!propertyForm.controls.startDate.valid && propertyForm.controls.startDate.dirty\"\n        class=\"validator-error\">\n        Please enter Start date.\n      </div>\n    </div>\n    <!-- End date -->\n    <div class=\"form-group\">\n      <ion-item>\n        <ion-datetime style=\"--padding-start: 0px;\" placeholder=\"{{'tasks.end_date' |translate }}\"\n          display-format=\"DD MM YYYY\" picker-format=\"MMMM DD YYYY\" formControlName=\"endDate\" [(ngModel)]=\"task.endDate\"\n          required></ion-datetime>\n      </ion-item>\n      <div *ngIf=\"!propertyForm.controls.endDate.valid && propertyForm.controls.endDate.dirty\" class=\"validator-error\">\n        Please enter End date.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <ion-item *ngFor=\"let assign of task.assignedTo\">\n        <ion-input type=\"text\" placeholder=\"{{'tasks.assignedTo' |translate }}\" readonly class=\"form-control\"\n          formControlName=\"assignTo\" [(ngModel)]=\"assign\" required></ion-input>\n      </ion-item>\n      <div\n        *ngIf=\"!propertyForm.controls.assignTo.valid && propertyForm.controls.assignTo.dirty && propertyForm.controls.assignTo.touched\"\n        class=\"validator-error\">\n        Please enter Assign to.\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"title== 'Edit Task'\">\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"{{'tasks.status' |translate }}\" class=\"form-control\"\n          formControlName=\"status\" [(ngModel)]=\"task.status\" required></ion-input>\n      </ion-item>\n      <div\n        *ngIf=\"!propertyForm.controls.status.valid && propertyForm.controls.status.dirty && propertyForm.controls.status.touched\"\n        class=\"validator-error\">\n        Please enter Status.\n      </div>\n    </div>\n    <div style=\"background-color:#cccccc57; padding: 5px; margin-top:20px;\">\n      <ion-button size=\"small\" color=\"light\" slot=\"start\" (click)=\"close()\"> {{'button.cancel' | translate}}\n      </ion-button>\n      <ion-button size=\"small\" color=\"primary\" slot=\"end\" style=\"float:right\" (click)=\"create()\">\n        {{'button.save' | translate}}</ion-button>\n    </div>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/edit-subtask/edit-subtask.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-subtask/edit-subtask.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtc3VidGFzay9lZGl0LXN1YnRhc2sucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit-subtask/edit-subtask.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-subtask/edit-subtask.page.ts ***!
  \***************************************************/
/*! exports provided: EditSubtaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubtaskPage", function() { return EditSubtaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditSubtaskPage = /** @class */ (function () {
    function EditSubtaskPage() {
    }
    EditSubtaskPage.prototype.ngOnInit = function () {
    };
    EditSubtaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-subtask',
            template: __webpack_require__(/*! ./edit-subtask.page.html */ "./src/app/edit-subtask/edit-subtask.page.html"),
            styles: [__webpack_require__(/*! ./edit-subtask.page.scss */ "./src/app/edit-subtask/edit-subtask.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditSubtaskPage);
    return EditSubtaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-subtask-edit-subtask-module.js.map