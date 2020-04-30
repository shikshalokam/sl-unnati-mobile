import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { SchoolTaskService } from './school-task-report.service';
import { CurrentUserProvider } from '../current-user';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../api/api';
import { ActivatedRoute, Router } from '@angular/router';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { Market } from '@ionic-native/market/ngx';
import { ProjectService } from '../project-view/project.service';
import { HomeService } from '../home/home.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-school-task-report',
  templateUrl: './school-task-report.page.html',
  styleUrls: ['./school-task-report.page.scss'],
})
export class SchoolTaskReportPage implements OnInit {
  public connected;
  public schoolTaskReport;
  public showfailedCard: boolean = false;
  public showSkeleton: boolean = true;
  public school;
  public back = 'project-view/my-schools';
  public skeletons = [{}, {}, {}, {}, {}, {}];
  constructor(public platform: Platform,
    public homeservice: HomeService,
    public screenOrientation: ScreenOrientation,
    public projectService: ProjectService,
    public toastController: ToastController,
    public appLauncher: AppLauncher,
    public router: Router,
    public market: Market,
    public networkService: NetworkService,
    public route: ActivatedRoute,
    public currentUser: CurrentUserProvider,
    public api: ApiProvider,
    public storage: Storage,
    public schoolTaskService: SchoolTaskService) {
    this.route.params.subscribe(params => {
      this.school = params;
      this.storage.get('mySchools').then(data => {
        if (data) {
          if (data.find((pro) => pro.id === this.school.id) === undefined) {
            data.push(this.school);
            this.storage.set('mySchools', data).then((data: any) => {
              this.homeservice.loadMyProjects();
            });
          }
        } else {
          let data1: any = [];
          data1.push(this.school);
          this.storage.set('mySchools', data1).then((data: any) => {
            this.homeservice.loadMyProjects();
          });
        }
      })
    });
    this.networkService.emit.subscribe(value => {
      this.connected = value;
      localStorage.setItem("networkStatus", this.connected);
    });
  }
  ngOnInit() {
    this.getSchoolTaskReport();
  }
  ionViewDidEnter() {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
  }
  // School task reports
  public getSchoolTaskReport() {
    this.showSkeleton = true;
    this.schoolTaskService.getSchoolTaskReport(this.school.id).subscribe((data: any) => {
      this.showfailedCard = false;
      this.showSkeleton = false;
      if (data.status != 'failed') {
        this.schoolTaskReport = data.data;
      } else {
        this.showfailedCard = true;
        this.showSkeleton = false;
        this.errorToast(data.message);
      }
    }, error => { })
  }

  // Error Toast message
  async errorToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  // Navigate to status screen
  public navigateToSeeStatus(id) {
    let navigate: boolean = false;
    this.connected = localStorage.getItem("networkStatus");
    let connected = navigator.onLine;
    if (connected) {
      this.storage.get('latestProjects').then(projects => {
        if (projects) {
          if (typeof projects == 'string') {
            projects = JSON.parse(projects);
          }
          projects.forEach(project => {
            if (project._id == id) {
              navigate = true;
              this.storage.set('currentProject', project).then(project => {
                localStorage.setItem('from', 'school');
                this.router.navigate(['project-view/status', id]);
              })
            }
          });
          if (!navigate) {
            this.getProjectsFromService(id, 'status');
          }
          // });
        } else {
          this.getProjectsFromService(id, 'status');
        }
      })
    } else {
      this.networkService.networkErrorToast();
    }
  }
  // Navigate to status screen
  public navigateToDetails(id) {
    let navigate: boolean = false;
    this.connected = localStorage.getItem("networkStatus");
    let connected = navigator.onLine;
    if (connected) {
      // this.router.navigate(['/project-view/detail', id, 'school']);
      this.storage.get('latestProjects').then(projects => {
        if (projects) {
          if (typeof projects == 'string') {
            projects = JSON.parse(projects);
          }
          projects.forEach(project => {
            if (project._id == id) {
              navigate = true;
              this.storage.set('projectToBeView', project).then(project => {
                this.router.navigate(['/project-view/project-detail', 'schools'])
              })
            } else {
              this.getProjectsFromService(id, 'details');
            }
          });
          if (!navigate) {
            this.getProjectsFromService(id, 'details');
          }
          // });
        } else {
          this.getProjectsFromService(id, 'details');
        }
      })
    } else {
      this.networkService.networkErrorToast();
    }
  }

  // Get projects 
  public getProjectsFromService(id, path) {
    let value = {
      projectId: id
    }
    this.projectService.projectDetails(value).subscribe((resp: any) => {
      if (resp.status != 'failed') {
        resp.data.projects.forEach(cp => {
          this.storage.set('projectToBeView', cp).then(project => {
            if (path == 'details') {
              this.router.navigate(['/project-view/project-detail', 'schools'])
            } else {
              this.router.navigate(['/project-view/status', id]);
            }
          })
        });
        this.storage.get('latestProjects').then((projects: any) => {
          if (projects) {
            if (typeof projects == 'string') {
              projects = JSON.parse(projects);
            }
            projects.data.forEach(prjs => {
              prjs.projects.forEach(project => {
                if (project._id === id) {
                  prjs.projects.push(project);
                  this.storage.set('latestProjects', projects).then(projects => {
                  })
                  this.storage.set('projectToBeView', project).then(project => {
                    if (path == 'details') {
                      this.router.navigate(['/project-view/project-detail', 'schools'])
                    } else {
                      this.router.navigate(['/project-view/status', id]);
                    }
                  })
                }
              });
            });
          } else {
            this.storage.set('latestProjects', resp).then(projects => {
              resp.data.projects.forEach(prj => {
                this.storage.set('projectToBeView', prj).then(project => {
                  if (path == 'details') {
                    this.router.navigate(['/project-view/project-detail', 'schools'])  
                  } else {
                    this.router.navigate(['/project-view/status', id]);
                  }
                })
              })
            })
          }
        })
      } else {
      }
    }, error => {
      // this.showSkeleton = false;
    })
  }
  //Launch learner App
  public openApp() {
    this.market.open('org.shikshalokam.samiksha.staging');
    // org.shikshalokam.app://community.shikshalokam.org/learn
    const options: AppLauncherOptions = {
      packageName: 'org.shikshalokam.samiksha.staging',
    }
    this.appLauncher.canLaunch(options).then((canLaunch: boolean) => {
      if (canLaunch) {
        this.appLauncher.launch(options).then(() => {
        }, (err) => {
        })
      } else {
        window.open('"https://play.google.com/store/apps/details?id=org.shikshalokam.samiksha.staging&hl=en","_system"')
      }
    }, error => {
      window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.samiksha.staging&hl=en,_system')
    })
  }
}