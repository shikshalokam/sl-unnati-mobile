(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["active-projects-active-projects-module"],{

/***/ "./src/app/active-projects/active-projects.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/active-projects/active-projects.module.ts ***!
  \***********************************************************/
/*! exports provided: ActiveProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveProjectsPageModule", function() { return ActiveProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _active_projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./active-projects.page */ "./src/app/active-projects/active-projects.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");









var routes = [
    {
        path: '',
        component: _active_projects_page__WEBPACK_IMPORTED_MODULE_6__["ActiveProjectsPage"]
    }
];
var ActiveProjectsPageModule = /** @class */ (function () {
    function ActiveProjectsPageModule() {
    }
    ActiveProjectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_active_projects_page__WEBPACK_IMPORTED_MODULE_6__["ActiveProjectsPage"]]
        })
    ], ActiveProjectsPageModule);
    return ActiveProjectsPageModule;
}());



/***/ }),

/***/ "./src/app/active-projects/active-projects.page.html":
/*!***********************************************************!*\
  !*** ./src/app/active-projects/active-projects.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <!-- My projects starts here -->\n  <div *ngIf=\"projectList\">\n    <ion-item class=\"search-bar-custom\">\n      <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n    </ion-item>\n    <ion-card class=\"custom-card\">\n      <ion-card-header>\n        {{'projects.my_projects' | translate}}\n      </ion-card-header>\n      <ion-card-content>\n        <div *ngFor=\"let projects of projectList\">\n          <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n            <ion-card-content  class=\"inner-card\"\n              *ngIf=\"(project.createdType == 'by self' || project.createdType == 'by reference') && !project.isDeleted\"\n              (click)=\"projectView(project)\"  style=\"border-bottom:1px solid #f4f5f8;padding: 0px; color:#000;\">\n              <ion-grid *ngIf=\"project.isStarted\">\n                <ion-row>\n                  <ion-col size=\"10\">\n                    {{ project.title }}\n                  </ion-col>\n                  <ion-col size=\"2\" style=\"text-align: right;\">\n                    <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <!-- My projects ends here -->\n\n  <!-- Mapped projects starts here -->\n  <div *ngIf=\"projectList\">\n    <ion-item class=\"search-bar-custom\">\n      <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n    </ion-item>\n    <ion-card class=\"welcome-card custom-card\" *ngFor=\"let projects of projectList\">\n      <div *ngIf=\"(projects.projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n      </div>\n      <ion-card-header class=\"project-card\" style=\"background-color: #e3e3e3;\" *ngIf=\"\n            ((projects.projects | searchProjects: searchInput).length != 0 &&\n              searchInput) ||\n            !searchInput\n          \">\n        <ion-card-title>\n          {{ projects.programs.name }}\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngFor=\"let project of projects.projects | searchProjects: searchInput\"\n        (click)=\"projectView(project)\" style=\"border-bottom: 1px solid #f4f5f8;\">\n        <ion-grid>\n          <ion-row>\n            <ion-col style=\"min-width: 90%;\">\n              <ion-icon name=\"document\"></ion-icon>&nbsp;\n              {{ project.title }}\n            </ion-col>\n            <ion-col>\n              <ion-icon name=\"ios-arrow-forward\"> </ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <!-- Mapped projects ends here -->\n</ion-content>"

/***/ }),

/***/ "./src/app/active-projects/active-projects.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/active-projects/active-projects.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2ZS1wcm9qZWN0cy9hY3RpdmUtcHJvamVjdHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/active-projects/active-projects.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/active-projects/active-projects.page.ts ***!
  \*********************************************************/
/*! exports provided: ActiveProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveProjectsPage", function() { return ActiveProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ActiveProjectsPage = /** @class */ (function () {
    function ActiveProjectsPage(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    ActiveProjectsPage.prototype.ngOnInit = function () {
    };
    // public getActiveProjects() {
    //   this.storage.get('myprojects').then(activeProjects => {
    //     this.myProjects = activeProjects;
    //   });
    // }
    ActiveProjectsPage.prototype.getProjects = function () {
        var _this = this;
        this.storage.get('projects').then(function (projects) {
            _this.projectList = projects;
        });
    };
    ActiveProjectsPage.prototype.projectView = function (project) {
        var _this = this;
        this.storage.set('projectToBeView', project).then(function (project) {
            _this.router.navigate(['/project-view/project-detail', 'active-projects']);
        });
    };
    ActiveProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-active-projects',
            template: __webpack_require__(/*! ./active-projects.page.html */ "./src/app/active-projects/active-projects.page.html"),
            styles: [__webpack_require__(/*! ./active-projects.page.scss */ "./src/app/active-projects/active-projects.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ActiveProjectsPage);
    return ActiveProjectsPage;
}());



/***/ })

}]);
//# sourceMappingURL=active-projects-active-projects-module.js.map