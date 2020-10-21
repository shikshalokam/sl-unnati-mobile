import { Component } from '@angular/core';
import { NetworkService } from '../network.service';
import { MenuController, ToastController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ProjectsService } from './projects.service';
import { ApiProvider } from '../api/api';
import { AlertController } from '@ionic/angular';
import { CurrentUserProvider } from '../current-user';
import { Network } from '@ionic-native/network/ngx';
import { ProjectService } from '../project-view/project.service';
import { HomeService } from '../home/home.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AppConfigs } from '../core-module/constants/api.config';
import { LocalKeys } from '../core-module/constants/localstorage-keys';

//import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage {
  connected: any = localStorage.getItem('networkStatus')
  skeletons = [{}, {}, {}, {}, {}, {}];
  projectList;
  activeTab = 'activeProjects';
  back = "project-view/home";
  showSkeleton: boolean = false;
  showNoDataCard = '';
  myProjects;
  environment;
  programId;
  searchInput;
  showHardcodedMyprojects: boolean = true;
  //public projects:any =[];
  constructor(public currentUser: CurrentUserProvider,
    public homeService: HomeService,
    public screenOrientation: ScreenOrientation,
    public network: Network,
    public projectService: ProjectService,
    public platform: Platform,
    public alertController: AlertController,
    public apiProvider: ApiProvider,
    public toastController: ToastController,
    public storage: Storage,
    public projectsService: ProjectsService,
    public networkService: NetworkService,
    public translateService: TranslateService,
    public router: Router,
    public menuCtrl: MenuController,
    public activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(data => {
      this.getActiveProjects();
    })
    this.networkService.emit.subscribe(value => {
      this.connected = value;
      localStorage.setItem("networkStatus", this.connected);
    });
  }

  ionViewDidEnter() {
    this.projectService.setTitle("projects_tab");
    this.environment = AppConfigs.currentEnvironment;
    AppConfigs.environments.forEach(env => {
      if (this.environment === env.name) {
        this.programId = env.programId;
      }
    });
    this.searchInput = '';
    this.connected = localStorage.getItem("networkStatus");
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
    this.getActiveProjects();
  }

  public getActiveProjects() {
    this.showSkeleton = true;
    this.storage.get(LocalKeys.allProjects).then(projects => {
      if (projects) {
        projects.forEach(programsList => {
          if (programsList.programs) {
            if (programsList.programs._id == this.programId) {
              // let data = new Set(programsList.projects);
              // console.log(data, "data");
              this.showHardcodedMyprojects = false;
            }
            programsList.projects.sort((a, b) => {
              return <any>new Date(b.lastUpdate) - <any>new Date(a.lastUpdate);
            });
          }
        });
        this.projectList = projects;
        this.showSkeleton = false;
      } else {
        this.showSkeleton = false;
      }
    });
  }

  public projectView(project) {
    this.storage.set(LocalKeys.projectToBeView, project).then(project => {
      this.router.navigate(['/project-view/project-detail', 'projectsList'])
    })
  }
  public selectTab(tab) {
    this.activeTab = tab.detail.value;
  }
}