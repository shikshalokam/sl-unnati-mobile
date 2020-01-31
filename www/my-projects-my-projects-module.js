(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-projects-my-projects-module"],{

/***/ "./src/app/my-projects/my-projects.module.ts":
/*!***************************************************!*\
  !*** ./src/app/my-projects/my-projects.module.ts ***!
  \***************************************************/
/*! exports provided: MyProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsPageModule", function() { return MyProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-projects.page */ "./src/app/my-projects/my-projects.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");









var routes = [
    {
        path: '',
        component: _my_projects_page__WEBPACK_IMPORTED_MODULE_6__["MyProjectsPage"]
    }
];
var MyProjectsPageModule = /** @class */ (function () {
    function MyProjectsPageModule() {
    }
    MyProjectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_my_projects_page__WEBPACK_IMPORTED_MODULE_6__["MyProjectsPage"]]
        })
    ], MyProjectsPageModule);
    return MyProjectsPageModule;
}());



/***/ }),

/***/ "./src/app/my-projects/my-projects.page.html":
/*!***************************************************!*\
  !*** ./src/app/my-projects/my-projects.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div *ngIf=\"projects\">\n    <ion-item class=\"search-bar-custom\">\n      <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n      <!-- (keyup)=\"searchSchool(searchInput)\" -->\n    </ion-item>\n    <div *ngIf=\"(projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n      <div class=\"no-results\"> {{'message.no_data_found' | translate}}\n      </div>\n    </div>\n    <ion-card class=\"project-card\">\n      <ion-card-header>\n        {{'projects.myProjects' | translate}}\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item *ngFor=\"let project of projects | searchProjects: searchInput\" class=\"inner-card\" (click)=\"projectView(project)\">\n          <!-- <ion-card-content class=\"custom-card-header\" >  -->\n            {{project.title}} <ion-icon name=\"arrow-forward\"></ion-icon>\n          <!-- </ion-card-content> -->\n        </ion-item>>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/my-projects/my-projects.page.scss":
/*!***************************************************!*\
  !*** ./src/app/my-projects/my-projects.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-card ion-card-header {\n  background: #f5f5f5;\n  font-size: 18px;\n  color: #000;\n  font-weight: 600; }\n  .project-card ion-card-header ion-icon {\n    float: right; }\n  .project-card ion-card-content {\n  padding: 0px; }\n  .project-card .inner-card {\n  background: #fff;\n  padding: 0px;\n  margin: 0px; }\n  .project-card .inner-card ion-icon {\n    float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvbXktcHJvamVjdHMvbXktcHJvamVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7RUFOeEI7SUFRYyxZQUFZLEVBQUE7RUFSMUI7RUFZSSxZQUFZLEVBQUE7RUFaaEI7RUFnQkksZ0JBQWdCO0VBQ2hCLFlBQVc7RUFDWCxXQUFVLEVBQUE7RUFsQmQ7SUFvQk0sWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXktcHJvamVjdHMvbXktcHJvamVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtY2FyZFxue1xuICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiBpb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmc6IDBweDtcbiB9XG4gIC5pbm5lci1jYXJkXG4gIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIG1hcmdpbjowcHg7XG4gICAgaW9uLWljb257XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG59XG4vLyAuaW5uZXItY2FyZFxuLy8gICB7XG4vLyAgICAgbWFyZ2luOiA1cHggMHB4O1xuLy8gICAgIGNvbG9yOiAjMDAwO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbi8vICAgICAuYXJyb3ctbWFya3tcbi8vICAgICAgIG1hcmdpbjogYXV0bztcbi8vICAgICAgIGZvbnQtc2l6ZToyMnB4O1xuLy8gICAgICAgdGV4dC1hbGlnbjogZW5kO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICBpb24tY2FyZC1oZWFkZXJ7XG4vLyAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICBjb2xvcjogIzAwMDtcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xuLy8gICAgICAgICBpb24taWNvbntcbi8vICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4vLyAgICAgICAgIH1cbi8vICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/my-projects/my-projects.page.ts":
/*!*************************************************!*\
  !*** ./src/app/my-projects/my-projects.page.ts ***!
  \*************************************************/
/*! exports provided: MyProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsPage", function() { return MyProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MyProjectsPage = /** @class */ (function () {
    function MyProjectsPage(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    MyProjectsPage.prototype.ionViewDidEnter = function () {
        this.getMyProjects();
    };
    MyProjectsPage.prototype.ngOnInit = function () {
    };
    MyProjectsPage.prototype.getMyProjects = function () {
        var _this = this;
        this.storage.get('myprojects').then(function (myprojects) {
            _this.projects = myprojects;
        });
    };
    MyProjectsPage.prototype.projectView = function (project) {
        var _this = this;
        this.storage.set('projectToBeView', project).then(function (project) {
            _this.router.navigate(['/project-view/project-detail', 'my-projects']);
        });
    };
    MyProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-projects',
            template: __webpack_require__(/*! ./my-projects.page.html */ "./src/app/my-projects/my-projects.page.html"),
            styles: [__webpack_require__(/*! ./my-projects.page.scss */ "./src/app/my-projects/my-projects.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MyProjectsPage);
    return MyProjectsPage;
}());



/***/ })

}]);
//# sourceMappingURL=my-projects-my-projects-module.js.map