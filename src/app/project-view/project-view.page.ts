import { Component, OnInit, ViewChild } from '@angular/core';
import { NetworkService } from '../network.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from './project.service';
import { Storage } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { IonTabs } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.page.html',
  styleUrls: ['./project-view.page.scss'],
})
export class ProjectViewPage implements OnInit {
  @ViewChild('myTabs') tabs: IonTabs;

  public connected: any = localStorage.getItem('networkStatus');
  public id;
  public project;
  public completed;
  public title: any = "home_tab";
  canGoBack: boolean = false;
  isKeyBoardUp: boolean = false;
  public language: string = this.translate.currentLang;
  constructor(
    public storage: Storage,
    public projectService: ProjectService,
    public keyboard: Keyboard,
    public menuCtrl: MenuController,
    public platform: Platform,
    public routerOutlet: IonRouterOutlet,
    public networkService: NetworkService,
    public translate: TranslateService,
    public network: Network,
    public route: ActivatedRoute,
    public router: Router,
    public screenOrientation: ScreenOrientation) {
    this.menuCtrl.enable(true);
    platform.ready().then(() => {
      networkService.emit.subscribe(status => {
        this.connected = status;
      })
      this.keyboard.onKeyboardShow().subscribe(() => { this.isKeyBoardUp = true; });
      this.keyboard.onKeyboardHide().subscribe(() => { this.isKeyBoardUp = false; });
    })
    this.projectService.title.subscribe((title: any) => {
      if (title != 'home_tab' && title != 'projects_tab' && title != 'schools_tab' && title != 'reports_tab') {
        this.canGoBack = true;
      } else {
        this.canGoBack = false;
      }
      this.translate.get(title).subscribe((text: string) => {
        this.title = text;
      });
    })
    this.networkService.emit.subscribe(value => {
      this.connected = value;
    });
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.networkService.langEmit.subscribe((value: any) => {
      this.translate.use(value);
      this.translate.get(this.title).subscribe((text: string) => {
        this.title = text;
      });
    });
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(true);
    this.menuEnable();
  }
  public menuEnable() {
  }
  ngOnInit() {
    this.checkNetwork();
    this.selectTab("home_tab");
  }
  // Selected Tab for title of the screen.
  public selectTab(title) {
    this.projectService.setTitle(title);
    this.translate.get(title).subscribe((text: string) => {
      this.title = text;
    });
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
  }
  checkNetwork() {
    this.platform.ready().then(() => {
      this.network.onDisconnect()
        .subscribe(() => {
          this.connected = false;
          this.networkService.status(this.connected);
          localStorage.setItem("networkStatus", this.connected);
        }, error => {
        });
      this.network.onConnect()
        .subscribe(() => {
          this.connected = true;
          this.networkService.status(this.connected);
          localStorage.setItem("networkStatus", this.connected);
        });
      // this.networkSubscriber();
    });
  }
  public navigateToNewsFeed() {
    this.router.navigate(['/project-view/newsfeed']);
  }
}