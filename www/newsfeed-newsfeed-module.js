(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsfeed-newsfeed-module"],{

/***/ "./src/app/newsfeed/newsfeed.module.ts":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.module.ts ***!
  \*********************************************/
/*! exports provided: NewsfeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPageModule", function() { return NewsfeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newsfeed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsfeed.page */ "./src/app/newsfeed/newsfeed.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _newsfeed_page__WEBPACK_IMPORTED_MODULE_6__["NewsfeedPage"]
    }
];
var NewsfeedPageModule = /** @class */ (function () {
    function NewsfeedPageModule() {
    }
    NewsfeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
            ],
            declarations: [_newsfeed_page__WEBPACK_IMPORTED_MODULE_6__["NewsfeedPage"]]
        })
    ], NewsfeedPageModule);
    return NewsfeedPageModule;
}());



/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.html":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'newsfeed.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\"\n    [isGoBack]=\"back\"\n    [noBorder]=\"false\" >\n  </app-header>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <h2>{{'message.comingsoon' | translate}}</h2>\n    </ion-card-header>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.scss":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3NmZWVkL25ld3NmZWVkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.ts":
/*!*******************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.ts ***!
  \*******************************************/
/*! exports provided: NewsfeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPage", function() { return NewsfeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsfeedPage = /** @class */ (function () {
    function NewsfeedPage() {
        this.back = 'project-view/home';
    }
    NewsfeedPage.prototype.ngOnInit = function () {
    };
    NewsfeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsfeed',
            template: __webpack_require__(/*! ./newsfeed.page.html */ "./src/app/newsfeed/newsfeed.page.html"),
            styles: [__webpack_require__(/*! ./newsfeed.page.scss */ "./src/app/newsfeed/newsfeed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsfeedPage);
    return NewsfeedPage;
}());



/***/ })

}]);
//# sourceMappingURL=newsfeed-newsfeed-module.js.map