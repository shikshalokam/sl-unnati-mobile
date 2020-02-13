import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateProjectService } from '../create-project/create-project.service';
import { CreateTaskService } from '../create-task/create-task.service';
import * as moment from 'moment';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common'
import { ToastService } from '../toast.service'
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})
export class ProjectDetailPage {
  project;
  back;
  category;
  files: any;
  startDate;
  isValidDate;
  tasksLength = 0;
  endDate;
  projectId;
  markLabelsAsInvalid: boolean = false;
  editGoal: boolean = false;
  editTitle: boolean = false;
  statuses = [
    { title: 'Not started' },
    { title: 'In Progress' },
    { title: 'Completed' }
  ];
  constructor(
    public storage: Storage,
    public route: ActivatedRoute,
    public createProjectService: CreateProjectService,
    public router: Router,
    public datePicker: DatePicker,
    public datepipe: DatePipe,
    public taskService: CreateTaskService,
    public toastService: ToastService
  ) {
    route.params.subscribe(param => {
      if (param.cat) {
        this.category = param.cat;
        if (this.category == 'my-projects' || this.category == 'active-projects' || this.category == 'all-projects' || this.category == 'projectsList') {
          this.back = 'project-view/projects';
        } else if (this.category == 'schools') {
          localStorage.setItem('entityKey', this.project.entityId);
          this.back = 'project-view/school-task-report/' + this.project.entityId + '/school';
        } else {
          this.back = 'project-view/category/' + this.category;
        }
      }
    })
  }
  ionViewDidEnter() {
    this.getProject();
  }
  getProject() {
    let myProjects: any;
    let projectFound;
    this.storage.get('myprojects').then(myprojects => {
      myProjects = myprojects;
    })
    this.storage.get('projectToBeView').then(project => {
      let completed = 0;
      let notStarted = 0;
      this.tasksLength = 0;
      let inProgress = 0;
      if (myProjects) {
        myProjects.forEach(myProject => {
          if (myProject._id === project._id) {
            projectFound = myProject;
          }
        });
        if (projectFound) {
          project = projectFound;
        }
      }
      project.tasks.forEach(task => {
        if (!task.isDeleted) {
          this.tasksLength = this.tasksLength + 1;
        }
        // set the project status if project is started
        if (project.isStarted) {
          if (task.status == 'Not started' || task.status == 'not yet started') {
            notStarted = notStarted + 1;
          } else if (task.status == 'Completed' || task.status == 'completed') {
            completed = completed + 1;
          } else if (task.status == 'In Progress' || task.status == 'in progress') {
            inProgress = inProgress + 1;
          }
          if (project.tasks.length === notStarted) {
            project.status = 'Not started';
          }
          if (project.tasks.length === completed) {
            project.status = 'Completed';
          }
          if (inProgress > 0 || completed != project.tasks.length) {
            project.status = 'In Progress';
          }
        }
      });

      if (project.status == 'not yet started') {
        project.status = 'Not started';
      }
      if (project.status == 'not yet started') {
        project.status = 'Not started';
      }
      this.project = project;
      this.sortTasks();
    })
  }
  // Copy the template project into my project
  public copyTemplate() {
    this.projectId = '';
    this.project.isStarted = true;
    this.project.status = 'In Progress';
    this.project.startDate = new Date();
    if (this.category != 'my_projects') {
      this.project.createdType = "by reference";
      this.project.lastUpdate = new Date();
      this.project.isNew = true;
      this.project.templateId = this.project._id;
      if (this.project.tasks) {
        let pId = this.project._id;
        this.project.tasks.forEach(function (task, i) {
          if (!task._id) {
            task._id = i + 1;
            task.isNew = true;
          }
          task.projectId = pId;
          task.status = 'Not started'
          if (task.subTasks) {
            task.subTasks.forEach(subtask => {
              if (!subtask._id) {
                subtask.isNew = true;
                subtask._id = task.subTasks.length + 1;
                subtask.status = "Not started";
              }
            });
          } else {
            task.subTasks = [];
          }
        })
      }
      this.storage.set('projectToBeView', this.project).then(project => {
        this.project = project;
        this.createProjectService.insertIntoMyProjects(this.project).then(data => {
          this.project.isStarted = true;
          this.category = 'my_projects';
        })
      })
    } else {
      this.project.lastUpdate = new Date();
      this.createProjectService.updateByProjects(this.project);
      this.storage.set('projectToBeView', this.project).then(project => {
        this.project = project;
      })
    }
  }
  public navigateToResources() {
    this.router.navigate(['/project-view/courses', this.category]);
  }
  public addTask() {
    this.router.navigate(['/project-view/create-task', this.project._id, "pd"]);
  }
  public navigateToFiles() {
    this.router.navigate(['/project-view/files', this.project._id]);

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
            this.checkDate();
          }
        }
        this.createProjectService.updateByProjects(this.project);
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
      let startDate = moment([sYear, sMonth, sDay]);
      let endDate = moment([eYear, eMonth, eDay]);
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
      this.updateTask();
    } else {
      this.isValidDate = false;
    }
  }

  // allow user to edit
  public allowEdit(field) {
    switch (field) {
      case 'goal': {
        this.editGoal = true;
        break;
      }
      case 'title': {
        this.editTitle = true;
        break;
      }
    }
  }

  // disable edit option
  public blockEdit(field) {
    switch (field) {
      case 'goal': {
        if (this.project.goal) {
          this.editGoal = false;
          this.markLabelsAsInvalid = false;
        } else {
          this.markLabelsAsInvalid = true;
        }
        break;
      }
      case 'title': {
        if (this.project.title) {
          this.editTitle = false;
          this.markLabelsAsInvalid = false;
        } else {
          this.markLabelsAsInvalid = true;
        }
        break;
      }
    }
    this.updateTask();
  }

  // update the task
  public updateTask() {
    this.project.lastUpdate = new Date();
    this.createProjectService.updateByProjects(this.project);
  }

  // navigate to view task
  public taskView(task) {
    if (this.project.isStarted) {
      this.storage.set('newcreatedproject', this.project).then(cmp => {
        task.projectStarted = this.project.isStarted;
        this.storage.set('cTask', task).then(ct => {
          this.router.navigate(['/project-view/current-task', task._id, 'pd']);
        });
      })
    }
  }

  // mark the task as deleted
  public delete(task) {
    task.isDeleted = true;
    this.storage.set('cTask', task).then(ct => {
      this.updateCurrentProject(ct);
      this.toastService.successToast('message.task_is_deleted');
    })
  }
  // update project with all changes made.
  public updateCurrentProject(ct) {
    this.project.lastUpdate = new Date();
    this.createProjectService.updateByProjects(this.project);
  }
  public sortTasks() {
    let today = this.datepipe.transform(new Date(), "MMM dd, yyyy");
    let tasksWithEndDate = [];
    let tasksWithoutEndDate = [];
    this.project.tasks.forEach(task => {
      if (task.endDate && !task.isDeleted) {
        if (task.endDate >= today) {
          tasksWithEndDate.push(task);
        } else {
          tasksWithoutEndDate.push(task);
        }
      } else {
        tasksWithoutEndDate.push(task);
      }
    });
    tasksWithEndDate.sort((a, b) => {
      return <any>new Date(a.endDate) - <any>new Date(b.endDate);
    });
    this.project.tasks = tasksWithEndDate.concat(tasksWithoutEndDate);
  }
}
