import { Component, OnInit } from '@angular/core';
import { DbService, UnnatiDataService, urlConstants, NetworkService, LoaderService, ToastMessageService, LoggerService, LocalStorageService, localStorageConstants } from '../core';
import { environment } from 'src/environments/environment';
import { Platform, AlertController, ModalController } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from "@angular/platform-browser";
import { LibrarySearchComponent } from './library-search/library-search.component';

declare var cordova: any;

@Component({
  selector: 'app-lib-categories',
  templateUrl: './lib-categories.page.html',
  styleUrls: ['./lib-categories.page.scss'],
})
export class LibCategoriesPage implements OnInit {
  categories: any;
  defaultCategory = {
    name: 'My Projects',
    localUrl: 'assets/images/myprojects.png',
    projectsCount: 0,
    type: 'myprojects',
  }
  isIos;
  appFolderPath;
  newTemplates = [];
  numberTemplates: number = 0;
  private win: any = window;
  constructor(
    private unnatiService: UnnatiDataService,
    // private db: DbService,
    private networkService: NetworkService,
    private platform: Platform,
    private fileTransfer: FileTransfer,
    private loader: LoaderService,
    private router: Router,
    private toast: ToastMessageService,
    private log: LoggerService,
    private translate: TranslateService,
    public alertController: AlertController,
    private sanitizer: DomSanitizer,
    private modalCtrl: ModalController,
    private localStorage: LocalStorageService
  ) {
    // this.db.createPouchDB(environment.db.categories);
    this.isIos = this.platform.is('ios') ? true : false;
    this.appFolderPath = this.isIos ? cordova.file.documentsDirectory + 'libCategories/' : cordova.file.externalDataDirectory + 'libCategories/';
  }

  ngOnInit() {
    this.getDownloadedCategories();
  }

  async openSearchModal() {
    const modal = await this.modalCtrl.create({
      component: LibrarySearchComponent,
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  public getCategories() {
    this.loader.startLoader();
    const config = {
      url: urlConstants.API_URLS.LIBRARY_CATEGORIES
    }
    this.unnatiService.get(config).subscribe(async (data) => {
      this.numberTemplates = 0;
      this.newTemplates = [];
      this.loader.stopLoader();
      if (data.result && data.result.length) {
        // bulk create
        data.result.forEach(category => {
          this.downloadIcon(category).then(url => {
            category.localUrl = url;
          })
        });
        if (this.categories && this.categories.length) {
          this.categories.forEach(localData => {
            data.result.forEach(newData => {
              if (newData.name == localData.name && newData.projectsCount > localData.projectsCount) {
                this.newTemplates.push(' ' + '"' + newData.name + '"');
                let newCount = newData.projectsCount - localData.projectsCount;
                this.numberTemplates = this.numberTemplates + newCount;
              }
            });
          });
          if (this.numberTemplates && this.newTemplates) {
            this.showPopupNewProjects('LABELS.NEWPROJECTS_AVAILABEL', 'MESSAGES.NEW_PROJECTS_ADDED', 'LABELS.CONTINUE');
          } else {
            let text;
            this.translate.get('MESSAGES.PROJECTS_REFRESH_NO_PROJECTS_FOUND').subscribe(data => {
              text = data;
            })
            this.toast.showMessage(text, 'success');
          }
        }
        this.categories = data.result;
        this.restoreData();
      }
    }, error => {
      this.loader.stopLoader();
    })
  }

  public restoreData() {
    // this.db.dropDb().then(data => {
    //   this.db.createPouchDB(environment.db.categories);
    //   this.db.bulkCreate(this.categories).then(success => {
    //   }).catch(error => {
    //     this.log.log(error, "bulkcreate categories");
    //   })
    // })

    this.localStorage.setLocalStorage(localStorageConstants.LIBRARY_CATEGORIES, this.categories).then(success => {

    }).catch(error => {

    })
  }
  public showToast() {
    this.toast.showMessage('MESSAGES.OFFLINE', 'danger');
  }
  public downloadIcon(category): Promise<any> {
    return new Promise(resolve => {
      if (category.url && category.type != 'myprojects') {
        const fileTransfer: FileTransferObject = this.fileTransfer.create();
        fileTransfer
          .download(category.url, this.appFolderPath + category.name + ".png")
          .then(
            (entry) => {
              resolve(this.win.Ionic.WebView.convertFileSrc(entry.nativeURL));
            },
            (error) => {
              this.log.log(error, "downloadIcon");
              resolve()
            }
          );
      }
    })
  }
  public categoryView(type) {
    this.router.navigate(['/menu/templates', type])
  }

  public openMyprojects() {
    this.router.navigate(['/menu/my-projects']);
  }
  getDownloadedCategories() {
    // this.db.read().then(categories => {
    // if (categories && !categories.length) {
    //   this.networkService.isNetworkAvailable ? this.getCategories() : this.showToast();
    // } else {
    //   categories.forEach(category => {
    //     category.localUrl = this.win.Ionic.WebView.convertFileSrc(this.appFolderPath + category.name + ".png");
    //   });
    //   this.categories = categories;
    // }
    // }, error => {
    //   this.log.log(error, "get Category from local DB");
    // })

    this.localStorage.getLocalStorage(localStorageConstants.LIBRARY_CATEGORIES).then(categories => {
      if (categories && !categories.length) {
        this.networkService.isNetworkAvailable ? this.getCategories() : this.showToast();
      } else {
        categories.forEach(category => {
          category.localUrl = this.win.Ionic.WebView.convertFileSrc(this.appFolderPath + category.name + ".png");
        });
        this.categories = categories;
      }
    }).catch(error => {
      this.getCategories()
    })
  }
  getImgContent(file) {
    return this.sanitizer.bypassSecurityTrustUrl(file);
  }
  action(event) {
    switch (event) {
      case "reload": {
        this.networkService.isNetworkAvailable ? this.getCategories() : this.showPopupForNoNet('LABELS.UNABLE_TO_REFRESH', 'MESSAGES.YOU_ARE_WORKING_OFFLINE_TRY_AGAIN', 'LABELS.CANCEL', 'LABELS.TRYAGAIN');
        break;
      }
    }
  }
  async showPopupForNoNet(header, body, btnCancel, btnTryagain) {
    let texts;
    this.translate.get([header, body, btnCancel, btnTryagain]).subscribe(data => {
      texts = data;
    })
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: texts[header],
      message: texts[body],
      buttons: [
        {
          text: texts[btnCancel],
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: texts[btnTryagain],
          handler: () => {
            this.networkService.isNetworkAvailable ? this.getCategories() : this.toast.showMessage('MESSAGES.PLEASE_NETWORK', 'danger');
          }
        }
      ]
    });
    await alert.present();
  }

  async showPopupNewProjects(header, body, btnContinue) {
    let texts;
    this.translate.get([header, body, btnContinue]).subscribe(data => {
      texts = data;
    })
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: texts[header],
      message: this.numberTemplates + ' ' + texts[body] + this.newTemplates,
      buttons: [
        {
          text: texts[btnContinue],
          role: 'cancel',
          cssClass: 'center-btn',
          handler: (blah) => {
          }
        }
      ]
    });
    await alert.present();
  }
}