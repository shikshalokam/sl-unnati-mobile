import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { HomeService } from '../home/home.service';
import { ToastService } from '../toast.service';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.page.html',
  styleUrls: ['./create-project.page.scss'],
})
export class CreateProjectPage implements OnInit {
  back = 'project-view/home';
  isValidDate: boolean = true;
  withinTitleLimit;
  withinGoalLimit;
  createProject: FormGroup;
  startDate;
  endDate;
  today: any = new Date();
  project: any = {};
  markLabelsAsInvalid: boolean = false;
  createNewProject: boolean;
  categories = [
    { value: 'Teacher', id: 1, isChecked: false },
    { value: 'Student', id: 2, isChecked: false },
    { value: 'Community', id: 3, isChecked: false },
    { value: 'School process', id: 4, isChecked: false },
    { value: 'infrastructure  ', id: 5, isChecked: false },
    { value: 'Education leader', id: 6, isChecked: false },
    { value: 'Other', id: 6, isChecked: false },
  ];
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public datepipe: DatePipe,
    public datePicker: DatePicker,
    public storage: Storage,
    public homeService: HomeService,
    public toastService: ToastService
  ) {
    this.homeService.clearMyProject.subscribe(data => {
      this.prepareForm();
      this.createNewProject = true;
    })
    route.params.subscribe(param => {
      if (param.clearData == 'yes') {
        this.project = {};
        this.prepareForm();
        this.createNewProject = true;
        this.today = this.datepipe.transform(this.today, 'dd-MM-yyyy');
      } else {
        this.createNewProject = false;
        this.storage.get('newcreatedproject').then(data => {
          this.storage.get('myprojects').then(projects => {
            projects.forEach(project => {
              if (project._id == data._id) {
                this.project = project;
                if (this.project.startDate && this.project.endDate) {
                  this.startDate = this.datepipe.transform(new Date(this.project.startDate));
                  this.endDate = this.datepipe.transform(new Date(this.project.endDate));
                }
              }
            });
          })
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
      category: ['', Validators.required],
      startDate: ['', ''],
      endDate: ['', '']
    })
  }
  // set date
  public setDate(type) {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        if (type == 'sd') {
          this.project.startDate = this.datepipe.transform(new Date(date));
          this.startDate = date;
          if (this.project.endDate) {
            this.checkDate();
          }
        } else if (type == "ed") {
          this.project.endDate = this.datepipe.transform(new Date(date));
          this.endDate = date;
          if (this.project.startDate) {
            this.checkDate();
          } else {
            this.project.startDate = this.datepipe.transform(new Date());
          }
        }
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  // validate date
  public checkDate() {
    this.startDate = this.datepipe.transform(new Date(this.project.startDate));
    this.endDate = this.datepipe.transform(new Date(this.project.endDate));
    if (new Date(this.startDate) <= new Date(this.endDate)) {
      this.isValidDate = true;
      let sDay = new Date(this.startDate).getDate();
      let sMonth = new Date(this.startDate).getMonth();
      let sYear = new Date(this.startDate).getFullYear();
      let eDay = new Date(this.endDate).getDate();
      let eMonth = new Date(this.endDate).getMonth();
      let eYear = new Date(this.endDate).getFullYear();
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
      this.startDate = this.datepipe.transform(new Date(this.project.startDate), "dd-MM-yyyy");
      this.endDate = this.datepipe.transform(new Date(this.project.endDate), "dd-MM-yyyy");
    } else {
      this.isValidDate = false;
    }
  }
  // Create project
  public create() {
    /** if (this.createProject.status == "INVALID" || !this.isValidDate || selectedCat.length == 0) {
     New UI for Categories.
      *  */
    if (this.createProject.status == "INVALID") {
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
      this.storage.get('myprojects').then(myProjects => {
        if (myProjects) {
          // Create new project
          if (this.createNewProject) {
            this.project._id = myProjects.length + 1;
            myProjects.push(this.project);
            this.storage.set('myprojects', myProjects).then(myProjects => {
              this.storage.set('newcreatedproject', this.project).then(cmp => {
                this.toastService.successToast('message.project_is_created');
                this.router.navigate(['/project-view/create-task', this.project._id, "cp"]);
              })
            })
          } else {
            // insert edited fields into project, preventing create another project.
            this.storage.get('myprojects').then(myProjectsList => {
              myProjectsList.forEach(project => {
                if (project._id == this.project._id) {
                  project.category = this.project.category;
                  project.title = this.project.title;
                  project.goal = this.project.goal;
                  project.endDate = this.project.endDate;
                  project.startDate = this.project.startDate;
                  this.storage.set('myprojects', myProjectsList).then(myProjects => {
                    this.storage.set('newcreatedproject', this.project).then(cmp => {
                      this.toastService.successToast('message.project_is_created');
                      this.router.navigate(['/project-view/create-task', this.project._id, "cp"]);
                    })
                  })
                }
              });
            })
          }
        } else {
          this.project._id = 1;
          let data = [];
          data.push(this.project);
          this.storage.set('myprojects', data).then(myProjects => {
            this.storage.set('newcreatedproject', this.project).then(cmp => {
              this.toastService.successToast('message.project_is_created');
              this.router.navigate(['/project-view/create-task', this.project._id, "cp"]);
            })
          })
        }
      })
    }
  }
}