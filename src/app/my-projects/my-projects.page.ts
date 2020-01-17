import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';
@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.page.html',
  styleUrls: ['./my-projects.page.scss'],
})
export class MyProjectsPage implements OnInit {
  projects;
  constructor(
    public storage: Storage,
    public router:Router
  ) { }
  ionViewDidEnter() {
    this.getMyProjects();
  }
  ngOnInit() {
  }
  public getMyProjects() {
    this.storage.get('myprojects').then(myprojects => {
      this.projects = myprojects;
    });
  }
  public projectView(project)
  {
    this.storage.set('projectToBeView',project).then(project =>{
      this.router.navigate(['/project-view/project-detail','my-projects'])
    })
  }
}
