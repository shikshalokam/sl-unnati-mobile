import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NetworkService } from '../network.service';
import { Network } from '@ionic-native/network/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-subtasks',
  templateUrl: './subtasks.page.html',
  styleUrls: ['./subtasks.page.scss'],
})
export class SubtasksPage implements OnInit {
  public id;
  public connected;
  public back = 'project-view/task-view';
  public tasks: any = [];
  public language: string = this.translateService.currentLang;
  constructor(public tasksService: TasksService,
    public storage: Storage, 
    public modalController: ModalController, 
    public network: Network, 
    public translateService: TranslateService, 
    public route: ActivatedRoute, 
    public router: Router, 
    public networkService: NetworkService ) {
    if (localStorage.getItem('networkStatus') != null) {
      this.connected = localStorage.getItem('networkStatus');
    } else {
      this.connected = false;
    }
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.tasksService.emit.subscribe(value => {
      this.storage.get('currentTask').then(currentTask => {
        if (typeof currentTask == "string") {
          currentTask = JSON.parse(currentTask);
        }
        this.tasks = currentTask.subTasks;
      })
    });
    this.networkService.emit.subscribe(value => {
      this.connected = value;
      localStorage.setItem('networkStatus', this.connected);
    });
  }

  ngOnInit() {
    if (localStorage.getItem('networkStatus') != null) {
      this.connected = localStorage.getItem('networkStatus');
    } else {
      this.connected = false;
    }
    this.getTasks();
  }

  ionViewDidEnter() {
    this.getTasks();
  }
  // Back button
  public goBack() {
    let pid = localStorage.getItem("id");
    this.router.navigateByUrl('project-view/task-view');
  }

  //Toggle menu
  public toggleSection(index) {
    this.tasks[index].open = !this.tasks[index].open;
  }

  // Create task
  async createTask() {
    // const modal = await this.modalController.create({
    //   component: EditTaskPage,
    //   componentProps: {
    //     title: "Create Sub task",
    //   }
    // });
    // modal.onDidDismiss()
    //   .then((data) => {
    //     this.getTasks();
    //     if (data.data != undefined) {
    //       data.data.completionDate = new Date(data.data.completionDate);
    //       this.tasks.push(data.data);
    //       //this.successToast('Task is created.');
    //     }
    //   });
    // return await modal.present();
  }

  //Change status of task
  public changeStatus(id, status) {
    this.tasks.forEach(task => {
      if (task.id == id) {
        task.status = status;
      }
    });
  }

  //edit Task
  async editTask(id) {
    // let taskToBeEdit;
    // this.tasks.forEach(task => {
    //   if (task.id == id) {
    //     taskToBeEdit = task;
    //   }
    // });
    // const modal = await this.modalController.create({
    //   component: EditTaskPage,
    //   componentProps: {
    //     editTask: taskToBeEdit,
    //     title: "Edit Task",
    //   }
    // });
    // modal.onDidDismiss()
    //   .then((data) => {
    //     this.getTasks();
    //     if (data.data != undefined && data.data.name != null) {
    //       data.data.completionDate = new Date(data.data.completionDate);
    //       //this.successToast('Task is edited.');
    //     }
    //   });
    // return await modal.present();
  }

  // get Sub tasks
  public getTasks() {
    this.storage.get('currentTask').then(currentTask => {
      this.tasks = currentTask.subTasks;
    })
  }

  // navigate to sub tasks view.
  public navigateToView(subTask) {
    this.storage.set('currentSubtask', subTask).then(data => {
      this.router.navigateByUrl('/subtask-view');
    })
  }
}