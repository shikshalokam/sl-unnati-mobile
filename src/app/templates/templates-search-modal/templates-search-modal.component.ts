import { Component, OnInit, Input } from '@angular/core';
import { DbService, UnnatiDataService, urlConstants, LoaderService, ToastMessageService, NetworkService } from '../../core';
import { debounceTime } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import * as _ from 'underscore';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-templates-search-modal',
  templateUrl: './templates-search-modal.component.html',
  styleUrls: ['./templates-search-modal.component.scss'],
})
export class TemplatesSearchModalComponent implements OnInit {
  @Input() templates;
  @Input() categoryType;
  searchTextChanged = new Subject<string>();
  page = 1;
  limit = 25;
  constructor(
    private unnatiService: UnnatiDataService,
    private db: DbService,
    private loader: LoaderService,
    private networkService: NetworkService,
    private toast: ToastMessageService,
    private  router: Router,
    private modal: ModalController
  ) {
    this.search = _.debounce(this.search, 500)
   }

  ngOnInit() {
  }
  search(searchText) {
    if (searchText == null || searchText == undefined) {
      searchText = '';
    }
    this.loader.startLoader();
    const config = {
      url: urlConstants.API_URLS.TEMPLATE_SORT + '/' + this.categoryType + '?page=' + this.page + '&limit=' + this.limit + '&search=' + searchText + '&sort='
    }
    this.unnatiService.get(config).subscribe(data => {
      this.templates = data.result.count ? data.result.data : [];
      // data.count ? this.templates = data.result.data : this.templates = [];
      this.loader.stopLoader();
    }, error => {
      this.loader.stopLoader();
    })
  }

  goToTemplateDetails(id) {
    this.router.navigate(['/menu/template-view', id]);
    this.modal.dismiss();
  }
}
