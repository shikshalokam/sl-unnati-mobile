import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateProjectService } from '../create-project/create-project.service';
@Component({
  selector: 'app-current-task-view',
  templateUrl: './current-task-view.page.html',
  styleUrls: ['./current-task-view.page.scss'],
})
export class CurrentTaskViewPage implements OnInit {
  createSubtask: FormGroup;
  back;
  from;
  id;
  parameter;
  editGoal;
  subTaskTitle;
  editTitle;
  markLabelsAsInvalid: boolean = false;
  statuses = [
    { title: 'Not started' },
    { title: 'In Progress' },
    { title: 'Completed' }
  ];
  task;
  subtask: any = {}
  constructor(
    public storage: Storage,
    public datepipe: DatePipe,
    public datePicker: DatePicker,
    public router: Router,
    public route: ActivatedRoute,
    public createProjectService: CreateProjectService) {
    route.params.subscribe(param => {
      this.from = param.from;
      this.id = param.id;
    })
  }
  ionViewDidEnter() {
    this.getTask();
  }
  ngOnInit() {
  }
  getTask() {
    this.storage.get('cTask').then(task => {
      this.task = task;
      this.storage.get('myprojects').then(myProjects => {
        if (myProjects) {
          myProjects.forEach(project => {
            project.tasks.forEach(tasks => {
              if (tasks._id == task._id) {
                // this.task = tasks;
              }
            });
          });
        }
      })
      if (this.from == 'pd') {
        this.back = "project-view/project-detail";
        this.parameter = 'my_projects';
      } else {
        this.back = "project-view/create-task/" + this.task.projectId + '/' + this.from;
      }
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
        if (type == 'subtask') {
          this.subtask.endDate = this.datepipe.transform(new Date(date), "dd-MM-yyyy");
          this.updateTask();
        } else if (type == 'task') {
          this.task.endDate = this.datepipe.transform(new Date(date), "dd-MM-yyyy");
          this.updateTask();
        }
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  public setSubTaskDate(subTask) {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        subTask.endDate = this.datepipe.transform(new Date(date), "dd-MM-yyyy");
        this.upDateSubTask(subTask)
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  public addSubtask() {
    if (this.subtask.title) {
      this.subtask.status = 'Not started';
      if (this.task.subTasks) {
        this.subtask._id = this.task.subTasks.length + 2;
      } else {
        this.subtask._id = 1;
        this.task.subTasks = [];
      }
      this.subtask.isNew = true;
      this.task.subTasks.push(this.subtask);
      this.updateStatus();
      this.subtask = {};
    }
  }

  public updateCurrentProject(ct) {
    this.createProjectService.UpdateCurrentMyProject(ct).then(currentMyProject => {
      // this.getTask();
    })
  }
  public save() {
    this.storage.set('cTask', this.task).then(ct => {
      this.updateCurrentProject(ct);
      this.subtask = {};
      if (this.task.projectStarted) {
        this.router.navigate(['/project-view/project-detail', this.parameter]);
      } else {
        this.router.navigate(['/project-view/create-task', this.task.projectId, this.from]);
      }
    })
  }
  public selectedStatus(event) {
    this.task.status = event.detail.value;
    this.updateTask();
  }
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
      case 'subTaskTitle': {
        this.subTaskTitle = true;
        break;
      }
    }
  }
  public blockEdit(field) {
    switch (field) {
      case 'goal': {
        if (this.task.goal) {
          this.editGoal = false;
          this.markLabelsAsInvalid = false;
        } else {
          this.markLabelsAsInvalid = true;
        }
        break;
      }
      case 'title': {
        if (this.task.title) {
          this.editTitle = false;
          this.markLabelsAsInvalid = false;
        } else {
          this.markLabelsAsInvalid = true;
        }
        break;
      }
      case 'subTaskTitle': {
        if (this)
          this.subTaskTitle = false;
        break;
      }
    }
    this.updateTask();
  }

  subTaskEditBlock(subtask) {
    this.task.subTasks.forEach(subTask => {
      subTask.allowEdit = false;
    });
    if (subtask.title.length > 0) {
      this.subTaskTitle = false;
      subtask.allowEdit = false;
      this.upDateSubTask(subtask);
    } else {
      subtask.allowEdit = true;
    }
  }
  subTaskEdit(subtask) {
    subtask.allowEdit = !subtask.allowEdit;
  }
  public selectedSubTaskStatus(event, subtask) {
    subtask.status = event.detail.value;
    this.upDateSubTask(subtask);
  }
  public updateTask() {
    this.updateStatus();
    this.storage.set('cTask', this.task).then(ct => {
      this.updateCurrentProject(ct);
    })
  }
  // update subtasks in task
  public upDateSubTask(upDatedsubtask) {
    this.task.subTasks.forEach(function (subtask, i) {
      if (subtask._id == upDatedsubtask._id) {
        subtask = upDatedsubtask;
      }
    });
    this.updateStatus();
    // this.storage.set('cTask', this.task).then(ct => {
    //   this.updateCurrentProject(ct);
    //   this.subtask = {};
    // })
  }

  public updateStatus() {
    let notStarted = 0, inProgress = 0, completed = 0;
    this.task.subTasks.forEach(subTask => {
      subTask.status == 'Not started' ? notStarted++
        : subTask.status == 'In Progress' ? inProgress++
          : completed++;
    });
    this.task.subTasks.length === notStarted ? this.task.status = 'Not started'
      : this.task.subTasks.length === completed ? this.task.status = 'Completed'
        : this.task.status = 'In Progress';
    this.storage.set('cTask', this.task).then(ct => {
      this.task = ct;
      this.updateCurrentProject(ct);
    })
  }
}