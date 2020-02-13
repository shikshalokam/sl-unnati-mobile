import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateProjectService } from '../create-project/create-project.service';
import { ToastService } from '../toast.service'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-current-task-view',
  templateUrl: './current-task-view.page.html',
  styleUrls: ['./current-task-view.page.scss'],
})
export class CurrentTaskViewPage implements OnInit {
  createSubtask: FormGroup;
  back;
  file;
  imageUrl;
  remarks;
  fileUrl;
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
    public createProjectService: CreateProjectService,
    public toastService: ToastService,
    public camera: Camera) {
    route.params.subscribe(param => {
      this.from = param.from;
      this.id = param.id;
    })
  }
  ionViewDidEnter() {
    this.getTask();
    this.showpopup = false;
    this.enableMarkButton = false;
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

  //  Enable the mark task complete button based on subtasks status and if there is no subtasks it will enable by default
  public enableMarkTaskComplete(task) {
    if (task.subTasks && task.subTasks.length > 0) {
      let subTasksCompleted = 0;
      let count = 0;
      task.subTasks.forEach(subtask => {
          if (subtask.status === 'Completed' || subtask.status === 'completed') {
            subTasksCompleted + 1;
          }
      });
      if (subTasksCompleted === task.subTasks.length) {
        this.enableMarkButton = true;
      } else {
        this.enableMarkButton = false;
      }
    } else {
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
          this.updateTask();
        } else if (type == 'task') {
          this.task.endDate = this.datepipe.transform(new Date(date));
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
        subTask.endDate = this.datepipe.transform(new Date(date));
        this.upDateSubTask(subTask, 'update')
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
      this.enableMarkTaskComplete(this.task);
      this.subtask = {};
      this.toastService.successToast('message.subtask_is_created');
    }
  }

  public subtaskDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.subtask.endDate = this.datepipe.transform(new Date(date));
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  public updateCurrentProject(ct) {
    this.createProjectService.updateCurrentMyProject(ct).then(currentMyProject => {
      //  this.getTask();
    })
  }
  //  update the project after completing task.
  public updateProject(ct) {

    let updateProcess = "start";
    localStorage.setItem("updateProcess", updateProcess);
    this.createProjectService.updateCurrentMyProject(ct).then(currentMyProject => {
      setTimeout(() => {
        this.toastService.successToast('message.marked_as_completed');
        this.router.navigate(['/project-view/project-detail', this.parameter]);
      }, 300);
    })
  }
  public markTaskAsCompleted() {
    this.task.status = 'Completed';
    if (this.task.subTasks) {
      this.task.subTasks.forEach(subtask => {
        subtask.status = 'Completed';
      });
    }
    this.task.remarks = this.remarks;
    let task: any = this.task;
    this.task = task;
    this.storage.set('cTask', task).then(updatedTask => {
      this.updateProject(updatedTask);
      this.task = updatedTask;
      this.showpopup = false;
    })
  }
  // task status supdate
  public selectedStatus(event) {
    if (this.task.status != 'Completed') {
      this.task.status = event.detail.value;
      this.updateTask();
    }
  }
  //  edit task fields
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
      this.upDateSubTask(subtask, 'update');
    } else {
      subtask.allowEdit = true;
    }
  }
  subTaskEdit(subtask) {
    subtask.allowEdit = !subtask.allowEdit;
  }
  public selectedSubTaskStatus(event, subtask) {
    subtask.status = event.detail.value;
    this.upDateSubTask(subtask, 'update');
  }

  // Delete subtask
  public delete(subtask) {
    subtask.isDeleted = true;
    subtask.status = 'Completed'
    this.upDateSubTask(subtask, 'delete');
  }
  public updateTask() {
    this.updateStatus();
    this.storage.set('cTask', this.task).then(ct => {
      this.updateCurrentProject(ct);
      this.toastService.successToast('message.task_updated');
    })
  }

  // update subtasks in task
  public upDateSubTask(upDatedsubtask, type) {
    this.task.subTasks.forEach(function (subtask, i) {
      if (subtask._id == upDatedsubtask._id) {
        subtask = upDatedsubtask;
      }
    });
    this.updateStatus();
    if (type == "update") {
      this.toastService.successToast('message.subtask_updated');
    } else {
      this.toastService.successToast('message.subtask_is_deleted');
    }
  }

  public updateStatus() { 
    if (this.task.status != 'Completed' || this.task.status != 'completed') {
      this.enableMarkTaskComplete(this.task);
      let notStarted = 0, inProgress = 0, completed = 0;
      if (this.task.subTasks && this.task.subTasks.length > 0) {
        this.task.subTasks.forEach(subTask => {
            subTask.status == 'Not started' ? notStarted++
              : subTask.status == 'In Progress' ? inProgress++
                : completed++;
        });
        this.task.subTasks.length === notStarted ? this.task.status = 'Not started'
          : this.task.subTasks.length === completed ? this.task.status = 'Completed'
            : this.task.status = 'In Progress';
        if (this.task.status == 'Completed' || this.task.status == 'completed') {
          this.enableMarkButton = true;
        }
      }
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
          this.enableMarkTaskComplete(this.task);
          this.updateCurrentProject(ct);
        })
      } else {
        this.task.status = 'Completed';
        this.storage.set('cTask', this.task).then(ct => {
          this.task = ct;
          this.enableMarkTaskComplete(this.task);
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
  openPopup() {
    this.showpopup = true;
  }

  //  Converting Attachments into Base64
  selectedFile(imageInput: any, type) {
    let value;
    const file: File = imageInput.files[0];
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => {
      value = event.target.result.split(',');
      if (type == 'image') {
        this.imageUrl = value[1];
      } else {
        this.task.file = {
          url: event.target.result,
          name: this.file.name
        }
        this.toastService.successToast('message.file_uploaded');
      }
    };
    reader.readAsDataURL(file);
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 20,
      targetWidth: 600,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.task.imageUrl = imageData;
      this.toastService.successToast('message.image_uploaded');
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
}