(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-profile-update-profile-module"],{

/***/ "./src/app/update-profile/update-profile.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/update-profile/update-profile.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdateProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfilePageModule", function() { return UpdateProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _update_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-profile.page */ "./src/app/update-profile/update-profile.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _update_profile_page__WEBPACK_IMPORTED_MODULE_6__["UpdateProfilePage"]
    }
];
var UpdateProfilePageModule = /** @class */ (function () {
    function UpdateProfilePageModule() {
    }
    UpdateProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
            ],
            declarations: [_update_profile_page__WEBPACK_IMPORTED_MODULE_6__["UpdateProfilePage"]]
        })
    ], UpdateProfilePageModule);
    return UpdateProfilePageModule;
}());



/***/ }),

/***/ "./src/app/update-profile/update-profile.page.html":
/*!*********************************************************!*\
  !*** ./src/app/update-profile/update-profile.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'profile_update.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"false\"> </app-header>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <div *ngIf=\"showUpdatePop\">\n    <app-custom-popup [header]=\"header\" [body]=\"body\" [button]=\"button\" [isActionable]=\"isActionable\">\n    </app-custom-popup>\n  </div>\n  <div class=\"profile-card\">\n    <div class=\"profile-container\">\n      <div class=\"pop-ion\">\n        <ion-icon ios=\"ios-contact\" md=\"md-contact\" color='primary'></ion-icon>\n      </div>\n      <div class=\"text-center\" *ngIf=\"userDetails?.preferred_username\">\n        <span class=\"usrname\">\n          {{userDetails.preferred_username}}\n        </span>\n        <h4>*********</h4>\n      </div>\n    </div>\n  </div>\n  <h5 class=\"required-field\" *ngIf=\"submitAttempt\" style=\"padding-left:15px;\">\n    {{'create_project.fileds_mandatory' | translate}}</h5>\n  <form [formGroup]=\"profileForm\" style=\"margin-bottom: 2em;\">\n    <ion-item class=\"custom-ion-item\">\n      <ion-label class=\"custom-label\" position=\"floating\"\n        [ngClass]=\"{'required-field':submitAttempt && !profile.firstName}\">{{'profile_update.fname' | translate}}\n      </ion-label>\n      <ion-input formControlName=\"fname\" type=\"text\" placeholder=\"\" [(ngModel)]=\"profile.firstName\">\n      </ion-input>\n    </ion-item>\n    <ion-item class=\"custom-ion-item\">\n      <ion-label class=\"custom-label\" position=\"floating\"\n        [ngClass]=\"{'required-field':submitAttempt && !profile.lastName}\">{{'profile_update.lname' | translate}}\n      </ion-label>\n      <ion-input formControlName=\"lname\" type=\"text\" [(ngModel)]=\"profile.lastName\" placeholder=\"\">\n        <!-- [class.invalid]=\"!profileForm.controls.lname.valid && (profileForm.controls.lname.dirty || submitAttempt)\" -->\n      </ion-input>\n    </ion-item>\n    <ion-item class=\"custom-ion-item\">\n      <ion-label class=\"custom-label\" position=\"floating\"\n        [ngClass]=\"{'required-field':submitAttempt && !profile.emailId && !profile.phoneNumber}\">\n        {{'profile_update.email_id' | translate}}\n      </ion-label>\n      <ion-input formControlName=\"emailId\" type=\"text\" [(ngModel)]=\"profile.emailId\"\n        placeholder=\"{{'profile_update.email_placeholder' | translate}}\">\n      </ion-input>\n      <!-- <ion-input formControlName=\"emailId\" type=\"text\"\n        [class.invalid]=\"!profileForm.controls.emailId.valid && (profileForm.controls.emailId.dirty || submitAttempt)\">\n      </ion-input> -->\n    </ion-item>\n    <ion-item class=\"custom-ion-item\">\n      <ion-label class=\"custom-label\" position=\"floating\"\n        [ngClass]=\"{'required-field':submitAttempt && !profile.emailId && !profile.phoneNumber}\">\n        {{'profile_update.phone_number' | translate}}</ion-label>\n      <ion-input formControlName=\"phoneNumber\" type=\"text\" [(ngModel)]=\"profile.phoneNumber\"\n        placeholder=\"{{'profile_update.phone_placeholder' | translate}}\">\n      </ion-input>\n    </ion-item>\n    <ion-item class=\"custom-ion-item\">\n      <ion-label class=\"custom-select\" position=\"floating\"\n        [ngClass]=\"{'required-field':submitAttempt && !profile.state}\">{{'profile_update.state' | translate}}\n      </ion-label>\n      <ion-select formControlName=\"state\" class=\"custom-select-box\" placeholder=\"\"\n        (ionChange)=\"getImmediateChildren($event)\" [(ngModel)]=\"profile.state\"\n        [class.invalid]=\"!profileForm.controls.state.valid && (profileForm.controls.state.dirty || submitAttempt)\">\n        <ion-select-option *ngFor=\"let state of states\" value=\"{{state._id}}\">{{state.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class=\"custom-ion-item\" *ngIf=\"districts\">\n      <ion-label class=\"custom-select\" position=\"floating\">\n        {{'profile_update.district' | translate}}</ion-label>\n      <ion-select formControlName=\"district\" class=\"custom-select-box\" type=\"text\" placeholder=\"\"\n        [(ngModel)]=\"profile.district\" (ionChange)=\"getImmediateChildren($event)\">\n        <ion-select-option *ngFor=\"let district of districts\" value=\"{{district._id}}\">{{district.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <!-- <ion-item class=\"custom-ion-item\" *ngIf=\"entities\">\n      <ion-label class=\"custom-select\" position=\"floating\">\n        {{entities.immediateEntityType}}</ion-label>\n      <ion-select formControlName=\"entity\" class=\"custom-select-box\" type=\"text\" placeholder=\"\"\n        (ionChange)=\"getImmediateChildren($event,entities.immediateEntityType)\">\n        <ion-select-option *ngFor=\"let entity of entities.data\" value=\"{{entity._id}}\">{{entity.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item> -->\n    <ion-item class=\"custom-ion-item\" *ngIf=\"zones\">\n      <ion-label class=\"custom-label\" position=\"floating\">\n        {{'profile_update.zone' | translate}}</ion-label>\n      <ion-select formControlName=\"zone\" class=\"custom-select-box\" type=\"text\" placeholder=\"\"\n        (ionChange)=\"getImmediateChildren($event)\" [(ngModel)]=\"profile.zone\">\n        <ion-select-option *ngFor=\"let zone of zones\" value=\"{{zone._id}}\">{{zone.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class=\"custom-ion-item\" *ngIf=\"clusters\">\n      <ion-label class=\"custom-label\" position=\"floating\">\n        {{'profile_update.cluster' | translate}}</ion-label>\n      <ion-select formControlName=\"cluster\" class=\"custom-select-box\" type=\"text\" placeholder=\"\"\n        (ionChange)=\"getImmediateChildren($event)\" [(ngModel)]=\"profile.cluster\">\n        <ion-select-option *ngFor=\"let cluster of clusters\" value=\"{{cluster._id}}\">{{cluster.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class=\"custom-ion-item\" *ngIf=\"blocks\">\n      <ion-label class=\"custom-select\" position=\"floating\">\n        {{'profile_update.block' | translate}}</ion-label>\n      <ion-select formControlName=\"block\" class=\"custom-select-box\" type=\"text\" placeholder=\"\"\n        (ionChange)=\"getImmediateChildren($event)\" [(ngModel)]=\"profile.block\">\n        <ion-select-option *ngFor=\"let block of blocks\" value=\"{{block._id}}\">{{block.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class=\"custom-ion-item\" *ngIf=\"schools\">\n      <ion-label class=\"custom-select\" position=\"floating\">\n        {{'profile_update.school' | translate}}</ion-label>\n      <ion-select formControlName=\"school\" class=\"custom-select-box\" type=\"text\" placeholder=\"\"\n        (ionChange)=\"getImmediateChildren($event)\" [(ngModel)]=\"profile.school\">\n        <ion-select-option *ngFor=\"let school of schools\" value=\"{{school._id}}\">{{school.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class=\"custom-ion-item\" *ngIf=\"hubs\">\n      <ion-label class=\"custom-select\" position=\"floating\">\n        {{'profile_update.hub' | translate}}</ion-label>\n      <ion-select formControlName=\"hub\" class=\"custom-select-box\" type=\"text\" placeholder=\"\"\n        (ionChange)=\"getImmediateChildren($event)\" [(ngModel)]=\"profile.hub\">\n        <ion-select-option *ngFor=\"let hub of hubs\" value=\"{{hub._id}}\">{{school.hub}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class=\"custom-ion-item\" *ngIf=\"talukas\">\n      <ion-label class=\"custom-select\" position=\"floating\">\n        {{'profile_update.taluka' | translate}}</ion-label>\n      <ion-select formControlName=\"taluka\" class=\"custom-select-box\" type=\"text\" placeholder=\"\"\n        (ionChange)=\"getImmediateChildren($event)\" [(ngModel)]=\"profile.taluka\">\n        <ion-select-option *ngFor=\"let taluka of talukas\" value=\"{{taluka._id}}\">{{taluka.hub}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div class=\"profile-actions\">\n      <ion-button expand=\"block\" (click)=saveInfo()>\n        {{'button.save_info' | translate}}\n      </ion-button>\n    </div>\n    <div class=\"profile-actions\">\n      <ion-button expand=\"block\"  (click)=cancel()>\n        {{'button.cancel' | translate}}\n      </ion-button>\n    </div>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/update-profile/update-profile.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/update-profile/update-profile.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-popup {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 30%;\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n  .custom-popup .pop-container {\n    margin: auto;\n    max-width: 80%;\n    box-shadow: 0px 3px 8px 4px #e2e2e2;\n    background: #fff;\n    padding: 10px; }\n  .custom-popup .pop-container .pop-ion {\n      text-align: center; }\n  .custom-popup .pop-container .pop-ion ion-icon {\n        font-size: 60px; }\n  .custom-popup .pop-container .pop-msg {\n      margin: 0px 20px; }\n  .custom-popup .pop-container .pop-btn {\n      margin: 0px 15px; }\n  .custom-popup .pop-container .pop-btn ion-button {\n        text-transform: capitalize;\n        font-family: 'SourceSansPro-Bold' !important; }\n  .profile-card {\n  box-shadow: 0px 3px 8px 4px #e2e2e2;\n  margin-bottom: 1em;\n  margin-top: 2em;\n  border-radius: 0.5em; }\n  .profile-card .profile-container {\n    margin: auto;\n    background: #fff;\n    padding: 10px;\n    border-radius: 0.5em; }\n  .profile-card .profile-container .usrname {\n      background: #af4038;\n      color: #fff;\n      padding: 5px 1em;\n      border-radius: 1em; }\n  .profile-card .profile-container .pop-ion {\n      text-align: center;\n      margin-top: -3em; }\n  .profile-card .profile-container .pop-ion ion-icon {\n        font-size: 5em; }\n  .custom-label {\n  font-size: 1.2em;\n  font-weight: 900;\n  text-transform: none; }\n  .custom-select {\n  font-size: 1.2em;\n  text-transform: none;\n  margin-bottom: 0.5em; }\n  .profile-actions {\n  margin: 1em 15px; }\n  .custom-select-box {\n  border: 1px solid #000;\n  border-radius: 4px;\n  margin: 5px 0px;\n  padding: 15px 1em 5px 5px;\n  height: 3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvdXBkYXRlLXByb2ZpbGUvdXBkYXRlLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBO0VBUmxCO0lBV1EsWUFBWTtJQUNaLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTtFQWZyQjtNQWlCWSxrQkFBa0IsRUFBQTtFQWpCOUI7UUFtQmdCLGVBQWMsRUFBQTtFQW5COUI7TUF3QlEsZ0JBQWdCLEVBQUE7RUF4QnhCO01BMkJZLGdCQUFnQixFQUFBO0VBM0I1QjtRQTZCZ0IsMEJBQTBCO1FBQzFCLDRDQUE0QyxFQUFBO0VBTTVEO0VBQ0ksbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7RUFKeEI7SUFNSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQkFBb0IsRUFBQTtFQVR4QjtNQVdRLG1CQUFtQjtNQUNuQixXQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBO0VBZDFCO01BaUJRLGtCQUFrQjtNQUNsQixnQkFBZ0IsRUFBQTtFQWxCeEI7UUFvQlksY0FBYSxFQUFBO0VBS3pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTtFQUV4QjtFQUNJLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsb0JBQW9CLEVBQUE7RUFFeEI7RUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtFQUtJLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUtcHJvZmlsZS91cGRhdGUtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXBvcHVwXG4gICAge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAzMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC5wb3AtY29udGFpbmVyXG4gICAge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDhweCA0cHggI2UyZTJlMjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLnBvcC1pb257XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucG9wLW1zZ1xuICAgICAgICB7XG4gICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBvcC1idG57XG4gICAgICAgICAgICBtYXJnaW46IDBweCAxNXB4O1xuICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1NvdXJjZVNhbnNQcm8tQm9sZCcgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB9XG5cbi5wcm9maWxlLWNhcmR7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggNHB4ICNlMmUyZTI7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICAucHJvZmlsZS1jb250YWluZXJ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICAudXNybmFtZXtcbiAgICAgICAgYmFja2dyb3VuZDogI2FmNDAzODsgXG4gICAgICAgIGNvbG9yOiNmZmY7ICBcbiAgICAgICAgcGFkZGluZzogNXB4IDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIH1cbiAgICAucG9wLWlvbntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAtM2VtO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo1ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxufVxuLmN1c3RvbS1sYWJlbHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG4uY3VzdG9tLXNlbGVjdHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuLnByb2ZpbGUtYWN0aW9uc3tcbiAgICBtYXJnaW46IDFlbSAxNXB4O1xufVxuLmN1c3RvbS1zZWxlY3QtYm94e1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC8vIG1hcmdpbjogNXB4IDBweDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgcGFkZGluZzogMTVweCAxZW0gNXB4IDVweDtcbiAgICBoZWlnaHQ6IDNlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/update-profile/update-profile.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/update-profile/update-profile.page.ts ***!
  \*******************************************************/
/*! exports provided: UpdateProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfilePage", function() { return UpdateProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _update_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-profile.service */ "./src/app/update-profile/update-profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);









var UpdateProfilePage = /** @class */ (function () {
    function UpdateProfilePage(formBuilder, updateProfileService, storage, api, toastService, router) {
        this.formBuilder = formBuilder;
        this.updateProfileService = updateProfileService;
        this.storage = storage;
        this.api = api;
        this.toastService = toastService;
        this.router = router;
        this.submitAttempt = false;
        this.back = "project-view/home";
        this.profile = {};
        this.body = 'message.thankyou_note';
        this.header = 'message.thankyou';
        this.button = 'button.continue';
        this.isActionable = '/project-view/home';
        this.showUpdatePop = false;
    }
    UpdateProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            _this.userDetails = jwt_decode__WEBPACK_IMPORTED_MODULE_8__(data.access_token);
        });
        this.updateProfileService.updateProfile('close');
        this.prepareForm();
        this.getStates();
    };
    UpdateProfilePage.prototype.prepareForm = function () {
        this.profileForm = this.formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            district: ['', ''],
            entity: ['', ''],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zone: ['', ''],
            taluka: ['', ''],
            cluster: ['', ''],
            hub: ['', ''],
            block: ['', ''],
            school: ['', ''],
        });
    };
    // get states
    UpdateProfilePage.prototype.getStates = function () {
        var _this = this;
        this.storage.get('userTokens').then(function (data) {
            if (data) {
                _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                    var parsedData = JSON.parse(data._body);
                    if (parsedData && parsedData.access_token) {
                        var userTokens_1 = {
                            access_token: parsedData.access_token,
                            refresh_token: parsedData.refresh_token,
                        };
                        _this.toastService.startLoader('Loading, States');
                        _this.storage.set('userTokens', userTokens_1).then(function (data) {
                            _this.updateProfileService.getStates(userTokens_1.access_token).subscribe(function (states) {
                                _this.states = states.result;
                                _this.toastService.stopLoader();
                            }, function (erros) {
                                _this.toastService.stopLoader();
                            });
                        });
                    }
                });
            }
        });
    };
    // immediate children of state
    UpdateProfilePage.prototype.getImmediateChildren = function (event) {
        var _this = this;
        var id = event.detail.value;
        if (id) {
            this.storage.get('userTokens').then(function (data) {
                if (data) {
                    _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                        var parsedData = JSON.parse(data._body);
                        if (parsedData && parsedData.access_token) {
                            var userTokens_2 = {
                                access_token: parsedData.access_token,
                                refresh_token: parsedData.refresh_token,
                            };
                            _this.toastService.startLoader('Loading');
                            _this.storage.set('userTokens', userTokens_2).then(function (data) {
                                _this.updateProfileService.getImmediateChildren(userTokens_2.access_token, id).subscribe(function (entities) {
                                    switch (entities.result.immediateEntityType) {
                                        case 'district': {
                                            _this.districts = entities.result.data;
                                            break;
                                        }
                                        case 'zone': {
                                            _this.zones = entities.result.data;
                                            break;
                                        }
                                        case 'cluster': {
                                            _this.clusters = entities.result.data;
                                            break;
                                        }
                                        case 'block': {
                                            _this.blocks = entities.result.data;
                                            break;
                                        }
                                        case 'school': {
                                            _this.schools = entities.result.data;
                                            break;
                                        }
                                        case 'hub': {
                                            _this.hubs = entities.result.data;
                                            break;
                                        }
                                        case 'taluka': {
                                            _this.talukas = entities.result.data;
                                            break;
                                        }
                                    }
                                    _this.toastService.stopLoader();
                                }, function (erros) {
                                    _this.toastService.stopLoader();
                                });
                            });
                        }
                    });
                }
            });
        }
    };
    // Save user info
    UpdateProfilePage.prototype.saveInfo = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.profile.firstName && this.profile.lastName && this.profile.state && (this.profile.emailId || this.profile.phoneNumber)) {
            this.storage.get('userTokens').then(function (data) {
                if (data) {
                    _this.api.refershToken(data.refresh_token).subscribe(function (data) {
                        var parsedData = JSON.parse(data._body);
                        if (parsedData && parsedData.access_token) {
                            var userTokens_3 = {
                                access_token: parsedData.access_token,
                                refresh_token: parsedData.refresh_token,
                            };
                            _this.toastService.startLoader('Loading');
                            _this.storage.set('userTokens', userTokens_3).then(function (data) {
                                _this.updateProfileService.saveInfo(userTokens_3.access_token, _this.profile).subscribe(function (data) {
                                    _this.updateProfileService.updateProfile('done');
                                    _this.showUpdatePop = true;
                                    _this.submitAttempt = false;
                                    _this.toastService.stopLoader();
                                }, function (error) {
                                    _this.toastService.stopLoader();
                                });
                            }, function (error) {
                                _this.toastService.stopLoader();
                            });
                        }
                    });
                }
            });
        }
        // else {
        //   if (!this.profile.firstName || !this.profile.lastName) {
        //     this.toastService.errorToast('message.name_require');
        //   } else if (!this.profile.state) {
        //     this.toastService.errorToast('message.state_require');
        //   } else if (!this.profile.emailId && !this.profile.phoneNumber) {
        //     this.toastService.errorToast('message.email_phonenumber_require');
        //   }
        // }
    };
    // go back to home page
    UpdateProfilePage.prototype.cancel = function () {
        this.router.navigate(['/project-view/home']);
    };
    UpdateProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-profile',
            template: __webpack_require__(/*! ./update-profile.page.html */ "./src/app/update-profile/update-profile.page.html"),
            styles: [__webpack_require__(/*! ./update-profile.page.scss */ "./src/app/update-profile/update-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _update_profile_service__WEBPACK_IMPORTED_MODULE_3__["UpdateProfileService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _api_api__WEBPACK_IMPORTED_MODULE_6__["ApiProvider"],
            _toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UpdateProfilePage);
    return UpdateProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=update-profile-update-profile-module.js.map