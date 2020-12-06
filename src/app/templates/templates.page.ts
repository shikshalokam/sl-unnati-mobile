import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnnatiDataService, urlConstants, LoaderService, ToastMessageService, NetworkService, LocalStorageService, localStorageConstants } from '../core';
import { ModalController } from '@ionic/angular';
import { TemplatesSearchModalComponent } from './templates-search-modal/templates-search-modal.component';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.page.html',
  styleUrls: ['./templates.page.scss'],
})
export class TemplatesPage implements OnInit {
  templates = [];
  noTemplates: boolean = false;
  templatesCount;
  categoryTitle;
  categoryType;
  page: number = 1;
  limit: number = 25;
  sortOptions = [{
    title: 'LABELS.RECENTLY_ADDED',
    value: 'currentlyAdded',
    isSelected: true
  },
  {
    title: 'LABELS.MOST_IMPORTED',
    value: 'importantProject',
    isSelected: false
  },
    // {
    //   title: 'LABELS.ALL',
    //   value: 'all',
    //   isSelected: false
    // }
  ];
  defaultValue = 'currentlyAdded';
  constructor(public routerParam: ActivatedRoute,
    private unnatiService: UnnatiDataService,
    private loader: LoaderService,
    private router: Router,
    private networkService: NetworkService,
    private toast: ToastMessageService,
    private modalCtrl: ModalController,
    private localStorage: LocalStorageService
  ) {
    routerParam.params.subscribe(params => {
      this.categoryType = params.type;
      this.getCategoryTitle();
      this.templates = [];
      this.networkService.isNetworkAvailable ? this.sortTemplates('currentlyAdded') : this.toast.showMessage('MESSAGES.OFFLINE', 'danger');
    })
  }

  ngOnInit() {
  }
  // public getTemplates(type) {
  //   if (this.networkService.isNetworkAvailable) {
  //     this.noTemplates = false;
  //     const config = {
  //       url: urlConstants.API_URLS.TEMPLATES_LIST + type
  //     }
  //     this.loader.startLoader();
  //     this.unnatiService.get(config).subscribe(data => {
  //       if (data.result.data && data.result.data.length) {
  //         this.templates = data.result.data;
  //       } else {
  //         this.noTemplates = true;
  //       }
  //       this.loader.stopLoader();
  //     }, error => {
  //       this.loader.stopLoader();
  //     })
  //     this.loader.stopLoader();
  //   } else {
  //     this.toast.showMessage('MESSAGES.OFFLINE', 'danger');
  //   }

  // }
  public getTemplate(id) {
    this.router.navigate(['/menu/template-view', id]);
  }
  getCategoryTitle() {
    this.localStorage.getLocalStorage(localStorageConstants.LIBRARY_CATEGORIES).then(data => {
      data.forEach(element => {
        if (element.type == this.categoryType) {
          this.categoryTitle = element.name;
        }
      });
    }).catch(error => {

    })
  }
  selectSort(value) {
    this.templates = [];
    this.page = 1;
    this.sortOptions.forEach(element => {
      element.isSelected = false;
      if (element.value == value) {
        element.isSelected = true;
        this.defaultValue = element.value;
      }
    });

    this.networkService.isNetworkAvailable ? this.sortTemplates(value) : this.toast.showMessage('MESSAGES.OFFLINE', 'danger');
  }


  sortTemplates(option?) {
    this.loader.startLoader();
    const config = {
      url: urlConstants.API_URLS.TEMPLATE_SORT + '/' + this.categoryType + '?page=' + this.page + '&limit=' + this.limit + '&search=&sort=' + option
    }
    this.unnatiService.get(config).subscribe(data => {
      this.loader.stopLoader();
      if (data.result.data && data.result.data.length) {
        this.templates = this.templates.concat(data.result.data);
        this.templatesCount = data.result.count;
        this.templates.forEach(element => {
        });
      }
      // console.log(data)
    }, error => {
      this.loader.stopLoader();
    })
  }
  public loadMoreTemplates() {
    this.page++;
    this.sortTemplates('');
  }
  async templateSerach() {
    const modal = await this.modalCtrl.create({
      component: TemplatesSearchModalComponent,
      // cssClass: 'my-custom-class'
      componentProps: {
        templates: this.templates,
        categoryType: this.categoryType
      }
    });
    return await modal.present();
  }
}
