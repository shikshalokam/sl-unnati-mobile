(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./node_modules/@ionic-native/screen-orientation/ngx/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic-native/screen-orientation/ngx/index.js ***!
  \********************************************************************/
/*! exports provided: ScreenOrientation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenOrientation", function() { return ScreenOrientation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScreenOrientation = /** @class */ (function (_super) {
    __extends(ScreenOrientation, _super);
    function ScreenOrientation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience enum for possible orientations
         */
        _this.ORIENTATIONS = {
            PORTRAIT_PRIMARY: 'portrait-primary',
            PORTRAIT_SECONDARY: 'portrait-secondary',
            LANDSCAPE_PRIMARY: 'landscape-primary',
            LANDSCAPE_SECONDARY: 'landscape-secondary',
            PORTRAIT: 'portrait',
            LANDSCAPE: 'landscape',
            ANY: 'any'
        };
        return _this;
    }
    ScreenOrientation.prototype.onChange = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onChange", { "eventObservable": true, "event": "orientationchange", "element": "window" }, arguments); };
    ScreenOrientation.prototype.lock = function (orientation) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "lock", { "otherPromise": true }, arguments); };
    ScreenOrientation.prototype.unlock = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "unlock", { "sync": true }, arguments); };
    Object.defineProperty(ScreenOrientation.prototype, "type", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "type"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    ScreenOrientation.pluginName = "ScreenOrientation";
    ScreenOrientation.plugin = "cordova-plugin-screen-orientation";
    ScreenOrientation.pluginRef = "screen.orientation";
    ScreenOrientation.repo = "https://github.com/apache/cordova-plugin-screen-orientation";
    ScreenOrientation.platforms = ["Android", "iOS", "Windows"];
    ScreenOrientation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ScreenOrientation);
    return ScreenOrientation;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NjcmVlbi1vcmllbnRhdGlvbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFLTixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMERLLHFDQUFpQjs7O1FBQ3REOztXQUVHO1FBQ0gsa0JBQVksR0FBRztZQUNiLGdCQUFnQixFQUFFLGtCQUFrQjtZQUNwQyxrQkFBa0IsRUFBRSxvQkFBb0I7WUFDeEMsaUJBQWlCLEVBQUUsbUJBQW1CO1lBQ3RDLG1CQUFtQixFQUFFLHFCQUFxQjtZQUMxQyxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsV0FBVztZQUN0QixHQUFHLEVBQUUsS0FBSztTQUNYLENBQUM7OztJQVVGLG9DQUFRO0lBV1IsZ0NBQUksYUFBQyxXQUFtQjtJQVF4QixrQ0FBTTswQkFNTixtQ0FBSTs7Ozs7Ozs7Ozs7SUEvQ08saUJBQWlCO1FBRDdCLFVBQVUsRUFBRTtPQUNBLGlCQUFpQjs0QkFqRTlCO0VBaUV1QyxpQkFBaUI7U0FBM0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29yZG92YSxcbiAgQ29yZG92YVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgU2NyZWVuIE9yaWVudGF0aW9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIHRvIHNldC9sb2NrIHRoZSBzY3JlZW4gb3JpZW50YXRpb24gaW4gYSBjb21tb24gd2F5LlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tc2NyZWVuLW9yaWVudGF0aW9uYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1NjcmVlbiBPcmllbnRhdGlvbiBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zY3JlZW4tb3JpZW50YXRpb24pLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2NyZWVuT3JpZW50YXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NjcmVlbi1vcmllbnRhdGlvbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NyZWVuT3JpZW50YXRpb246IFNjcmVlbk9yaWVudGF0aW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogLy8gZ2V0IGN1cnJlbnRcbiAqIGNvbnNvbGUubG9nKHRoaXMuc2NyZWVuT3JpZW50YXRpb24udHlwZSk7IC8vIGxvZ3MgdGhlIGN1cnJlbnQgb3JpZW50YXRpb24sIGV4YW1wbGU6ICdsYW5kc2NhcGUnXG4gKlxuICogLy8gc2V0IHRvIGxhbmRzY2FwZVxuICogdGhpcy5zY3JlZW5PcmllbnRhdGlvbi5sb2NrKHRoaXMuc2NyZWVuT3JpZW50YXRpb24uT1JJRU5UQVRJT05TLkxBTkRTQ0FQRSk7XG4gKlxuICogLy8gYWxsb3cgdXNlciByb3RhdGVcbiAqIHRoaXMuc2NyZWVuT3JpZW50YXRpb24udW5sb2NrKCk7XG4gKlxuICogLy8gZGV0ZWN0IG9yaWVudGF0aW9uIGNoYW5nZXNcbiAqIHRoaXMuc2NyZWVuT3JpZW50YXRpb24ub25DaGFuZ2UoKS5zdWJzY3JpYmUoXG4gKiAgICAoKSA9PiB7XG4gKiAgICAgICAgY29uc29sZS5sb2coXCJPcmllbnRhdGlvbiBDaGFuZ2VkXCIpO1xuICogICAgfVxuICogKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAYWR2YW5jZWRcbiAqXG4gKiBBY2NlcHRlZCBvcmllbnRhdGlvbiB2YWx1ZXM6XG4gKlxuICogfCBWYWx1ZSAgICAgICAgICAgICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCBwb3J0cmFpdC1wcmltYXJ5ICAgICAgICAgICAgICB8IFRoZSBvcmllbnRhdGlvbiBpcyBpbiB0aGUgcHJpbWFyeSBwb3J0cmFpdCBtb2RlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBwb3J0cmFpdC1zZWNvbmRhcnkgICAgICAgICAgICB8IFRoZSBvcmllbnRhdGlvbiBpcyBpbiB0aGUgc2Vjb25kYXJ5IHBvcnRyYWl0IG1vZGUuICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBsYW5kc2NhcGUtcHJpbWFyeSAgICAgICAgICAgICB8IFRoZSBvcmllbnRhdGlvbiBpcyBpbiB0aGUgcHJpbWFyeSBsYW5kc2NhcGUgbW9kZS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBsYW5kc2NhcGUtc2Vjb25kYXJ5ICAgICAgICAgICB8IFRoZSBvcmllbnRhdGlvbiBpcyBpbiB0aGUgc2Vjb25kYXJ5IGxhbmRzY2FwZSBtb2RlLiAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBwb3J0cmFpdCAgICAgICAgICAgICAgICAgICAgICB8IFRoZSBvcmllbnRhdGlvbiBpcyBlaXRoZXIgcG9ydHJhaXQtcHJpbWFyeSBvciBwb3J0cmFpdC1zZWNvbmRhcnkgKHNlbnNvcikuICAgfFxuICogfCBsYW5kc2NhcGUgICAgICAgICAgICAgICAgICAgICB8IFRoZSBvcmllbnRhdGlvbiBpcyBlaXRoZXIgbGFuZHNjYXBlLXByaW1hcnkgb3IgbGFuZHNjYXBlLXNlY29uZGFyeSAoc2Vuc29yKS4gfFxuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTY3JlZW5PcmllbnRhdGlvbicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNjcmVlbi1vcmllbnRhdGlvbicsXG4gIHBsdWdpblJlZjogJ3NjcmVlbi5vcmllbnRhdGlvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXNjcmVlbi1vcmllbnRhdGlvbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NyZWVuT3JpZW50YXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBlbnVtIGZvciBwb3NzaWJsZSBvcmllbnRhdGlvbnNcbiAgICovXG4gIE9SSUVOVEFUSU9OUyA9IHtcbiAgICBQT1JUUkFJVF9QUklNQVJZOiAncG9ydHJhaXQtcHJpbWFyeScsXG4gICAgUE9SVFJBSVRfU0VDT05EQVJZOiAncG9ydHJhaXQtc2Vjb25kYXJ5JyxcbiAgICBMQU5EU0NBUEVfUFJJTUFSWTogJ2xhbmRzY2FwZS1wcmltYXJ5JyxcbiAgICBMQU5EU0NBUEVfU0VDT05EQVJZOiAnbGFuZHNjYXBlLXNlY29uZGFyeScsXG4gICAgUE9SVFJBSVQ6ICdwb3J0cmFpdCcsXG4gICAgTEFORFNDQVBFOiAnbGFuZHNjYXBlJyxcbiAgICBBTlk6ICdhbnknXG4gIH07XG4gIC8qKlxuICAgKiBMaXN0ZW4gdG8gb3JpZW50YXRpb24gY2hhbmdlIGV2ZW50XG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnb3JpZW50YXRpb25jaGFuZ2UnLFxuICAgIGVsZW1lbnQ6ICd3aW5kb3cnXG4gIH0pXG4gIG9uQ2hhbmdlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2NrIHRoZSBvcmllbnRhdGlvbiB0byB0aGUgcGFzc2VkIHZhbHVlLlxuICAgKiBTZWUgYmVsb3cgZm9yIGFjY2VwdGVkIHZhbHVlc1xuICAgKiBAcGFyYW0gb3JpZW50YXRpb24ge3N0cmluZ30gVGhlIG9yaWVudGF0aW9uIHdoaWNoIHNob3VsZCBiZSBsb2NrZWQuIEFjY2VwdGVkIHZhbHVlcyBzZWUgdGFibGUgYWJvdmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGxvY2sob3JpZW50YXRpb246IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFVubG9jayBhbmQgYWxsb3cgYWxsIG9yaWVudGF0aW9ucy5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB1bmxvY2soKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB0eXBlOiBzdHJpbmc7XG59XG4iXX0=

/***/ }),

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

module.exports = "<ion-header>\n  <app-header [title]=\"'projects.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"true\"> </app-header>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"showSkeleton\">\n    <ion-card>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-content class=\"skeleton-card-content\">\n            <p>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"tabs-list\" *ngIf=\"!showSkeleton\">\n    <div class=\"custom-tab\" (click)=\"selectTab('allProjects')\" [ngClass]=\"{'active-tab': activeTab == 'allProjects'}\">\n      {{ \"projects.allProjects\" | translate }}</div>\n    <div class=\"custom-tab\" (click)=\"selectTab('activeProjects')\"\n      [ngClass]=\"{'active-tab':  activeTab == 'activeProjects'}\">\n      {{ \"projects.activeProjects\" | translate }}\n    </div>\n  </div>\n  <div class=\"ion-padding\" style=\"margin-top: 30px;\" *ngIf=\"!showSkeleton\">\n    <ion-item class=\"search-bar-custom\" style=\"margin: 20px 0px 15px 0px;\">\n      <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n    </ion-item>\n    <div style=\"padding: 0px 5px;\">\n      <div *ngIf=\"activeTab == 'allProjects'\">\n        <div *ngIf=\"projectList\">\n          <!-- There is no local data available  -->\n          <ion-card class=\"welcome-card custom-card\" *ngIf=\"showHardcodedMyprojects\">\n            <ion-card-header class=\"project-card\">\n              {{'projects.myProjects' | translate}}\n            </ion-card-header>\n            <div *ngFor=\"let projects of projectList\">\n              <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n                <ion-card-content \n                  *ngIf=\"(project.createdType == 'by self' || project.createdType == 'by reference') && !project.isDeleted\"\n                  (click)=\"\n                  projectView(project)\"  style=\"border-bottom: 1px solid #f4f5f8;\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"10\">\n                        {{ project.title }}\n                      </ion-col>\n                      <ion-col size=\"2\" style=\"text-align: right;\">\n                        <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n              </div>\n            </div>\n          </ion-card>\n\n          <!-- If local data is available and display my projects at first place -->\n          <div *ngFor=\"let projects of projectList\">\n            <ion-card class=\"welcome-card\n              custom-card\" *ngIf=\"!showHardcodedMyprojects && projects?.programs?._id ==programId\">\n              <ion-card-header class=\"project-card\">\n                {{projects?.programs?.name}}\n              </ion-card-header>\n              <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n                <ion-card-content \n                  *ngIf=\"(project.createdType == 'by self' || project.createdType == 'by reference') && !project.isDeleted\"\n                  (click)=\"\n                    projectView(project)\"  style=\"border-bottom: 1px solid #f4f5f8;\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"10\">\n                        {{ project.title }}\n                      </ion-col>\n                      <ion-col size=\"2\" style=\"text-align: right;\">\n                        <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n              </div>\n            </ion-card>\n          </div>\n        </div>\n        <div *ngIf=\"projectList\">\n          <div *ngFor=\"let projects of projectList\">\n            <ion-card class=\"welcome-card\n              custom-card\" *ngIf=\"projects?.programs?.name && projects?.programs?._id !=programId\">\n              <div *ngIf=\"(projects.projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n              </div>\n              <div *ngIf=\"((projects.projects | searchProjects: searchInput).length != 0 &&searchInput) ||!searchInput\">\n                <ion-card-header class=\"project-card\">\n                  {{ projects?.programs?.name}}\n                </ion-card-header>\n              </div>\n              <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n                <ion-card-content *ngIf=\"!project.createdType && !project.isDeleted\" (click)=\"\n                projectView(project)\"  style=\"border-bottom: 1px solid #f4f5f8;\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"10\">\n                        {{ project.title }}\n                      </ion-col>\n                      <ion-col size=\"2\" style=\"text-align: right;\">\n                        <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n              </div>\n            </ion-card>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"activeTab == 'activeProjects'\">\n        <div *ngIf=\"projectList\">\n          <ion-card class=\"welcome-card custom-card\" *ngIf=\"showHardcodedMyprojects\">\n            <ion-card-header class=\"project-card\" >{{'projects.myProjects' | translate}}\n            </ion-card-header>\n            <div *ngFor=\"let projects of projectList\">\n              <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n                <ion-card-content  class=\"inner-card\"\n                  *ngIf=\"(project.createdType == 'by self' || project.createdType == 'by reference') && !project.isDeleted && project.isStarted\"\n                  (click)=\"projectView(project)\"  style=\"border-bottom:1px solid #f4f5f8;padding: 0px; color:#000;\">\n                  <ion-grid *ngIf=\"project.isStarted\">\n                    <ion-row>\n                      <ion-col size=\"10\">\n                        {{ project.title }}\n                      </ion-col>\n                      <ion-col size=\"2\" style=\"text-align: right;\">\n                        <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n              </div>\n            </div>\n          </ion-card>\n\n          <div *ngFor=\"let projects of projectList\">\n            <ion-card class=\"welcome-card\n              custom-card\" *ngIf=\"!showHardcodedMyprojects && projects?.programs?._id ==programId\">\n              <ion-card-header class=\"project-card\">\n                {{projects?.programs?.name}}\n              </ion-card-header>\n              <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n                <ion-card-content \n                  *ngIf=\"(project.createdType == 'by self' || project.createdType == 'by reference') && !project.isDeleted && project.isStarted\"\n                  (click)=\"\n                    projectView(project)\"  style=\"border-bottom: 1px solid #f4f5f8;\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"10\">\n                        {{ project.title }}\n                      </ion-col>\n                      <ion-col size=\"2\" style=\"text-align: right;\">\n                        <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n              </div>\n            </ion-card>\n          </div>\n          <div *ngFor=\"let projects of projectList\">\n            <ion-card class=\"welcome-card\n              custom-card\" *ngIf=\"projects?.programs?.name && projects?.programs?._id !=programId\">\n              <div *ngIf=\"(projects.projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n              </div>\n              <div *ngIf=\"((projects.projects | searchProjects: searchInput).length != 0 &&searchInput) ||!searchInput\">\n                <ion-card-header class=\"project-card\">\n                  {{projects?.programs?.name}}\n                </ion-card-header>\n              </div>\n              <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n                <ion-card-content *ngIf=\"!project.createdType && !project.isDeleted && project.isStarted\" (click)=\"\n                  projectView(project)\"  style=\"border-bottom: 1px solid #f4f5f8;\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"10\">\n                        {{ project.title }}\n                      </ion-col>\n                      <ion-col size=\"2\" style=\"text-align: right;\">\n                        <ion-icon name=\"ios-arrow-forward\" class=\"custom-arrow\"> </ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n              </div>\n            </ion-card>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/projects/projects.page.scss":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md {\n  border-radius: 20px !important; }\n\n.searchbar-search-icon .sc-ion-searchbar-md {\n  right: 16px;\n  top: 11px;\n  width: 21px;\n  height: 21px; }\n\n* {\n  box-sizing: border-box; }\n\n.tab-selected {\n  background: #b23e33;\n  color: #fff;\n  border-radius: 4px; }\n\nion-tab-button ion-label {\n  font-size: 16px; }\n\n.project-card {\n  background: #e3e3e3;\n  font-size: 18px;\n  color: #000;\n  font-weight: 600; }\n\n.project-card ion-card-header {\n    background: #e3e3e3;\n    font-size: 18px;\n    color: #000;\n    font-weight: 600; }\n\n.project-card ion-card-header ion-icon {\n      float: right; }\n\n.project-card ion-card-content {\n    padding: 0px; }\n\n.project-card .inner-card {\n    background: #fff;\n    padding: 0px;\n    margin: 0px; }\n\n.project-card .inner-card ion-icon {\n      float: right; }\n\n.project-card .inner-card ion-card-content {\n      background: #fff;\n      padding: 10px;\n      font-size: 18px;\n      color: #000;\n      font-weight: 600;\n      border-bottom: 1px solid #ccc; }\n\n.project-card .inner-card ion-card-content ion-icon {\n        float: right; }\n\n.custom-arrow {\n  margin: auto;\n  color: #000;\n  font-size: 22px;\n  text-align: end;\n  font-weight: 600;\n  text-align: right; }\n\n.tabs-list {\n  position: fixed;\n  width: 100%;\n  z-index: 999; }\n\n.custom-card {\n  margin: 0px;\n  background: #fff; }\n\n.custom-card ion-card-content {\n    padding: 0px;\n    font-size: 16px;\n    color: #000; }\n\n.custom-tab {\n  width: 50%;\n  background: #fff;\n  color: #000;\n  float: left;\n  padding: 15px;\n  text-align: center;\n  font-size: 18px;\n  border-bottom: 2px solid #b23e33;\n  font-weight: 600; }\n\n.active-tab {\n  background: #b23e33;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSw4QkFBOEIsRUFBQTs7QUFFbEM7RUFDSSxXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRXhCO0VBRUUsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFFUSxlQUFjLEVBQUE7O0FBR3RCO0VBRUUsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBTGxCO0lBT1EsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7O0FBVnhCO01BWVksWUFBWSxFQUFBOztBQVp4QjtJQWdCSSxZQUFZLEVBQUE7O0FBaEJoQjtJQW9CSSxnQkFBZ0I7SUFDaEIsWUFBVztJQUNYLFdBQVUsRUFBQTs7QUF0QmQ7TUF3Qk0sWUFBWSxFQUFBOztBQXhCbEI7TUEyQkksZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixlQUFlO01BQ2YsV0FBVztNQUNYLGdCQUFnQjtNQUNoQiw2QkFBNkIsRUFBQTs7QUFoQ2pDO1FBa0NVLFlBQVksRUFBQTs7QUFLdEI7RUFDUSxZQUFZO0VBQ1osV0FBVTtFQUNWLGVBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQXVCekI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUVFLFdBQVc7RUFDWCxnQkFBZSxFQUFBOztBQUhqQjtJQUtFLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBUztFQUNULGdCQUFlO0VBQ2YsV0FBVztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kXG57XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xufVxuLnNlYXJjaGJhci1zZWFyY2gtaWNvbiAuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgdG9wOiAxMXB4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbn1cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgLnRhYi1zZWxlY3RlZFxue1xuICAgIGJhY2tncm91bmQ6ICNiMjNlMzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuaW9uLXRhYi1idXR0b24ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIH1cbn1cbi5wcm9qZWN0LWNhcmRcbntcbiAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gIH1cbiBpb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmc6IDBweDtcbiB9XG4gIC5pbm5lci1jYXJkXG4gIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIG1hcmdpbjowcHg7XG4gICAgaW9uLWljb257XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5jdXN0b20tYXJyb3d7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgZm9udC1zaXplOjIycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4vLyAuaW5uZXItY2FyZFxuLy8gICB7XG4vLyAgICAgbWFyZ2luOiA1cHggMHB4O1xuLy8gICAgIGNvbG9yOiAjMDAwO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbi8vICAgICAuYXJyb3ctbWFya3tcbi8vICAgICAgIG1hcmdpbjogYXV0bztcbi8vICAgICAgIGZvbnQtc2l6ZToyMnB4O1xuLy8gICAgICAgdGV4dC1hbGlnbjogZW5kO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICBpb24tY2FyZC1oZWFkZXJ7XG4vLyAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICBjb2xvcjogIzAwMDtcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xuLy8gICAgICAgICBpb24taWNvbntcbi8vICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4udGFicy1saXN0e1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG59XG4uY3VzdG9tLWNhcmRcbntcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbiAgaW9uLWNhcmQtY29udGVudHtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xuICB9XG59XG4uY3VzdG9tLXRhYntcbiAgd2lkdGg6NTAlO1xuICBiYWNrZ3JvdW5kOiNmZmY7XG4gIGNvbG9yOiAjMDAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2IyM2UzMztcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmFjdGl2ZS10YWJ7XG4gIGJhY2tncm91bmQ6ICNiMjNlMzM7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

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
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../current-user */ "./src/app/current-user.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _project_view_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../project-view/project.service */ "./src/app/project-view/project.service.ts");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
















//import { trigger, state, style, animate, transition } from '@angular/animations';
var ProjectsPage = /** @class */ (function () {
    //public projects:any =[];
    function ProjectsPage(currentUser, homeService, screenOrientation, network, projectService, platform, alertController, apiProvider, toastController, storage, projectsService, networkService, translateService, router, menuCtrl, activatedRoute) {
        var _this = this;
        this.currentUser = currentUser;
        this.homeService = homeService;
        this.screenOrientation = screenOrientation;
        this.network = network;
        this.projectService = projectService;
        this.platform = platform;
        this.alertController = alertController;
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
        this.showHardcodedMyprojects = true;
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
        var _this = this;
        this.environment = _app_config__WEBPACK_IMPORTED_MODULE_14__["AppConfigs"].currentEnvironment;
        _app_config__WEBPACK_IMPORTED_MODULE_14__["AppConfigs"].environments.forEach(function (env) {
            if (_this.environment === env.name) {
                _this.programId = env.programId;
            }
        });
        this.searchInput = '';
        this.connected = localStorage.getItem("networkStatus");
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
        this.getActiveProjects();
    };
    ProjectsPage.prototype.getActiveProjects = function () {
        var _this = this;
        this.showSkeleton = true;
        this.storage.get('latestProjects').then(function (projects) {
            if (projects) {
                projects.forEach(function (programsList) {
                    if (programsList.programs) {
                        if (programsList.programs._id == _this.programId) {
                            _this.showHardcodedMyprojects = false;
                        }
                        programsList.projects.sort(function (a, b) {
                            return new Date(b.lastUpdate) - new Date(a.lastUpdate);
                        });
                    }
                });
                _this.projectList = projects;
                _this.showSkeleton = false;
            }
            else {
                _this.showSkeleton = false;
            }
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
    ProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.page.html */ "./src/app/projects/projects.page.html"),
            styles: [__webpack_require__(/*! ./projects.page.scss */ "./src/app/projects/projects.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_current_user__WEBPACK_IMPORTED_MODULE_9__["CurrentUserProvider"],
            _home_home_service__WEBPACK_IMPORTED_MODULE_12__["HomeService"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__["ScreenOrientation"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"],
            _project_view_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _api_api__WEBPACK_IMPORTED_MODULE_8__["ApiProvider"],
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