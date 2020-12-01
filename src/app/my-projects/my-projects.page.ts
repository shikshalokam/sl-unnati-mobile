import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService, UnnatiDataService, urlConstants, LoaderService, ToastMessageService, NetworkService, menuConstants } from '../core';
import { environment } from 'src/environments/environment';
import { PopoverController, AlertController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.page.html',
  styleUrls: ['./my-projects.page.scss'],
})
export class MyProjectsPage implements OnInit {
  projects:any[];
  project: any;
  templatesCount;
  categoryTitle = 'LABELS.MY_PROJECTS';
  categoryType;
  searchInput: any;
  pageName = 'my-projects';
  searchResults: any;
  constructor(public routerParam: ActivatedRoute,
    public popoverController: PopoverController,
    private unnatiService: UnnatiDataService,
    private db: DbService,
    private loader: LoaderService,
    private router: Router,
    private networkService: NetworkService,
    private toast: ToastMessageService,
    private alert: AlertController,
    private translate: TranslateService,
    private modalCtrl: ModalController) {
    this.db.createPouchDB(environment.db.projects);
    routerParam.params.subscribe(params => {
      this.categoryType = params.type;
      this.projects = [];
      this.searchQuery();
      // this.networkService.isNetworkAvailable ? this.sortTemplates('currentlyAdded') : this.toast.showMessage('MESSAGEs.OFFLINE', 'danger');
    })
  }

  ngOnInit() {
  }
  // public getProjects() {
  //   this.db.read().then(success => {
  //     if (success && success.length) {
  //       this.projects = success;
  //     }
  //   }, error => {
  //   })
  // }

  openProject(id) {
    this.router.navigate(['/menu/project-detail', id]);
  }

  onSearch(value) {
    this.searchInput = value;
    this.searchQuery();
  }


  searchQuery(){
    const query = {
      selector: {},
    };
    query['selector'] = {
      $and: [
        {
          title: {
            $regex: RegExp(this.searchInput, 'i')
          }
        }
      ]
    }

    this.getDocs(query)
  }

  getDocs(query) {
    this.db.customQuery(query).then(success => {
      this.searchResults = success['docs'].length ? success['docs'] : [];
      this.projects = this.searchResults;
    })
  }
}
