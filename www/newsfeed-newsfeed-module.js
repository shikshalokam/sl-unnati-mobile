(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsfeed-newsfeed-module"],{

/***/ "./src/app/newsfeed/newsfeed.module.ts":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.module.ts ***!
  \*********************************************/
/*! exports provided: NewsfeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPageModule", function() { return NewsfeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newsfeed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsfeed.page */ "./src/app/newsfeed/newsfeed.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _newsfeed_page__WEBPACK_IMPORTED_MODULE_6__["NewsfeedPage"]
    }
];
var NewsfeedPageModule = /** @class */ (function () {
    function NewsfeedPageModule() {
    }
    NewsfeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
            ],
            declarations: [_newsfeed_page__WEBPACK_IMPORTED_MODULE_6__["NewsfeedPage"]]
        })
    ], NewsfeedPageModule);
    return NewsfeedPageModule;
}());



/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.html":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'newsfeed.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"false\">\n  </app-header>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <h2>{{'message.comingsoon' | translate}}</h2>\n    </ion-card-header>\n  </ion-card>\n\n  <!-- <p>{{'message.share_success' | translate}}</p>\n  <div class=\"pop-container\">\n    <div class=\"pop-msg\">\n      <div>\n        <ion-textarea placeholder=\"{{'current_task.add_remarks' | translate}}\" [(ngModel)]=\"post.comment\"\n          maxlength=\"512\" rows=\"7\">\n        </ion-textarea>\n      </div>\n    </div>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-row class=\"icon-attch\" [ngClass]=\"{'isHaveData': post.imageUrl}\">\n          <ion-col size=\"6\" class=\"fileUpload\">\n            <img src=\"assets/images/picture.png\" style=\"width: 1.8em;\">\n            <input #imageInputFile type=\"file\" class=\"upload\" (change)=\"selectedFile(imageInputFile,'image')\"\n              accept=\"image/*\" />\n          </ion-col>\n          <ion-col size=\"6\">\n            <form class=\"icon-attch\" [ngClass]=\"{'isHaveData': post.file?.name}\">\n              <div class=\"fileUpload\">\n                <img src=\"assets/images/attachment.png\" style=\"width: 1.8em;\">\n                <input #imageInputFile type=\"file\" class=\"upload\" (change)=\"selectedFile(imageInputFile,'file')\" />\n              </div>\n            </form>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n        <div class=\"pop-btn\">\n          <ion-button color=\"primary\" expand=\"block\" (click)=\"postNews()\">\n            {{'button.post' | translate}}\n          </ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.scss":
/*!*********************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pop-container {\n  box-shadow: 0px 3px 8px 4px #e2e2e2;\n  background: #fff;\n  padding: 5px;\n  border-radius: 1em; }\n  .pop-container .pop-msg h5 {\n    font-size: 1rem; }\n  .pop-container .pop-msg ion-textarea {\n    margin-top: 0px;\n    font-size: 1rem;\n    background: #fafafa;\n    padding: 5px; }\n  .pop-container .pop-msg .attachment-action {\n    margin: auto;\n    text-align: center; }\n  .pop-container .pop-msg .attachment-action img {\n      width: 2em; }\n  .pop-container .pop-btn ion-button {\n    text-transform: none;\n    font-family: 'SourceSansPro-Bold' !important;\n    font-size: 1rem; }\n  .pop-container .fileUpload input.upload {\n    position: absolute;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    width: 84%;\n    cursor: pointer;\n    opacity: 0; }\n  .pop-container .pop-action {\n    margin: auto;\n    border-radius: 10px;\n    text-align: center;\n    padding: 5px; }\n  .pop-container .pop-action .icon-attch {\n      padding-top: 5px;\n      width: 85%;\n      border-radius: 10px; }\n  .pop-container .pop-action .isHaveData {\n      background: #f2efef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9uZXdzZmVlZC9uZXdzZmVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtFQUx0QjtJQVNZLGVBQWUsRUFBQTtFQVQzQjtJQVlZLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQWZ4QjtJQW1CWSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUFwQjlCO01Bc0JnQixVQUFVLEVBQUE7RUF0QjFCO0lBNEJZLG9CQUFvQjtJQUNwQiw0Q0FBNEM7SUFDNUMsZUFBZSxFQUFBO0VBOUIzQjtJQWtDTSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVSxFQUFBO0VBekNoQjtJQTZDTSxZQUFZO0lBQ1osbUJBQW1CO0lBQUUsa0JBQWtCO0lBQ3ZDLFlBQVksRUFBQTtFQS9DbEI7TUFrRE0sZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixtQkFBbUIsRUFBQTtFQXBEekI7TUF1RE0sbUJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uZXdzZmVlZC9uZXdzZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wLWNvbnRhaW5lclxue1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggOHB4IDRweCAjZTJlMmUyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAucG9wLW1zZ1xuICAgIHtcbiAgICAgICAgaDV7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRleHRhcmVhe1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuYXR0YWNobWVudC1hY3Rpb25cbiAgICAgICAge1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBvcC1idG57XG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU291cmNlU2Fuc1Byby1Cb2xkJyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5maWxlVXBsb2FkIGlucHV0LnVwbG9hZCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB3aWR0aDogODQlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLnBvcC1hY3Rpb257XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAuaWNvbi1hdHRjaFxuICB7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmlzSGF2ZURhdGF7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQyLCAyMzksIDIzOSk7XG4gIH1cbn1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/newsfeed/newsfeed.page.ts":
/*!*******************************************!*\
  !*** ./src/app/newsfeed/newsfeed.page.ts ***!
  \*******************************************/
/*! exports provided: NewsfeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedPage", function() { return NewsfeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsfeedPage = /** @class */ (function () {
    function NewsfeedPage() {
        this.back = 'project-view/home';
        this.post = {};
    }
    NewsfeedPage.prototype.ngOnInit = function () {
    };
    NewsfeedPage.prototype.selectedFile = function (imageInput, type) {
        var _this = this;
        var value;
        var file = imageInput.files[0];
        this.file = file;
        var reader = new FileReader();
        reader.onload = function (event) {
            value = event.target.result.split(',');
            if (type == 'image') {
                _this.post.imageUrl = value[1];
            }
            else {
                _this.post.file = {
                    url: event.target.result,
                    name: _this.file.name
                };
                // this.toastService.successToast('message.file_uploaded');
            }
        };
        reader.readAsDataURL(file);
    };
    NewsfeedPage.prototype.postNews = function () {
        console.log(this.post, "post");
    };
    NewsfeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsfeed',
            template: __webpack_require__(/*! ./newsfeed.page.html */ "./src/app/newsfeed/newsfeed.page.html"),
            styles: [__webpack_require__(/*! ./newsfeed.page.scss */ "./src/app/newsfeed/newsfeed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsfeedPage);
    return NewsfeedPage;
}());

"  ";


/***/ })

}]);
//# sourceMappingURL=newsfeed-newsfeed-module.js.map