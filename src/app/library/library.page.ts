import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project-view/project.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  bgcolor = '#f7f7f7';
  searchInput = '';
  constructor(public router: Router,
    public projectService: ProjectService) { }
  back = "project-view/home";
  tiles = [
    { title: "my projects", icon: 'assets/images/libraryTiles/myprojects.png', value: 'my_projects' },
    { title: "teacher", icon: 'assets/images/libraryTiles/teacher.png', value: 'teacher' },
    { title: "students", icon: 'assets/images/libraryTiles/students.png', value: 'students' },
    { title: "community", icon: 'assets/images/libraryTiles/community.png', value: 'community' },
    { title: "school process", icon: 'assets/images/libraryTiles/sp.png', value: 'school_process' },
    { title: "infrastructure", icon: 'assets/images/libraryTiles/infrastructure.png', value: 'infrastructure' },
    { title: "education leader", icon: 'assets/images/libraryTiles/el.png', value: 'education_leader' },
    { title: "other", icon: 'assets/images/libraryTiles/others.png', value: 'other' }
  ]
  ngOnInit() {

  }
  ionViewDidEnter() {
    this.projectService.setTitle('library');
  }
  public navigateToCategoryView(category) {
    this.router.navigate(['/project-view/category', category])
  }
}

