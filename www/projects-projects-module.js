(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function() { return ProjectsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _projects_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects.page */ "./src/app/projects/projects.page.ts");
/* harmony import */ var _search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-filter */ "./src/app/projects/search-filter.ts");










var routes = [
    {
        path: '',
        component: _projects_page__WEBPACK_IMPORTED_MODULE_8__["ProjectsPage"]
    }
];
var ProjectsPageModule = /** @class */ (function () {
    function ProjectsPageModule() {
    }
    ProjectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({})
            ],
            declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_8__["ProjectsPage"], _search_filter__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"]]
        })
    ], ProjectsPageModule);
    return ProjectsPageModule;
}());



/***/ }),

/***/ "./src/app/projects/projects.page.html":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'projects.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"true\"> </app-header>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"showSkeleton\">\n    <ion-card>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-content class=\"skeleton-card-content\">\n            <p>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"tabs-list\" *ngIf=\"!showSkeleton\">\n    <div class=\"custom-tab\" (click)=\"selectTab('allProjects')\" [ngClass]=\"{'active-tab': activeTab == 'allProjects'}\">\n      {{ \"projects.allProjects\" | translate }}</div>\n    <div class=\"custom-tab\" (click)=\"selectTab('activeProjects')\"\n      [ngClass]=\"{'active-tab':  activeTab == 'activeProjects'}\">\n      {{ \"projects.activeProjects\" | translate }}\n    </div>\n  </div>\n  <div padding style=\"margin-top: 30px;\" *ngIf=\"!showSkeleton\">\n    <ion-item class=\"search-bar-custom\" style=\"margin: 20px 0px 15px 0px;\">\n      <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n    </ion-item>\n    <div style=\"padding: 0px 5px;\">\n      <div *ngIf=\"activeTab == 'allProjects'\">\n        <div *ngIf=\"myProjects\">\n          <ion-card class=\"welcome-card custom-card\">\n            <ion-card-header class=\"project-card\" >{{'projects.myProjects' | translate}}\n            </ion-card-header>\n            <ion-card-content *ngFor=\"let project of myProjects | searchProjects: searchInput\" class=\"inner-card\"\n              (click)=\"projectView(project)\"  style=\"border-bottom: 1px solid #f4f4f8;padding: 0px; color:#000;\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"10\">\n                    {{ project.title }}\n                  </ion-col>\n                  <ion-col size=\"2\" style=\"text-align: right;\">\n                    <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <div *ngIf=\"projectList\">\n          <ion-card class=\"welcome-card custom-card\" *ngFor=\"let projects of projectList\">\n            <div *ngIf=\"(projects.projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n            </div>\n            <ion-card-header class=\"project-card\" style=\"background-color: #e3e3e3;\" *ngIf=\"((projects.projects | searchProjects: searchInput).length != 0 &&searchInput) ||!searchInput\">\n              <ion-card-title>{{ projects?.programs.name}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content *ngFor=\"let project of projects.projects | searchProjects: searchInput\"\n              (click)=\"projectView(project)\"  style=\"border-bottom: 1px solid #f4f5f8;\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"10\">\n                    {{ project.title }}\n                  </ion-col>\n                  <ion-col size=\"2\" style=\"text-align: right;\">\n                    <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n      <div *ngIf=\"activeTab == 'activeProjects'\">\n        <div *ngIf=\"myProjects\">\n          <ion-card class=\"welcome-card custom-card\">\n            <ion-card-header class=\"project-card\" >{{'projects.myProjects' | translate}}\n            </ion-card-header>\n            <ion-card-content *ngFor=\"let project of myProjects | searchProjects: searchInput\" class=\"inner-card\"\n              (click)=\"projectView(project)\"  style=\"border-bottom:1px solid #f4f5f8;padding: 0px; color:#000;\">\n              <ion-grid *ngIf=\"project.isStarted\">\n                <ion-row>\n                  <ion-col size=\"10\">\n                    {{ project.title }}\n                  </ion-col>\n                  <ion-col size=\"2\" style=\"text-align: right;\">\n                    <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <div *ngIf=\"projectList\">\n          <ion-card class=\"welcome-card custom-card\" *ngFor=\"let projects of projectList\">\n            <div *ngIf=\"(projects.projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n            </div>\n            <ion-card-header class=\"project-card\" style=\"background-color: #e3e3e3;\" *ngIf=\"((projects.projects | searchProjects: searchInput).length != 0 &&searchInput) ||!searchInput\">\n              <ion-card-title>{{ projects?.programs.name}}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content *ngFor=\"let project of projects.projects | searchProjects: searchInput\"\n              (click)=\"projectView(project)\"  style=\"border-bottom: 1px solid #f4f5f8;\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"10\">\n                    {{ project.title }}\n                  </ion-col>\n                  <ion-col size=\"2\" style=\"text-align: right;\">\n                    <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/projects/projects.page.scss":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md {\n  border-radius: 20px !important; }\n\n.searchbar-search-icon .sc-ion-searchbar-md {\n  right: 16px;\n  top: 11px;\n  width: 21px;\n  height: 21px; }\n\n* {\n  box-sizing: border-box; }\n\n.tab-selected {\n  background: #b23e33;\n  color: #fff;\n  border-radius: 4px; }\n\nion-tab-button ion-label {\n  font-size: 16px; }\n\n.project-card {\n  background: #e3e3e3;\n  font-size: 18px;\n  color: #000;\n  font-weight: 600; }\n\n.project-card ion-card-header {\n    background: #e3e3e3;\n    font-size: 18px;\n    color: #000;\n    font-weight: 600; }\n\n.project-card ion-card-header ion-icon {\n      float: right; }\n\n.project-card ion-card-content {\n    padding: 0px; }\n\n.project-card .inner-card {\n    background: #fff;\n    padding: 0px;\n    margin: 0px; }\n\n.project-card .inner-card ion-icon {\n      float: right; }\n\n.project-card .inner-card ion-card-content {\n      background: #fff;\n      padding: 10px;\n      font-size: 18px;\n      color: #000;\n      font-weight: 600;\n      border-bottom: 1px solid #ccc; }\n\n.project-card .inner-card ion-card-content ion-icon {\n        float: right; }\n\n.custom-arrow {\n  margin: auto;\n  color: #000;\n  font-size: 22px;\n  text-align: end;\n  font-weight: 600;\n  text-align: right; }\n\n.tabs-list {\n  position: fixed;\n  width: 100%;\n  z-index: 999; }\n\n.custom-card {\n  margin: 0px;\n  background: #fff; }\n\n.custom-card ion-card-content {\n    padding: 0px;\n    font-size: 16px;\n    color: #000; }\n\n.custom-tab {\n  width: 50%;\n  background: #fff;\n  color: #000;\n  float: left;\n  padding: 10px;\n  text-align: center;\n  font-size: 18px;\n  border-bottom: 2px solid #b23e33; }\n\n.active-tab {\n  background: #b23e33;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9Vbm5hdGktbW9iaWxlL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSw4QkFBOEIsRUFBQTs7QUFFbEM7RUFDSSxXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRXhCO0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFFUSxlQUFjLEVBQUE7O0FBR3RCO0VBRUUsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBTGxCO0lBT1EsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBVnhCO01BWVksWUFBWSxFQUFBOztBQVp4QjtJQWdCSSxZQUFZLEVBQUE7O0FBaEJoQjtJQW9CSSxnQkFBZ0I7SUFDaEIsWUFBVztJQUNYLFdBQVUsRUFBQTs7QUF0QmQ7TUF3Qk0sWUFBWSxFQUFBOztBQXhCbEI7TUEyQkksZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixlQUFlO01BQ2YsV0FBVztNQUNYLGdCQUFnQjtNQUNoQiw2QkFBNkIsRUFBQTs7QUFoQ2pDO1FBa0NVLFlBQVksRUFBQTs7QUFLdEI7RUFDUSxZQUFZO0VBQ1osV0FBVTtFQUNWLGVBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQXVCekI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUVFLFdBQVc7RUFDWCxnQkFBZSxFQUFBOztBQUhqQjtJQUtFLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBUztFQUNULGdCQUFlO0VBQ2YsV0FBVztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWRcbntcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoYmFyLXNlYXJjaC1pY29uIC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgICByaWdodDogMTZweDtcbiAgICB0b3A6IDExcHg7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xufVxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICAudGFiLXNlbGVjdGVkXG57XG4gICAgYmFja2dyb3VuZDogI2IyM2UzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5pb24tdGFiLWJ1dHRvbiB7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgfVxufVxuLnByb2plY3QtY2FyZFxue1xuICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgfVxuIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMHB4O1xuIH1cbiAgLmlubmVyLWNhcmRcbiAge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICBpb24taWNvbntcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmN1c3RvbS1hcnJvd3tcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBjb2xvcjojMDAwO1xuICAgICAgICBmb250LXNpemU6MjJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi8vIC5pbm5lci1jYXJkXG4vLyAgIHtcbi8vICAgICBtYXJnaW46IDVweCAwcHg7XG4vLyAgICAgY29sb3I6ICMwMDA7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuLy8gICAgIC5hcnJvdy1tYXJre1xuLy8gICAgICAgbWFyZ2luOiBhdXRvO1xuLy8gICAgICAgZm9udC1zaXplOjIycHg7XG4vLyAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGlvbi1jYXJkLWhlYWRlcntcbi8vICAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuLy8gICAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICAgIGNvbG9yOiAjMDAwO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgICAgICAgIGlvbi1pY29ue1xuLy8gICAgICAgICAgIGZsb2F0OiByaWdodDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi50YWJzLWxpc3R7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5jdXN0b20tY2FyZFxue1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZDojZmZmO1xuICBpb24tY2FyZC1jb250ZW50e1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDA7XG4gIH1cbn1cbi5jdXN0b20tdGFie1xuICB3aWR0aDo1MCU7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjIzZTMzO1xufVxuLmFjdGl2ZS10YWJ7XG4gIGJhY2tncm91bmQ6ICNiMjNlMzM7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/projects/projects.page.ts":
/*!*******************************************!*\
  !*** ./src/app/projects/projects.page.ts ***!
  \*******************************************/
/*! exports provided: ProjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPage", function() { return ProjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects.service */ "./src/app/projects/projects.service.ts");
/* harmony import */ var _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tasks/tasks.service */ "./src/app/tasks/tasks.service.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../current-user */ "./src/app/current-user.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _project_view_project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../project-view/project.service */ "./src/app/project-view/project.service.ts");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
















//import { trigger, state, style, animate, transition } from '@angular/animations';
var ProjectsPage = /** @class */ (function () {
    //public projects:any =[];
    function ProjectsPage(currentUser, homeService, screenOrientation, network, projectService, platform, alertController, tasksService, apiProvider, toastController, storage, projectsService, networkService, translateService, router, menuCtrl, activatedRoute) {
        var _this = this;
        this.currentUser = currentUser;
        this.homeService = homeService;
        this.screenOrientation = screenOrientation;
        this.network = network;
        this.projectService = projectService;
        this.platform = platform;
        this.alertController = alertController;
        this.tasksService = tasksService;
        this.apiProvider = apiProvider;
        this.toastController = toastController;
        this.storage = storage;
        this.projectsService = projectsService;
        this.networkService = networkService;
        this.translateService = translateService;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.connected = localStorage.getItem('networkStatus');
        this.skeletons = [{}, {}, {}, {}, {}, {}];
        this.activeTab = 'allProjects';
        this.back = "project-view/home";
        this.showSkeleton = false;
        this.showNoDataCard = '';
        activatedRoute.params.subscribe(function (data) {
            _this.getActiveProjects();
            _this.selectTab('activeProjects');
        });
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
            localStorage.setItem("networkStatus", _this.connected);
        });
    }
    ProjectsPage.prototype.ionViewDidEnter = function () {
        this.connected = localStorage.getItem("networkStatus");
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
        this.getActiveProjects();
        // this.getProjectsList();
    };
    ProjectsPage.prototype.getActiveProjects = function () {
        var _this = this;
        this.showSkeleton = true;
        this.storage.get('myprojects').then(function (activeProjects) {
            if (activeProjects) {
                _this.myProjects = activeProjects;
            }
            _this.showSkeleton = false;
        });
        this.storage.get('projects').then(function (projects) {
            if (projects) {
                _this.projectList = projects;
            }
        });
    };
    ProjectsPage.prototype.getProjectsList = function () {
        var _this = this;
        this.showSkeleton = true;
        this.storage.get('projects').then(function (projects) {
            if (projects) {
                _this.projectList = projects;
            }
            _this.showSkeleton = false;
        });
    };
    ProjectsPage.prototype.projectView = function (project) {
        var _this = this;
        this.storage.set('projectToBeView', project).then(function (project) {
            _this.router.navigate(['/project-view/project-detail', 'projectsList']);
        });
    };
    ProjectsPage.prototype.selectTab = function (tab) {
        this.activeTab = tab;
    };
    ProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.page.html */ "./src/app/projects/projects.page.html"),
            styles: [__webpack_require__(/*! ./projects.page.scss */ "./src/app/projects/projects.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_current_user__WEBPACK_IMPORTED_MODULE_10__["CurrentUserProvider"],
            _home_home_service__WEBPACK_IMPORTED_MODULE_13__["HomeService"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_14__["ScreenOrientation"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"],
            _project_view_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_8__["TasksService"],
            _api_api__WEBPACK_IMPORTED_MODULE_9__["ApiProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _projects_service__WEBPACK_IMPORTED_MODULE_7__["ProjectsService"],
            _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ProjectsPage);
    return ProjectsPage;
}());



/***/ }),

/***/ "./src/app/projects/search-filter.ts":
/*!*******************************************!*\
  !*** ./src/app/projects/search-filter.ts ***!
  \*******************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            if (it.title.toLowerCase().includes(searchText) || it.programName.toLowerCase().includes(searchText) || it.goal.toLowerCase().includes(searchText)) {
                return it.title.toLowerCase().includes(searchText) || it.programName.toLowerCase().includes(searchText) || it.goal.toLowerCase().includes(searchText);
            }
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ })

}]);
//# sourceMappingURL=projects-projects-module.js.map