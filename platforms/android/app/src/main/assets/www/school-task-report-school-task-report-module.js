(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["school-task-report-school-task-report-module"],{

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

/***/ "./src/app/school-task-report/school-task-report.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/school-task-report/school-task-report.module.ts ***!
  \*****************************************************************/
/*! exports provided: SchoolTaskReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolTaskReportPageModule", function() { return SchoolTaskReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _school_task_report_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./school-task-report.page */ "./src/app/school-task-report/school-task-report.page.ts");









var routes = [
    {
        path: '',
        component: _school_task_report_page__WEBPACK_IMPORTED_MODULE_8__["SchoolTaskReportPage"]
    }
];
var SchoolTaskReportPageModule = /** @class */ (function () {
    function SchoolTaskReportPageModule() {
    }
    SchoolTaskReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({})
            ],
            declarations: [_school_task_report_page__WEBPACK_IMPORTED_MODULE_8__["SchoolTaskReportPage"]]
        })
    ], SchoolTaskReportPageModule);
    return SchoolTaskReportPageModule;
}());



/***/ }),

/***/ "./src/app/school-task-report/school-task-report.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/school-task-report/school-task-report.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'school_task_report.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"false\">\n  </app-header>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"schoolTaskReport && !showSkeleton\">\n    <ion-card class=\"custom-card\">\n      <ion-card-header>\n        {{ school.name }}\n      </ion-card-header>\n      <ion-card-content>\n        <div *ngFor=\"let projects of schoolTaskReport\">\n          <ion-card *ngFor=\"let project of projects.projects\">\n            <ion-card-header>\n              {{ project.title }}\n            </ion-card-header>\n            <ion-card-content>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <ion-button size=\"small\" color=\"primary\" (click)=\"navigateToDetails(project._id)\">\n                      {{ \"school_task_report.view_details\" | translate }}\n                    </ion-button>\n                  </ion-col>\n                  <ion-col>\n                    <ion-button size=\"small\" color=\"primary\" (click)=\"navigateToSeeStatus(project._id)\"\n                      class=\"ion-float-right\">\n                      {{ \"school_task_report.project_status\" | translate }}\n                    </ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <div class=\"text-center\">\n      <ion-button style=\"--border-radius: 20px;\" size=\"small\" (click)=\"openApp()\">\n        {{ \"school_task_report.start_observation\" | translate }}\n      </ion-button>\n    </div>\n  </div>\n  <!-- Skeleton screen -->\n  <div *ngIf=\"showSkeleton\">\n    <ion-card>\n      <ion-card-header>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card-header>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-header>\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n          </ion-card-header>\n          <ion-card-content class=\"skeleton-card-content\">\n            <p>\n              <ion-skeleton-text animated style=\"\n                        width: 48%;\n                        float: left;\n                        margin-right: 2%;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"\n                        width: 48%;\n                        float: left;\n                        margin-left: 2%;\"></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <ion-card *ngIf=\"showfailedCard\">\n    <ion-card-content>\n      <h2>No project data found</h2>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/school-task-report/school-task-report.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/school-task-report/school-task-report.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card ion-card-header {\n  background: #e3e3e3;\n  padding: 10px;\n  color: #000; }\n\n.custom-card ion-button {\n  --border-radius:20px;\n  text-transform: none; }\n\n.custom-card ion-card-content {\n  -webkit-padding-start: 0px !important;\n          padding-inline-start: 0px !important;\n  -webkit-padding-end: 0px !important;\n          padding-inline-end: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9zY2hvb2wtdGFzay1yZXBvcnQvc2Nob29sLXRhc2stcmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUxuQjtFQVFRLG9CQUFnQjtFQUNoQixvQkFBb0IsRUFBQTs7QUFUNUI7RUFZUSxxQ0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLG1DQUFrQztVQUFsQyxrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NjaG9vbC10YXNrLXJlcG9ydC9zY2hvb2wtdGFzay1yZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1jYXJkXG57XG4gICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydCA6MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZCA6MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/school-task-report/school-task-report.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/school-task-report/school-task-report.page.ts ***!
  \***************************************************************/
/*! exports provided: SchoolTaskReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolTaskReportPage", function() { return SchoolTaskReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _school_task_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./school-task-report.service */ "./src/app/school-task-report/school-task-report.service.ts");
/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../current-user */ "./src/app/current-user.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/app-launcher/ngx */ "./node_modules/@ionic-native/app-launcher/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
/* harmony import */ var _project_view_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../project-view/project.service */ "./src/app/project-view/project.service.ts");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");














var SchoolTaskReportPage = /** @class */ (function () {
    function SchoolTaskReportPage(platform, homeservice, screenOrientation, projectService, toastController, appLauncher, router, market, networkService, route, currentUser, api, storage, schoolTaskService) {
        var _this = this;
        this.platform = platform;
        this.homeservice = homeservice;
        this.screenOrientation = screenOrientation;
        this.projectService = projectService;
        this.toastController = toastController;
        this.appLauncher = appLauncher;
        this.router = router;
        this.market = market;
        this.networkService = networkService;
        this.route = route;
        this.currentUser = currentUser;
        this.api = api;
        this.storage = storage;
        this.schoolTaskService = schoolTaskService;
        this.showfailedCard = false;
        this.showSkeleton = true;
        this.back = 'project-view/my-schools';
        this.skeletons = [{}, {}, {}, {}, {}, {}];
        this.route.params.subscribe(function (params) {
            _this.school = params;
            _this.storage.get('mySchools').then(function (data) {
                if (data) {
                    if (data.find(function (pro) { return pro.id === _this.school.id; }) === undefined) {
                        data.push(_this.school);
                        _this.storage.set('mySchools', data).then(function (data) {
                            _this.homeservice.loadMyProjects();
                        });
                    }
                }
                else {
                    var data1 = [];
                    data1.push(_this.school);
                    _this.storage.set('mySchools', data1).then(function (data) {
                        _this.homeservice.loadMyProjects();
                    });
                }
            });
        });
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
            localStorage.setItem("networkStatus", _this.connected);
        });
    }
    SchoolTaskReportPage.prototype.ngOnInit = function () {
        this.getSchoolTaskReport();
    };
    SchoolTaskReportPage.prototype.ionViewDidEnter = function () {
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
    };
    // School task reports
    SchoolTaskReportPage.prototype.getSchoolTaskReport = function () {
        var _this = this;
        this.connected = localStorage.getItem("networkStatus");
        this.storage.get('userTokens').then(function (data) {
            _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (data) {
                        _this.showSkeleton = true;
                        _this.schoolTaskService.getSchoolTaskReport(parsedData.access_token, _this.school.id).subscribe(function (data) {
                            _this.showfailedCard = false;
                            _this.showSkeleton = false;
                            if (data.status != 'failed') {
                                _this.schoolTaskReport = data.data;
                            }
                            else {
                                _this.showfailedCard = true;
                                _this.showSkeleton = false;
                                _this.errorToast(data.message);
                            }
                        }, function (error) { });
                    });
                }
            }, function (error) {
            });
        });
    };
    // Error Toast message
    SchoolTaskReportPage.prototype.errorToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            color: 'danger',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Navigate to status screen
    SchoolTaskReportPage.prototype.navigateToSeeStatus = function (id) {
        var _this = this;
        var navigate = false;
        this.connected = localStorage.getItem("networkStatus");
        var connected = navigator.onLine;
        if (connected) {
            this.storage.get('latestProjects').then(function (projects) {
                if (projects) {
                    if (typeof projects == 'string') {
                        projects = JSON.parse(projects);
                    }
                    projects.forEach(function (project) {
                        if (project._id == id) {
                            navigate = true;
                            _this.storage.set('currentProject', project).then(function (project) {
                                localStorage.setItem('from', 'school');
                                _this.router.navigate(['project-view/status', id]);
                            });
                        }
                    });
                    if (!navigate) {
                        _this.getProjectsFromService(id, 'status');
                    }
                    // });
                }
                else {
                    _this.getProjectsFromService(id, 'status');
                }
            });
        }
        else {
            this.networkService.networkErrorToast();
        }
    };
    // Navigate to status screen
    SchoolTaskReportPage.prototype.navigateToDetails = function (id) {
        var _this = this;
        var navigate = false;
        this.connected = localStorage.getItem("networkStatus");
        var connected = navigator.onLine;
        if (connected) {
            // this.router.navigate(['/project-view/detail', id, 'school']);
            this.storage.get('latestProjects').then(function (projects) {
                if (projects) {
                    if (typeof projects == 'string') {
                        projects = JSON.parse(projects);
                    }
                    projects.forEach(function (project) {
                        if (project._id == id) {
                            navigate = true;
                            _this.storage.set('projectToBeView', project).then(function (project) {
                                _this.router.navigate(['/project-view/project-detail', 'schools']);
                            });
                        }
                        else {
                            _this.getProjectsFromService(id, 'details');
                        }
                    });
                    if (!navigate) {
                        _this.getProjectsFromService(id, 'details');
                    }
                    // });
                }
                else {
                    _this.getProjectsFromService(id, 'details');
                }
            });
        }
        else {
            this.networkService.networkErrorToast();
        }
    };
    // Get projects 
    SchoolTaskReportPage.prototype.getProjectsFromService = function (id, path) {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (usertoken) {
                        var value = {
                            projectId: id
                        };
                        _this.projectService.projectDetails(parsedData.access_token, value).subscribe(function (resp) {
                            if (resp.status != 'failed') {
                                resp.data.projects.forEach(function (cp) {
                                    // this.storage.set('currentProject', cp).then(cpp => {
                                    //   localStorage.setItem('from', 'school');
                                    //   if (path == 'details') {
                                    //     this.router.navigate(['/project-view/detail', id,'school']);
                                    //   } else {
                                    //     this.router.navigate(['/project-view/status', id]);
                                    //   }
                                    // })
                                    _this.storage.set('projectToBeView', cp).then(function (project) {
                                        if (path == 'details') {
                                            _this.router.navigate(['/project-view/project-detail', 'schools']);
                                        }
                                        else {
                                            _this.router.navigate(['/project-view/status', id]);
                                        }
                                    });
                                });
                                _this.storage.get('latestProjects').then(function (projects) {
                                    if (projects) {
                                        if (typeof projects == 'string') {
                                            projects = JSON.parse(projects);
                                        }
                                        // resp.data.projects.forEach(prj => {
                                        projects.data.forEach(function (prjs) {
                                            prjs.projects.forEach(function (project) {
                                                if (project._id === id) {
                                                    prjs.projects.push(project);
                                                    _this.storage.set('latestProjects', projects).then(function (projects) {
                                                    });
                                                    // this.storage.set('currentProject', project).then(cproject => {
                                                    //   if (path == 'details') {
                                                    //     this.router.navigate(['/project-view/detail', id,'details']);
                                                    //   } else {
                                                    //     this.router.navigate(['/project-view/status', id]);
                                                    //   }
                                                    // })
                                                    _this.storage.set('projectToBeView', project).then(function (project) {
                                                        if (path == 'details') {
                                                            _this.router.navigate(['/project-view/project-detail', 'schools']);
                                                        }
                                                        else {
                                                            _this.router.navigate(['/project-view/status', id]);
                                                        }
                                                    });
                                                }
                                            });
                                        });
                                        // })
                                    }
                                    else {
                                        _this.storage.set('latestProjects', resp).then(function (projects) {
                                            resp.data.projects.forEach(function (prj) {
                                                // this.storage.set('currentProject', prj).then(cpsetup => {
                                                //   if (path == 'details') {
                                                //     this.router.navigate(['/project-view/detail', id,'school']);
                                                //   } else {
                                                //     this.router.navigate(['/project-view/status', id]);
                                                //   }
                                                // })
                                                _this.storage.set('projectToBeView', prj).then(function (project) {
                                                    if (path == 'details') {
                                                        _this.router.navigate(['/project-view/project-detail', 'schools']);
                                                    }
                                                    else {
                                                        _this.router.navigate(['/project-view/status', id]);
                                                    }
                                                });
                                            });
                                        });
                                    }
                                });
                            }
                            else {
                            }
                        }, function (error) {
                            // this.showSkeleton = false;
                        });
                    });
                }
            }, function (error) {
                // this.showSkeleton = false;
            });
        });
    };
    //Launch learner App
    SchoolTaskReportPage.prototype.openApp = function () {
        var _this = this;
        this.market.open('org.shikshalokam.samiksha.staging');
        // org.shikshalokam.app://community.shikshalokam.org/learn
        var options = {
            packageName: 'org.shikshalokam.samiksha.staging',
        };
        this.appLauncher.canLaunch(options).then(function (canLaunch) {
            if (canLaunch) {
                _this.appLauncher.launch(options).then(function () {
                }, function (err) {
                });
            }
            else {
                window.open('"https://play.google.com/store/apps/details?id=org.shikshalokam.samiksha.staging&hl=en","_system"');
            }
        }, function (error) {
            window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.samiksha.staging&hl=en,_system');
        });
    };
    SchoolTaskReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-school-task-report',
            template: __webpack_require__(/*! ./school-task-report.page.html */ "./src/app/school-task-report/school-task-report.page.html"),
            styles: [__webpack_require__(/*! ./school-task-report.page.scss */ "./src/app/school-task-report/school-task-report.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _home_home_service__WEBPACK_IMPORTED_MODULE_12__["HomeService"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_13__["ScreenOrientation"],
            _project_view_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"],
            _ionic_native_app_launcher_ngx__WEBPACK_IMPORTED_MODULE_8__["AppLauncher"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_10__["Market"],
            _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _current_user__WEBPACK_IMPORTED_MODULE_4__["CurrentUserProvider"],
            _api_api__WEBPACK_IMPORTED_MODULE_6__["ApiProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _school_task_report_service__WEBPACK_IMPORTED_MODULE_3__["SchoolTaskService"]])
    ], SchoolTaskReportPage);
    return SchoolTaskReportPage;
}());



/***/ }),

/***/ "./src/app/school-task-report/school-task-report.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/school-task-report/school-task-report.service.ts ***!
  \******************************************************************/
/*! exports provided: SchoolTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolTaskService", function() { return SchoolTaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");




var SchoolTaskService = /** @class */ (function () {
    function SchoolTaskService(http) {
        this.http = http;
    }
    SchoolTaskService.prototype.getSchoolTaskReport = function (token, id) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'x-auth-token': token
        });
        var data = {
            entityId: id
        };
        return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfigs"].api_url + '/unnati/api/v1/projectsByEntity', data, { headers: httpHeaders });
    };
    SchoolTaskService.prototype.getProjectDetail = function (token, id) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'x-auth-token': token
        });
        var data = {
            projectId: id
        };
        return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfigs"].api_url + '/unnati/api/v1/projectsDetailsById', data, { headers: httpHeaders });
    };
    SchoolTaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SchoolTaskService);
    return SchoolTaskService;
}());



/***/ })

}]);
//# sourceMappingURL=school-task-report-school-task-report-module.js.map