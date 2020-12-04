import { Component, OnInit } from '@angular/core';
import PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import PouchDBFind from 'pouchdb-find';
import {
  DbService, UnnatiDataService,
  urlConstants, NetworkService,
  LoggerService, LocalStorageService, localStorageConstants, SunbirdService,
  ToastMessageService, LoaderService, UtilsService, KendraApiService, ProfileService,
} from '../core';
import { environment } from 'src/environments/environment';
import { HomeSearchModalComponent } from './home-search-modal/home-search-modal.component';
import { Router } from '@angular/router';
import { SyncService } from '../core/services/sync/sync.service';
import { AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profileInfo: any;
  showMenu = true;

  pdb;
  tiles: Array<any> = [
    { title: "LABELS.CREATE_PROJECT", icon: 'assets/images/homeTiles/createproject.png', url: '/menu/create-project' },
    { title: "LABELS.LIBRARY", icon: 'assets/images/homeTiles/library.png', url: '/menu/tabs/lib-categories' },
    { title: "LABELS.TASKS", icon: 'assets/images/homeTiles/tasksclipboard.png', url: '/menu/tabs/task-list' },
    { title: "LABELS.REPORTS", icon: 'assets/images/homeTiles/reports.png', url: '/menu/tabs/reports' }
  ];
  activeProjects;
  constructor(
    private db: DbService,
    private unnatiService: UnnatiDataService,
    private networkService: NetworkService,
    private modalCtrl: ModalController,
    private router: Router,
    private loger: LoggerService,
    private toast: ToastMessageService,
    private storage: LocalStorageService,
    private syncServ: SyncService,
    private loader: LoaderService,
    private sunbird: SunbirdService,
    private utils: UtilsService,
    private alertController: AlertController,
    private translate: TranslateService,
    private kendraService: KendraApiService,
    private profile: ProfileService
    // private fcm: FcmProvider
  ) {
    networkService.$networkStatus.subscribe(status => {
    })
  }

  getProjects() {
    const config = {
      url: urlConstants.API_URLS.PROJECTS_LIST
    }
    this.loader.startLoader();
    this.unnatiService.get(config).subscribe(data => {
      if (data.result && data.result.length) {
        const projectData = this.utils.processProjectsData(data.result);
        this.db.bulkCreate(projectData).then(success => {
          // this.activeProjects = data.result;
          this.loader.stopLoader();
          this.getProjectsFromLocal();
        }).catch(error => {
          this.loader.stopLoader();
        })
      } else {
        this.loader.stopLoader();
      }
    }, error => {
      this.loader.stopLoader();
    })
  }

  async openSearchModal() {
    const modal = await this.modalCtrl.create({
      component: HomeSearchModalComponent,
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngOnInit() {
    //   this.db.createPouchDB(environment.db.projects);
    //   this.getCreateProjectForm();
    //   this.getTaskForm();
    // this.getProjectsFromLocal();
    this.activeProjects = [];
  }

  ionViewWillEnter() {
    this.activeProjects = [];
    this.db.createPouchDB(environment.db.projects);
    this.getCreateProjectForm();
    this.getProjectsFromLocal();
    this.getProfileRoles();
  }

  getCreateProjectForm() {
    this.storage.getLocalStorage(localStorageConstants.PROJECT_META_FORM).then(resp => {
    }, error => {
      const config = {
        url: urlConstants.API_URLS.CREATE_PROJECT_FORM
      }
      this.unnatiService.get(config).subscribe(data => {
        this.getTaskForm();
        if (data.result && data.result.length) {
          this.storage.setLocalStorage(localStorageConstants.PROJECT_META_FORM, data.result).then(resp => {
          }, error => {
          })
        }
      }, error => {
        this.getTaskForm();
      })
    })
  }

  getTaskForm() {
    this.storage.getLocalStorage(localStorageConstants.TASK_META_FORM).then(resp => {
    }, error => {
      const config = {
        url: urlConstants.API_URLS.GET_TASK_META_FORM
      }
      this.unnatiService.get(config).subscribe(data => {
        if (data.result && data.result.length) {
          this.storage.setLocalStorage(localStorageConstants.TASK_META_FORM, data.result).then(resp => {
          }, error => {
          })
        }
      }, error => {
      })
    })
  }
  getProjectsFromLocal() {
    this.db.read(2).then(success => {
      if (success && success.length) {
        this.activeProjects = success;
      } else {
        this.networkService.isNetworkAvailable ? this.getProjects() : this.showToast('MESSAGES.OFFLINE', 'danger');
        // this.fcm.initializeFCM();
      }
    }, error => {
      this.networkService.isNetworkAvailable ? this.getProjects() : this.showToast('MESSAGES.OFFLINE', 'danger');
    })
  }
  createPouchDB() {
    PouchDB.plugin(cordovaSqlitePlugin);
    PouchDB.plugin(PouchDBFind);
    this.pdb = new PouchDB('employees.db',
      { adapter: 'cordova-sqlite' });
  }

  create(employee) {
    return this.pdb.post(employee);
  }

  read() {
    // function allDocs() {
    this.pdb.allDocs({ include_docs: true, limit: 20 })
      .then(docs => {
        // alert(JSON.stringify(docs))
        console.log(docs)
        // this.employees = docs.rows.map(row => {
        //   row.doc.Date = new Date(row.doc.Date);
        //   return row.doc;
        // });
        // return this.employees;
      });
    // }

    // this.pdb.changes({ live: true, since: 'now', include_docs: true})
    //           .on('change', ()=>{
    //               allDocs().then((emps)=>{

    //               this.employees = emps;
    //               });
    //           });
    // return allDocs();

  }

  find() {
    // this.pdb.find({
    //   // selector: { name: 'Mario' },
    //   fields: ['_id', 'name'],
    //   sort: ['name']
    // }).then(success => {
    //   console.log(success)
    // })

    this.pdb.find({
      selector: { name: 'haridas' },
    }).then(success => {
    })
  }

  public navigate(url) {
    this.router.navigate([url]);
  }
  viewMore() {
    this.router.navigate(['/menu/tabs/projects']);
  }
  openProject(id) {
    this.router.navigate(['/menu/project-detail', id]);
  }
  showToast(msg, color) {
    this.toast.showMessage(msg, color);
  }




  getProfileRoles() {
    this.profile.getProfileRoles().then(profileData => {
      (profileData.roles && profileData.roles.length) ? null :
        (environment.isProfileUpdateMandatory ? this.profile.updateAlert('LABELS.WARNING', 'MESSAGES.UPDATE_PROFILE_CONFIRMATION', 'LABELS.PROFILE_UPDATE') : null)
    }).catch(error => {
      console.log(error)
    })


  }


}