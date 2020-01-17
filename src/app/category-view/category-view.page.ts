import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryViewService } from './category.view.service';
import {Storage} from '@ionic/storage';
import {ApiProvider} from '../api/api';
@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.page.html',
  styleUrls: ['./category-view.page.scss'],
})
export class CategoryViewPage implements OnInit {
  back = 'project-view/library'
  projects;
  searchInput;
  templates;
  categoryHead;
  catType;
  constructor(public rout: ActivatedRoute, 
    public categaryService: CategoryViewService,
    public storage:Storage,
    public apiProvider:ApiProvider,
    public router:Router) {
    rout.params.subscribe(param => {
      this.catType =param.cat;
      switch (param.cat) {
        case 'my_projects': {
          //statements; 
          this.categoryHead = {
            icon:'assets/images/libraryTiles/myprojects.png',
            title:'my projects'
          }
          this.getMyProjects();
          break;
        }
        case 'teacher': {
          //statements; 
          this.categoryHead = {
            icon:'assets/images/libraryTiles/teacher.png',
            title:'teacher'
          }
          this.getTemplates('Teacher');
          break;
        }
        case 'students': {
          //statements; 
          this.categoryHead = {
            icon:'assets/images/libraryTiles/students.png',
            title:'students'
          }
          this.getTemplates('Student');
          break;
        }
        case 'community': {
          this.categoryHead = {
            icon:'assets/images/libraryTiles/community.png',
            title:'community'
          }
          this.getTemplates('Community');
          //statements; 
          break;
        }
        case 'school_process': {
          //statements; 
          this.categoryHead = {
            icon:'assets/images/libraryTiles/sp.png',
            title:'school process'
          }
          this.getTemplates('SchoolProcess');
          break;
        }
        case 'infrastructure': {
          this.categoryHead = {
            icon:'assets/images/libraryTiles/infrastructure.png',
            title:'infrastructure'
          }
          this.getTemplates('infrastructure');
          //statements; 
          break;
        }
        case 'education_leader': {
          this.categoryHead = {
            icon:'assets/images/libraryTiles/el.png',
            title:'education leader'
          }
          this.getTemplates('EducationLeader');
          break;
        }
        case 'other': {
          this.categoryHead = {
            icon:'assets/images/libraryTiles/others.png',
            title:'others'
          }
          this.getTemplates('Other');
          break;
        }
      }
    })
  }
  bgcolor = '#f7f7f7';

  ionViewDidEnter() {
    if(this.catType == 'my_projects')
    {
      this.getMyProjects();
    }
  }
  ngOnInit() {
  }
  public getMyProjects() {
    this.categaryService.getMyProjects().then((myProjects:any) => {
      if (myProjects) {
        myProjects = this.getSortData(myProjects);
        // myProjects.sort((val1, val2)=> {return new Date(val2.lastUpdate) - new 
        //   Date(val1.lastUpdate)})
        myProjects.forEach(element => {
        });
        this.projects=myProjects;
      }
    })
  }
  getSortData(myProjects) {
    return myProjects.sort((a, b) => {
      return <any>new Date(b.lastUpdate) - <any>new Date(a.lastUpdate);
    });
  }
  public projectView(project)
  {
    this.storage.set('projectToBeView',project).then(project =>{
      this.router.navigate(['/project-view/project-detail',this.catType])
    })
  }
  public getTemplates(type)
  {
    this.categaryService.getTemplates(type).then(templates => {
      if (templates) {
        this.projects=templates;
      }
    })
  }
}