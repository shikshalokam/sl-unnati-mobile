import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';
import {LocalKeys} from '../shared-module/localstorage-keys';
@Component({
  selector: 'app-active-projects',
  templateUrl: './active-projects.page.html',
  styleUrls: ['./active-projects.page.scss'],
})
export class ActiveProjectsPage implements OnInit {
  projectList;
  myProjects;
  constructor(
    public storage: Storage,
    public router:Router
  ) {
  }

  ngOnInit() {
  }
  public getProjects() {
    this.storage.get(LocalKeys.allProjects).then(projects => {
      this.projectList = projects;
    });
  }
  
  public projectView(project) {
    this.storage.set(LocalKeys.projectToBeView, project).then(project => {
      this.router.navigate(['/project-view/project-detail', 'active-projects'])
    })
  }
}
