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

module.exports = ".toolbar-background {\n  --background: rgb(247, 247, 247); }\n\n.library-tiles-container {\n  padding: 0px 20px;\n  margin-bottom: 40px; }\n\n.library-tiles-container .tiles ion-card {\n    max-height: 100%;\n    min-height: 100%;\n    border-radius: 15px;\n    background: #fff;\n    margin: 5px; }\n\n.library-tiles-container .tiles ion-card img {\n      margin: auto;\n      width: 45%;\n      padding: 15px 0px 15px 0px; }\n\n.library-tiles-container .tiles p {\n    text-align: center;\n    font-family: 'SourceSansPro-Bold';\n    text-transform: uppercase;\n    font-size: 14px;\n    padding: 0px;\n    margin: 2px 5px 2px 5px;\n    font-weight: 600;\n    color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvbGlicmFyeS9saWJyYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFhLEVBQUE7O0FBRWY7RUFFQSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBSG5CO0lBT0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTs7QUFYZjtNQWFNLFlBQVk7TUFDWixVQUFVO01BQ1YsMEJBQTBCLEVBQUE7O0FBZmhDO0lBbUJJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L2xpYnJhcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItYmFja2dyb3VuZHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG59XG4ubGlicmFyeS10aWxlcy1jb250YWluZXJcbntcbnBhZGRpbmc6IDBweCAyMHB4O1xubWFyZ2luLWJvdHRvbTogNDBweDtcbi50aWxlc3tcbiAgaW9uLWNhcmRcbiAge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgaW1ne1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xuICAgIH1cbiAgfVxuICBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZVNhbnNQcm8tQm9sZCc7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMnB4IDVweCAycHggNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbn1cbn0iXX0= */"

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