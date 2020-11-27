import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService, UnnatiDataService, urlConstants, LoaderService, ToastMessageService, NetworkService } from '../core';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.page.html',
  styleUrls: ['./my-projects.page.scss'],
})
export class MyProjectsPage implements OnInit {
  projects = [];
  templatesCount;
  categoryTitle = 'LABELS.MY_PROJECTS';
  categoryType;

  constructor(public routerParam: ActivatedRoute,
    private unnatiService: UnnatiDataService,
    private db: DbService,
    private loader: LoaderService,
    private router: Router,
    private networkService: NetworkService,
    private toast: ToastMessageService,
    private modalCtrl: ModalController) {
    this.db.createPouchDB(environment.db.projects);
    routerParam.params.subscribe(params => {
      this.categoryType = params.type;
      this.projects = [];
      this.getProjects();
      // this.networkService.isNetworkAvailable ? this.sortTemplates('currentlyAdded') : this.toast.showMessage('MESSAGEs.OFFLINE', 'danger');
    })
  }

  ngOnInit() {
  }
  public getProjects() {
    this.db.read().then(success => {
      if (success && success.length) {
        this.projects = success;
      }
    }, error => {
    })
  }
  
  openProject(id) {
    this.router.navigate(['/menu/project-detail', id]);
  }
}
