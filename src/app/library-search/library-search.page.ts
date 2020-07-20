import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LocalKeys } from '../core-module/constants/localstorage-keys';
import { Router } from '@angular/router';
import { ToastService } from '../toast.service';
@Component({
  selector: 'app-library-search',
  templateUrl: './library-search.page.html',
  styleUrls: ['./library-search.page.scss'],
})
export class LibrarySearchPage implements OnInit {
  projects = [];
  back = "/project-view/library";
  searchInput = '';
  title = "Search";
  tiles = [
    { title: "teacher", icon: 'assets/images/libraryTiles/teacher.png', value: 'Teacher' },
    { title: "students", icon: 'assets/images/libraryTiles/students.png', value: 'Student' },
    { title: "community", icon: 'assets/images/libraryTiles/community.png', value: 'Community' },
    { title: "school process", icon: 'assets/images/libraryTiles/sp.png', value: 'SchoolProcess' },
    { title: "infrastructure", icon: 'assets/images/libraryTiles/infrastructure.png', value: 'infrastructure' },
    { title: "education leader", icon: 'assets/images/libraryTiles/el.png', value: 'EducationLeader' },
    { title: "other", icon: 'assets/images/libraryTiles/others.png', value: 'Other' }
  ]
  constructor(public storage: Storage,
    public toastService: ToastService,
    public router: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.projects = [];
    this.searchInput = '';
    this.toastService.presentLoading('Loading, please wait');
    this.prepareDataToSearch();
  }
  public prepareDataToSearch() {
    let data = {
      category: 'My projects',
      icon: "assets/images/libraryTiles/myprojects.png",
      projects: []
    };
    this.storage.get(LocalKeys.allProjects).then(allProjects => {
      allProjects.forEach(programsList => {
        programsList.projects.forEach(project => {
          if (project.createdType) {
            project.icon = "assets/images/libraryTiles/myprojects.png";
            data.projects.push(project);
          }
        })
      });
      this.projects.push(data);
    })
    this.storage.get(LocalKeys.templates).then(templates => {
      this.tiles.forEach(tile => {
        if (templates[tile.value]) {
          let data = {
            category: tile.title,
            icon: tile.icon,
            projects: []
          };
          templates[tile.value].forEach(element => {
            element.icon = tile.icon;
            data.projects.push(element);
          });
          this.projects.push(data);
        }
      });
    })
  }
  public viewProject(project) {
    this.storage.set(LocalKeys.projectToBeView, project).then(project => {
      this.router.navigate(['/project-view/project-detail', 'search']);
    })
  }
}
