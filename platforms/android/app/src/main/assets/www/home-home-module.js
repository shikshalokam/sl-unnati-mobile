(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

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

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");










var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"]
                    }
                ]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({})
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_9__["HomePage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"\" [noBorder]=\"true\">\n  </app-header>\n</ion-header>\n<ion-content>\n  <!-- loader -->\n  <div *ngIf=\"showSkeleton\">\n    <ion-card>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-content class=\"skeleton-card-content\">\n            <p>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <!-- loader ends here -->\n  <div *ngIf=\"!showSkeleton\">\n    <div *ngIf=\"showUpdatePop\">\n      <app-custom-popup [header]=\"header\" [body]=\"body\" [button]=\"button\" [showPopup]=\"true\"\n        [isActionable]=\"isActionable\">\n      </app-custom-popup>\n    </div>\n    <ion-item class=\"search-bar-custom\">\n      <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n      <!-- (keyup)=\"searchSchool(searchInput)\" -->\n    </ion-item>\n    <div *ngIf=\"!searchInput\">\n      <ion-grid class=\"tiles-container\">\n        <ion-row>\n          <ion-col *ngFor=\"let tile of tiles\" class=\"tiles\" size=\"6\">\n            <ion-card (click)=\"navigate(tile.url)\">\n              <img src=\"{{tile.icon}}\">\n              <p>{{tile.title}}</p>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class=\"activeprojects-container\" *ngIf=\"activeProjects\">\n        <h4>{{'home.active_projects' | translate}} </h4>\n        <div *ngFor=\"let ap of activeProjects\">\n          <ion-card (click)=\"viewProject(ap)\">\n            <ion-card-header style=\"padding: 0px;\">\n              <div class=\"collection-label\">{{ap.category}}</div>\n            </ion-card-header>\n            <ion-card-content style=\"padding:0px;\">\n              <ion-row>\n                <ion-col class=\"date-col\">\n                  <h3> {{ap.endDate | date : 'MMM dd'}} </h3>\n                </ion-col>\n                <ion-col class=\"title-col\">\n                  {{ap.title}}\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <ion-button class=\"activeproject-btn\" expand=\"block\" color=\"secondary\" *ngIf=\"activeProjects?.length > 0\"\n          (click)=\"viewMore()\">\n          {{'button.view_more' | translate}}\n        </ion-button>\n      </div>\n    </div>\n    <!-- Search Results -->\n    <div *ngIf=\"searchInput\">\n      <div class=\"welcome-card custom-card\" *ngFor=\"let projects of projectList;\" style=\"margin:10px;\">\n        <div *ngIf=\"(projects.projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n        </div>\n        <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n          <ion-card class=\"inner-card search-results\" *ngIf=\"!project.isDeleted\" (click)=\"navigateToDetails(project)\">\n            <ion-grid>\n              <ion-row>\n                <ion-col style=\"min-width: 85%; margin: auto;\n              font-weight: 500;\">\n                  {{ project.title }}\n                </ion-col>\n                <ion-col class=\"arrow-mark\">\n                  <ion-icon name=\"ios-arrow-forward\"> </ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </div>\n      </div>\n      <!-- Search my projects -->\n      <!-- <div class=\"welcome-card custom-card\" style=\"margin:10px;\">\n        <div *ngFor=\"let project of myProjects | searchProjects: searchInput\">\n          <ion-card class=\"inner-card search-results\" (click)=\"navigateToDetails(project)\" *ngIf=\"!project.isDeleted\">\n            <ion-grid>\n              <ion-row>\n                <ion-col style=\"min-width: 85%; margin: auto;\n                font-weight: 500;\">\n                  {{ project.title }}\n                </ion-col>\n                <ion-col class=\"arrow-mark\">\n                  <ion-icon name=\"ios-arrow-forward\"> </ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </div>\n      </div> -->\n      <!-- Schools  -->\n      <ion-card class=\"welcome-card custom-card\" *ngIf=\"( mySchools | searchSchool: searchInput).length == 0\">\n        <div class=\"no-results\">\n          No Data available.\n        </div>\n      </ion-card>\n      <ion-card class=\"inner-card search-results\" *ngFor=\"let school of mySchools | searchSchool: searchInput\"\n        style=\"margin:10px;\" (click)=\"navigateToSchool(school)\">\n        <ion-grid>\n          <ion-row>\n            <ion-col style=\"min-width: 85%; margin: auto;\n            font-weight: 500;\">\n              {{school.name}}\n            </ion-col>\n            <ion-col class=\"arrow-mark\">\n              <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n      <!-- search library -->\n      <ion-card class=\"welcome-card custom-card\" *ngIf=\"( libraries | searchSchool: searchInput).length == 0\">\n        <div class=\"no-results\">\n          No Data available.\n        </div>\n      </ion-card>\n      <ion-card class=\"inner-card search-results\" *ngFor=\"let library of libraries | searchSchool: searchInput\"\n        style=\"margin:10px;\" (click)=\"navigateToLibrary(library.key)\">\n        <ion-grid>\n          <ion-row>\n            <ion-col style=\"min-width: 85%; margin: auto;\n            font-weight: 500;\">\n              {{library.name}}\n            </ion-col>\n            <ion-col class=\"arrow-mark\">\n              <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.custom-card {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important; }\n\n.custom-card .inner-card {\n    padding: 0px; }\n\n.inner-card {\n  margin: 5px 0px;\n  color: #000;\n  border-radius: 0px; }\n\n.inner-card .arrow-mark {\n    margin: auto;\n    font-size: 22px;\n    text-align: end; }\n\n.arrow-mark {\n  margin: auto !important;\n  font-size: 22px !important;\n  text-align: end !important; }\n\n.card-custom-content {\n  border-bottom: 1px solid #f5f5f5;\n  padding: 0px !important;\n  padding-bottom: 15px; }\n\n.search-results {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important;\n  border-radius: 0px;\n  color: #000;\n  background: #f5f5f5; }\n\n.tiles-container {\n  padding: 0px 20px;\n  margin-bottom: 5px; }\n\n.tiles-container .tiles {\n    max-height: 100%;\n    min-height: 100%;\n    margin-bottom: 10px; }\n\n.tiles-container .tiles ion-card {\n      border-radius: 15px;\n      background: #f2efef;\n      max-height: 100%;\n      min-height: 100%;\n      margin: 4px;\n      padding: 0px 2px; }\n\n.tiles-container .tiles ion-card img {\n        margin: auto;\n        width: 40%;\n        padding: 20px 0px; }\n\n.tiles-container .tiles p {\n      text-align: center;\n      font-family: 'SourceSansPro-Bold';\n      text-transform: uppercase;\n      font-size: 1em;\n      padding: 0px;\n      margin: 0px 0px 5px 0px;\n      font-weight: bold;\n      color: #000;\n      height: 1.5em; }\n\n.activeprojects-container {\n  font-family: 'SourceSansPro-Bold';\n  margin-bottom: 40px; }\n\n.activeprojects-container h4 {\n    text-transform: uppercase;\n    padding: 10px 35px;\n    margin: 0px 0px 0px 0px;\n    color: #000;\n    font-weight: 600;\n    font-size: 18px; }\n\n.activeprojects-container ion-card {\n    border-radius: 15px;\n    background: #f2efef;\n    border-top-left-radius: 0px; }\n\n.activeprojects-container ion-card .collection-label {\n      background: #442c2e;\n      color: #fff;\n      padding: 5px 5px 5px 25px;\n      font-size: 14px;\n      min-width: auto;\n      width: auto;\n      font-weight: 600; }\n\n.activeprojects-container ion-card .date-col {\n      max-width: 15%;\n      text-align: right;\n      color: #b23e33;\n      padding: 0px 0px;\n      margin-right: 10px; }\n\n.activeprojects-container ion-card .date-col h3 {\n        font-size: 22px;\n        text-transform: uppercase;\n        font-weight: 600; }\n\n.activeprojects-container ion-card .title-col {\n      padding: 0px 0px;\n      margin: auto;\n      font-size: 17px;\n      font-weight: 900;\n      margin-top: 5px;\n      color: #000; }\n\n.activeprojects-container .activeproject-btn {\n    padding: 0px 40px;\n    --border-radius: 15px;\n    margin-top: -10px;\n    margin-bottom: 55px;\n    font-weight: 500;\n    font-size: 18px;\n    min-height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUVFLDJCQUEwQjtFQUMxQiw4QkFBOEIsRUFBQTs7QUFIaEM7SUFNSSxZQUFXLEVBQUE7O0FBR2Y7RUFFSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUp0QjtJQU1NLFlBQVk7SUFDWixlQUFjO0lBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBeUI7RUFDekIsMEJBQTBCLEVBQUE7O0FBRTlCO0VBRUUsZ0NBQWdDO0VBQ2hDLHVCQUFzQjtFQUN0QixvQkFBbUIsRUFBQTs7QUFFckI7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBSXJCO0VBRUEsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUhsQjtJQUtJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBUHZCO01BVUksbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTs7QUFmcEI7UUFpQk0sWUFBWTtRQUNaLFVBQVU7UUFDVixpQkFBaUIsRUFBQTs7QUFuQnZCO01BdUJJLGtCQUFrQjtNQUNsQixpQ0FBaUM7TUFDakMseUJBQXlCO01BQ3pCLGNBQWM7TUFDZCxZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsYUFBYSxFQUFBOztBQUlqQjtFQUNFLGlDQUFpQztFQUNqQyxtQkFBa0IsRUFBQTs7QUFGcEI7SUFJSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFUbkI7SUFZSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQixFQUFBOztBQWQvQjtNQWdCTSxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YsZUFBZTtNQUNmLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTs7QUF0QnRCO01BeUJNLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTs7QUE3QnhCO1FBK0JRLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsZ0JBQWdCLEVBQUE7O0FBakN4QjtNQXNDTSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLFdBQVcsRUFBQTs7QUEzQ2pCO0lBZ0RJLGlCQUFpQjtJQUNqQixxQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY3VzdG9tLWNhcmRcbntcbiAgbWFyZ2luLXRvcDoxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgLmlubmVyLWNhcmRcbiAge1xuICAgIHBhZGRpbmc6MHB4O1xuICB9XG59XG4uaW5uZXItY2FyZFxuICB7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAuYXJyb3ctbWFya3tcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGZvbnQtc2l6ZToyMnB4O1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cbiAgfVxuICAuYXJyb3ctbWFya3tcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6MjJweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG4uY2FyZC1jdXN0b20tY29udGVudFxue1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNTtcbiAgcGFkZGluZzowcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206MTVweDtcbn1cbi5zZWFyY2gtcmVzdWx0c3tcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDs7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG4vLyBOZXcgVWkgQ1NTXG4udGlsZXMtY29udGFpbmVyXG57XG5wYWRkaW5nOiAwcHggMjBweDtcbm1hcmdpbi1ib3R0b206IDVweDtcbi50aWxlc3tcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgaW9uLWNhcmRcbiAge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2YyZWZlZjtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgcGFkZGluZzogMHB4IDJweDtcbiAgICBpbWd7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgfVxuICB9XG4gIHB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlU2Fuc1Byby1Cb2xkJztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICB9XG59XG59XG4uYWN0aXZlcHJvamVjdHMtY29udGFpbmVye1xuICBmb250LWZhbWlseTogJ1NvdXJjZVNhbnNQcm8tQm9sZCc7XG4gIG1hcmdpbi1ib3R0b206NDBweDtcbiAgaDQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogMTBweCAzNXB4O1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIGlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2YyZWZlZjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgLmNvbGxlY3Rpb24tbGFiZWx7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDQyYzJlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAyNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuZGF0ZS1jb2x7XG4gICAgICBtYXgtd2lkdGg6IDE1JTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgY29sb3I6ICNiMjNlMzM7XG4gICAgICBwYWRkaW5nOiAwcHggMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgaDN7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlLWNvbFxuICAgIHtcbiAgICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICB9XG4gIC5hY3RpdmVwcm9qZWN0LWJ0blxuICB7XG4gICAgcGFkZGluZzogMHB4IDQwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _project_view_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project-view/project.service */ "./src/app/project-view/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _category_view_category_view_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../category-view/category.view.service */ "./src/app/category-view/category.view.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _projects_projects_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../projects/projects.service */ "./src/app/projects/projects.service.ts");
/* harmony import */ var _reports_reports_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reports/reports.service */ "./src/app/reports/reports.service.ts");
/* harmony import */ var _myschools_myschools_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../myschools/myschools.service */ "./src/app/myschools/myschools.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _update_profile_update_profile_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../update-profile/update-profile.service */ "./src/app/update-profile/update-profile.service.ts");



















var HomePage = /** @class */ (function () {
    function HomePage(datepipe, storage, apiProvider, homeService, categoryViewService, router, projectsService, login, screenOrientation, projectService, translate, networkService, menuCtrl, reportsService, mySchoolsService, toastService, updateProfile) {
        var _this = this;
        this.datepipe = datepipe;
        this.storage = storage;
        this.apiProvider = apiProvider;
        this.homeService = homeService;
        this.categoryViewService = categoryViewService;
        this.router = router;
        this.projectsService = projectsService;
        this.login = login;
        this.screenOrientation = screenOrientation;
        this.projectService = projectService;
        this.translate = translate;
        this.networkService = networkService;
        this.menuCtrl = menuCtrl;
        this.reportsService = reportsService;
        this.mySchoolsService = mySchoolsService;
        this.toastService = toastService;
        this.updateProfile = updateProfile;
        this.connected = false;
        this.loggedIn = false;
        this.showUpdatePop = false;
        this.type = 'quarter';
        this.count = 100;
        this.page = 1;
        this.libraries = [{
                name: 'others',
                key: 'other'
            },
            {
                name: 'education leader',
                key: 'education_leader'
            }, {
                name: 'infrastructure',
                key: 'infrastructure'
            }, {
                name: 'school process',
                key: 'school_process'
            }, {
                name: 'community',
                key: 'community'
            }, {
                name: 'students',
                key: 'students'
            }, {
                name: 'teacher',
                key: 'teacher'
            }, {
                name: 'my projects',
                key: 'my_projects'
            }];
        this.tiles = [
            { title: "create project", icon: 'assets/images/homeTiles/createproject.png', url: '/project-view/create-project' },
            { title: "library", icon: 'assets/images/homeTiles/library.png', url: '/project-view/library' },
            { title: "open tasks", icon: 'assets/images/homeTiles/tasksclipboard.png', url: '' },
            { title: "reports", icon: 'assets/images/homeTiles/reports.png', url: '/project-view/my-reports/last-month-reports' }
        ];
        this.activeProjects = [];
        this.showSkeleton = false;
        this.skeletons = [{}, {}, {}, {}, {}, {}];
        this.menuCtrl.enable(true);
        // update profile pop handler
        updateProfile.updatedUser.subscribe(function (status) {
            var isPopUpShowen = localStorage.getItem('isPopUpShowen');
            if (isPopUpShowen == "null") {
                isPopUpShowen = false;
            }
            if (status == "Update" && !isPopUpShowen) {
                _this.body = 'message.update_profile';
                _this.header = 'message.confirm_your_details';
                _this.button = 'button.update';
                _this.isActionable = '/project-view/update-profile';
                _this.showUpdatePop = true;
                var isPopUpShowen_1 = localStorage.getItem('isPopUpShowen');
            }
            else {
                _this.showUpdatePop = false;
            }
        });
        homeService.activeProjectLoad.subscribe(function (data) {
            if (data == 'activeProjectLoad') {
                _this.getActiveProjects();
            }
        });
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
            _this.connected = localStorage.getItem("networkStatus");
        });
        this.login.emit.subscribe(function (data) {
            _this.menuCtrl.enable(true);
        });
        this.networkService.emit.subscribe(function (value) {
            translate.use(value);
        });
        this.menuCtrl.enable(true);
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (localStorage.getItem("token") != null) {
            this.menuCtrl.enable(true, 'unnati');
            this.getActiveProjects();
            this.setTitle('home_tab');
            this.connected = localStorage.getItem("networkStatus");
            //  this.splashScreen.hide();
            this.storage.get('templates').then(function (templates) {
                if (!templates) {
                    _this.getTemplates();
                }
            });
            this.storage.get('projects').then(function (projects) {
                if (!projects) {
                    _this.getProjects();
                }
                else {
                    _this.getActiveProjects();
                }
            });
            this.getSchools();
        }
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
    };
    HomePage.prototype.ngOnInit = function () {
        this.login.loggedIn('true');
        this.checkUser();
    };
    //  Check user
    HomePage.prototype.checkUser = function () {
        var _this = this;
        this.storage.get('token').then(function (data) {
            if (data) {
                _this.loggedIn = true;
                _this.menuCtrl.enable(true);
            }
            else {
                _this.menuCtrl.enable(true);
                _this.loggedIn = false;
            }
        });
    };
    // Set title for Tabs
    HomePage.prototype.setTitle = function (title) {
        this.projectService.setTitle(title);
    };
    //navigate to project Details page
    HomePage.prototype.navigateToDetails = function (project) {
        var _this = this;
        // localStorage.setItem("id", project._id);
        // this.storage.set('currentProject', project).then(data => {
        //   localStorage.setItem("from", 'home');
        //   this.router.navigate(['/project-view/detail', project._id, 'home']);
        //   this.projectService.setTitle(data.title);
        // })
        this.storage.set('projectToBeView', project).then(function (project) {
            _this.router.navigate(['/project-view/project-detail', 'home']);
        });
    };
    HomePage.prototype.navigateToSchool = function (school) {
        localStorage.setItem('from1', 'home');
        this.router.navigate(['/project-view/school-task-report', school.entityId, school.name]);
    };
    HomePage.prototype.navigateToLibrary = function (category) {
        this.router.navigate(['/project-view/category', category, 'home']);
    };
    // get active projects
    HomePage.prototype.getActiveProjects = function () {
        var _this = this;
        this.showSkeleton = true;
        this.activeProjects = [];
        var ap = [];
        var count = 0;
        this.storage.get('projects').then(function (myProjects) {
            _this.myProjects = myProjects;
            if (myProjects) {
                myProjects[0].projects.forEach(function (myProject) {
                    if (count < 2) {
                        if ((myProject.createdType == 'by self' || myProject.createdType == 'by reference') && myProject.isStarted && !myProject.isDeleted) {
                            ap.push(myProject);
                            count = count + 1;
                        }
                    }
                });
                _this.activeProjects = ap;
            }
            _this.showSkeleton = false;
        }, function (error) {
            _this.showSkeleton = false;
        });
    };
    HomePage.prototype.navigate = function (url) {
        this.homeService.clearData();
        if (url == '/project-view/create-project') {
            this.homeService.clearData();
            this.router.navigate([url, 'yes']);
        }
        else if (url != '') {
            this.router.navigate([url]);
        }
        else if (url == '') {
            this.toastService.errorToast('message.comingsoon');
        }
    };
    HomePage.prototype.viewMore = function () {
        this.router.navigate(['/project-view/projects', 'activeprojects']);
    };
    HomePage.prototype.viewProject = function (project) {
        var _this = this;
        this.storage.set('projectToBeView', project).then(function (project) {
            _this.router.navigate(['/project-view/project-detail', 'home']);
        });
    };
    // get templates
    HomePage.prototype.getTemplates = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.apiProvider.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens_1 = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens_1).then(function (usertoken) {
                        _this.categoryViewService.getTemplatesByCategory(userTokens_1.access_token).subscribe(function (data) {
                            if (data.data) {
                                _this.storage.set('templates', data.data).then(function (templates) {
                                });
                            }
                        }, function (error) { });
                    }, function (error) {
                    });
                }
            });
        });
    };
    // get Projects
    HomePage.prototype.getProjects = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.apiProvider.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (usertoken) {
                        _this.projectsService.getAssignedProjects(usertoken.access_token, _this.type).subscribe(function (resp) {
                            if (resp.status != 'failed') {
                                resp.data.forEach(function (programs) {
                                    programs.projects.forEach(function (project) {
                                        project.lastUpdate = project.lastSync;
                                        project.isSync = true;
                                        project.isEdited = false;
                                        project.isNew = false;
                                        if (project.status != 'not yet started' && project.status != 'Not started') {
                                            project.isStarted = true;
                                        }
                                        project.programName = programs.programs.name;
                                    });
                                });
                                _this.storage.set('projects', resp.data).then(function (resp1) {
                                    _this.getActiveProjects();
                                });
                            }
                        });
                    });
                }
            });
        });
    };
    //  get schools
    HomePage.prototype.getSchools = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.apiProvider.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (usertoken) {
                        _this.mySchoolsService.getSchools(parsedData.access_token, _this.count, _this.page).subscribe(function (data) {
                            _this.mySchools = data.data;
                        }, function (error) { });
                    }, function (error) {
                    });
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _api_api__WEBPACK_IMPORTED_MODULE_5__["ApiProvider"],
            _home_service__WEBPACK_IMPORTED_MODULE_9__["HomeService"],
            _category_view_category_view_service__WEBPACK_IMPORTED_MODULE_10__["CategoryViewService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _projects_projects_service__WEBPACK_IMPORTED_MODULE_12__["ProjectsService"],
            _login_service__WEBPACK_IMPORTED_MODULE_11__["Login"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_15__["ScreenOrientation"],
            _project_view_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _reports_reports_service__WEBPACK_IMPORTED_MODULE_13__["ReportsService"],
            _myschools_myschools_service__WEBPACK_IMPORTED_MODULE_14__["MyschoolsService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_17__["ToastService"],
            _update_profile_update_profile_service__WEBPACK_IMPORTED_MODULE_18__["UpdateProfileService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map