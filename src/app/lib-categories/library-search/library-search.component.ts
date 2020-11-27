import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DbService, urlConstants, UnnatiDataService, NetworkService, ToastMessageService, UtilsService } from 'src/app/core';
import { environment } from 'src/environments/environment';
import * as _ from 'underscore';

@Component({
  selector: 'app-library-search',
  templateUrl: './library-search.component.html',
  styleUrls: ['./library-search.component.scss'],
})
export class LibrarySearchComponent implements OnInit {
  projects: Array<any> = [];
  templates: Array<any> = [];
  tasks: Array<any> = [];
  selectedFilter;
  searchString;
  searchResults;
  constructor(
    private db: DbService,
    private router: Router,
    private modal: ModalController,
    private unnatiService: UnnatiDataService,
    private network: NetworkService,
    private toast: ToastMessageService,
    private utils: UtilsService

  ) {
    this.db.createPouchDB(environment.db.projects);
  }
  ngOnInit() {
    this.onFilterChange();
  }
  onSearch(value) {
    this.searchString = value;
    this.projects = [];
    this.createQuery();
    this.network.isNetworkAvailable ? this.categoryTemplates() : this.toast.showMessage('MESSAGES.YOU_ARE_WORKING_OFFLINE_TRY_AGAIN', 'danger')
  }

  createQuery() {
    const query = {
      selector: {},
      fields: ['title', '_id', 'programName', 'categories'],
    };
    if (this.searchString) {
      query['selector'] = {
        $and: [
          {
            title: {
              $regex: RegExp(this.searchString, 'i')
            }
          }
        ]
      }
    }
    // query['selector']['$and'].push({
    //   isDeleted: {
    //     $ne: true
    //   }
    // })
    this.getDocs(query);
  }

  getDocs(query) {
    this.db.customQuery(query).then(success => {
      let projects = success['docs'].length ? success['docs'] : [];
      console.log(projects, "projects");
      this.projects = this.utils.processProjectsData(projects);
      console.log(this.projects, " projects 60");
    }).catch(error => {
      this.projects = [];
    })
  }

  onFilterChange() {
    this.createQuery();
  }

  public categoryTemplates() {
    const config = {
      url: urlConstants.API_URLS.LIBRARY_SEARCH + this.searchString
    }
    this.unnatiService.get(config).subscribe(data => {
      if (data.result && data.result.data.length) {
        let processedData = this.utils.processProjectsData(data.result.data);
        this.templates = processedData;
      }
    }, error => {
    })
  }

  public getTemplate(id) {
    this.modal.dismiss();
    this.router.navigate(['menu/template-view', id]);
  }

  getProject(id) {
    this.modal.dismiss();
    this.router.navigate(['menu/project-detail', id]);
  }
}
