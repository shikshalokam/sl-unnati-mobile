(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kclg-kclg-module"],{

/***/ "./src/app/kclg/kclg.module.ts":
/*!*************************************!*\
  !*** ./src/app/kclg/kclg.module.ts ***!
  \*************************************/
/*! exports provided: KclgPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KclgPageModule", function() { return KclgPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _kclg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kclg.page */ "./src/app/kclg/kclg.page.ts");







var routes = [
    {
        path: '',
        component: _kclg_page__WEBPACK_IMPORTED_MODULE_6__["KclgPage"]
    }
];
var KclgPageModule = /** @class */ (function () {
    function KclgPageModule() {
    }
    KclgPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_kclg_page__WEBPACK_IMPORTED_MODULE_6__["KclgPage"]]
        })
    ], KclgPageModule);
    return KclgPageModule;
}());



/***/ }),

/***/ "./src/app/kclg/kclg.page.html":
/*!*************************************!*\
  !*** ./src/app/kclg/kclg.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>kclg</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/kclg/kclg.page.scss":
/*!*************************************!*\
  !*** ./src/app/kclg/kclg.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tjbGcva2NsZy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/kclg/kclg.page.ts":
/*!***********************************!*\
  !*** ./src/app/kclg/kclg.page.ts ***!
  \***********************************/
/*! exports provided: KclgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KclgPage", function() { return KclgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var KclgPage = /** @class */ (function () {
    function KclgPage(route, router) {
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
        });
    }
    KclgPage.prototype.ngOnInit = function () {
        console.log('in kclg');
    };
    KclgPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kclg',
            template: __webpack_require__(/*! ./kclg.page.html */ "./src/app/kclg/kclg.page.html"),
            styles: [__webpack_require__(/*! ./kclg.page.scss */ "./src/app/kclg/kclg.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], KclgPage);
    return KclgPage;
}());



/***/ })

}]);
//# sourceMappingURL=kclg-kclg-module.js.map