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

module.exports = "<ion-header>\n  <app-header [title]=\"\" [noBorder]=\"true\">\n  </app-header>\n</ion-header>\n<ion-content>\n  <!-- loader -->\n  <div *ngIf=\"showSkeleton\">\n    <ion-card>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-content class=\"skeleton-card-content\">\n            <p>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <!-- loader ends here -->\n  <div *ngIf=\"!showSkeleton\">\n    <ion-item class=\"search-bar-custom\">\n      <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n      <!-- (keyup)=\"searchSchool(searchInput)\" -->\n    </ion-item>\n    <div *ngIf=\"!searchInput\">\n      <ion-grid class=\"tiles-container\">\n        <ion-row>\n          <ion-col *ngFor=\"let tile of tiles\" class=\"tiles\" size=\"6\">\n            <ion-card (click)=\"navigate(tile.url)\">\n              <img src=\"{{tile.icon}}\">\n              <p>{{tile.title}}</p>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div class=\"activeprojects-container\" *ngIf=\"activeProjects\">\n        <h4>{{'home.active_projects' | translate}} </h4>\n        <div *ngFor=\"let ap of activeProjects; let i = index\">\n          <ion-card>\n            <ion-card-header style=\"padding: 0px;\">\n              <div class=\"collection-label\">{{ap.category}}</div>\n            </ion-card-header>\n            <ion-card-content style=\"padding:0px;\">\n              <ion-row>\n                <ion-col class=\"date-col\">\n                  <h3> {{ap.endDate | date : 'MMM dd'}} </h3>\n                </ion-col>\n                <ion-col class=\"title-col\">\n                  {{ap.title}}\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <ion-button class=\"activeproject-btn\" expand=\"block\" color=\"secondary\" *ngIf=\"activeProjects?.length > 1\"\n          (click)=\"viewMore()\">\n          {{'button.view_more' | translate}}\n        </ion-button>\n      </div>\n    </div>\n    <!-- Search Results -->\n    <div *ngIf=\"searchInput\">\n      <div class=\"welcome-card custom-card\" *ngFor=\"let projects of projectList;\" style=\"margin:10px;\">\n        <div *ngIf=\"(projects.projects | searchProjects: searchInput).length == 0\" style=\"text-align:center;\">\n        </div>\n        <ion-card class=\"inner-card search-results\"\n          *ngFor=\"let project of projects.projects | searchProjects: searchInput\" (click)=\"navigateToDetails(project)\">\n          <ion-grid>\n            <ion-row>\n              <ion-col style=\"min-width: 85%; margin: auto;\n              font-weight: 500;\">\n                {{ project.title }}\n              </ion-col>\n              <ion-col class=\"arrow-mark\">\n                <ion-icon name=\"ios-arrow-forward\"> </ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </div>\n      <!-- Search my projects -->\n      <div class=\"welcome-card custom-card\" style=\"margin:10px;\">\n        <ion-card class=\"inner-card search-results\" *ngFor=\"let project of myProjects | searchProjects: searchInput\"\n          (click)=\"navigateToDetails(project)\">\n          <ion-grid>\n            <ion-row>\n              <ion-col style=\"min-width: 85%; margin: auto;\n                font-weight: 500;\">\n                {{ project.title }}\n              </ion-col>\n              <ion-col class=\"arrow-mark\">\n                <ion-icon name=\"ios-arrow-forward\"> </ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </div>\n      <!-- Schools  -->\n      <ion-card class=\"welcome-card custom-card\" *ngIf=\"( mySchools | searchSchool: searchInput).length == 0\">\n        <div class=\"no-results\">\n          No Data available.\n        </div>\n      </ion-card>\n      <ion-card class=\"inner-card search-results\" *ngFor=\"let school of mySchools | searchSchool: searchInput\"\n        style=\"margin:10px;\" (click)=\"navigateToSchool(school)\">\n        <ion-grid>\n          <ion-row>\n            <ion-col style=\"min-width: 85%; margin: auto;\n            font-weight: 500;\">\n              {{school.name}}\n            </ion-col>\n            <ion-col class=\"arrow-mark\">\n              <ion-icon name=\"ios-arrow-forward\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.custom-card {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important; }\n\n.custom-card .inner-card {\n    padding: 0px; }\n\n.inner-card {\n  margin: 5px 0px;\n  color: #000;\n  border-radius: 0px; }\n\n.inner-card .arrow-mark {\n    margin: auto;\n    font-size: 22px;\n    text-align: end; }\n\n.arrow-mark {\n  margin: auto !important;\n  font-size: 22px !important;\n  text-align: end !important; }\n\n.card-custom-content {\n  border-bottom: 1px solid #f5f5f5;\n  padding: 0px !important;\n  padding-bottom: 15px; }\n\n.search-results {\n  margin-top: 10px !important;\n  margin-bottom: 10px !important;\n  border-radius: 0px;\n  color: #000;\n  background: #f5f5f5; }\n\n.tiles-container {\n  padding: 0px 20px;\n  margin-bottom: 5px; }\n\n.tiles-container .tiles {\n    max-height: 100%;\n    min-height: 100%;\n    margin-bottom: 10px; }\n\n.tiles-container .tiles ion-card {\n      border-radius: 15px;\n      background: #f2efef;\n      max-height: 100%;\n      min-height: 100%;\n      margin: 4px;\n      padding: 0px 2px; }\n\n.tiles-container .tiles ion-card img {\n        margin: auto;\n        width: 40%;\n        padding: 20px 0px; }\n\n.tiles-container .tiles p {\n      text-align: center;\n      font-family: 'SourceSansPro-Bold';\n      text-transform: uppercase;\n      font-size: 1em;\n      padding: 0px;\n      margin: 0px 0px 5px 0px;\n      font-weight: bold;\n      color: #000;\n      height: 1.5em; }\n\n.activeprojects-container {\n  font-family: 'SourceSansPro-Bold';\n  margin-bottom: 40px; }\n\n.activeprojects-container h4 {\n    text-transform: uppercase;\n    padding: 10px 35px;\n    margin: 0px 0px 0px 0px;\n    color: #000;\n    font-weight: 600;\n    font-size: 18px; }\n\n.activeprojects-container ion-card {\n    border-radius: 15px;\n    background: #f2efef;\n    border-top-left-radius: 0px; }\n\n.activeprojects-container ion-card .collection-label {\n      background: #442c2e;\n      color: #fff;\n      padding: 5px 5px 5px 25px;\n      font-size: 14px;\n      min-width: auto;\n      width: auto;\n      font-weight: 600; }\n\n.activeprojects-container ion-card .date-col {\n      max-width: 15%;\n      text-align: right;\n      color: #b23e33;\n      padding: 0px 0px;\n      margin-right: 10px; }\n\n.activeprojects-container ion-card .date-col h3 {\n        font-size: 22px;\n        text-transform: uppercase;\n        font-weight: 600; }\n\n.activeprojects-container ion-card .title-col {\n      padding: 0px 0px;\n      margin: auto;\n      font-size: 17px;\n      font-weight: 900;\n      margin-top: 5px;\n      color: #000; }\n\n.activeprojects-container .activeproject-btn {\n    padding: 0px 40px;\n    --border-radius: 15px;\n    margin-top: -10px;\n    margin-bottom: 55px;\n    font-weight: 500;\n    font-size: 18px;\n    min-height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy9zbC11bm5hdGkvdW5uYXRpLWZlYi9zbC11bm5hdGktbW9iaWxlL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFFRSwyQkFBMEI7RUFDMUIsOEJBQThCLEVBQUE7O0FBSGhDO0lBTUksWUFBVyxFQUFBOztBQUdmO0VBRUksZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFKdEI7SUFNTSxZQUFZO0lBQ1osZUFBYztJQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQXlCO0VBQ3pCLDBCQUEwQixFQUFBOztBQUU5QjtFQUVFLGdDQUFnQztFQUNoQyx1QkFBc0I7RUFDdEIsb0JBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUlyQjtFQUVBLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFIbEI7SUFLSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBOztBQVB2QjtNQVVJLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7O0FBZnBCO1FBaUJNLFlBQVk7UUFDWixVQUFVO1FBQ1YsaUJBQWlCLEVBQUE7O0FBbkJ2QjtNQXVCSSxrQkFBa0I7TUFDbEIsaUNBQWlDO01BQ2pDLHlCQUF5QjtNQUN6QixjQUFjO01BQ2QsWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixpQkFBaUI7TUFDakIsV0FBVztNQUNYLGFBQWEsRUFBQTs7QUFJakI7RUFDRSxpQ0FBaUM7RUFDakMsbUJBQWtCLEVBQUE7O0FBRnBCO0lBSUkseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7O0FBVG5CO0lBWUksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQkFBMkIsRUFBQTs7QUFkL0I7TUFnQk0sbUJBQW1CO01BQ25CLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIsZUFBZTtNQUNmLGVBQWU7TUFDZixXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7O0FBdEJ0QjtNQXlCTSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsa0JBQWtCLEVBQUE7O0FBN0J4QjtRQStCUSxlQUFlO1FBQ2YseUJBQXlCO1FBQ3pCLGdCQUFnQixFQUFBOztBQWpDeEI7TUFzQ00sZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBM0NqQjtJQWdESSxpQkFBaUI7SUFDakIscUJBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmN1c3RvbS1jYXJkXG57XG4gIG1hcmdpbi10b3A6MTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC5pbm5lci1jYXJkXG4gIHtcbiAgICBwYWRkaW5nOjBweDtcbiAgfVxufVxuLmlubmVyLWNhcmRcbiAge1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgLmFycm93LW1hcmt7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBmb250LXNpemU6MjJweDtcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG4gIH1cbiAgLmFycm93LW1hcmt7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOjIycHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuLmNhcmQtY3VzdG9tLWNvbnRlbnRcbntcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XG4gIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOjE1cHg7XG59XG4uc2VhcmNoLXJlc3VsdHN7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwcHg7O1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxuLy8gTmV3IFVpIENTU1xuLnRpbGVzLWNvbnRhaW5lclxue1xucGFkZGluZzogMHB4IDIwcHg7XG5tYXJnaW4tYm90dG9tOiA1cHg7XG4udGlsZXN7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGlvbi1jYXJkXG4gIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmMmVmZWY7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHBhZGRpbmc6IDBweCAycHg7XG4gICAgaW1ne1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgd2lkdGg6IDQwJTtcbiAgICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICAgIH1cbiAgfVxuICBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZVNhbnNQcm8tQm9sZCc7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgfVxufVxufVxuLmFjdGl2ZXByb2plY3RzLWNvbnRhaW5lcntcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2VTYW5zUHJvLUJvbGQnO1xuICBtYXJnaW4tYm90dG9tOjQwcHg7XG4gIGg0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IDEwcHggMzVweDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBpb24tY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmMmVmZWY7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICAgIC5jb2xsZWN0aW9uLWxhYmVse1xuICAgICAgYmFja2dyb3VuZDogIzQ0MmMyZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggMjVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLmRhdGUtY29se1xuICAgICAgbWF4LXdpZHRoOiAxNSU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGNvbG9yOiAjYjIzZTMzO1xuICAgICAgcGFkZGluZzogMHB4IDBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGgze1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICAgIC50aXRsZS1jb2xcbiAgICB7XG4gICAgICBwYWRkaW5nOiAwcHggMHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgfVxuICAuYWN0aXZlcHJvamVjdC1idG5cbiAge1xuICAgIHBhZGRpbmc6IDBweCA0MHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIH1cbn0iXX0= */"

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