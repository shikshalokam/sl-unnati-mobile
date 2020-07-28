import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalKeys } from '../core-module/constants/localstorage-keys';
import { ProjectService } from '../project-view/project.service';

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
  searchInput;
  showSkeleton: boolean = true;
  skeletons = [{}, {}, {}, {}, {}];
  constructor(
    public storage: Storage,
    public projectService: ProjectService
  ) { }

  ionViewDidEnter() {
    this.projectService.setTitle("open-tasks");
    this.searchInput = '';
    this.activeTab = 'ongoing';
    this.getProjects();
  }
  public getProjects() {
    this.ongoing = [];
    this.past = [];
    this.storage.get(LocalKeys.allProjects).then(projects => {
      this.showSkeleton = true;
      projects.forEach(programsList => {
        if (programsList.projects) {
          programsList.projects.forEach(project => {
            let count = 0;
            if (!project.isDeleted && project.isStarted && project.tasks && project.tasks.length > 0) {
              project.tasks.forEach(task => {
                task.status = task.status.toLowerCase()
                if (task.status == 'completed') {
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
          this.showSkeleton = false;
        }
      });
    })
  }
  public selectTab(tab) {
    this.showSkeleton = true;
    this.activeTab = tab;
    this.showSkeleton = false;
  }
}