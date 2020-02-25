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

module.exports = "<ion-content>\n  <div *ngIf=\"projects\">\n    <ion-item class=\"search-bar-custom\">\n      <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n      <!-- (keyup)=\"searchSchool(searchInput)\" -->\n    </ion-item>\n    <div *ngIf=\"(projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n      <div class=\"no-results\"> {{'message.no_data_found' | translate}}\n      </div>\n    </div>\n    <ion-card class=\"project-card\">\n      <ion-card-header>\n        {{'projects.myProjects' | translate}}\n      </ion-card-header>\n      <ion-card-content>\n        <div *ngFor=\"let projects of projectList\">\n          <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n            <ion-card-content  class=\"inner-card\"\n              *ngIf=\"(project.createdType == 'by self' || project.createdType == 'by reference') && !project.isDeleted\"\n              (click)=\"projectView(project)\"  style=\"border-bottom:1px solid #f4f5f8;padding: 0px; color:#000;\">\n              <ion-grid *ngIf=\"project.isStarted\">\n                <ion-row>\n                  <ion-col size=\"10\">\n                    {{ project.title }}\n                  </ion-col>\n                  <ion-col size=\"2\" style=\"text-align: right;\">\n                    <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/my-projects/my-projects.page.scss":
/*!***************************************************!*\
  !*** ./src/app/my-projects/my-projects.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-card ion-card-header {\n  background: #f5f5f5;\n  font-size: 18px;\n  color: #000;\n  font-weight: 600; }\n  .project-card ion-card-header ion-icon {\n    float: right; }\n  .project-card ion-card-content {\n  padding: 0px; }\n  .project-card .inner-card {\n  background: #fff;\n  padding: 0px;\n  margin: 0px; }\n  .project-card .inner-card ion-icon {\n    float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9teS1wcm9qZWN0cy9teS1wcm9qZWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTtFQU54QjtJQVFjLFlBQVksRUFBQTtFQVIxQjtFQVlJLFlBQVksRUFBQTtFQVpoQjtFQWdCSSxnQkFBZ0I7RUFDaEIsWUFBVztFQUNYLFdBQVUsRUFBQTtFQWxCZDtJQW9CTSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9teS1wcm9qZWN0cy9teS1wcm9qZWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1jYXJkXG57XG4gICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMHB4O1xuIH1cbiAgLmlubmVyLWNhcmRcbiAge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICBpb24taWNvbntcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gIH1cbn1cbi8vIC5pbm5lci1jYXJkXG4vLyAgIHtcbi8vICAgICBtYXJnaW46IDVweCAwcHg7XG4vLyAgICAgY29sb3I6ICMwMDA7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuLy8gICAgIC5hcnJvdy1tYXJre1xuLy8gICAgICAgbWFyZ2luOiBhdXRvO1xuLy8gICAgICAgZm9udC1zaXplOjIycHg7XG4vLyAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGlvbi1jYXJkLWhlYWRlcntcbi8vICAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuLy8gICAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICAgIGNvbG9yOiAjMDAwO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgICAgICAgIGlvbi1pY29ue1xuLy8gICAgICAgICAgIGZsb2F0OiByaWdodDtcbi8vICAgICAgICAgfVxuLy8gICAgIH0iXX0= */"

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
        this.storage.get('projects').then(function (myprojects) {
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