import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HomeService } from '../home/home.service';
import { CreateTaskService } from './create-task.service';
import { ToastService } from '../toast.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {
  addTask: FormGroup;
  today: any = new Date();
  task: any = {};
  markLabelsAsInvalid: boolean = false;
  back;
  parameter;
  currentMyProject: any;
  from;
  editTitle: boolean = false;
  showpopup: boolean = false;
  constructor(public formBuilder: FormBuilder,
    public router: Router,
    public datepipe: DatePipe,
    public datePicker: DatePicker,
    public storage: Storage,
    public homeService: HomeService,
    public route: ActivatedRoute,
    public createTaskService: CreateTaskService,
    public toastService: ToastService,
  ) {
    route.params.subscribe(params => {
      this.getCurrentProject(params.id);
      this.from = params.from;
      if (params.from == 'cp') {
        this.back = 'project-view/create-project';
      } else {
        this.back = 'project-view/project-detail/';
        this.parameter = 'my_projects';
      }
    })
  }

  ionViewDidEnter() {
    this.showpopup = false;
    this.prepareForm();
    this.task = {};
    this.markLabelsAsInvalid = false;
  }
  ngOnInit() {
    this.prepareForm();
    this.today = this.datepipe.transform(this.today, 'dd-MM-yyyy');
  }
  //Form preparing
  public prepareForm() {
    this.addTask = this.formBuilder.group({
      title: ['', Validators.required],
      endDate: ['', Validators.required]
    })
  }
  public getCurrentProject(id) {
    let mapped: boolean = false;
    this.storage.get('latestProjects').then(projectList => {
      if (projectList) {
        projectList.forEach(programs => {
          programs.projects.forEach(project => {
            if (project._id == id) {
              this.currentMyProject = project;
              mapped = true;
            }
          });
        });
        // projectList.programs.forEach(programs => {
        //   if (programs.projects) {
        //     programs.projects.forEach(project => {
        //       if (project._id == id) {
        //         this.currentMyProject = project;
        //         mapped = true;
        //       }
        //     });
        //   }
        // });
      }

      if (!mapped) {
        projectList[0].projects.forEach(project => {
          if (project._id == id) {
            this.currentMyProject = project;
          }
        });
      }
    })
  }
  // set date
  public setDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.task.endDate = this.datepipe.transform(new Date(date));
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  //  Create new Task
  //  Create new Task
  public create() {
    let mapped: boolean = false;
    if (!this.task.title) {
      this.markLabelsAsInvalid = true;
    } else {
      this.markLabelsAsInvalid = false;
      this.task.status = "Not started";
      this.task.isSync = false;
      if (!this.task.subTasks) {
        this.task.subTasks = [];
      }
      this.task.isNew = true;
      if (this.currentMyProject.tasks) {
        // adding task id
        this.task._id = this.currentMyProject.tasks.length + 2;
      } else {
        this.task._id = 1;
      }
      this.task.projectId = this.currentMyProject._id;
      this.currentMyProject.lastUpdate = new Date();
      this.currentMyProject.tasks.push(this.task);
      this.currentMyProject.isEdited = true;
      this.storage.set('newcreatedproject', this.currentMyProject).then(cp => {
        this.currentMyProject = cp;
        // if (this.currentMyProject.createdType) {
        this.storage.get('latestProjects').then(myProjects => {
          if (myProjects) {
            if (myProjects.program)
              myProjects.program.forEach(programs => {
                if (programs.projects) {
                  programs.projects.forEach(project => {
                    if (project._id == cp._id) {
                      this.currentMyProject = project;
                      mapped = true;
                    }
                  });
                }
              });
          }
          if (!mapped) {
            myProjects[0].projects.forEach(function (myProject, i) {
              if (myProject._id == cp._id) {
                myProjects[0].projects[i] = cp;
              }
            });
          }
          this.storage.set('latestProjects', myProjects).then(success => {
            this.toastService.successToast('message.task_is_created');
          })
        })
      })
      this.task = {};
      this.prepareForm();
    }
  }
  // save project
  public save() {
    if (this.from != 'pd') {
      this.showpopup = true;
    } else {
      this.navigateToProjectViewScreen();
    }
  }
  public closepopup() {
    this.showpopup = false;
  }
  // Navigate to project view screen
  public navigateToProjectViewScreen() { 
    this.closepopup();
    this.storage.set('projectToBeView', this.currentMyProject).then(project => {
      this.router.navigate(['/project-view/project-detail/my_projects'])
    })
  }

  // navigate to task detail screen
  navigateTaskView(task) {
    this.storage.set('cTask', task).then(ct => {
      this.router.navigate(['/project-view/current-task', task._id, this.from]);
    });
  }
  // allow user to edit the values
  public allowEdit(field) {
    switch (field) {
      case 'title': {
        this.editTitle = true;
        break;
      }
    }
  }
  // disable the edit option, once user click outside the input field.
  public blockEdit(field) {
    switch (field) {
      case 'title': {
        if (this.currentMyProject.title) {
          this.editTitle = false;
          this.markLabelsAsInvalid = false;
        } else {
          this.markLabelsAsInvalid = true;
        }
        this.updateProject();
        break;
      }
    }
  }
  // After editing update the project with new values.
  updateProject() {
    this.currentMyProject.isEdited = true;
    this.currentMyProject.lastUpdate = new Date();
    this.storage.set('newcreatedproject', this.currentMyProject).then(cp => {
      this.currentMyProject = cp;
      this.storage.get('latestProjects').then(myProjects => {
        if (myProjects) {
          if (myProjects.program)
            myProjects.program.forEach(programs => {
              if (programs.projects) {
                programs.projects.forEach(project => {
                  if (project._id == cp._id) {
                    project = cp;
                    this.storage.set('latestProjects', myProjects).then(success => {
                    })
                  }
                });
              }
            });
          // myProjects[0].projects.forEach(myProject => {
          //   if (myProject._id == cp._id) {
          //     myProject.title = cp.title;
          //     myProject.tasks = cp.tasks;
          //     this.storage.set('latestProjects', myProjects).then(success => {
          //       this.homeService.loadActiveProjects();
          //     })
          //   }
          // });
        }
      })
    })
  }
  ngOnDestroy() {
    this.showpopup = false;
  }
}