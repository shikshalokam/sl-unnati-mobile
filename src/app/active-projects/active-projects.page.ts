import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';
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
  public getActiveProjects() {
    this.storage.get('myprojects').then(activeProjects => {
      this.myProjects = activeProjects;
    });
  }
  public getProjects() {
    this.storage.get('projects').then(projects => {
      this.projectList = projects;
    });
  }
  
  public projectView(project) {
    this.storage.set('projectToBeView', project).then(project => {
      this.router.navigate(['/project-view/project-detail', 'active-projects'])
    })
  }
}
