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
import { URLSearchParams } from '@angular/http';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  connected: any = false;
  loggedIn: boolean = false;
  myProjects;
  type = 'quarter';
  count = 100;
  page = 1;
  tiles = [
    { title: "create project", icon: 'assets/images/homeTiles/createproject.png', url: '/project-view/create-project' },
    { title: "library", icon: 'assets/images/homeTiles/library.png', url: '/project-view/library' },
    { title: "open tasks", icon: 'assets/images/homeTiles/tasksclipboard.png', url: '' },
    { title: "reports", icon: 'assets/images/homeTiles/reports.png', url: '/project-view/my-reports/last-month-reports' }
  ]
  activeProjects = [];
  projectList;
  showSkeleton: boolean = false;
  skeletons = [{}, {}, {}, {}, {}, {}];
  showNoProjects: any = '';
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
    public mySchoolsService: MyschoolsService) {
    
    //   let params = new URLSearchParams(window.location.search);
    // if (typeof params == 'string') {
    //   params = JSON.parse(params);
    // }
    // console.log(params, "params");

    // console.log(params.rawParams, "params");
    // let code = (((params.rawParams).split("?")[1]).split("="))[1];
    // console.log(code, "code");
    // this.menuCtrl.enable(true);
    // this.login.doOAuthStepTwo(code).then(success => {
    //   console.log(success, "success")
    //   this.menuCtrl.enable(true);
    //   this.login.checkForCurrentUserLocalData(success);
    //   let userDetails = jwt_decode(success.access_token);
    //   console.log(userDetails,"userDetails");
    //   this.menuCtrl.enable(true);
    //   this.storage.set('userDetails', userDetails).then(userData => {
    //   })
    //   this.storage.set('userTokens', success).then(data => {
    //     console.log(data,"data user token save");
    //     this.router.navigateByUrl('/project-view/home');
    //     // this.fcm.initializeFCM();
    //     this.login.loggedIn('true');
    //     this.menuCtrl.enable(true);
    //     this.storage.set('veryFirstTime', 'false').then(data => {
    //       // this.veryFirstTime = false;
    //     })
    //   });
    //   localStorage.setItem('token', success);
    //   this.networkService.status(true);
    //   this.menuCtrl.enable(true);
    //   this.login.loggedIn('true');
    //   localStorage.setItem("networkStatus", 'true');
    // }).catch(error1 => {
    // })
    // let someParam = params.get('user');
    // console.log(someParam, "someParam");

    this.menuCtrl.enable(true);
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
    this.homeService.searcResultsOfPrjcts.subscribe((data) => {
      if (data == 'show') {
        this.showNoProjects = 'show';
      } else {
        this.showNoProjects = 'no';
      }
    })
    this.networkService.emit.subscribe((value: any) => {
      translate.use(value);
    });
    this.menuCtrl.enable(true);
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.getActiveProjects();
    this.setTitle('home_tab');
    this.connected = localStorage.getItem("networkStatus");
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
  }
  ngOnInit() {
    this.login.loggedIn('true');
    this.checkUser();
    this.storage.get('projects').then(projects => {
      console.log(!projects,"projects");
      if (!projects) {
        console.log('calling get projects');
        this.getProjects();
      }
    });
    this.getActiveProjects();
    this.getTemplatesByCategory();
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
    localStorage.setItem("id", project._id);
    this.storage.set('currentProject', project).then(data => {
      localStorage.setItem("from", 'home');
      this.router.navigate(['/project-view/detail', project._id, 'home']);
      this.projectService.setTitle(data.title);
    })
  }
  public navigateToSchool(school) {
    localStorage.setItem('from1', 'home');
    this.router.navigate(['/project-view/school-task-report', school.entityId, school.name]);
  }
  // get Projects
  public getProjects() {
    let myProjects = [];
    this.storage.get('userTokens').then(data => {
      this.apiProvider.refershToken(data.refresh_token).subscribe((data: any) => {
        let parsedData = JSON.parse(data._body);
        if (parsedData && parsedData.access_token) {
          let userTokens = {
            access_token: parsedData.access_token,
            refresh_token: parsedData.refresh_token,
          };
          this.storage.set('userTokens', userTokens).then(usertoken => {
            this.showSkeleton = true;
            this.projectsService.getAssignedProjects(usertoken.access_token, this.type).subscribe((resp: any) => {
              if (resp.status != 'failed') {
                console.log(resp.data,"resp.data get projects");
                resp.data.forEach(programs => {
                  programs.projects.forEach(project => {
                    project.lastUpdate = project.lastSync;
                    project.isSync = true;
                    project.isEdited = false;
                    project.isNew = false;
                    if (project.status != 'not yet started' || project.status != 'Not started') {
                      project.isStarted = true;
                    }
                    project.programName = programs.programs.name;
                    console.log(project,"project getting and filtering");
                    if (project.createdType == 'by self' || project.createdType == 'by reference') {
                      myProjects.push(project);
                    }else {
                      project.toDisplay = true;
                      console.log(project,"project.toDisplay");
                    }
                  });
                });
                this.projectList = resp.data;
                console.log(this.projectList ,"this.projectList ");
                this.storage.set('projects', this.projectList).then(resp1 => {
                })
                if (myProjects) {
                  console.log(myProjects,"myProjects");
                  this.storage.set('myprojects', myProjects).then(data => {
                    this.getActiveProjects();
                  })
                }
              } else {
                this.showSkeleton = false;
              }
              this.showSkeleton = false;
            }, error => {
              this.showSkeleton = false;
            })
          }, error => {
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
            this.showSkeleton = true;
            this.mySchoolsService.getSchools(parsedData.access_token, this.count, this.page).subscribe((data: any) => {
              this.mySchools = data.data;
            }, error => { })
          }, error => {
          })
        }
      })
    })
  }

  //  Get templates
  getTemplatesByCategory() {
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

  // get active projects
  public getActiveProjects() {
    this.showSkeleton = true;
    this.activeProjects = [];
    let ap = []
    let count = 0;
    this.storage.get('myprojects').then(myProjects => {
      this.myProjects = myProjects;
      if (myProjects) {
        myProjects.forEach(myProject => {
          if (count < 2) {
            if (myProject.isStarted) {
              ap.push(myProject);
              count = count + 1;
            }
          }
        });
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
      // || url == '/project-view/library'
      this.homeService.clearData();
      this.router.navigate([url, 'yes']);
    } else if (url != '') {
      this.router.navigate([url]);
    }
  }
  public viewMore() {
    this.router.navigate(['/project-view/projects', 'activeprojects'])
  }
}