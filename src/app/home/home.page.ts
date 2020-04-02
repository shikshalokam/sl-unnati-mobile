import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';
import { ProjectService } from '../project-view/project.service';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { CategoryViewService } from '../category-view/category.view.service';
import { Login } from '../login.service';
import { ProjectsService } from '../projects/projects.service';
import { ReportsService } from '../reports/reports.service';
import { MyschoolsService } from '../myschools/myschools.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { DatePipe } from '@angular/common';
import { ToastService } from '../toast.service';
import { UpdateProfileService } from '../update-profile/update-profile.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  connected: any = false;
  loggedIn: boolean = false;
  header;
  body;
  button;
  isActionable;
  myProjects;
  showUpdatePop: boolean = false;
  type = 'quarter';
  count = 100;
  page = 1;
  libraries = [{
    name: 'others',
    key: 'other'
  },
  {
    name: 'education leader',
    key: 'education_leader'
  }, {
    name: 'infrastructure',
    key: 'infrastructure'
  }, {
    name: 'school process',
    key: 'school_process'
  }, {
    name: 'community',
    key: 'community'
  }, {
    name: 'students',
    key: 'students'
  }, {
    name: 'teacher',
    key: 'teacher'
  }, {
    name: 'my projects',
    key: 'my_projects'
  }]
  tiles = [
    { title: "create project", icon: 'assets/images/homeTiles/createproject.png', url: '/project-view/create-project' },
    { title: "library", icon: 'assets/images/homeTiles/library.png', url: '/project-view/library' },
    { title: "open tasks", icon: 'assets/images/homeTiles/tasksclipboard.png', url: '' }, // /project-view/task-board
    { title: "reports", icon: 'assets/images/homeTiles/reports.png', url: '/project-view/my-reports/last-month-reports' }
  ]
  activeProjects = [];
  projectList;
  searchInput;
  showSkeleton: boolean = false;
  skeletons = [{}, {}, {}, {}, {}, {}];
  mySchools;
  constructor(
    public datepipe: DatePipe,
    public storage: Storage,
    public apiProvider: ApiProvider,
    public homeService: HomeService,
    public categoryViewService: CategoryViewService,
    public router: Router,
    public projectsService: ProjectsService,
    public login: Login,
    public screenOrientation: ScreenOrientation,
    public projectService: ProjectService,
    public translate: TranslateService,
    public networkService: NetworkService,
    public menuCtrl: MenuController,
    public reportsService: ReportsService,
    public mySchoolsService: MyschoolsService,
    public toastService: ToastService,
    public updateProfile: UpdateProfileService) {
    this.menuCtrl.enable(true);
    // update profile pop handler
    homeService.localDataUpdated.subscribe(data => {
      this.getActiveProjects();
    })
    updateProfile.updatedUser.subscribe((status) => {
      let isPopUpShowen: any = localStorage.getItem('isPopUpShowen');
      if (isPopUpShowen == "null") {
        isPopUpShowen = false;
      }
      if (status == "Update" && !isPopUpShowen) {
        this.body = 'message.update_profile';
        this.header = 'message.confirm_your_details';
        this.button = 'button.update';
        this.isActionable = '/project-view/update-profile';
        this.showUpdatePop = true;
        let isPopUpShowen = localStorage.getItem('isPopUpShowen');
      } else {
        this.showUpdatePop = false;
      }
    })
    homeService.activeProjectLoad.subscribe(data => {
      if (data == 'activeProjectLoad') {
        this.getActiveProjects();
      }
    })
    this.networkService.emit.subscribe(value => {
      this.connected = value;
      this.connected = localStorage.getItem("networkStatus");
    });
    this.login.emit.subscribe((data: any) => {
      this.menuCtrl.enable(true);
    })

    this.networkService.emit.subscribe((value: any) => {
      translate.use(value);
    });
    this.menuCtrl.enable(true);
  }
  ionViewDidEnter() {
    this.searchInput = '';
    if (localStorage.getItem("token") != null) {
      this.menuCtrl.enable(true, 'unnati');
      this.getActiveProjects();
      this.setTitle('home_tab');
      this.connected = localStorage.getItem("networkStatus");
      //  this.splashScreen.hide();
      this.storage.get('templates').then(templates => {
        if (!templates) {
          this.getTemplates();
        }
      })
      this.storage.get('latestProjects').then(projects => {
        if (!projects) {
          this.getProjects();
        } else {
          this.getActiveProjects();
        }
      })
      this.getSchools();
    }
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
  }
  ngOnInit() {
    this.login.loggedIn('true');
    this.checkUser();
  }
  //  Check user
  public checkUser() {
    this.storage.get('token').then(data => {
      if (data) {
        this.loggedIn = true;
        this.menuCtrl.enable(true);
      } else {
        this.menuCtrl.enable(true);
        this.loggedIn = false;
      }
    })
  }
  // Set title for Tabs
  public setTitle(title) {
    this.projectService.setTitle(title);
  }
  //navigate to project Details page
  public navigateToDetails(project) {
    // localStorage.setItem("id", project._id);
    // this.storage.set('currentProject', project).then(data => {
    //   localStorage.setItem("from", 'home');
    //   this.router.navigate(['/project-view/detail', project._id, 'home']);
    //   this.projectService.setTitle(data.title);
    // })
    this.storage.set('projectToBeView', project).then(project => {
      this.router.navigate(['/project-view/project-detail', 'home'])
    })
  }
  public navigateToSchool(school) {
    localStorage.setItem('from1', 'home');
    this.router.navigate(['/project-view/school-task-report', school.entityId, school.name]);
  }
  public navigateToLibrary(category) {
    this.router.navigate(['/project-view/category', category, 'home'])
  }

  // get active projects
  public getActiveProjects() {
    this.showSkeleton = true;
    this.activeProjects = [];
    let ap = []
    let count = 0;
    this.storage.get('latestProjects').then(myProjects => {
      this.myProjects = myProjects;
      if (myProjects) {
        myProjects.forEach(programsList => {
          if (programsList) {
            console.log(programsList.programs, "programs")
            if (programsList.programs._id == '5e01da0c0c72d5597433ec7a') {
              console.log(programsList.projects, " programsList.projects");
              programsList.projects.sort((a, b) => {
                return <any>new Date(b.lastUpdate) - <any>new Date(a.lastUpdate);
              });
              programsList.projects.forEach(myProject => {
                if (count < 2) {
                  if ((myProject.createdType == 'by self' || myProject.createdType == 'by reference') && myProject.isStarted && !myProject.isDeleted) {
                    ap.push(myProject);
                    count = count + 1;
                  }
                }
              });
            }
          }
        });
        if (count == 0) {
          myProjects[0].projects.forEach(myProject => {
            if (count < 2) {
              if ((myProject.createdType == 'by self' || myProject.createdType == 'by reference') && myProject.isStarted && !myProject.isDeleted) {
                ap.push(myProject);
                count = count + 1;
              }
            }
          });
        }
        this.activeProjects = ap;
      }
      this.showSkeleton = false;
    }, error => {
      this.showSkeleton = false;
    })
  }
  public navigate(url) {
    this.homeService.clearData();
    if (url == '/project-view/create-project') {
      this.homeService.clearData();
      this.router.navigate([url, 'yes']);
    } else if (url != '') {
      this.router.navigate([url]);
    } else if (url == '') {
      this.toastService.errorToast('message.comingsoon');
    }
  }
  public viewMore() {
    this.router.navigate(['/project-view/projects', 'activeprojects'])
  }
  public viewProject(project) {
    this.storage.set('projectToBeView', project).then(project => {
      this.router.navigate(['/project-view/project-detail', 'home'])
    })
  }
  // get templates
  getTemplates() {
    this.storage.get('userTokens').then(data => {
      this.apiProvider.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.categoryViewService.getTemplatesByCategory(userTokens.access_token).subscribe((data: any) => {
              if (data.data) {
                this.storage.set('templates', data.data).then(templates => {
                })
              }
            }, error => { })
          }, error => {
          })
        }
      })
    })
  }
  // get Projects
  public getProjects() {
    this.storage.get('userTokens').then(data => {
      this.apiProvider.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.projectsService.getAssignedProjects(usertoken.access_token, this.type).subscribe((resp: any) => {
              if (resp.status != 'failed') {
                resp.data.forEach(programs => {
                  programs.projects.forEach(project => {
                    project.lastUpdate = project.lastSync;
                    project.isSync = true;
                    project.isEdited = false;
                    project.isNew = false;
                    if (project.status != 'not yet started' && project.status != 'Not started') {
                      project.isStarted = true;
                    }
                    project.programName = programs.programs.name;
                  });
                });
                this.storage.set('latestProjects', resp.data).then(resp1 => {
                  this.getActiveProjects();
                })
              }
            })
          })
        }
      })
    })
  }
  //  get schools
  public getSchools() {
    this.storage.get('userTokens').then(data => {
      this.apiProvider.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.mySchoolsService.getSchools(parsedData.access_token, this.count, this.page).subscribe((data: any) => {
              this.mySchools = data.data;
            }, error => { })
          }, error => {
          })
        }
      })
    })
  }
}