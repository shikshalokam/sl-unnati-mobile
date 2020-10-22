import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryViewService } from './category.view.service';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../api/api';
import { AppConfigs } from '../core-module/constants/app.config';
import { PopoverController } from '@ionic/angular';
import { LocalKeys } from '../core-module/constants/localstorage-keys';
import { PopoverComponent } from '../shared-module/components/popover/popover.component';
import { environment } from 'src/environments/environment';
@Component({
  selector: "app-category-view",
  templateUrl: "./category-view.page.html",
  styleUrls: ["./category-view.page.scss"],
})
export class CategoryViewPage {
  back = "project-view/library";
  projects = [];
  searchInput;
  environment;
  programId;
  searchProjects;
  templates;
  from;
  categoryHead;
  catType;
  showSkeleton: boolean = false;
  skeletons = [{}, {}, {}, {}, {}, {}];
  menus = [{
    title: 'Delete',
    value: 'deleteProject',
    icon: 'trash'

  },
  {
    title: 'Share',
    value: 'shareProject',
    icon: 'share'
  }
  ]
  constructor(public rout: ActivatedRoute,
    public categaryService: CategoryViewService,
    public storage: Storage,
    public apiProvider: ApiProvider,
    public router: Router,
    public popoverController: PopoverController
  ) {
    categaryService.deleteEvent.subscribe((value) => {
      if (this.catType == "my_projects") {
        this.categaryService.getMyProjects().then(
          (myProjects: any) => {
            if (myProjects) {
              myProjects.forEach((programsList) => {
                programsList.projects.sort((a, b) => {
                  if (!b.lastUpdate) {
                    b.lastUpdate = b.lastSync;
                  }
                  if (!a.lastUpdate) {
                    a.lastUpdate = a.lastSync;
                  }
                  return (
                    <any>new Date(b.lastUpdate) - <any>new Date(a.lastUpdate)
                  );
                });
              });
              this.projects = myProjects;
            }
          },
          (error) => {
            this.showSkeleton = false;
          }
        );
      }
    });
    rout.params.subscribe((param) => {
      this.searchProjects = "";
      this.searchInput = "";
      this.catType = param.cat;
      if (param.from) {
        this.from = param.from;
        if (this.from == "home") {
          this.back = "project-view/home";
        }
      }
      switch (param.cat) {
        case "my_projects": {
          this.categoryHead = {
            icon: "assets/images/libraryTiles/myprojects.png",
            title: "my projects",
          };
          this.getMyProjects();
          break;
        }
        case "teacher": {
          this.categoryHead = {
            icon: "assets/images/libraryTiles/teacher.png",
            title: "teacher",
          };
          this.getTemplates("Teacher");
          break;
        }
        case "students": {
          this.categoryHead = {
            icon: "assets/images/libraryTiles/students.png",
            title: "students",
          };
          this.getTemplates("Student");
          break;
        }
        case "community": {
          this.categoryHead = {
            icon: "assets/images/libraryTiles/community.png",
            title: "community",
          };
          this.getTemplates("Community");
          //statements;
          break;
        }
        case "school_process": {
          //statements;
          this.categoryHead = {
            icon: "assets/images/libraryTiles/sp.png",
            title: "school process",
          };
          this.getTemplates("SchoolProcess");
          break;
        }
        case "infrastructure": {
          this.categoryHead = {
            icon: "assets/images/libraryTiles/infrastructure.png",
            title: "infrastructure",
          };
          this.getTemplates("infrastructure");
          //statements;
          break;
        }
        case "education_leader": {
          this.categoryHead = {
            icon: "assets/images/libraryTiles/el.png",
            title: "education leader",
          };
          this.getTemplates("EducationLeader");
          break;
        }
        case "other": {
          this.categoryHead = {
            icon: "assets/images/libraryTiles/others.png",
            title: "others",
          };
          this.getTemplates("Other");
          break;
        }
      }
    });
  }
  bgcolor = "#f7f7f7";
  public getMyProjects() {
    this.showSkeleton = true;
    let defaultProgram = [];
    let otherPrograms = [];
    this.environment = AppConfigs.currentEnvironment;
    AppConfigs.environments.forEach(env => {
      if (this.environment === env.name) {
        this.programId = env.programId;
      }
    });
    this.storage.get(LocalKeys.allProjects).then(projects => {
      if (projects) {
        projects.forEach(programsList => {
          if (programsList.programs._id == this.programId) {
            programsList.projects.sort((a, b) => {
              return <any>new Date(b.lastUpdate) - <any>new Date(a.lastUpdate);
            });
            defaultProgram.push(programsList);
          } else {
            programsList.projects.sort((a, b) => {
              return <any>new Date(b.lastUpdate) - <any>new Date(a.lastUpdate);
            });
            otherPrograms.push(programsList);
          }
        })
        defaultProgram = defaultProgram.concat(otherPrograms);
        this.projects = defaultProgram;
        this.showSkeleton = false;
      }
      this.showSkeleton = false;
    }, error => {
      this.showSkeleton = false;
    })
  }

  public projectView(project) {
    this.storage.set(LocalKeys.projectToBeView, project).then(project => {
      this.router.navigate(['/project-view/project-detail', this.catType])
    })
  }
  public getTemplates(type) {
    this.showSkeleton = true;
    this.categaryService.getTemplates(type).then(
      (templates) => {
        if (templates) {
          this.templates = templates;
        }
        this.showSkeleton = false;
      },
      (error) => {
        this.showSkeleton = false;
      }
    );
  }
  async showMenu(ev: any, project) {
    let pro = project;
    pro.share = true;
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { project: pro, menus: this.menus },
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }
}
