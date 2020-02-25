import { Component, ViewChild, OnDestroy } from '@angular/core';
import { IonRouterOutlet, Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Login } from './login.service';
import { TranslateService } from '@ngx-translate/core';
import { Network } from '@ionic-native/network/ngx';
import { NetworkService } from './network.service';
import { Router, ActivatedRoute, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
import { CategoryViewService } from './category-view/category.view.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProjectsService } from './projects/projects.service';
import { MyschoolsService } from './myschools/myschools.service';
import { ModalController } from '@ionic/angular';
import { NgZone } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ApiProvider } from './api/api';
import { ProjectService } from '../app/project-view/project.service';
import { HomeService } from './home/home.service';
import { ToastService } from './toast.service';
import { LoadingController } from '@ionic/angular';
import { FcmProvider } from './fcm';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  @ViewChild(NavController) nav: NavController;
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  mappedProjectsToSync;
  myProjectsToSync;
  projectsToSync = [];
  subscription: Subscription;
  loading;
  header;
  type = 'quarter';
  count = 100;
  page = 1;
  body;
  button;
  isActionable;
  showUpdatePop: boolean = false;
  interval = interval(3600000);
  public title;
  public loggedIn: boolean = false;
  public appPages = [];
  public history = [];

  public isConnected: any = localStorage.getItem('networkStatus');
  public loggedInUser;
  constructor(
    public storage: Storage,
    public fcm: FcmProvider,
    public projectsService: ProjectsService,
    public alertController: AlertController,
    public router: Router,
    public menuCtrl: MenuController,
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public loginService: Login,
    public translate: TranslateService,
    public network: Network,
    public mySchoolsService: MyschoolsService,
    public networkService: NetworkService,
    public modalController: ModalController,
    public zone: NgZone,
    public route: ActivatedRoute,
    public projectService: ProjectService,
    public api: ApiProvider,
    public homeService: HomeService,
    public loadingController: LoadingController,
    public toastService: ToastService,
    public categoryViewService: CategoryViewService
  ) {
    this.platform.ready().then(() => {
      this.homeService.tobeSync.subscribe(value => {
        this.prepareMappedProjectToSync();
      })
      this.loginService.emit.subscribe(value => {
        this.loggedInUser = value;
        if (this.loggedInUser) {
          this.subscription = this.interval.subscribe(val => {
            this.prepareMappedProjectToSync();
          });
          this.menuCtrl.enable(true, 'unnati');
          this.loggedInUser = value;
          this.appPages = [
            {
              title: 'Home',
              url: '/project-view/home',
              icon: 'home'
            },
            {
              title: 'Sync',
              icon: 'sync',
              url: '',
            },
            {
              title: 'Tutorial Video',
              icon: 'play',
              url: '/project-view/tutorial-videos',
            },
            {
              title: 'About',
              url: '/project-view/about',
              icon: 'information-circle'
            },
            {
              title: 'Settings',
              icon: 'md-settings',
              children: [
                {
                  title: 'Languages',
                  icon: 'globe'
                },
              ]
            }
          ];
        } else {
          this.appPages = [];
        }
      });
      this.initializeApp();
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (!this.isConnected && !navigator.onLine) {
        this.networkService.networkErrorToast();
      }
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      this.networkService.setLang('en');
      this.platform.pause.subscribe(() => {
        localStorage.setItem('isPopUpShowen', null);
      });
      // this.fcm.connectSubscription.unsubscribe();
      this.fcm.subscribeToPushNotifications();
      this.fcm.localNotificationClickHandler();
      this.network.onDisconnect()
        .subscribe(() => {
          this.isConnected = false;
          this.networkService.networkErrorToast();
          this.networkService.status(this.isConnected);
          localStorage.setItem("networkStatus", this.isConnected);
        });
      this.network.onConnect()
        .subscribe(() => {
          this.isConnected = true;
          this.networkService.status(this.isConnected);
          setTimeout(() => {
            if (this.network.type === 'wifi') {
            }
          }, 15000);
          localStorage.setItem("networkStatus", this.isConnected);
        });
      // this.networkSubscriber();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#fff');
      this.platform.backButton.subscribeWithPriority(9999, () => {
        const tree: UrlTree = this.router.parseUrl(this.router.url);
        const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        const s: UrlSegment[] = g.segments;
        if (this.router.url == '/login' || this.router.url == '/project-view/home') {
          //this.presentAlertConfirm();
          navigator['app'].exitApp();
        } else if (this.router.url == '/project-view/notifications' || this.router.url == '/project-view/newsfeed' || this.router.url == '/project-view/about' ||
          this.router.url == '/project-view/reports' || this.router.url == '/project-view/my-schools' ||
          this.router.url == '/project-view/projects' || this.router.url == '/project-view/update-profile' ||
          this.router.url == '/project-view/library' || this.router.url == '/project-view/project-detail/home' || s[1].path == 'create-project' || this.router.url == '/project-view/task-board') {
          this.router.navigateByUrl('project-view/home');
        } else if (this.router.url == '/project-view/task-view') {
          this.router.navigateByUrl('project-view/detail');
        }
        else if (this.router.url == '/project-view/my-reports/last-month-reports' || this.router.url == '/project-view/my-reports/last-quarter-reports' || this.router.url == '/my-reports/last-month-reports' || this.router.url == '/my-reports/last-quarter-reports') {
          this.router.navigateByUrl('project-view/home');
        } else if (this.router.url == '/project-view/fullreports/lastMonth') {
          this.router.navigateByUrl('project-view/my-reports/last-month-reports');
        } else if (this.router.url == '/project-view/fullreports/lastQuarter') {
          this.router.navigateByUrl('project-view/my-reports/last-quarter-reports');
        } else if (s.length == 3 && this.router.url == '/project-view/project-detail/' + s[2].path) {
          if (s[2].path == "schools") {
            this.router.navigate(['project-view/school-task-report/' + localStorage.getItem('entityKey') + '/school']);
          } else if (s[2].path == "projectsList") {
            this.router.navigateByUrl('/project-view/projects');
          }
          else {
            this.router.navigateByUrl('/project-view/category/' + s[2].path);
          }
        } else if (s[1].path == 'category') {
          this.router.navigateByUrl('/project-view/library');
        } else if (s.length == 4 && (s[0].path == 'project-view' && s[1].path == "create-task" && s[3].path == "cp")) {
          this.router.navigateByUrl('project-view/create-project');
        } else if (s.length == 4 && (s[0].path == 'project-view' && s[1].path == "current-task" && s[3].path == "cp")) {
          this.router.navigateByUrl('project-view/create-task/' + s[2].path + '/' + s[3].path);
        }
        else if (s.length == 4 && (s[0].path == 'project-view' && s[1].path == "create-task" && s[3].path == "pd") || s[1].path == "files") {
          this.router.navigateByUrl('project-view/project-detail');
        } else if (s.length == 4 && (s[0].path == 'project-view' && s[1].path == "current-task" && s[3].path == "pd")) {
          this.router.navigateByUrl('project-view/project-detail');
        } else if (s.length == 4 && (s[0].path == 'project-view' && s[1].path == "category" && s[3].path == "home")) {
          this.router.navigateByUrl('project-view/home');
        }
        else if (this.router.url == "/project-view/project-detail") {
          this.router.navigateByUrl('/project-view/library');
        }
        else if (this.router.url == '/project-view/task-view') {
          this.modalController.dismiss();
        } else if (this.router.url == '/project-view/subtasks') {
          this.router.navigateByUrl('project-view/task-view');
        } else if (this.router.url == '/project-view/subtask-view') {
          this.router.navigateByUrl('project-view/subtasks');
        } else if (this.router.url == '/project-view/subtask-view') {
          this.modalController.dismiss();
        } else if (this.router.url == '/project-view/courses') {
          this.router.navigateByUrl('project-view/detail');
        }
        else {
          if ((s[0].path == 'project-view' && s[1].path == 'status')) {
            this.router.navigate(['project-view/school-task-report/' + localStorage.getItem('entityKey') + '/school']);
          } else
            if ((s[0].path == 'project-view' && s[1].path == 'detail') || this.router.url == '/project-view/detail') {

              if (localStorage.getItem('from') === 'home') {
                this.router.navigateByUrl('project-view/home');
              } else if (localStorage.getItem('from') === 'projects') {
                this.router.navigateByUrl('project-view/projects');
              }
              else {
                this.router.navigate(['project-view/school-task-report/' + localStorage.getItem('entityKey') + '/school']);
              }
            } else if ((s[0].path == 'project-view' && s[1].path == 'school-task-report') || (s[0].path == 'project-view' && s[1].path == 'status')) {
              if (localStorage.getItem('from1') === 'home') {
                this.router.navigateByUrl('project-view/home');
              } else if (localStorage.getItem('from1') === 'mySchools') {
                this.router.navigateByUrl('project-view/my-schools');
              }
            }
        }
      });
      if (localStorage.getItem("token") != null) {
        this.router.navigateByUrl('/project-view/home');
      } else {
        this.router.navigateByUrl('/login');
      }
      this.hideSplasher();
      // this.splashScreen.hide();
    });
  }
  hideSplasher() {
    if (this.splashScreen) {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
    }
  }

  //Langugae change
  public setLang(lang) {
    let language: string = this.translate.currentLang;
    if (lang != language) {
      this.translate.use(lang);
      this.networkService.setLang(lang);
      this.appPages.forEach(page => {
        this.translate.get(page.title).subscribe((text: string) => {
          page.title = text
        });
        if (page.children) {
          page.children.forEach(child => {
            this.translate.get(child.title).subscribe((text: string) => {
              child.title = text
            });
          });
        }
      });
    }
  }

  public navigate(url, title) {
    if (title == 'Sync') {
      this.prepareMappedProjectToSync();
    } else if (url) {
      this.router.navigate([url]);
    }
  }
  async presentAlertCheckbox() {
    let language: string = this.translate.currentLang;
    let selectLan;
    this.translate.get('select_languages').subscribe((text: string) => {
      selectLan = text;
    });
    const alert = await this.alertController.create({
      header: selectLan,
      inputs: [
        {
          name: 'selectedLang',
          type: 'radio',
          label: `English English`,
          value: 'en',
          checked: 'en' == language
        },
        {
          name: 'selectedLang',
          type: 'radio',
          label: 'Kannada ಕನ್ನಡ',
          value: 'ka',
          checked: 'ka' == language
        }
      ],

      buttons: [
        {
          text: '✕',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: '✓',
          handler: (data: string) => {
            this.setLang(data);
          }
        }
      ]
    });
    await alert.present();
  }
  public selectTab(title) {
    this.translate.get(title).subscribe((text: string) => {
      this.title = text;
    });
  }

  checkNetwork() {
    this.network.onDisconnect()
      .subscribe(() => {
        this.isConnected = false;
        this.networkService.status(this.isConnected);
        localStorage.setItem("networkStatus", this.isConnected);
      }, error => {
      });
    this.network.onConnect()
      .subscribe(() => {
        this.isConnected = true;
        this.networkService.status(this.isConnected);
      }, error => {
      });
    // this.networkSubscriber();
  }

  public prepareMappedProjectToSync() {
    this.mappedProjectsToSync = false;
    this.projectsToSync = [];
    this.storage.get('projects').then(myProjects => {
      if (myProjects) {
        myProjects.forEach(projectList => {
          projectList.projects.forEach(project => {
            project.share = false;
            if (project.isEdited || project.isNew) {
              if (project.isNew) {
                delete project._id;
              }
              this.mappedProjectsToSync = true;
              if (project.tasks && project.tasks.length > 0) {
                project.tasks.forEach(task => {
                  if (task.isNew && task._id) {
                    delete task._id;
                  }
                  if (task.subTasks && task.subTasks.length > 0) {
                    task.subTasks.forEach(subtasks => {
                      if (subtasks.isNew && subtasks._id) {
                        delete subtasks._id;
                      }
                    })
                  }
                });
              }
              // this.autoSync(project);
              // intentially left blank
              this.projectsToSync.push(project);
            } else {
              // intentially left blank
            }
          });
        })
        if (!this.mappedProjectsToSync) {
          this.toastService.successToast('message.already_sync');
        } else {
          this.autoSync();
        }
      } else {
        if (!this.mappedProjectsToSync && !this.myProjectsToSync) {
          this.toastService.successToast('message.already_sync');
        }
      }
    })
  }
  // auto sync
  public autoSync() {
    if (this.projectsToSync.length > 0) {
      this.storage.get('userTokens').then(data => {
        if (data) {
          this.api.refershToken(data.refresh_token).subscribe((data: any) => {
            let parsedData = JSON.parse(data._body);
            if (parsedData && parsedData.access_token) {
              let userTokens = {
                access_token: parsedData.access_token,
                refresh_token: parsedData.refresh_token,
              };
              this.storage.set('userTokens', userTokens).then(data => {
                let projects = {
                  projects: this.projectsToSync
                }
                this.toastService.startLoader('Your data is syncing');
                this.projectService.sync(projects, data.access_token).subscribe((data: any) => {
                  if (data.status === "failed") {
                    this.toastService.errorToast(data.message);
                  } else if (data.status == "success" || data.status == "succes") {
                    this.syncUpdateInLocal(data.allProjects.data);
                  }
                  this.toastService.stopLoader();
                }, error => {
                  this.toastService.stopLoader();
                })
              })
            }
          }, error => {
            if (error.status === 0) {
              this.router.navigateByUrl('/login');
              this.toastService.stopLoader();
            }
          })
        } else {
          this.router.navigateByUrl('/login');
          this.toastService.stopLoader();
        }
      }, error => {
        this.toastService.stopLoader();
      })
    }
  }
  syncUpdateInLocal(syncedProjects) {
    syncedProjects.forEach(projects => {
      projects.projects.forEach(sproject => {
        sproject.isNew = false;
        sproject.isSync = true;
        sproject.isEdited = false;
      })
    });
    this.storage.set('projects', syncedProjects).then(myprojectsff => {
      this.toastService.successToast('message.sync_success');
    })
  }
}