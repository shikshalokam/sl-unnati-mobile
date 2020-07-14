import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalKeys } from '../core-module/constants/localstorage-keys';

@Component({
  selector: 'app-library-search',
  templateUrl: './library-search.page.html',
  styleUrls: ['./library-search.page.scss'],
})
export class LibrarySearchPage implements OnInit {
  projects = [];
  back = "/project-view/library";
  tiles = [
    { title: "teacher", icon: 'assets/images/libraryTiles/teacher.png', value: 'teacher' },
    { title: "students", icon: 'assets/images/libraryTiles/students.png', value: 'students' },
    { title: "community", icon: 'assets/images/libraryTiles/community.png', value: 'community' },
    { title: "school process", icon: 'assets/images/libraryTiles/sp.png', value: 'school_process' },
    { title: "infrastructure", icon: 'assets/images/libraryTiles/infrastructure.png', value: 'infrastructure' },
    { title: "education leader", icon: 'assets/images/libraryTiles/el.png', value: 'education_leader' },
    { title: "other", icon: 'assets/images/libraryTiles/others.png', value: 'other' }
  ]
  constructor(public storage: Storage) { }

  ngOnInit() {
    this.prepareDataToSearch();
  }

  public prepareDataToSearch() {
    this.storage.get(LocalKeys.allProjects).then(allProjects => {
      console.log(allProjects);
      allProjects.forEach(programsList => {
        programsList.projects.forEach(project => {
          if (project.createdType) {
            console.log(project.createdType, "project.createdType");
            project.icon = "assets/images/libraryTiles/myprojects.png";
            console.log(project, "projectsss ss");
            this.projects.push(project);
          }
        })
        // programsList.projects.sort((a, b) => {
        //   if (!b.lastUpdate) {
        //     b.lastUpdate = b.lastSync;
        //   }
        //   if (!a.lastUpdate) {
        //     a.lastUpdate = a.lastSync;
        //   }
        //   return <any>new Date(b.lastUpdate) - <any>new Date(a.lastUpdate);
        // });
      });
      // this.getMyProjects(allProjects);
      console.log(this.projects, "myprojects");
    })

    this.storage.get(LocalKeys.templates).then(templates => {
      this.tiles.forEach(tile => {
        console.log(templates[tile.value], "templates[tile.value]");
        if (templates[tile.value]) {
          templates[tile.value].forEach(element => {
            element.icon = tile.icon;
            this.projects.push(element);
          });
        }
      });
      console.log(this.projects, "templates");
    })
  }

  public getMyProjects(allProjects) {
    allProjects.forEach(programsList => {
      programsList.projects.forEach(project => {
        if (project.createdType) {
          console.log(project.createdType, "project.createdType");
          project.icon = "assets/images/libraryTiles/myprojects.png";
          console.log(project, "projectsss ss");
        }
      })
    });
  }

  public viewProject(project) {
    console.log(project, "project");
  }
}
