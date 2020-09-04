import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { HomeService } from '../home/home.service';
import { ToastService } from '../toast.service';
import { AppConfigs } from '../core-module/constants/app.config';
import { LocalKeys } from '../core-module/constants/localstorage-keys';
import { ProjectService } from '../project-view/project.service';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.page.html',
  styleUrls: ['./create-project.page.scss'],
})
export class CreateProjectPage implements OnInit {
  back = 'project-view/home';
  isValidDate: boolean = true;
  otherCategory;
  withinTitleLimit;
  withinGoalLimit;
  createProject: FormGroup;
  startDate;
  selectedOther: boolean = false;
  popupshow: boolean = false;
  endDate;
  today: any = new Date();
  projectCreatePopUp: any = {};
  project: any = {};
  markLabelsAsInvalid: boolean = false;
  createNewProject: boolean;

  checkedCategories = [];
  categories: any = [
    { key: 'Teacher', id: 1, value: false },
    { key: 'Student', id: 2, value: false },
    { key: 'Community', id: 3, value: false },
    { key: 'School process', id: 4, value: false },
    { key: 'Infrastructure', id: 5, value: false },
    { key: 'Education leader', id: 6, value: false },
    // { value: 'Other', id: 6, isChecked: false },
  ];

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public datepipe: DatePipe,
    public datePicker: DatePicker,
    public storage: Storage,
    public homeService: HomeService,
    public toastService: ToastService,
    public projectService: ProjectService
  ) {
    toastService.popClose.subscribe(data => {
      this.popupshow = false;
    })
    this.homeService.clearMyProject.subscribe(data => {
      this.prepareForm();
      this.createNewProject = true;
    })
    route.params.subscribe(param => {
      this.projectService.setTitle('createProject');
      // this.categories.forEach((cat, i) => {
      //   this.categories[i].isChecked = false;
      // });
      if (param.clearData == 'yes') {
        this.project = {};
        this.prepareForm();
        this.createNewProject = true;
        this.checkedCategories = [];
        this.today = this.datepipe.transform(this.today, 'MM-dd-yyyy');
      } else {
        this.createNewProject = false;
        this.storage.get(LocalKeys.newcreatedproject).then(data => {
          this.checkedCategories = data.category;
          data.category.forEach(cat => {
            if (cat == 'Teacher' || cat == 'Student' || cat == 'Community' || cat == 'School process' || cat == 'infrastructure' || cat == 'Education leader') {
            } else {
              this.selectedOther = true;
              this.otherCategory = cat;
              const index: number = this.checkedCategories.indexOf(cat);
              if (index !== -1) {
                this.checkedCategories.splice(index, 1);
              }
            }
          })
          this.project = data;
        })
      }
    })
  }

  ionViewDidEnter() {
    this.isValidDate = true;
  }
  ngOnInit() {
    this.prepareForm();
  }
  //Form preparing
  public prepareForm() {
    this.createProject = this.formBuilder.group({
      title: ['', Validators.required],
      goal: ['', Validators.required],
      // category: ['', Validators.required],
      startDate: ['', ''],
      endDate: ['', ''],
      Othercategory: ['', '']
    })
  }
  // set date
  public setDate(event, type) {
    if (type == 'sd') {
      this.project.startDate = this.datepipe.transform(new Date(event.detail.value));
      // this.startDate = date;
      this.isValidDate = true;
      this.startDate = this.datepipe.transform(new Date(event.detail.value));
      if (this.project.endDate) {
        this.checkDate();
      }
    } else if (type == "ed") {
      this.project.endDate = this.datepipe.transform(new Date(event.detail.value));
      // this.endDate = date;
      this.isValidDate = true;
      this.endDate = this.datepipe.transform(new Date(event.detail.value));
      if (this.project.startDate) {
        this.checkDate();
      } else {
        this.project.startDate = this.datepipe.transform(new Date());
      }
    }
    // this.datePicker.show({
    //   date: new Date(),
    //   mode: 'date',
    //   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    // }).then(
    //   date => {
    //     if (type == 'sd') {
    //       this.project.startDate = this.datepipe.transform(new Date(date));
    //       // this.startDate = date;
    //       this.isValidDate = true;
    //       this.startDate = this.datepipe.transform(new Date(date), "dd-MM-yyyy");
    //       if (this.project.endDate) {
    //         this.checkDate();
    //       }
    //     } else if (type == "ed") {
    //       this.project.endDate = this.datepipe.transform(new Date(date));
    //       // this.endDate = date;
    //       this.isValidDate = true;
    //       this.endDate = this.datepipe.transform(new Date(date), "dd-MM-yyyy");
    //       if (this.project.startDate) {
    //         this.checkDate();
    //       } else {
    //         this.project.startDate = this.datepipe.transform(new Date());
    //       }
    //     }
    //   },
    //   err => console.log('Error occurred while getting date: ', err)
    // );
  }
  // validate date
  public checkDate() {
    let projectStartDate = this.datepipe.transform(new Date(this.project.startDate));
    let projectEndDate = this.datepipe.transform(new Date(this.project.endDate));
    if (new Date(projectStartDate) <= new Date(projectEndDate)) {
      this.isValidDate = true;
      let sDay = new Date(projectStartDate).getDate();
      let sMonth = new Date(projectStartDate).getMonth();
      let sYear = new Date(projectStartDate).getFullYear();
      let eDay = new Date(projectEndDate).getDate();
      let eMonth = new Date(projectEndDate).getMonth();
      let eYear = new Date(projectEndDate).getFullYear();
      var startDate = moment([sYear, sMonth, sDay]);
      var endDate = moment([eYear, eMonth, eDay]);
      let diffInMonths = endDate.diff(startDate, 'months');
      let diffInDays = endDate.diff(startDate, 'days');
      let diffInYears = endDate.diff(startDate, 'years');
      if (diffInMonths) {
        this.project.duration = diffInMonths + ' months';
      } else if (diffInDays || !diffInDays) {
        this.project.duration = diffInDays + ' days';
      } else if (diffInYears) {
        this.project.duration = diffInYears + ' years';
      }
    } else {
      this.isValidDate = false;
    }
  }
  // Create project
  public create() {
    if (this.otherCategory) {
      const index: number = this.checkedCategories.indexOf(this.otherCategory);
      if (index == -1) {
        this.checkedCategories.push(this.otherCategory);
      }
    }
    this.project.category = this.checkedCategories;
    if (this.createProject.status == "INVALID" || !this.isValidDate && (!this.project.category && this.project.category.length == 0)) {
      this.markLabelsAsInvalid = true;
    } else {
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
      let environment = AppConfigs.currentEnvironment;
      let programId = '';
      AppConfigs.environments.forEach(env => {
        if (environment === env.name) {
          programId = env.programId;
        }
      });
      this.storage.get(LocalKeys.allProjects).then((projectsList: any) => {
        let mapped: boolean = false;
        if (projectsList) {
          projectsList.forEach(programsList => {
            // already basic structure is there in local
            if (programsList) {
              if (programsList.programs && programsList.programs._id == programId) {
                mapped = true
                // programsList.projects.forEach(program => {
                if (this.createNewProject) {
                  this.project._id = programsList.projects.length + 1;
                  programsList.projects.push(this.project);
                  this.storage.set(LocalKeys.allProjects, projectsList).then(myProjects => {
                    this.storage.set(LocalKeys.newcreatedproject, this.project).then(cmp => {
                      this.toastService.successToast('message.project_is_created');
                      // this.router.navigate(['/project-view/create-task', this.project._id, "cp"]);
                    })
                  })
                } else if (programsList.programs) {
                  programsList.projects.forEach(project => {
                    if (project._id == this.project._id) {
                      project.category = this.project.category;
                      project.title = this.project.title;
                      project.goal = this.project.goal;
                      project.endDate = this.project.endDate;
                      project.startDate = this.project.startDate;
                      this.storage.set(LocalKeys.allProjects, projectsList).then(myProjects => {
                        this.storage.set(LocalKeys.newcreatedproject, this.project).then(cmp => {
                          this.toastService.successToast('message.project_is_created');
                          // this.router.navigate(['/project-view/create-task', this.project._id, "cp"]);
                        })
                      })
                    }
                  });
                }
                // });
              } else {
                this.project._id = programsList.projects.length + 1;
              }
            }
          });
        } else {
          // if there is no basic structure is in local
          mapped = true;
          this.project._id = 1;
          let pro1 = [{
            projects: []
          }]
          pro1[0].projects.push(this.project);
          projectsList = pro1;
          this.storage.set(LocalKeys.allProjects, projectsList).then(myProjects => {
            this.storage.set(LocalKeys.newcreatedproject, this.project).then(cmp => {
              this.toastService.successToast('message.project_is_created');
              // this.router.navigate(['/project-view/create-task', this.project._id, "cp"]);
            })
          })
        }
        this.popupshow = true;
        this.projectCreatePopUp = {
          type: 'newProject',
          title: '',
          text: 'Your project has been saved, click below to view your project.',
          showCloseButton: false,
          titleCss: {
          },
          textCss: {
            fontSize: '16px',
            color: '#b23e33;'
          },
          buttons: [
            {
              title: 'View Project',
              color: 'primary',
              isActionable: '/project-view/project-detail/form',
            }]
        }
        this.storage.set(LocalKeys.projectToBeView, this.project).then(project => {
        })
      })
    }
  }
  categorySelected(event) {
    this.selectedOther = !this.selectedOther;
    if (!this.selectedOther) {
      this.otherCategory = '';
    }
  }

  selectedCategory(key) {
    if (!this.checkedCategories.includes(key)) {
      this.checkedCategories.push(key);
    } else {
      const index: number = this.checkedCategories.indexOf(key);
      if (index !== -1) {
        this.checkedCategories.splice(index, 1);
      }
    }
  }
}