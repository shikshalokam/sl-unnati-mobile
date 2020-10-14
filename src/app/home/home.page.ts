import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { MenuController, Platform, AlertController } from '@ionic/angular';
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
import { AppConfigs } from '../core-module/constants/app.config';
import * as jwt_decode from "jwt-decode";
import { LocalKeys } from '../core-module/constants/localstorage-keys';
import { ErrorHandle } from '../error-handling.service';
import { OnboadringServiceService } from '../core-module/onboardingService/onboadring-service.service';
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
    { title: "open tasks", icon: 'assets/images/homeTiles/tasksclipboard.svg', url: '/project-view/task-board' }, // /project-view/task-board
    { title: "reports", icon: 'assets/images/homeTiles/reports.png', url: '/project-view/my-reports/last-month-reports' }
  ]
  activeProjects = [];
  projectList;
  searchInput;
  showSkeleton: boolean = false;
  skeletons = [{}, {}];
  mySchools;
  constructor(
    public datepipe: DatePipe,
    public storage: Storage,
    public platform: Platform,
    public apiProvider: ApiProvider,
    public homeService: HomeService,
    public categoryViewService: CategoryViewService,
    public router: Router,
    public projectsService: ProjectsService,
    public login: Login,
    public alertCtrl: AlertController,
    public screenOrientation: ScreenOrientation,
    public projectService: ProjectService,
    public translate: TranslateService,
    public networkService: NetworkService,
    public menuCtrl: MenuController,
    public reportsService: ReportsService,
    public mySchoolsService: MyschoolsService,
    public toastService: ToastService,
    public errorHandle: ErrorHandle,
    public onboadringServiceService: OnboadringServiceService) {
    this.menuCtrl.enable(true);
    this.networkService.emit.subscribe(value => {
      this.connected = value;
      this.connected = localStorage.getItem("networkStatus");
    });
    this.login.emit.subscribe((data: any) => {
      if (data == true) {
        this.menuCtrl.enable(true);
        this.activeProjects = [];
        this.storage.get(LocalKeys.allProjects).then(projects => {
          if (!projects) {
            this.getProjects();
          } else {
            this.getActiveProjects();
          }
        })
      }
    })
    this.homeService.localDataUpdated.subscribe(value => {
      this.getActiveProjects();
    })
    this.networkService.langEmit.subscribe((value: any) => {
      translate.use(value);
    });
    this.menuCtrl.enable(true);
  }
  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.menuCtrl.enable(true);
      this.searchInput = '';
      this.storage.get('userTokens').then(data => {
        if (data) {
          this.menuCtrl.enable(true, 'unnati');
          this.setTitle('home_tab');
          //  this.splashScreen.hide();
          this.storage.get(LocalKeys.templates).then(templates => {
            if (!templates) {
              this.getTemplates();
            }
          })
          this.storage.get(LocalKeys.allProjects).then(projects => {
            if (!projects) {
              this.getProjects();
            } else {
              this.getActiveProjects();
            }
          })
          this.storage.get(LocalKeys.mySchools).then(schools => {
            if (!schools) {
              this.getSchools();
            } else {
              this.mySchools = schools;
            }
          })
        } else {
          this.ionViewDidEnter();
        }
      })
      try {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      } catch (error) {
      }
    })
  }
  ngOnInit() {
    this.login.loggedIn('true');
    this.checkUser();
    this.storage.get(LocalKeys.allowProfileUpdateForm).then(data => {
      if (!data) {
        this.getProfileData();
      }
    })
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.networkService.setLang('en');
    // this.dikshaProfileData();
  }

  // Diksha profile data
  public dikshaProfileData() {
    this.onboadringServiceService.getProfile().then(data => {
      // if ((data.result.roles && !data.result.roles.length) || !data.result.roles) {
      this.openUpdateProfileAlert();
      // }
    }).catch(error => {
    })
  }

  //  Diksha profile alert
  // async openUpdateProfileAlert() {
  //   let updateClick = false;
  //   let alert = this.alertCtrl.create({
  //     header: 'Profile Update',
  //     subHeader: 'Please update your profile to continue.',
  //     buttons: [
  //       {
  //         text: 'Update Profile',
  //         handler: data => {
  //           updateClick = true;
  //           this.app.getRootNav().push('OnboardingPage')
  //           console.log('Cancel clicked');
  //         }
  //       },
  //     ],
  //     backdropDismiss: false
  //   });
  //   // alert.onDidDismiss(success => {
  //   //   if(updateClick){
  //   //     updateClick = false;
  //   //   } else {
  //   //     this.openUpdateProfileAlert()
  //   //   }
  //   // })
  //   alert.onDidDismiss().then(data => {
  //     if (updateClick) {
  //       updateClick = false;
  //     } else {
  //       this.openUpdateProfileAlert()
  //     }
  //   })
  //   alert.present();
  // }




  async openUpdateProfileAlert() {
    let updateClick = false;
    const alert = await this.alertCtrl.create({
      header: 'Profile Update',
      subHeader: 'Please update your profile to continue.',
      buttons: [
        {
          text: 'Update Profile',
          handler: data => {
            updateClick = true;
            // this.app.getRootNav().push('OnboardingPage')
            this.router.navigate(['/onboarding']);
            console.log('Cancel clicked');
          }
        },
      ],
      backdropDismiss: false,
    });
    alert.onDidDismiss().then(data => {
      if (updateClick) {
        updateClick = false;
      } else {
        this.openUpdateProfileAlert()
      }
    })
    await alert.present();
  }




  //  Check user
  public checkUser() {
    this.storage.get('userTokens').then(data => {
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
    let environment = AppConfigs.currentEnvironment;
    let programId = '';
    AppConfigs.environments.forEach(env => {
      if (environment === env.name) {
        programId = env.programId;
      }
    });
    this.storage.get(LocalKeys.allProjects).then(myProjects => {
      this.myProjects = myProjects;
      if (myProjects) {
        myProjects.forEach(programsList => {
          if (programsList) {
            if (programsList.programs && programsList.programs._id == programId) {
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
    if (this.networkService.isConnected) {
      this.categoryViewService.getTemplatesByCategory().subscribe((data: any) => {
        if (data.data) {
          this.storage.set(LocalKeys.templates, data.data).then(templates => {
          })
        }
      }, error => {
        this.errorHandle.errorHandle(error);
      })
    }
  }
  // get Projects
  public getProjects() {
    this.toastService.startLoader('Loading, please wait.');
    this.projectsService.getAssignedProjects(this.type).subscribe((resp: any) => {
      this.toastService.stopLoader();
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
        this.storage.set(LocalKeys.allProjects, resp.data).then(resp1 => {
          this.getActiveProjects();
        })
      } else {
        this.activeProjects = [];
      }
    }, error => {
      this.toastService.stopLoader();
      this.errorHandle.errorHandle(error);
    })
  }
  //  get schools
  public getSchools() {
    this.mySchoolsService.getSchools(this.count, this.page).subscribe((data: any) => {
      if (data.status != "failed") {
        this.mySchools = data.data;
        this.storage.set(LocalKeys.mySchools, this.mySchools).then(data => { })
      }

    }, error => {
      this.errorHandle.errorHandle(error);
    })
  }

  // get profile data
  public getProfileData() {
    // if (this.isConnected) {
    let userDetails;
    this.storage.get('userTokens').then(data => {
      if (data) {
        userDetails = jwt_decode(data.access_token);
        this.projectService.getProfileData(userDetails.sub).subscribe((data: any) => {
          this.storage.set('allowProfileUpdateForm', data.result.allowProfileUpdateForm).then(data => {
          })
          if (data.result) {
            if (data.result.showPopupForm) {
              this.homeService.showProfileUpdate('popup');
            }
            if (data.result.allowProfileUpdateForm) {
              this.homeService.showProfileUpdate('inmenu');
            }
          }
        }, error => {
          this.errorHandle.errorHandle(error);
        })
      } else {
        this.getProfileData();
      }
    })
  }
}