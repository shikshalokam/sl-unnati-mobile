(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-view-project-view-module"],{

/***/ "./node_modules/@ionic-native/keyboard/ngx/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ionic-native/keyboard/ngx/index.js ***!
  \**********************************************************/
/*! exports provided: KeyboardStyle, KeyboardResizeMode, Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function() { return KeyboardStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardResizeMode", function() { return KeyboardResizeMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
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



var KeyboardStyle;
(function (KeyboardStyle) {
    KeyboardStyle["Light"] = "light";
    KeyboardStyle["Dark"] = "dark";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResizeMode;
(function (KeyboardResizeMode) {
    KeyboardResizeMode["Native"] = "native";
    KeyboardResizeMode["Ionic"] = "ionic";
    KeyboardResizeMode["Body"] = "body";
    KeyboardResizeMode["None"] = "none";
})(KeyboardResizeMode || (KeyboardResizeMode = {}));
var Keyboard = /** @class */ (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keyboard.prototype.hideFormAccessoryBar = function (hide) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hideFormAccessoryBar", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.hide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hide", { "sync": true, "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.show = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "show", { "sync": true, "platforms": ["Android"] }, arguments); };
    Keyboard.prototype.setResizeMode = function (mode) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setResizeMode", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.setKeyboardStyle = function (style) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "setKeyboardStyle", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.disableScroll = function (disable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "disableScroll", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.onKeyboardShow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardShow", { "eventObservable": true, "event": "native.keyboardshow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillShow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardWillShow", { "eventObservable": true, "event": "keyboardWillShow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardDidShow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardDidShow", { "eventObservable": true, "event": "keyboardDidShow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardHide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardHide", { "eventObservable": true, "event": "native.keyboardhide", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillHide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardWillHide", { "eventObservable": true, "event": "keyboardWillHide", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardDidHide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "onKeyboardDidHide", { "eventObservable": true, "event": "keyboardDidHide", "platforms": ["iOS", "Android"] }, arguments); };
    Object.defineProperty(Keyboard.prototype, "isVisible", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "isVisible"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "isVisible", value); },
        enumerable: true,
        configurable: true
    });
    Keyboard.pluginName = "Keyboard";
    Keyboard.plugin = "cordova-plugin-ionic-keyboard";
    Keyboard.pluginRef = "window.Keyboard";
    Keyboard.repo = "https://github.com/ionic-team/cordova-plugin-ionic-keyboard";
    Keyboard.platforms = ["Android", "iOS"];
    Keyboard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Keyboard);
    return Keyboard;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tleWJvYXJkL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QixnQ0FBZSxDQUFBO0lBQ2YsOEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxhQUFhLEtBQWIsYUFBYSxRQUd4QjtBQUVELE1BQU0sQ0FBTixJQUFZLGtCQUtYO0FBTEQsV0FBWSxrQkFBa0I7SUFDNUIsdUNBQWlCLENBQUE7SUFDakIscUNBQWUsQ0FBQTtJQUNmLG1DQUFhLENBQUE7SUFDYixtQ0FBYSxDQUFBO0FBQ2YsQ0FBQyxFQUxXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFLN0I7O0lBZ0M2Qiw0QkFBaUI7Ozs7SUFnQjdDLHVDQUFvQixhQUFDLElBQWE7SUFTbEMsdUJBQUk7SUFTSix1QkFBSTtJQVVKLGdDQUFhLGFBQUMsSUFBd0I7SUFVdEMsbUNBQWdCLGFBQUMsS0FBb0I7SUFVckMsZ0NBQWEsYUFBQyxPQUFnQjtJQVc5QixpQ0FBYztJQWFkLHFDQUFrQjtJQWFsQixvQ0FBaUI7SUFhakIsaUNBQWM7SUFhZCxxQ0FBa0I7SUFhbEIsb0NBQWlCOzBCQXRJakIsK0JBQVM7Ozs7Ozs7Ozs7O0lBTkUsUUFBUTtRQURwQixVQUFVLEVBQUU7T0FDQSxRQUFRO21CQTlDckI7RUE4QzhCLGlCQUFpQjtTQUFsQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIENvcmRvdmFQcm9wZXJ0eSwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gS2V5Ym9hcmRTdHlsZSB7XG4gIExpZ2h0ID0gJ2xpZ2h0JyxcbiAgRGFyayA9ICdkYXJrJ1xufVxuXG5leHBvcnQgZW51bSBLZXlib2FyZFJlc2l6ZU1vZGUge1xuICBOYXRpdmUgPSAnbmF0aXZlJyxcbiAgSW9uaWMgPSAnaW9uaWMnLFxuICBCb2R5ID0gJ2JvZHknLFxuICBOb25lID0gJ25vbmUnXG59XG5cblxuLyoqXG4gKiBAbmFtZSBLZXlib2FyZFxuICogQGRlc2NyaXB0aW9uXG4gKiBLZXlib2FyZCBwbHVnaW4gZm9yIENvcmRvdmEuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb25pYy1rZXlib2FyZGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtLZXlib2FyZCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2tleWJvYXJkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBrZXlib2FyZDogS2V5Ym9hcmQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMua2V5Ym9hcmQuc2hvdygpO1xuICpcbiAqIHRoaXMua2V5Ym9hcmQuaGlkZSgpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0tleWJvYXJkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuS2V5Ym9hcmQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLZXlib2FyZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrIGtleWJvYXJkIHN0YXR1cyB2aXNpYmxlIG9yIG5vdC5cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBrZXlib2FyZCBhY2Nlc3NvcnkgYmFyIHdpdGggdGhlIG5leHQsIHByZXZpb3VzIGFuZCBkb25lIGJ1dHRvbnMuXG4gICAqIEBwYXJhbSBoaWRlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIGhpZGVGb3JtQWNjZXNzb3J5QmFyKGhpZGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGtleWJvYXJkIGlmIHNob3duLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZvcmNlIGtleWJvYXJkIHRvIGJlIHNob3duLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBzaG93KCk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJvZ3JhbWF0aWNhbGx5IHNldCB0aGUgcmVzaXplIG1vZGVcbiAgICogQHBhcmFtIG1vZGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBzZXRSZXNpemVNb2RlKG1vZGU6IEtleWJvYXJkUmVzaXplTW9kZSk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJvZ3JhbWF0aWNhbGx5IHNldCBLZXlib2FyZCBzdHlsZVxuICAgKiBAcGFyYW0gbW9kZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIHNldEtleWJvYXJkU3R5bGUoc3R5bGU6IEtleWJvYXJkU3R5bGUpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFByb2dyYW1hdGljYWxseSBlbmFibGUgb3IgZGlzYWJsZSB0aGUgV2ViVmlldyBzY3JvbGxcbiAgICogQHBhcmFtIG1vZGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBkaXNhYmxlU2Nyb2xsKGRpc2FibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCBpcyBzaG93bi4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnbmF0aXZlLmtleWJvYXJkc2hvdycsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgb25LZXlib2FyZFNob3coKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIHdpbGwgc2hvdy4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAna2V5Ym9hcmRXaWxsU2hvdycsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgb25LZXlib2FyZFdpbGxTaG93KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCBkaWQgc2hvdy4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAna2V5Ym9hcmREaWRTaG93JyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkRGlkU2hvdygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgaXMgaGlkZGVuLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICduYXRpdmUua2V5Ym9hcmRoaWRlJyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkSGlkZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgd2lsbCBoaWRlLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZFdpbGxIaWRlJyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkV2lsbEhpZGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGRpZCBoaWRlLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZERpZEhpZGUnLFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddXG4gIH0pXG4gIG9uS2V5Ym9hcmREaWRIaWRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

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

/***/ "./src/app/project-view/project-view.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/project-view/project-view.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewPageModule", function() { return ProjectViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _project_view_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-view.page */ "./src/app/project-view/project-view.page.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var routes = [
    {
        path: '',
        component: _project_view_page__WEBPACK_IMPORTED_MODULE_7__["ProjectViewPage"],
        children: [
            { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
            { path: 'my-schools', loadChildren: '../myschools/myschools.module#MyschoolsPageModule' },
            { path: 'fullreports/:state', loadChildren: '../fullreports/fullreports.module#FullreportsPageModule' },
            { path: 'about', loadChildren: '../about/about.module#AboutPageModule' },
            { path: 'detail', loadChildren: '../detail/detail.module#DetailPageModule' },
            { path: 'detail/:id/:from', loadChildren: '../detail/detail.module#DetailPageModule' },
            { path: 'school-project-detail/:id', loadChildren: '../school-project-detail/school-project-detail.module#SchoolProjectDetailPageModule' },
            { path: 'projects', loadChildren: '../projects/projects.module#ProjectsPageModule' },
            { path: 'projects/:type', loadChildren: '../projects/projects.module#ProjectsPageModule' },
            { path: 'reports', loadChildren: '../reports/reports.module#ReportsPageModule' },
            { path: 'my-schools', loadChildren: '../myschools/myschools.module#MyschoolsPageModule' },
            { path: 'school-task-report/:id/:name', loadChildren: '../school-task-report/school-task-report.module#SchoolTaskReportPageModule' },
            { path: 'task-view', loadChildren: '../task-view/task-view.module#TaskViewPageModule' },
            { path: 'task-view/:projectId/:taskId/:from', loadChildren: '../task-view/task-view.module#TaskViewPageModule' },
            { path: 'subtasks', loadChildren: '../subtasks/subtasks.module#SubtasksPageModule' },
            { path: 'subtasks', loadChildren: '../subtasks/subtasks.module#SubtasksPageModule' },
            { path: 'subtask-status', loadChildren: '../subtask-status/subtask-status.module#SubtaskStatusPageModule' },
            { path: 'courses', loadChildren: '../courses/courses.module#CoursesPageModule' },
            { path: 'courses/:cat', loadChildren: '../courses/courses.module#CoursesPageModule' },
            { path: 'status/:id', loadChildren: '../charts/charts.module#ChartsPageModule' },
            { path: 'create-project', loadChildren: '../create-project/create-project.module#CreateProjectPageModule' },
            { path: 'create-project/:clearData', loadChildren: '../create-project/create-project.module#CreateProjectPageModule' },
            { path: 'create-task/:id/:from', loadChildren: '../create-task/create-task.module#CreateTaskPageModule' },
            { path: 'create-task/:id', loadChildren: '../create-task/create-task.module#CreateTaskPageModule' },
            { path: 'current-task/:id/:from', loadChildren: '../current-task-view/current-task-view.module#CurrentTaskViewPageModule' },
            { path: 'library', loadChildren: '../library/library.module#LibraryPageModule' },
            { path: 'category/:cat', loadChildren: '../category-view/category-view.module#CategoryViewPageModule' },
            { path: 'project-detail/:cat', loadChildren: '../project-detail/project-detail.module#ProjectDetailPageModule' },
            { path: 'project-detail', loadChildren: '../project-detail/project-detail.module#ProjectDetailPageModule' },
            { path: 'newsfeed', loadChildren: '../newsfeed/newsfeed.module#NewsfeedPageModule' },
            { path: 'my-reports', loadChildren: '../my-reports/my-reports.module#MyReportsPageModule' },
            { path: 'files/:id', loadChildren: '../files/files.module#FilesPageModule' },
            { path: 'notifications', loadChildren: '../notifications/notifications.module#NotificationsPageModule' },
            { path: 'task-board', loadChildren: '../task-board/task-board.module#TaskBoardPageModule' },
        ]
    }
];
var ProjectViewPageModule = /** @class */ (function () {
    function ProjectViewPageModule() {
    }
    ProjectViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({})
            ],
            declarations: [_project_view_page__WEBPACK_IMPORTED_MODULE_7__["ProjectViewPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_8__["Keyboard"]]
        })
    ], ProjectViewPageModule);
    return ProjectViewPageModule;
}());



/***/ }),

/***/ "./src/app/project-view/project-view.page.html":
/*!*****************************************************!*\
  !*** ./src/app/project-view/project-view.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs color=\"primary\" selected-tab=\"tasks\" *ngIf=\"!loggedIn\">\n  <div class=\"bottom-tab-img-container\" *ngIf=\"!isKeyBoardUp\"><img src=\"assets/images/bottom-tab/newsfeed.png\" class=\"nf-tab-img\" (click)=\"navigateToNewsFeed()\"> </div>\n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\n    <ion-tab-button tab=\"home\" selected=\"true\" (click)=\"selectTab('home_tab')\">\n      <img src=\"assets/images/bottom-tab/home.png\" class=\"btm-tab-img\">\n      <ion-label>{{ \"landing_page\" | translate }}</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"projects\" (click)=\"selectTab('projects_tab')\">\n      <img src=\"assets/images/bottom-tab/projects.png\" class=\"btm-tab-img\">\n      <ion-label>{{ \"Projects\" | translate }}</ion-label>\n    </ion-tab-button>\n    <ion-tab-button  (click)=\"navigateToNewsFeed()\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"my-schools\" (click)=\"selectTab('schools_tab')\">\n      <img src=\"assets/images/bottom-tab/baseline-domain.svg\" class=\"btm-tab-img\">\n      <ion-label>{{ \"schools_tab\" | translate }}</ion-label>\n    </ion-tab-button>\n    <ion-tab-button routerLink=\"/project-view/my-reports/last-month-reports\"  (click)=\"selectTab('reports_tab')\">\n      <img src=\"assets/images/bottom-tab/insert_chart.svg\" class=\"btm-tab-img\">\n      <ion-label>{{ \"reports_tab\" | translate }}</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/project-view/project-view.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/project-view/project-view.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-connection {\n  color: red; }\n\n:host(.show-back-button) {\n  display: block; }\n\n.bottom-tab-img-container {\n  margin: auto;\n  margin-bottom: -32px; }\n\n.bottom-tab-img-container .nf-tab-img {\n    margin-top: -100px;\n    z-index: 99999999;\n    position: relative;\n    width: 60px;\n    border: 2px solid #fff;\n    border-radius: 50%; }\n\n.btm-tab-img {\n  width: 35px;\n  max-width: 35px;\n  max-height: 35px;\n  min-height: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvcHJvamVjdC12aWV3L3Byb2plY3Qtdmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFTLEVBQUE7O0FBRWI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQixFQUFBOztBQUZ0QjtJQUtFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LXZpZXcvcHJvamVjdC12aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1jb25uZWN0aW9ue1xuICAgIGNvbG9yOnJlZDtcbn1cbjpob3N0KC5zaG93LWJhY2stYnV0dG9uKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYm90dG9tLXRhYi1pbWctY29udGFpbmVye1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IC0zMnB4O1xuICAubmYtdGFiLWltZ1xue1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gIHotaW5kZXg6IDk5OTk5OTk5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG59XG4uYnRtLXRhYi1pbWd7XG4gIHdpZHRoOiAzNXB4O1xuICBtYXgtd2lkdGg6IDM1cHg7XG4gIG1heC1oZWlnaHQ6IDM1cHg7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/project-view/project-view.page.ts":
/*!***************************************************!*\
  !*** ./src/app/project-view/project-view.page.ts ***!
  \***************************************************/
/*! exports provided: ProjectViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewPage", function() { return ProjectViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _network_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network.service */ "./src/app/network.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project.service */ "./src/app/project-view/project.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");













var ProjectViewPage = /** @class */ (function () {
    function ProjectViewPage(storage, projectService, keyboard, menuCtrl, platform, routerOutlet, networkService, translate, network, route, router, screenOrientation) {
        var _this = this;
        this.storage = storage;
        this.projectService = projectService;
        this.keyboard = keyboard;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.routerOutlet = routerOutlet;
        this.networkService = networkService;
        this.translate = translate;
        this.network = network;
        this.route = route;
        this.router = router;
        this.screenOrientation = screenOrientation;
        this.connected = localStorage.getItem('networkStatus');
        this.title = "home_tab";
        this.canGoBack = false;
        this.isKeyBoardUp = false;
        this.language = this.translate.currentLang;
        this.menuCtrl.enable(true);
        platform.ready().then(function () {
            _this.keyboard.onKeyboardShow().subscribe(function () { _this.isKeyBoardUp = true; });
            _this.keyboard.onKeyboardHide().subscribe(function () { _this.isKeyBoardUp = false; });
        });
        this.projectService.title.subscribe(function (title) {
            if (title != 'home_tab' && title != 'projects_tab' && title != 'schools_tab' && title != 'reports_tab') {
                _this.canGoBack = true;
            }
            else {
                _this.canGoBack = false;
            }
            _this.translate.get(title).subscribe(function (text) {
                _this.title = text;
            });
        });
        this.networkService.emit.subscribe(function (value) {
            _this.connected = value;
        });
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
        });
        this.networkService.langEmit.subscribe(function (value) {
            _this.translate.use(value);
            _this.translate.get(_this.title).subscribe(function (text) {
                _this.title = text;
            });
        });
    }
    ProjectViewPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true);
        this.menuEnable();
    };
    ProjectViewPage.prototype.menuEnable = function () {
    };
    ProjectViewPage.prototype.ngOnInit = function () {
        this.checkNetwork();
        this.selectTab("home_tab");
    };
    // Selected Tab for title of the screen.
    ProjectViewPage.prototype.selectTab = function (title) {
        var _this = this;
        this.projectService.setTitle(title);
        this.translate.get(title).subscribe(function (text) {
            _this.title = text;
        });
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
    };
    ProjectViewPage.prototype.checkNetwork = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.network.onDisconnect()
                .subscribe(function () {
                _this.connected = false;
                _this.networkService.status(_this.connected);
                localStorage.setItem("networkStatus", _this.connected);
            }, function (error) {
            });
            _this.network.onConnect()
                .subscribe(function () {
                _this.connected = true;
                _this.networkService.status(_this.connected);
                localStorage.setItem("networkStatus", _this.connected);
            });
            // this.networkSubscriber();
        });
    };
    ProjectViewPage.prototype.navigateToNewsFeed = function () {
        this.router.navigate(['/project-view/newsfeed']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTabs"])
    ], ProjectViewPage.prototype, "tabs", void 0);
    ProjectViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-view',
            template: __webpack_require__(/*! ./project-view.page.html */ "./src/app/project-view/project-view.page.html"),
            styles: [__webpack_require__(/*! ./project-view.page.scss */ "./src/app/project-view/project-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRouterOutlet"],
            _network_service__WEBPACK_IMPORTED_MODULE_2__["NetworkService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"]])
    ], ProjectViewPage);
    return ProjectViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=project-view-project-view-module.js.map