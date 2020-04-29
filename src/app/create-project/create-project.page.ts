import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { HomeService } from '../home/home.service';
import { ToastService } from '../toast.service';
import { AppConfigs } from '../app.config';
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
  projectCreatePopUp: any = {};
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
          this.storage.get('latestProjects').then(projectsList => {
            projectsList.forEach(programs => {
              programs.projects.forEach(project => {
                if (project._id == data._id) {
                  this.project = project;
                  if (this.project.startDate && this.project.endDate) {
                    this.startDate = this.datepipe.transform(new Date(this.project.startDate));
                    this.endDate = this.datepipe.transform(new Date(this.project.endDate));
                  }
                }
              });
            });
            // projectsList[0].projects.forEach(project => {

            // });
          })
        })
      }
    })
  }
  ionViewDidEnter() {
    this.isValidDate = true;
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
          // this.startDate = date;
          this.isValidDate = true;
          this.startDate = this.datepipe.transform(new Date(date), "dd-MM-yyyy");
          if (this.project.endDate) {
            this.checkDate();
          }
        } else if (type == "ed") {
          this.project.endDate = this.datepipe.transform(new Date(date));
          // this.endDate = date;
          this.isValidDate = true;
          this.endDate = this.datepipe.transform(new Date(date), "dd-MM-yyyy");
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
    if (this.createProject.status == "INVALID" || !this.isValidDate) {
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
      this.storage.get('latestProjects').then((projectsList: any) => {
        let mapped: boolean = false;
        if (projectsList) {
          projectsList.forEach(programsList => {
            // already basic structure is there in local
            if (programsList) {
              if (programsList.programs && programsList.programs._id == programId) {
                // programsList.projects.forEach(program => {
                if (this.createNewProject) {
                  this.project._id = programsList.projects.length + 1;
                  programsList.projects.push(this.project);
                  this.storage.set('latestProjects', projectsList).then(myProjects => {
                    this.storage.set('newcreatedproject', this.project).then(cmp => {
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
                      this.storage.set('latestProjects', projectsList).then(myProjects => {
                        this.storage.set('newcreatedproject', this.project).then(cmp => {
                          this.toastService.successToast('message.project_is_created');
                          // this.router.navigate(['/project-view/create-task', this.project._id, "cp"]);
                        })
                      })
                    }
                  });
                }
                // });
              } else {
                // if there is no basic structure is in local
                if (programsList.projects) {
                  this.project._id = programsList.projects.length + 1;
                  programsList.projects.push(this.project)
                } else {
                  this.project._id = 1;
                  let pro1 = [{
                    projects: [
                    ]
                  }]
                  pro1[0].projects.push(this.project);
                  projectsList = pro1;
                }
                this.storage.set('latestProjects', projectsList).then(myProjects => {
                  this.storage.set('newcreatedproject', this.project).then(cmp => {
                    this.toastService.successToast('message.project_is_created');
                    // this.router.navigate(['/project-view/create-task', this.project._id, "cp"]);
                  })
                })
              }
            } else {
              // if there is no basic structure is in local
              if (programsList[0].projects) {
                this.project._id = programsList.projects.length + 1;
                programsList[0].projects.push(this.project)
              } else {
                this.project._id = 1;
                let pro1 = [{
                  projects: [
                  ]
                }]
                pro1[0].projects.push(this.project);
                projectsList = pro1;
              }
              this.storage.set('latestProjects', projectsList).then(myProjects => {
                this.storage.set('newcreatedproject', this.project).then(cmp => {
                  this.toastService.successToast('message.project_is_created');
                  // this.router.navigate(['/project-view/create-task', this.project._id, "cp"]);
                })
              })
            }
          });
        } else {
          // if there is no basic structure is in local
          this.project._id = 1;
          let pro1 = [{
            projects: [
            ]
          }]
          pro1[0].projects.push(this.project);
          projectsList = pro1;
          this.storage.set('latestProjects', projectsList).then(myProjects => {
            this.storage.set('newcreatedproject', this.project).then(cmp => {
              this.toastService.successToast('message.project_is_created');
              // this.router.navigate(['/project-view/create-task', this.project._id, "cp"]);
            })
          })
        }
        this.projectCreatePopUp = {
          message: "Your project has been saved, click below to view your project.",
          button: "View Project",
          isActionable: '/project-view/project-detail/form',
          show: true
        }
        this.storage.set('projectToBeView', this.project).then(project => {
        })
      })
    }
  }
}