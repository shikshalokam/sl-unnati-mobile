(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-project-create-project-module"],{

/***/ "./src/app/create-project/create-project.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-project/create-project.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectPageModule", function() { return CreateProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _create_project_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-project.page */ "./src/app/create-project/create-project.page.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");









var routes = [
    {
        path: '',
        component: _create_project_page__WEBPACK_IMPORTED_MODULE_7__["CreateProjectPage"]
    }
];
var CreateProjectPageModule = /** @class */ (function () {
    function CreateProjectPageModule() {
    }
    CreateProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()
            ],
            declarations: [_create_project_page__WEBPACK_IMPORTED_MODULE_7__["CreateProjectPage"]]
        })
    ], CreateProjectPageModule);
    return CreateProjectPageModule;
}());



/***/ }),

/***/ "./src/app/create-project/create-project.page.html":
/*!*********************************************************!*\
  !*** ./src/app/create-project/create-project.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'create_project.create_new_project' | translate\" [showMenu]=\"false\" [showBack]=\"true\"\n    [isGoBack]=\"back\" [noBorder]=\"false\">\n  </app-header>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <!-- Error message, if fileds are not filled -->\n  <h5 class=\"required-field\" *ngIf=\"markLabelsAsInvalid\" style=\"padding-left:15px;\">\n    {{'create_project.fileds_mandatory' | translate}}</h5>\n  <!-- Error message ends here-->\n  <!-- Project creation form starts here -->\n  <form [formGroup]=\"createProject\" class=\"create-project\">\n    <!-- Project title start here -->\n    <ion-item class=\"custom-ion-item\">\n      <ion-label class=\"custom-label\" position=\"floating\"\n        [ngClass]=\"{'required-field':markLabelsAsInvalid && !project.title}\">\n        {{'create_project.title_of_project' | translate}} </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"project.title\" name=\"title\" formControlName=\"title\"\n        placeholder=\"{{'create_project.placeholder_project_title'| translate}}\" maxlength=\"280\"></ion-input>\n    </ion-item>\n    <!-- Project title ends here -->\n    <!-- project goal starts here -->\n    <ion-item class=\"custom-ion-item\">\n      <ion-label class=\"custom-label\" position=\"floating\"\n        [ngClass]=\"{'required-field':markLabelsAsInvalid && !project.goal}\">\n        {{'create_project.goal' | translate}}</ion-label>\n      <ion-textarea type=\"text\" [(ngModel)]=\"project.goal\" name=\"goal\" formControlName=\"goal\"\n        placeholder=\"{{'create_project.placeholder_goal'| translate}}\" maxlength=\"1000\"></ion-textarea>\n    </ion-item>\n    <!-- project goal end here -->\n    <!-- Project start and end date start here -->\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label class=\"custom-label \" position=\"floating\" style=\" margin-left: 15px; font-size: 18px !important;\">\n          {{'create_project.start_date' | translate}}</ion-label>\n        <ion-item class=\"custom-ion-item\" (click)=\"setDate('sd')\">\n          <ion-input type=\"text\" [(ngModel)]=\"startDate\" name=\"title\" formControlName=\"startDate\"\n            placeholder=\"{{today}}\" class=\"no-rght-brdr-rds\"></ion-input>\n          <ion-icon ios=\"ios-arrow-dropdown\" md=\"md-arrow-dropdown\" slot=\"end\" class=\"right-icon\"></ion-icon>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label class=\"custom-label\" position=\"floating\" style=\" margin-left: 15px; font-size: 18px !important;\"\n          [ngClass]=\"{'required-field':markLabelsAsInvalid && !isValidDate}\">\n          {{'create_project.end_date' | translate}}</ion-label>\n        <ion-item class=\"custom-ion-item\" (click)=\"setDate('ed')\">\n          <ion-input type=\"text\" [(ngModel)]=\"endDate\" name=\"title\" formControlName=\"endDate\" placeholder=\"{{today}}\"\n            class=\"no-rght-brdr-rds\"></ion-input>\n          <ion-icon ios=\"ios-arrow-dropdown\" md=\"md-arrow-dropdown\" slot=\"end\" class=\"right-icon\"></ion-icon>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!-- Project start and end date end here -->\n    <!-- Project improvement areas starts here -->\n    <ion-item class=\"custom-ion-item\" style=\"margin-bottom:50px;\">\n      <ion-label class=\"custom-label text-wrap-overflow\" position=\"floating\"\n        [ngClass]=\"{'required-field':markLabelsAsInvalid && !project.category}\">\n        {{'create_project.areas' | translate}}</ion-label>\n      <ion-textarea type=\"text\" [(ngModel)]=\"project.category\" name=\"category\" formControlName=\"category\"\n        placeholder=\"{{'create_project.placeholder_areas'| translate}}\" maxlength=\"90\"></ion-textarea>\n    </ion-item>\n    <!-- Project improvement areas end here -->\n    <ion-button (click)=\"create()\" color=\"secondary\" class=\"round-corner-btn\" expand=\"block\">\n      {{'button.save_create_task' | translate}}\n    </ion-button>\n  </form>\n  <!-- Project creation form starts here -->\n</ion-content>"

/***/ }),

/***/ "./src/app/create-project/create-project.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/create-project/create-project.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-project ion-col {\n  padding: 0px; }\n\n.create-project .custom-label {\n  font-size: 20px !important; }\n\n.create-project .no-rght-brdr-rds {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.create-project .right-icon {\n  margin: auto;\n  background: #f3f3f3;\n  border: 1px solid;\n  border-left: none;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  height: 2.1em;\n  width: 1.5em; }\n\n.category-label {\n  text-transform: uppercase;\n  /* padding: 15px; */\n  font-size: 16px !important;\n  font-weight: 900; }\n\n.text-wrap-overflow {\n  white-space: normal !important;\n  max-width: none !important;\n  width: 100%; }\n\n.custom-radio {\n  --background-checked: #b23e33;\n  --border-color-checked: #b23e33;\n  --checkmark-color: #b23e33;\n  --border-radius: 20px;\n  padding: 2px;\n  height: 20px;\n  width: 20px;\n  border: 2px solid #b23e33;\n  -webkit-margin-end: 8px;\n          margin-inline-end: 8px;\n  border-radius: 20px;\n  --border-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9jcmVhdGUtcHJvamVjdC9jcmVhdGUtcHJvamVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxZQUFXLEVBQUE7O0FBRm5CO0VBTVEsMEJBQTBCLEVBQUE7O0FBTmxDO0VBVVEsNEJBQTRCO0VBQzVCLCtCQUErQixFQUFBOztBQVh2QztFQWVRLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR3BCO0VBRUkseUJBQXlCO0VBQ3pCLG1CQUFBO0VBQ0EsMEJBQTBCO0VBQzFCLGdCQUFnQixFQUFBOztBQUVwQjtFQUVJLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsV0FBVyxFQUFBOztBQUVmO0VBRUksNkJBQXFCO0VBQ3JCLCtCQUF1QjtFQUN2QiwwQkFBa0I7RUFDbEIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVTtFQUNWLHlCQUF5QjtFQUN6Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXByb2plY3QvY3JlYXRlLXByb2plY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZS1wcm9qZWN0e1xuICAgIGlvbi1jb2x7XG4gICAgICAgIHBhZGRpbmc6MHB4O1xuICAgIH1cbiAgICAuY3VzdG9tLWxhYmVsXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm5vLXJnaHQtYnJkci1yZHNcbiAgICB7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XG4gICAgfVxuICAgIC5yaWdodC1pY29uXG4gICAge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgaGVpZ2h0OiAyLjFlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgIH1cbn1cbi5jYXRlZ29yeS1sYWJlbFxue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgLyogcGFkZGluZzogMTVweDsgKi9cbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuLnRleHQtd3JhcC1vdmVyZmxvd3tcbiAgICAvLyBmb250LXNpemU6IDE0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmN1c3RvbS1yYWRpb1xue1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjYjIzZTMzO1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNiMjNlMzM7XG4gICAgLS1jaGVja21hcmstY29sb3I6ICNiMjNlMzM7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6MjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYjIzZTMzO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/create-project/create-project.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/create-project/create-project.page.ts ***!
  \*******************************************************/
/*! exports provided: CreateProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectPage", function() { return CreateProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");











var CreateProjectPage = /** @class */ (function () {
    function CreateProjectPage(formBuilder, router, route, datepipe, datePicker, storage, homeService, toastService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.datepipe = datepipe;
        this.datePicker = datePicker;
        this.storage = storage;
        this.homeService = homeService;
        this.toastService = toastService;
        this.back = 'project-view/home';
        this.isValidDate = true;
        this.today = new Date();
        this.project = {};
        this.markLabelsAsInvalid = false;
        this.categories = [
            { value: 'Teacher', id: 1, isChecked: false },
            { value: 'Student', id: 2, isChecked: false },
            { value: 'Community', id: 3, isChecked: false },
            { value: 'School process', id: 4, isChecked: false },
            { value: 'infrastructure  ', id: 5, isChecked: false },
            { value: 'Education leader', id: 6, isChecked: false },
            { value: 'Other', id: 6, isChecked: false },
        ];
        this.homeService.clearMyProject.subscribe(function (data) {
            _this.prepareForm();
            _this.createNewProject = true;
        });
        route.params.subscribe(function (param) {
            if (param.clearData == 'yes') {
                _this.project = {};
                _this.prepareForm();
                _this.createNewProject = true;
                _this.today = _this.datepipe.transform(_this.today, 'dd-MM-yyyy');
            }
            else {
                _this.createNewProject = false;
                _this.storage.get('newcreatedproject').then(function (data) {
                    _this.storage.get('latestProjects').then(function (projectsList) {
                        projectsList.forEach(function (programs) {
                            programs.projects.forEach(function (project) {
                                if (project._id == data._id) {
                                    _this.project = project;
                                    if (_this.project.startDate && _this.project.endDate) {
                                        _this.startDate = _this.datepipe.transform(new Date(_this.project.startDate));
                                        _this.endDate = _this.datepipe.transform(new Date(_this.project.endDate));
                                    }
                                }
                            });
                        });
                        // projectsList[0].projects.forEach(project => {
                        // });
                    });
                });
            }
        });
    }
    CreateProjectPage.prototype.ionViewDidEnter = function () {
        this.isValidDate = true;
    };
    CreateProjectPage.prototype.ngOnInit = function () {
        this.prepareForm();
    };
    //Form preparing
    CreateProjectPage.prototype.prepareForm = function () {
        this.createProject = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            goal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startDate: ['', ''],
            endDate: ['', '']
        });
    };
    // set date
    CreateProjectPage.prototype.setDate = function (type) {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            if (type == 'sd') {
                _this.project.startDate = _this.datepipe.transform(new Date(date));
                // this.startDate = date;
                _this.isValidDate = true;
                _this.startDate = _this.datepipe.transform(new Date(date), "dd-MM-yyyy");
                if (_this.project.endDate) {
                    _this.checkDate();
                }
            }
            else if (type == "ed") {
                _this.project.endDate = _this.datepipe.transform(new Date(date));
                // this.endDate = date;
                _this.isValidDate = true;
                _this.endDate = _this.datepipe.transform(new Date(date), "dd-MM-yyyy");
                if (_this.project.startDate) {
                    _this.checkDate();
                }
                else {
                    _this.project.startDate = _this.datepipe.transform(new Date());
                }
            }
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    // validate date
    CreateProjectPage.prototype.checkDate = function () {
        var projectStartDate = this.datepipe.transform(new Date(this.project.startDate));
        var projectEndDate = this.datepipe.transform(new Date(this.project.endDate));
        if (new Date(projectStartDate) <= new Date(projectEndDate)) {
            this.isValidDate = true;
            var sDay = new Date(projectStartDate).getDate();
            var sMonth = new Date(projectStartDate).getMonth();
            var sYear = new Date(projectStartDate).getFullYear();
            var eDay = new Date(projectEndDate).getDate();
            var eMonth = new Date(projectEndDate).getMonth();
            var eYear = new Date(projectEndDate).getFullYear();
            var startDate = moment__WEBPACK_IMPORTED_MODULE_7__([sYear, sMonth, sDay]);
            var endDate = moment__WEBPACK_IMPORTED_MODULE_7__([eYear, eMonth, eDay]);
            var diffInMonths = endDate.diff(startDate, 'months');
            var diffInDays = endDate.diff(startDate, 'days');
            var diffInYears = endDate.diff(startDate, 'years');
            if (diffInMonths) {
                this.project.duration = diffInMonths + ' months';
            }
            else if (diffInDays || !diffInDays) {
                this.project.duration = diffInDays + ' days';
            }
            else if (diffInYears) {
                this.project.duration = diffInYears + ' years';
            }
        }
        else {
            this.isValidDate = false;
        }
    };
    // Create project
    CreateProjectPage.prototype.create = function () {
        var _this = this;
        if (this.createProject.status == "INVALID" || !this.isValidDate) {
            this.markLabelsAsInvalid = true;
        }
        else {
            this.markLabelsAsInvalid = false;
            this.project.isSync = false;
            this.project.status = "Not started";
            this.project.isNew = true;
            this.project.lastUpdate = new Date();
            this.project.isStarted = false;
            if (!this.project.tasks) {
                this.project.tasks = [];
            }
            this.project.createdType = 'by self';
            // this.project.createdType ='by referance';
            var environment_1 = _app_config__WEBPACK_IMPORTED_MODULE_10__["AppConfigs"].currentEnvironment;
            var programId_1 = '';
            _app_config__WEBPACK_IMPORTED_MODULE_10__["AppConfigs"].environments.forEach(function (env) {
                if (environment_1 === env.name) {
                    programId_1 = env.programId;
                }
            });
            console.log(programId_1, "programId ", environment_1);
            this.storage.get('latestProjects').then(function (projectsList) {
                var mapped = false;
                if (projectsList) {
                    projectsList.forEach(function (programsList) {
                        // already basic structure is there in local
                        if (programsList) {
                            if (programsList.programs && programsList.programs._id == programId_1) {
                                // programsList.projects.forEach(program => {
                                if (_this.createNewProject) {
                                    _this.project._id = programsList.projects.length + 1;
                                    programsList.projects.push(_this.project);
                                    _this.storage.set('latestProjects', projectsList).then(function (myProjects) {
                                        _this.storage.set('newcreatedproject', _this.project).then(function (cmp) {
                                            _this.toastService.successToast('message.project_is_created');
                                            _this.router.navigate(['/project-view/create-task', _this.project._id, "cp"]);
                                        });
                                    });
                                }
                                else if (programsList.programs) {
                                    programsList.projects.forEach(function (project) {
                                        if (project._id == _this.project._id) {
                                            project.category = _this.project.category;
                                            project.title = _this.project.title;
                                            project.goal = _this.project.goal;
                                            project.endDate = _this.project.endDate;
                                            project.startDate = _this.project.startDate;
                                            _this.storage.set('latestProjects', projectsList).then(function (myProjects) {
                                                _this.storage.set('newcreatedproject', _this.project).then(function (cmp) {
                                                    _this.toastService.successToast('message.project_is_created');
                                                    _this.router.navigate(['/project-view/create-task', _this.project._id, "cp"]);
                                                });
                                            });
                                        }
                                    });
                                }
                                // });
                            }
                            else {
                                // if there is no basic structure is in local
                                if (programsList.projects) {
                                    console.log('programsList.projects', programsList.projects);
                                    _this.project._id = programsList.projects.length + 1;
                                    programsList.projects.push(_this.project);
                                }
                                else {
                                    _this.project._id = 1;
                                    var pro1 = [{
                                            projects: []
                                        }];
                                    pro1[0].projects.push(_this.project);
                                    projectsList = pro1;
                                }
                                _this.storage.set('latestProjects', projectsList).then(function (myProjects) {
                                    _this.storage.set('newcreatedproject', _this.project).then(function (cmp) {
                                        _this.toastService.successToast('message.project_is_created');
                                        _this.router.navigate(['/project-view/create-task', _this.project._id, "cp"]);
                                    });
                                });
                            }
                        }
                        else {
                            // if there is no basic structure is in local
                            if (programsList[0].projects) {
                                _this.project._id = programsList.projects.length + 1;
                                programsList[0].projects.push(_this.project);
                            }
                            else {
                                _this.project._id = 1;
                                var pro1 = [{
                                        projects: []
                                    }];
                                pro1[0].projects.push(_this.project);
                                projectsList = pro1;
                            }
                            _this.storage.set('latestProjects', projectsList).then(function (myProjects) {
                                _this.storage.set('newcreatedproject', _this.project).then(function (cmp) {
                                    _this.toastService.successToast('message.project_is_created');
                                    _this.router.navigate(['/project-view/create-task', _this.project._id, "cp"]);
                                });
                            });
                        }
                    });
                }
                else {
                    // if there is no basic structure is in local
                    _this.project._id = 1;
                    var pro1 = [{
                            projects: []
                        }];
                    pro1[0].projects.push(_this.project);
                    projectsList = pro1;
                    _this.storage.set('latestProjects', projectsList).then(function (myProjects) {
                        _this.storage.set('newcreatedproject', _this.project).then(function (cmp) {
                            _this.toastService.successToast('message.project_is_created');
                            _this.router.navigate(['/project-view/create-task', _this.project._id, "cp"]);
                        });
                    });
                }
            });
        }
    };
    CreateProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-project',
            template: __webpack_require__(/*! ./create-project.page.html */ "./src/app/create-project/create-project.page.html"),
            styles: [__webpack_require__(/*! ./create-project.page.scss */ "./src/app/create-project/create-project.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _home_home_service__WEBPACK_IMPORTED_MODULE_8__["HomeService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]])
    ], CreateProjectPage);
    return CreateProjectPage;
}());



/***/ })

}]);
//# sourceMappingURL=create-project-create-project-module.js.map