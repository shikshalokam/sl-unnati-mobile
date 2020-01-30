import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TasksPage } from '../tasks/tasks.page';
@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.page.html',
  styleUrls: ['./task-board.page.scss'],
})
export class TaskBoardPage {
  activeTab = 'ongoing';
  back = "/project-view/home";
  ongoing: any = [];
  past: any = [];
  constructor(
    public storage: Storage
  ) { }

  ionViewDidEnter() {
    this.getProjects();
  }
  public getProjects() {
    this.ongoing = [];
    this.past = [];
    this.storage.get('myprojects').then(projects => {
      if (projects) {
        projects.forEach(project => {
          let count = 0;
          if (project.tasks && project.tasks.length > 0) {
            project.tasks.forEach(task => {
              if (task.status == 'Completed' || task.status == 'completed') {
                if (count == 0) {
                  this.ongoing.push(task);
                  count++;
                } else {
                  this.past.push(task);
                }
              } else {
                this.ongoing.push(task);
              }
            });
          }
        });
      }
    })
  }
  public selectTab(tab) {
    this.activeTab = tab;
  }
}