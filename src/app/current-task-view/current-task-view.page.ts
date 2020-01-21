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
  showpopup: boolean = false;
  enableMarkButton: boolean = false;
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
      this.enableMarkTaskComplete(task);
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
  public enableMarkTaskComplete(task) {
    let subTasksCompleted = 0;
    task.subTasks.forEach(subtask => {
      if (subtask.status === 'Completed') {
        subTasksCompleted + 1;
      }
    });
    if (subTasksCompleted === task.subTasks.length) {
      this.enableMarkButton = true;
    }
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
          this.subtask.endDate = this.datepipe.transform(new Date(date));
          console.log('96');
          this.updateTask();
        } else if (type == 'task') {
          this.task.endDate = this.datepipe.transform(new Date(date));
          console.log('99');
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
      console.log(this.task,"this. task after creating sub tasks");
      this.enableMarkTaskComplete(this.task);
      this.subtask = {};
    }
  }

  public updateCurrentProject(ct) {
    this.createProjectService.UpdateCurrentMyProject(ct).then(currentMyProject => {
      //  this.getTask();
    })
  }
  public markTaskAsCompleted() {
    this.showpopup = true;
    this.task.status = 'Completed';
    console.log('tasksssssss');
    if (this.task.subTasks) {
      this.task.subTasks.forEach(subtask => {
        subtask.status = 'Completed';
      });
    }

    let task: any = this.task;
    console.log(task, "task variable");
    // task.status = "Completed";
    // task.title =this.task.title;
    // task.subTasks = this.task.subTasks;
    // task.endDate = this.task.endDate;
    // task.isNew = this.task.
    console.log(task, "00000 task");
    // this.updateTask1();
    this.task = task;
    console.log(this.task, "this.task 000 00 0 0  0 0 0 0");
    this.storage.set('cTask', task).then(updatedTask => {
      console.log(this.task.status, "status ==", updatedTask.status)
      this.updateCurrentProject(updatedTask);
    })
    // this.storage.set('cTask', this.task).then(ct => {
    //   console.log(ct, "ct");
    //   this.storage.get('cTask').then(dd => {
    //     console.log(dd);
    //   })
    //   this.updateCurrentProject(ct);
    //   this.subtask = {};
    //   // if (this.task.projectStarted) {
    //   //   this.router.navigate(['/project-view/project-detail', this.parameter]);
    //   // } else {
    //   //   this.router.navigate(['/project-view/create-task', this.task.projectId, this.from]);
    //   // }
    // })
  }

  public selectedStatus(event) {
    console.log(this.task.status, "this.task.status 181");
    if (this.task.status != 'Completed') {
      this.task.status = event.detail.value;
      console.log('182');
      this.updateTask();
    }
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
    console.log('223');
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
    console.log('250');
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
    console.log('264');
    this.updateStatus();
  }

  public updateStatus() {
    console.log(this.task.status, "this.task.status 270");
    if (this.task.status != 'Completed' || this.task.status != 'completed') {
      this.enableMarkTaskComplete(this.task);
      let notStarted = 0, inProgress = 0, completed = 0;
      this.task.subTasks.forEach(subTask => {
        subTask.status == 'Not started' ? notStarted++
          : subTask.status == 'In Progress' ? inProgress++
            : completed++;
      });
      this.task.subTasks.length === notStarted ? this.task.status = 'Not started'
        : this.task.subTasks.length === completed ? this.task.status = 'Completed'
          : this.task.status = 'In Progress';
      console.log(this.task, "tasks status updated")
      this.storage.set('cTask', this.task).then(ct => {
        this.task = ct;
        this.updateCurrentProject(ct);
      })
    } else {
      if (this.task.subTask && this.task.subTask.length > 0) {
        this.task.subTask.forEach(subtask => {
          subtask.status = 'Completed';
        });
        this.storage.set('cTask', this.task).then(ct => {
          this.task = ct;
          this.updateCurrentProject(ct);
        })
      }
    }
  }
  close() {
    this.showpopup = false;
    if (this.task.projectStarted) {
      this.router.navigate(['/project-view/project-detail', this.parameter]);
    } else {
      this.router.navigate(['/project-view/create-task', this.task.projectId, this.from]);
    }
  }
}