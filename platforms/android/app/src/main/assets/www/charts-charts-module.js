(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

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

/***/ "./src/app/charts/charts.module.ts":
/*!*****************************************!*\
  !*** ./src/app/charts/charts.module.ts ***!
  \*****************************************/
/*! exports provided: ChartsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsPageModule", function() { return ChartsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _charts_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts.page */ "./src/app/charts/charts.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");










var routes = [
    {
        path: '',
        component: _charts_page__WEBPACK_IMPORTED_MODULE_7__["ChartsPage"]
    }
];
var ChartsPageModule = /** @class */ (function () {
    function ChartsPageModule() {
    }
    ChartsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({})
            ],
            declarations: [_charts_page__WEBPACK_IMPORTED_MODULE_7__["ChartsPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"]]
        })
    ], ChartsPageModule);
    return ChartsPageModule;
}());



/***/ }),

/***/ "./src/app/charts/charts.page.html":
/*!*****************************************!*\
  !*** ./src/app/charts/charts.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-icon (click)=\"goBack()\" ios=\"ios-arrow-back\" md=\"md-arrow-back\" class=\"header-action-icons\">\n    </ion-icon>\n    <ion-title>\n      {{ title }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item text-wrap style=\" --background: #af4038;\n  color: #fff; --border-color: transparent;float: left;width: 100%;\">\n    <ion-grid>\n      <ion-row style=\"text-align: center; font-size: 12px;\">\n        <ion-col>\n          Tasks <br />\n          {{ totalTasks }}\n        </ion-col>\n        <ion-col>\n          Subtasks Tasks <br />\n          {{ totalSTasks }}\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"text-center\">\n        <ion-col> Project Status <br /> {{status}} </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <div id=\"container\"> </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/charts/charts.page.scss":
/*!*****************************************!*\
  !*** ./src/app/charts/charts.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-left {\n  float: left;\n  margin-top: 70px;\n  width: 98%;\n  padding: 5px 1%;\n  overflow-x: auto; }\n\n.medium-right {\n  float: right;\n  width: 65%;\n  padding: 5px 1%;\n  overflow-x: auto; }\n\n.third-left {\n  width: 30%;\n  float: left;\n  padding: 5px 1%;\n  overflow-x: auto; }\n\nh2 {\n  font-size: 20px;\n  color: #000;\n  background-color: #fff;\n  padding: 10px;\n  text-align: center; }\n\n.header-action-icons {\n  font-size: 28px;\n  padding-left: 15px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9jaGFydHMvY2hhcnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGFydHMvY2hhcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuZnVsbC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIHdpZHRoOiA5OCU7XG4gICAgcGFkZGluZzogNXB4IDElO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgLm1lZGl1bS1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiA2NSU7XG4gICAgcGFkZGluZzogNXB4IDElO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgLnRoaXJkLWxlZnQge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogNXB4IDElO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlci1hY3Rpb24taWNvbnN7XG4gICAgZm9udC1zaXplOjI4cHg7XG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/charts/charts.page.ts":
/*!***************************************!*\
  !*** ./src/app/charts/charts.page.ts ***!
  \***************************************/
/*! exports provided: ChartsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsPage", function() { return ChartsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/tasks.service */ "./src/app/tasks/tasks.service.ts");
/* harmony import */ var _project_view_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project-view/project.service */ "./src/app/project-view/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var highcharts_highcharts_gantt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts/highcharts-gantt */ "./node_modules/highcharts/highcharts-gantt.js");
/* harmony import */ var highcharts_highcharts_gantt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_gantt__WEBPACK_IMPORTED_MODULE_10__);











var ChartsPage = /** @class */ (function () {
    function ChartsPage(storage, platform, projectService, alertController, route, router, api, location, tasksService, screenOrientation) {
        var _this = this;
        this.storage = storage;
        this.platform = platform;
        this.projectService = projectService;
        this.alertController = alertController;
        this.route = route;
        this.router = router;
        this.api = api;
        this.location = location;
        this.tasksService = tasksService;
        this.screenOrientation = screenOrientation;
        this.tasks = [];
        this.value = [];
        this.totalTasks = 0;
        this.totalSTasks = 0;
        this.highcharts = highcharts_highcharts_gantt__WEBPACK_IMPORTED_MODULE_10__;
        this.onPointClick = function (event) {
            _this.router.navigate(['project-view/subtask-status', event.point.options.id]);
        };
        this.projectService.emit.subscribe(function (value) {
            try {
                _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.LANDSCAPE);
            }
            catch (error) {
            }
        });
        this.tasksService.emit.subscribe(function (value) {
            _this.platform.ready().then(function () {
                _this.setupChart();
                try {
                    _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                }
                catch (error) {
                }
            });
        });
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.storage.get('latestProjects').then(function (data) {
                if (typeof data == 'string') {
                    data = JSON.parse(data);
                }
                var matched = false;
                data.forEach(function (projects) {
                    projects.projects.forEach(function (data) {
                        if (data._id == _this.id) {
                            matched = true;
                            _this.title = data.title;
                            _this.storage.set('projectToBeView', data).then(function (data) {
                                _this.platform.ready().then(function () {
                                    _this.setupChart();
                                    try {
                                        _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                                    }
                                    catch (error) {
                                    }
                                });
                            });
                        }
                    });
                });
                if (!matched) {
                    _this.getProjectsFromService();
                }
            });
        });
    }
    ChartsPage.prototype.ionViewDidEnter = function () {
        this.setupChart();
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        }
        catch (error) {
        }
    };
    ChartsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // THE CHART
            //this.setupChart();
            try {
                _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.LANDSCAPE);
            }
            catch (error) {
            }
        });
    };
    // // prepare data for chart
    ChartsPage.prototype.setupChart = function () {
        var _this = this;
        this.value = [];
        var dates = [];
        this.totalTasks = 0;
        this.totalSTasks = 0;
        this.storage.get('projectToBeView').then(function (pc) {
            if (!pc) {
                _this.getProjectsFromService();
            }
            else {
                // pc.projects.forEach(project => {
                _this.title = pc.title;
                _this.status = pc.status;
                _this.entityId = pc.entityId;
                if (pc.tasks) {
                    _this.totalTasks = pc.tasks.length;
                }
                pc.tasks.forEach(function (task) {
                    if (task.subTasks) {
                        _this.totalSTasks = _this.totalSTasks + task.subTasks.length;
                    }
                    task.startDate = new Date(task.startDate);
                    task.endDate = new Date(task.endDate);
                    dates.push(new Date(task.startDate));
                    dates.push(new Date(task.endDate));
                    var id = task._id;
                    var sdate = task.startDate.getDate();
                    var smonth = task.startDate.getMonth();
                    var syear = task.startDate.getFullYear();
                    var edate = task.endDate.getDate();
                    var emonth = task.endDate.getMonth();
                    var eyear = task.endDate.getFullYear();
                    var color;
                    if (task.status == 'in progress' || task.status == 'In progress') {
                        color = '#f7a35c';
                    }
                    else if (task.status == 'completed' || task.status == 'Completed') {
                        color = '#67e427';
                    }
                    else if (task.status == 'not yet started' || task.status == 'Not started') {
                        color = '#adafad';
                    }
                    _this.value.push({
                        name: task.title,
                        start: Date.UTC(syear, smonth, sdate),
                        end: Date.UTC(eyear, emonth, edate),
                        color: color,
                        id: task._id
                    });
                });
                var min = dates.sort(function (a, b) { return a - b; })[0], max = dates.slice(-1)[0];
                _this.loadChart(_this.value, min, max);
                // });
            }
        });
    };
    // chartGantt: Highcharts.Options = {
    // };
    // // Load chart after preparing data for chart.
    ChartsPage.prototype.loadChart = function (value, min, max) {
        var mindate = min.getDate();
        var minmonth = min.getMonth();
        var minyear = min.getFullYear();
        var maxdate = max.getDate();
        var maxmonth = max.getMonth();
        var maxyear = max.getFullYear();
        highcharts_highcharts_gantt__WEBPACK_IMPORTED_MODULE_10__["ganttChart"]('container', {
            xAxis: {
                min: Date.UTC(minyear, minmonth, mindate),
                max: Date.UTC(maxyear, maxmonth, maxdate)
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: true
                },
            },
            series: [{
                    name: '',
                    type: 'gantt',
                    data: value,
                    events: {
                        click: this.onPointClick.bind(this)
                    },
                }]
        });
    };
    ChartsPage.prototype.goBack = function () {
        this.router.navigate(['project-view/school-task-report/' + this.entityId + '/School']);
    };
    ChartsPage.prototype.ngOnDestroy = function () {
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
    };
    // Get projects 
    ChartsPage.prototype.getProjectsFromService = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.refreshToken = data.refresh_token;
            _this.api.refershToken(_this.refreshToken).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (usertoken) {
                        var id = {
                            projectId: _this.id
                        };
                        _this.projectService.projectDetails(parsedData.access_token, id).subscribe(function (resp) {
                            _this.storage.set('projectToBeView', resp.data).then(function (pc) {
                                _this.value = [];
                                var dates = [];
                                _this.totalTasks = 0;
                                _this.totalSTasks = 0;
                                pc.projects.forEach(function (project) {
                                    _this.title = project.title;
                                    _this.status = project.status;
                                    _this.entityId = project.entityId;
                                    if (project.tasks) {
                                        _this.totalTasks = project.tasks.length;
                                        project.tasks.forEach(function (task) {
                                            if (task.subTasks) {
                                                _this.totalSTasks = _this.totalSTasks + task.subTasks.length;
                                            }
                                            task.startDate = new Date(task.startDate);
                                            task.endDate = new Date(task.endDate);
                                            dates.push(new Date(task.startDate));
                                            dates.push(new Date(task.endDate));
                                            var id = task._id;
                                            var sdate = task.startDate.getDate();
                                            var smonth = task.startDate.getMonth();
                                            var syear = task.startDate.getFullYear();
                                            var edate = task.endDate.getDate();
                                            var emonth = task.endDate.getMonth();
                                            var eyear = task.endDate.getFullYear();
                                            var color;
                                            if (task.status == 'in progress' || task.status == 'In progress') {
                                                color = '#f7a35c';
                                            }
                                            else if (task.status == 'completed' || task.status == 'Completed') {
                                                color = '#67e427';
                                            }
                                            else if (task.status == 'not yet started' || task.status == 'Not started') {
                                                color = '#adafad';
                                            }
                                            _this.value.push({
                                                name: task.title,
                                                start: Date.UTC(syear, smonth, sdate),
                                                end: Date.UTC(eyear, emonth, edate),
                                                color: color,
                                                id: task._id
                                            });
                                        });
                                    }
                                });
                                var min = dates.sort(function (a, b) { return a - b; })[0], max = dates.slice(-1)[0];
                                _this.loadChart(_this.value, min, max);
                            });
                        }, function (error) {
                        });
                    });
                }
            }, function (error) {
            });
        });
    };
    ChartsPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'Subtitle',
                            message: 'This is an alert message.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChartsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! ./charts.page.html */ "./src/app/charts/charts.page.html"),
            styles: [__webpack_require__(/*! ./charts.page.scss */ "./src/app/charts/charts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _project_view_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _api_api__WEBPACK_IMPORTED_MODULE_8__["ApiProvider"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _tasks_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"]])
    ], ChartsPage);
    return ChartsPage;
}());



/***/ })

}]);
//# sourceMappingURL=charts-charts-module.js.map