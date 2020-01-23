(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["library-library-module"],{

/***/ "./src/app/library/library.module.ts":
/*!*******************************************!*\
  !*** ./src/app/library/library.module.ts ***!
  \*******************************************/
/*! exports provided: LibraryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryPageModule", function() { return LibraryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _library_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./library.page */ "./src/app/library/library.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search.filter */ "./src/app/library/search.filter.ts");










var routes = [
    {
        path: '',
        component: _library_page__WEBPACK_IMPORTED_MODULE_6__["LibraryPage"]
    }
];
var LibraryPageModule = /** @class */ (function () {
    function LibraryPageModule() {
    }
    LibraryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_library_page__WEBPACK_IMPORTED_MODULE_6__["LibraryPage"], _search_filter__WEBPACK_IMPORTED_MODULE_9__["SearchCategory"]]
        })
    ], LibraryPageModule);
    return LibraryPageModule;
}());



/***/ }),

/***/ "./src/app/library/library.page.html":
/*!*******************************************!*\
  !*** ./src/app/library/library.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'library.title'| translate\" [bg]=\"bgcolor\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"false\">\n  </app-header>\n</ion-header>\n<ion-content style=\"--background: rgb(247, 247, 247); margin-bottom:40px;\">\n  <ion-item class=\"search-bar-custom\">\n    <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n    <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n  </ion-item>\n  <ion-grid class=\"library-tiles-container\">\n    <h5 style=\"padding: 15px;\n      text-transform: uppercase;\"> {{'library.imp_library' | translate}}</h5>\n    <ion-row>\n      <ion-col *ngFor=\"let tile of tiles | searchCategory: searchInput\" class=\"tiles\" size=\"6\"\n        style=\"    margin: 5px 0px;\">\n        <ion-card (click)=\"navigateToCategoryView(tile.value)\">\n          <img src=\"{{tile.icon}}\">\n          <p>{{tile.title}}</p>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/library/library.page.scss":
/*!*******************************************!*\
  !*** ./src/app/library/library.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-background {\n  --background: rgb(247, 247, 247); }\n\n.library-tiles-container {\n  padding: 0px 20px;\n  margin-bottom: 40px; }\n\n.library-tiles-container .tiles ion-card {\n    max-height: 100%;\n    min-height: 100%;\n    border-radius: 15px;\n    background: #fff;\n    margin: 5px; }\n\n.library-tiles-container .tiles ion-card img {\n      margin: auto;\n      width: 45%;\n      padding: 15px 0px 15px 0px; }\n\n.library-tiles-container .tiles p {\n    text-align: center;\n    font-family: 'SourceSansPro-Bold';\n    text-transform: uppercase;\n    font-size: 14px;\n    padding: 0px;\n    margin: 2px 5px 2px 5px;\n    font-weight: 600;\n    color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvVW5uYXRpL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9saWJyYXJ5L2xpYnJhcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQWEsRUFBQTs7QUFFZjtFQUVBLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFIbkI7SUFPSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBOztBQVhmO01BYU0sWUFBWTtNQUNaLFVBQVU7TUFDViwwQkFBMEIsRUFBQTs7QUFmaEM7SUFtQkksa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbGlicmFyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1iYWNrZ3JvdW5ke1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDcsIDI0NywgMjQ3KTtcbn1cbi5saWJyYXJ5LXRpbGVzLWNvbnRhaW5lclxue1xucGFkZGluZzogMHB4IDIwcHg7XG5tYXJnaW4tYm90dG9tOiA0MHB4O1xuLnRpbGVze1xuICBpb24tY2FyZFxuICB7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDVweDtcbiAgICBpbWd7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB3aWR0aDogNDUlO1xuICAgICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XG4gICAgfVxuICB9XG4gIHB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlU2Fuc1Byby1Cb2xkJztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAycHggNXB4IDJweCA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxufVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/library/library.page.ts":
/*!*****************************************!*\
  !*** ./src/app/library/library.page.ts ***!
  \*****************************************/
/*! exports provided: LibraryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryPage", function() { return LibraryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LibraryPage = /** @class */ (function () {
    function LibraryPage(router) {
        this.router = router;
        this.bgcolor = '#f7f7f7';
        this.back = "project-view/home";
        this.tiles = [
            { title: "my projects", icon: 'assets/images/libraryTiles/myprojects.png', value: 'my_projects' },
            { title: "teacher", icon: 'assets/images/libraryTiles/teacher.png', value: 'teacher' },
            { title: "students", icon: 'assets/images/libraryTiles/students.png', value: 'students' },
            { title: "community", icon: 'assets/images/libraryTiles/community.png', value: 'community' },
            { title: "school process", icon: 'assets/images/libraryTiles/sp.png', value: 'school_process' },
            { title: "infrastructure", icon: 'assets/images/libraryTiles/infrastructure.png', value: 'infrastructure' },
            { title: "education leader", icon: 'assets/images/libraryTiles/el.png', value: 'education_leader' },
            { title: "other", icon: 'assets/images/libraryTiles/others.png', value: 'other' }
        ];
    }
    LibraryPage.prototype.ngOnInit = function () {
    };
    LibraryPage.prototype.navigateToCategoryView = function (category) {
        this.router.navigate(['/project-view/category', category]);
    };
    LibraryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.page.html */ "./src/app/library/library.page.html"),
            styles: [__webpack_require__(/*! ./library.page.scss */ "./src/app/library/library.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LibraryPage);
    return LibraryPage;
}());



/***/ }),

/***/ "./src/app/library/search.filter.ts":
/*!******************************************!*\
  !*** ./src/app/library/search.filter.ts ***!
  \******************************************/
/*! exports provided: SearchCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCategory", function() { return SearchCategory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchCategory = /** @class */ (function () {
    function SearchCategory() {
    }
    SearchCategory.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            if (item.title.toLowerCase().includes(searchText)) {
                return item.title.toLowerCase().includes(searchText);
            }
        });
    };
    SearchCategory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'searchCategory'
        })
    ], SearchCategory);
    return SearchCategory;
}());



/***/ })

}]);
//# sourceMappingURL=library-library-module.js.map