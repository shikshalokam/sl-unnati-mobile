import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NetworkService } from '../network.service';
import { TranslateService } from '@ngx-translate/core';
import { TasksService } from './tasks.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  public id;
  public tasks;
  public connected;
  public tasksList = [];
  public language: string = this.translate.currentLang;
  constructor(public storage: Storage,
    public router: Router,
    public modalController: ModalController,
    public tasksService: TasksService,
    public translate: TranslateService,
    public toastController: ToastController,
    public networkService: NetworkService,
    public screenOrientation: ScreenOrientation) {
    this.id = localStorage.getItem("id");
    if (localStorage.getItem('networkStatus') != null) {
      this.connected = localStorage.getItem('networkStatus');
    } else {
      this.connected = false;
    }
    this.tasksService.emit.subscribe(value => {
      this.storage.get('currentProject').then(data => {
        this.tasks = data.tasks;
      });
    });
    this.networkService.emit.subscribe(value => {
      this.connected = value;
      localStorage.setItem('networkStatus', this.connected);
      if (!this.connected) {
        this.networkService.networkErrorToast();
      }
    });
  }

  ionViewDidEnter() {
    this.connected = localStorage.getItem("networkStatus");
    if (!this.connected) {
      this.networkService.networkErrorToast();
    }
  }

  ngOnInit() {
    this.getTasks();
  }

  // Get Tasks
  public getTasks() {
    this.storage.get('currentProject').then(data => {
      this.tasks = data.tasks;
    });
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
    //     title: "Create Task",
    //   }
    // });
    // modal.onDidDismiss()
    //   .then((data) => {
    //     if (data.data != undefined) {
    //       data.data.completionDate = new Date(data.data.completionDate);
    //       this.storage.get('currentProject').then(data => {
    //         this.storage.set('currentProject', data).then(response => {
    //           this.tasks = response.tasks;
    //           this.storage.get('projects').then((data: any) => {
    //             this.tasksService.loadProject();
    //           })
    //         })
    //       })
    //       this.successToast('task_is_created');
    //     }
    //   });
    // return await modal.present();
  }

  // Success message
  async successToast(msg) {
    this.translate.get('task_is_created').subscribe((text: string) => {
      msg = text;
    });
    const toast = await this.toastController.create({
      message: msg,
      color: 'success',
      duration: 2000
    });
    toast.present();
  }

  //Change status of task
  public changeStatus(id, status) {
    this.tasks.forEach(task => {
      if (task.id == id) {
        task.status = status;
      }
    });
  }

  //Navigate to view and get current Task
  public navigateToView(id) {
    this.tasks.forEach(task => {
      if (id == task._id) {
        this.storage.set('currentTask', task).then(data => {
          this.router.navigateByUrl('/task-view');
        });
      }
    });
  }
  
  updateProjects(data) {
    this.storage.set('projects', data).then(data => {
    })
  }
}