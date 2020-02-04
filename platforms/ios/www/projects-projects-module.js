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

module.exports = "<ion-header>\n  <app-header [title]=\"'projects.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"true\"> </app-header>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"showSkeleton\">\n    <ion-card>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-content class=\"skeleton-card-content\">\n            <p>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"tabs-list\" *ngIf=\"!showSkeleton\">\n    <div class=\"custom-tab\" (click)=\"selectTab('allProjects')\" [ngClass]=\"{'active-tab': activeTab == 'allProjects'}\">\n      {{ \"projects.allProjects\" | translate }}</div>\n    <div class=\"custom-tab\" (click)=\"selectTab('activeProjects')\"\n      [ngClass]=\"{'active-tab':  activeTab == 'activeProjects'}\">\n      {{ \"projects.activeProjects\" | translate }}\n    </div>\n  </div>\n  <div class=\"ion-padding\" style=\"margin-top: 30px;\" *ngIf=\"!showSkeleton\">\n    <ion-item class=\"search-bar-custom\" style=\"margin: 20px 0px 15px 0px;\">\n      <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n    </ion-item>\n    <div style=\"padding: 0px 5px;\">\n      <div *ngIf=\"activeTab == 'allProjects'\">\n        <div *ngIf=\"myProjects\">\n          <ion-card class=\"welcome-card custom-card\">\n            <ion-card-header class=\"project-card\" >{{'projects.myProjects' | translate}}\n            </ion-card-header>\n            <div *ngFor=\"let project of myProjects | searchProjects: searchInput\">\n              <ion-card-content class=\"inner-card\" (click)=\"projectView(project)\" *ngIf=\"!project.isDeleted \"\n                 style=\"border-bottom: 1px solid #f4f4f8;padding: 0px; color:#000;\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"10\">\n                      {{ project.title }}\n                    </ion-col>\n                    <ion-col size=\"2\" style=\"text-align: right;\">\n                      <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card-content>\n            </div>\n          </ion-card>\n        </div>\n        <div *ngIf=\"projectList\">\n          <ion-card class=\"welcome-card custom-card\" *ngFor=\"let projects of projectList\">\n            <div *ngIf=\"(projects.projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n            </div>\n            <ion-card-header class=\"project-card\" style=\"background-color: #e3e3e3;\" *ngIf=\"((projects.projects | searchProjects: searchInput).length != 0 &&searchInput) ||!searchInput\">\n              <ion-card-title>{{ projects?.programs.name}}</ion-card-title>\n            </ion-card-header>\n            <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n              <ion-card-content *ngIf=\"project.createdType !='by self' && project.createdType !='by reference'\"\n              (click)=\" projectView(project)\"  style=\"border-bottom: 1px solid #f4f5f8;\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"10\">\n                      {{ project.title }}\n                    </ion-col>\n                    <ion-col size=\"2\" style=\"text-align: right;\">\n                      <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card-content>\n            </div>\n          </ion-card>\n        </div>\n      </div>\n      <div *ngIf=\"activeTab == 'activeProjects'\">\n        <div *ngIf=\"myProjects\">\n          <ion-card class=\"welcome-card custom-card\">\n            <ion-card-header class=\"project-card\" >{{'projects.myProjects' | translate}}\n            </ion-card-header>\n            <div *ngFor=\"let project of myProjects | searchProjects: searchInput\">\n              <ion-card-content  class=\"inner-card\" *ngIf=\"!project.isDeleted \" (click)=\"projectView(project)\"\n                 style=\"border-bottom:1px solid #f4f5f8;padding: 0px; color:#000;\">\n                <ion-grid *ngIf=\"project.isStarted\">\n                  <ion-row>\n                    <ion-col size=\"10\">\n                      {{ project.title }}\n                    </ion-col>\n                    <ion-col size=\"2\" style=\"text-align: right;\">\n                      <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card-content>\n            </div>\n          </ion-card>\n        </div>\n        <!-- <div *ngIf=\"projectList\">\n          <ion-card class=\"welcome-card custom-card\" *ngFor=\"let projects of projectList\">\n            <div *ngIf=\"(projects.projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n            </div>\n            <ion-card-header class=\"project-card\" style=\"background-color: #e3e3e3;\" *ngIf=\"((projects.projects | searchProjects: searchInput).length != 0 &&searchInput) ||!searchInput\">\n              <ion-card-title>{{ projects?.programs.name}}</ion-card-title>\n            </ion-card-header>\n            <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n              <ion-card-content *ngIf=\"!project.isDeleted\" (click)=\"projectView(project)\"\n                 style=\"border-bottom: 1px solid #f4f5f8;\">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"10\">\n                      {{ project.title }}\n                    </ion-col>\n                    <ion-col size=\"2\" style=\"text-align: right;\">\n                      <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card-content>\n            </div>\n          </ion-card>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/projects/projects.page.scss":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md {\n  border-radius: 20px !important; }\n\n.searchbar-search-icon .sc-ion-searchbar-md {\n  right: 16px;\n  top: 11px;\n  width: 21px;\n  height: 21px; }\n\n* {\n  box-sizing: border-box; }\n\n.tab-selected {\n  background: #b23e33;\n  color: #fff;\n  border-radius: 4px; }\n\nion-tab-button ion-label {\n  font-size: 16px; }\n\n.project-card {\n  background: #e3e3e3;\n  font-size: 18px;\n  color: #000;\n  font-weight: 600; }\n\n.project-card ion-card-header {\n    background: #e3e3e3;\n    font-size: 18px;\n    color: #000;\n    font-weight: 600; }\n\n.project-card ion-card-header ion-icon {\n      float: right; }\n\n.project-card ion-card-content {\n    padding: 0px; }\n\n.project-card .inner-card {\n    background: #fff;\n    padding: 0px;\n    margin: 0px; }\n\n.project-card .inner-card ion-icon {\n      float: right; }\n\n.project-card .inner-card ion-card-content {\n      background: #fff;\n      padding: 10px;\n      font-size: 18px;\n      color: #000;\n      font-weight: 600;\n      border-bottom: 1px solid #ccc; }\n\n.project-card .inner-card ion-card-content ion-icon {\n        float: right; }\n\n.custom-arrow {\n  margin: auto;\n  color: #000;\n  font-size: 22px;\n  text-align: end;\n  font-weight: 600;\n  text-align: right; }\n\n.tabs-list {\n  position: fixed;\n  width: 100%;\n  z-index: 999; }\n\n.custom-card {\n  margin: 0px;\n  background: #fff; }\n\n.custom-card ion-card-content {\n    padding: 0px;\n    font-size: 16px;\n    color: #000; }\n\n.custom-tab {\n  width: 50%;\n  background: #fff;\n  color: #000;\n  float: left;\n  padding: 10px;\n  text-align: center;\n  font-size: 18px;\n  border-bottom: 2px solid #b23e33; }\n\n.active-tab {\n  background: #b23e33;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVoQjtFQUNJLHNCQUFzQixFQUFBOztBQUV4QjtFQUVFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXRCO0VBRVEsZUFBYyxFQUFBOztBQUd0QjtFQUVFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUxsQjtJQU9RLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQVZ4QjtNQVlZLFlBQVksRUFBQTs7QUFaeEI7SUFnQkksWUFBWSxFQUFBOztBQWhCaEI7SUFvQkksZ0JBQWdCO0lBQ2hCLFlBQVc7SUFDWCxXQUFVLEVBQUE7O0FBdEJkO01Bd0JNLFlBQVksRUFBQTs7QUF4QmxCO01BMkJJLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IsZUFBZTtNQUNmLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsNkJBQTZCLEVBQUE7O0FBaENqQztRQWtDVSxZQUFZLEVBQUE7O0FBS3RCO0VBQ1EsWUFBWTtFQUNaLFdBQVU7RUFDVixlQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUF1QnpCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFFRSxXQUFXO0VBQ1gsZ0JBQWUsRUFBQTs7QUFIakI7SUFLRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFVBQVM7RUFDVCxnQkFBZTtFQUNmLFdBQVc7RUFDVCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0NBQWdDLEVBQUE7O0FBRXBDO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kXG57XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xufVxuLnNlYXJjaGJhci1zZWFyY2gtaWNvbiAuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgdG9wOiAxMXB4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbn1cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgLnRhYi1zZWxlY3RlZFxue1xuICAgIGJhY2tncm91bmQ6ICNiMjNlMzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuaW9uLXRhYi1idXR0b24ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIH1cbn1cbi5wcm9qZWN0LWNhcmRcbntcbiAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gIH1cbiBpb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmc6IDBweDtcbiB9XG4gIC5pbm5lci1jYXJkXG4gIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIG1hcmdpbjowcHg7XG4gICAgaW9uLWljb257XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5jdXN0b20tYXJyb3d7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgZm9udC1zaXplOjIycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4vLyAuaW5uZXItY2FyZFxuLy8gICB7XG4vLyAgICAgbWFyZ2luOiA1cHggMHB4O1xuLy8gICAgIGNvbG9yOiAjMDAwO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbi8vICAgICAuYXJyb3ctbWFya3tcbi8vICAgICAgIG1hcmdpbjogYXV0bztcbi8vICAgICAgIGZvbnQtc2l6ZToyMnB4O1xuLy8gICAgICAgdGV4dC1hbGlnbjogZW5kO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICBpb24tY2FyZC1oZWFkZXJ7XG4vLyAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICBjb2xvcjogIzAwMDtcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xuLy8gICAgICAgICBpb24taWNvbntcbi8vICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4udGFicy1saXN0e1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG59XG4uY3VzdG9tLWNhcmRcbntcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbiAgaW9uLWNhcmQtY29udGVudHtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xuICB9XG59XG4uY3VzdG9tLXRhYntcbiAgd2lkdGg6NTAlO1xuICBiYWNrZ3JvdW5kOiNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2IyM2UzMztcbn1cbi5hY3RpdmUtdGFie1xuICBiYWNrZ3JvdW5kOiAjYjIzZTMzO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

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
                _this.projectList = _this.getSortData(projects);
                // this.projectList = projects;
            }
        });
    };
    ProjectsPage.prototype.getProjectsList = function () {
        var _this = this;
        this.showSkeleton = true;
        this.storage.get('projects').then(function (projects) {
            if (projects) {
                _this.projectList = _this.getSortData(projects);
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
        this.showSkeleton = true;
        this.activeTab = tab;
        this.showSkeleton = false;
    };
    ProjectsPage.prototype.getSortData = function (myProjects) {
        return myProjects.sort(function (a, b) {
            return new Date(b.lastUpdate) - new Date(a.lastUpdate);
        });
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