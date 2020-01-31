(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

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
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");










var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
                    }
                ]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({})
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]]
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

module.exports = "<ion-header>\n  <app-header [title]=\"\" [noBorder]=\"true\">\n  </app-header>\n</ion-header>\n<ion-content>\n  <!-- loader -->\n  <div *ngIf=\"showSkeleton\">\n    <ion-card>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-content class=\"skeleton-card-content\">\n            <p>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <!-- loader ends here -->\n  <div *ngIf=\"!showSkeleton\">\n    <ion-item class=\"search-bar-custom\">\n      <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n      <!-- (keyup)=\"searchSchool(searchInput)\" -->\n    </ion-item>\n    <div *ngIf=\"!searchInput\">\n      <ion-grid class=\"tiles-container\">\n        <ion-row>\n          <ion-col *ngFor=\"let tile of tiles\" class=\"tiles\" size=\"6\">\n            <ion-card (click)=\"navigate(tile.url)\">\n              <img src=\"{{tile.icon}}\">\n              <p>{{tile.title}}</p>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class=\"activeprojects-container\" *ngIf=\"activeProjects\">\n        <h4>{{'home.active_projects' | translate}} </h4>\n        <div *ngFor=\"let ap of activeProjects; let i = index\">\n          <ion-card>\n            <ion-card-header style=\"padding: 0px;\">\n              <div class=\"collection-label\">{{ap.category}}</div>\n            </ion-card-header>\n            <ion-card-content style=\"padding:0px;\">\n              <ion-row>\n                <ion-col class=\"date-col\">\n                  <h3> {{ap.endDate}} </h3>\n                </ion-col>\n                <ion-col class=\"title-col\">\n                  {{ap.title}}\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <ion-button class=\"activeproject-btn\" expand=\"block\" color=\"secondary\" *ngIf=\"activeProjects?.length > 1\"\n          (click)=\"viewMore()\">\n          {{'button.view_more' | translate}}\n        </ion-button>\n      </div>\n    </div>\n    <!-- Search Results -->\n    <div *ngIf=\"searchInput\">\n      <div class=\"welcome-card custom-card\" *ngFor=\"let projects of projectList;\" style=\"margin:10px;\">\n        <div *ngIf=\"(projects.projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n        </div>\n        <ion-card class=\"inner-card search-results\"\n          *ngFor=\"let project of projects.projects | searchProjects: searchInput\" (click)=\"navigateToDetails(project)\">\n          <ion-grid>\n            <ion-row>\n              <ion-col style=\"min-width: 85%; margin: auto;\n              font-weight: 500;\">\n                {{ project.title }}\n              </ion-col>\n              <ion-col class=\"arrow-mark\">\n                <ion-icon name=\"ios-arrow-forward\"> </ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </div>\n      <!-- Search my projects -->\n      <div class=\"welcome-card custom-card\" style=\"margin:10px;\">\n        <ion-card class=\"inner-card search-results\" *ngFor=\"let project of myProjects | searchProjects: searchInput\"\n          (click)=\"navigateToDetails(project)\">\n          <ion-grid>\n            <ion-row>\n              <ion-col style=\"min-width: 85%; margin: auto;\n                font-weight: 500;\">\n                {{ project.title }}\n              </ion-col>\n              <ion-col class=\"arrow-mark\">\n                <ion-icon name=\"ios-arrow-forward\"> </ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </div>\n      <!-- Schools  -->\n      <ion-card class=\"welcome-card custom-card\" *ngIf=\"( mySchools | searchSchool: searchInput).length == 0\">\n        <div class=\"no-results\">\n          No Data available.\n        </div>\n      </ion-card>\n      <ion-card class=\"inner-card search-results\" *ngFor=\"let school of mySchools | searchSchool: searchInput\"\n        style=\"margin:10px;\" (click)=\"navigateToSchool(school)\">\n        <ion-grid>\n          <ion-row>\n            <ion-col style=\"min-width: 85%; margin: auto;\n            font-weight: 500;\">\n              {{school.name}}\n            </ion-col>\n            <ion-col class=\"arrow-mark\">\n              <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.custom-card {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important; }\n\n.custom-card .inner-card {\n    padding: 0px; }\n\n.inner-card {\n  margin: 5px 0px;\n  color: #000;\n  border-radius: 0px; }\n\n.inner-card .arrow-mark {\n    margin: auto;\n    font-size: 22px;\n    text-align: end; }\n\n.arrow-mark {\n  margin: auto !important;\n  font-size: 22px !important;\n  text-align: end !important; }\n\n.card-custom-content {\n  border-bottom: 1px solid #f5f5f5;\n  padding: 0px !important;\n  padding-bottom: 15px; }\n\n.search-results {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important;\n  border-radius: 0px;\n  color: #000;\n  background: #f5f5f5; }\n\n.tiles-container {\n  padding: 0px 20px;\n  margin-bottom: 10px; }\n\n.tiles-container .tiles {\n    max-height: 100%;\n    min-height: 100%;\n    margin-bottom: 10px; }\n\n.tiles-container .tiles ion-card {\n      border-radius: 15px;\n      background: #f2efef;\n      max-height: 100%;\n      min-height: 100%;\n      margin: 5px; }\n\n.tiles-container .tiles ion-card img {\n        margin: auto;\n        width: 40%;\n        padding: 20px 0px; }\n\n.tiles-container .tiles p {\n      text-align: center;\n      font-family: 'SourceSansPro-Bold';\n      text-transform: uppercase;\n      font-size: 1.3em;\n      padding: 0px;\n      margin: 0px 0px 5px 0px;\n      font-weight: bold;\n      color: #000; }\n\n.activeprojects-container {\n  font-family: 'SourceSansPro-Bold';\n  margin-bottom: 40px; }\n\n.activeprojects-container h4 {\n    text-transform: uppercase;\n    padding: 10px 35px;\n    margin: 0px 0px 0px 0px;\n    color: #000;\n    font-weight: 600;\n    font-size: 18px; }\n\n.activeprojects-container ion-card {\n    border-radius: 15px;\n    background: #f2efef;\n    border-top-left-radius: 0px; }\n\n.activeprojects-container ion-card .collection-label {\n      background: #442c2e;\n      color: #fff;\n      padding: 5px 5px 5px 25px;\n      font-size: 14px;\n      min-width: auto;\n      width: auto;\n      font-weight: 600; }\n\n.activeprojects-container ion-card .date-col {\n      max-width: 15%;\n      text-align: right;\n      color: #b23e33;\n      padding: 0px 0px;\n      margin-right: 10px; }\n\n.activeprojects-container ion-card .date-col h3 {\n        font-size: 22px;\n        text-transform: uppercase;\n        font-weight: 600; }\n\n.activeprojects-container ion-card .title-col {\n      padding: 0px 0px;\n      margin: auto;\n      font-size: 17px;\n      font-weight: 900;\n      margin-top: 5px;\n      color: #000; }\n\n.activeprojects-container .activeproject-btn {\n    padding: 0px 40px;\n    --border-radius: 15px;\n    margin-top: -10px;\n    margin-bottom: 55px;\n    font-weight: 500;\n    font-size: 18px;\n    min-height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvVW5uYXRpL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUVFLDJCQUEwQjtFQUMxQiw4QkFBOEIsRUFBQTs7QUFIaEM7SUFNSSxZQUFXLEVBQUE7O0FBR2Y7RUFFSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUp0QjtJQU1NLFlBQVk7SUFDWixlQUFjO0lBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNFLHVCQUF1QjtFQUN2QiwwQkFBeUI7RUFDekIsMEJBQTBCLEVBQUE7O0FBRTlCO0VBRUUsZ0NBQWdDO0VBQ2hDLHVCQUFzQjtFQUN0QixvQkFBbUIsRUFBQTs7QUFFckI7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBSXJCO0VBRUEsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUhuQjtJQUtJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBUHZCO01BVUksbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLFdBQVcsRUFBQTs7QUFkZjtRQWdCTSxZQUFZO1FBQ1osVUFBVTtRQUNWLGlCQUFpQixFQUFBOztBQWxCdkI7TUFzQkksa0JBQWtCO01BQ2xCLGlDQUFpQztNQUNqQyx5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWix1QkFBdUI7TUFDdkIsaUJBQWlCO01BQ2pCLFdBQVcsRUFBQTs7QUFJZjtFQUNFLGlDQUFpQztFQUNqQyxtQkFBa0IsRUFBQTs7QUFGcEI7SUFJSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFUbkI7SUFZSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDJCQUEyQixFQUFBOztBQWQvQjtNQWdCTSxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YsZUFBZTtNQUNmLFdBQVc7TUFDWCxnQkFBZ0IsRUFBQTs7QUF0QnRCO01BeUJNLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTs7QUE3QnhCO1FBK0JRLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsZ0JBQWdCLEVBQUE7O0FBakN4QjtNQXNDTSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLFdBQVcsRUFBQTs7QUEzQ2pCO0lBZ0RJLGlCQUFpQjtJQUNqQixxQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY3VzdG9tLWNhcmRcbntcbiAgbWFyZ2luLXRvcDoxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgLmlubmVyLWNhcmRcbiAge1xuICAgIHBhZGRpbmc6MHB4O1xuICB9XG59XG4uaW5uZXItY2FyZFxuICB7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAuYXJyb3ctbWFya3tcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGZvbnQtc2l6ZToyMnB4O1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cbiAgfVxuICAuYXJyb3ctbWFya3tcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6MjJweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG4uY2FyZC1jdXN0b20tY29udGVudFxue1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNTtcbiAgcGFkZGluZzowcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206MTVweDtcbn1cbi5zZWFyY2gtcmVzdWx0c3tcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDs7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG4vLyBOZXcgVWkgQ1NTXG4udGlsZXMtY29udGFpbmVyXG57XG5wYWRkaW5nOiAwcHggMjBweDtcbm1hcmdpbi1ib3R0b206IDEwcHg7XG4udGlsZXN7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGlvbi1jYXJkXG4gIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmMmVmZWY7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGltZ3tcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICB9XG4gIH1cbiAgcHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2VTYW5zUHJvLUJvbGQnO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbn1cbn1cbi5hY3RpdmVwcm9qZWN0cy1jb250YWluZXJ7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlU2Fuc1Byby1Cb2xkJztcbiAgbWFyZ2luLWJvdHRvbTo0MHB4O1xuICBoNCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwYWRkaW5nOiAxMHB4IDM1cHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgaW9uLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJlZmVmO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgICAuY29sbGVjdGlvbi1sYWJlbHtcbiAgICAgIGJhY2tncm91bmQ6ICM0NDJjMmU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDI1cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5kYXRlLWNvbHtcbiAgICAgIG1heC13aWR0aDogMTUlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBjb2xvcjogI2IyM2UzMztcbiAgICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBoM3tcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIH1cbiAgICAudGl0bGUtY29sXG4gICAge1xuICAgICAgcGFkZGluZzogMHB4IDBweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG4gIH1cbiAgLmFjdGl2ZXByb2plY3QtYnRuXG4gIHtcbiAgICBwYWRkaW5nOiAwcHggNDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICB9XG59Il19 */"

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

















var HomePage = /** @class */ (function () {
    function HomePage(datepipe, storage, apiProvider, homeService, categoryViewService, router, projectsService, login, screenOrientation, projectService, translate, networkService, menuCtrl, reportsService, mySchoolsService) {
        //   let params = new URLSearchParams(window.location.search);
        // if (typeof params == 'string') {
        //   params = JSON.parse(params);
        // }
        // console.log(params, "params");
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
        this.connected = false;
        this.loggedIn = false;
        this.type = 'quarter';
        this.count = 100;
        this.page = 1;
        this.tiles = [
            { title: "create project", icon: 'assets/images/homeTiles/createproject.png', url: '/project-view/create-project' },
            { title: "library", icon: 'assets/images/homeTiles/library.png', url: '/project-view/library' },
            { title: "open tasks", icon: 'assets/images/homeTiles/tasksclipboard.png', url: '' },
            { title: "reports", icon: 'assets/images/homeTiles/reports.png', url: '/project-view/my-reports/last-month-reports' }
        ];
        this.activeProjects = [];
        this.showSkeleton = false;
        this.skeletons = [{}, {}, {}, {}, {}, {}];
        this.showNoProjects = '';
        // console.log(params.rawParams, "params");
        // let code = (((params.rawParams).split("?")[1]).split("="))[1];
        // console.log(code, "code");
        // this.menuCtrl.enable(true);
        // this.login.doOAuthStepTwo(code).then(success => {
        //   console.log(success, "success")
        //   this.menuCtrl.enable(true);
        //   this.login.checkForCurrentUserLocalData(success);
        //   let userDetails = jwt_decode(success.access_token);
        //   console.log(userDetails,"userDetails");
        //   this.menuCtrl.enable(true);
        //   this.storage.set('userDetails', userDetails).then(userData => {
        //   })
        //   this.storage.set('userTokens', success).then(data => {
        //     console.log(data,"data user token save");
        //     this.router.navigateByUrl('/project-view/home');
        //     // this.fcm.initializeFCM();
        //     this.login.loggedIn('true');
        //     this.menuCtrl.enable(true);
        //     this.storage.set('veryFirstTime', 'false').then(data => {
        //       // this.veryFirstTime = false;
        //     })
        //   });
        //   localStorage.setItem('token', success);
        //   this.networkService.status(true);
        //   this.menuCtrl.enable(true);
        //   this.login.loggedIn('true');
        //   localStorage.setItem("networkStatus", 'true');
        // }).catch(error1 => {
        // })
        // let someParam = params.get('user');
        // console.log(someParam, "someParam");
        this.menuCtrl.enable(true);
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
        this.homeService.searcResultsOfPrjcts.subscribe(function (data) {
            if (data == 'show') {
                _this.showNoProjects = 'show';
            }
            else {
                _this.showNoProjects = 'no';
            }
        });
        this.networkService.emit.subscribe(function (value) {
            translate.use(value);
        });
        this.menuCtrl.enable(true);
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(true);
        this.getActiveProjects();
        this.setTitle('home_tab');
        this.connected = localStorage.getItem("networkStatus");
        try {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        catch (error) {
        }
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.login.loggedIn('true');
        this.checkUser();
        this.storage.get('projects').then(function (projects) {
            if (!projects) {
                _this.getProjects();
            }
        });
        this.getActiveProjects();
        this.getTemplatesByCategory();
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
        localStorage.setItem("id", project._id);
        this.storage.set('currentProject', project).then(function (data) {
            localStorage.setItem("from", 'home');
            _this.router.navigate(['/project-view/detail', project._id, 'home']);
            _this.projectService.setTitle(data.title);
        });
    };
    HomePage.prototype.navigateToSchool = function (school) {
        localStorage.setItem('from1', 'home');
        this.router.navigate(['/project-view/school-task-report', school.entityId, school.name]);
    };
    // get Projects
    HomePage.prototype.getProjects = function () {
        var _this = this;
        var myProjects = [];
        this.storage.get('userTokens').then(function (data) {
            _this.apiProvider.refershToken(data.refresh_token).subscribe(function (data) {
                var parsedData = JSON.parse(data._body);
                if (parsedData && parsedData.access_token) {
                    var userTokens = {
                        access_token: parsedData.access_token,
                        refresh_token: parsedData.refresh_token,
                    };
                    _this.storage.set('userTokens', userTokens).then(function (usertoken) {
                        _this.showSkeleton = true;
                        _this.projectsService.getAssignedProjects(usertoken.access_token, _this.type).subscribe(function (resp) {
                            if (resp.status != 'failed') {
                                resp.data.forEach(function (programs) {
                                    programs.projects.forEach(function (project) {
                                        project.lastUpdate = project.lastSync;
                                        project.isSync = true;
                                        project.isEdited = false;
                                        project.isNew = false;
                                        if (project.status != 'not yet started' || project.status != 'Not started') {
                                            project.isStarted = true;
                                        }
                                        project.programName = programs.programs.name;
                                        if (project.createdType == 'by self' || project.createdType == 'by reference') {
                                            myProjects.push(project);
                                        }
                                    });
                                });
                                _this.projectList = resp.data;
                                _this.storage.set('projects', _this.projectList).then(function (resp1) {
                                });
                                if (myProjects) {
                                    _this.storage.set('myprojects', myProjects).then(function (data) {
                                        _this.getActiveProjects();
                                    });
                                }
                            }
                            else {
                                _this.showSkeleton = false;
                            }
                            _this.showSkeleton = false;
                        }, function (error) {
                            _this.showSkeleton = false;
                        });
                    }, function (error) {
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
                        _this.showSkeleton = true;
                        _this.mySchoolsService.getSchools(parsedData.access_token, _this.count, _this.page).subscribe(function (data) {
                            _this.mySchools = data.data;
                        }, function (error) { });
                    }, function (error) {
                    });
                }
            });
        });
    };
    //  Get templates
    HomePage.prototype.getTemplatesByCategory = function () {
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
    // get active projects
    HomePage.prototype.getActiveProjects = function () {
        var _this = this;
        this.showSkeleton = true;
        this.activeProjects = [];
        var ap = [];
        var count = 0;
        this.storage.get('myprojects').then(function (myProjects) {
            _this.myProjects = myProjects;
            if (myProjects) {
                myProjects.forEach(function (myProject) {
                    if (count < 2) {
                        if (myProject.isStarted) {
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
            // || url == '/project-view/library'
            this.homeService.clearData();
            this.router.navigate([url, 'yes']);
        }
        else if (url != '') {
            this.router.navigate([url]);
        }
    };
    HomePage.prototype.viewMore = function () {
        this.router.navigate(['/project-view/projects', 'activeprojects']);
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
            _myschools_myschools_service__WEBPACK_IMPORTED_MODULE_14__["MyschoolsService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map