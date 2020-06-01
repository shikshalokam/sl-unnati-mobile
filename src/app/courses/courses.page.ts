import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Location } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  public connected;
  public id;
  public parameter;
  public back = '';
  public projectResources = [{
    title: 'Library Setup',
    id: 'https://bodh.shikshalokam.org/resources/play/content/do_312826092077654016251',
  },
  {
    title: 'Enrollment Drive',
    id: 'https://bodh.shikshalokam.org/resources/play/content/do_3126782017974927362928',
  },
  {
    title: 'student led Assembly',
    id: 'https://bodh.shikshalokam.org/resources/play/collection/do_3128579711319326721444?contentId=do_3127638365193584642461',
  }
  ];
  public resources = [{
    project: [{
      projectId: '5d7b81512550177ef7f08c78',
      resourcesList: [{
        title: 'Pratibha Karinji',
        id: 'https://bodh.shikshalokam.org/resources/play/content/do_312828319912845312280',
      },
      {
        title: 'Backward Planning',
        id: 'https://bodh.shikshalokam.org/resources/play/content/do_3127328250837155841890',
      },
      {
        title: 'Table 2 Audit of your school’s engagement with parents',
        id: 'https://bodh.shikshalokam.org/resources/play/content/do_3126235500899614722134',
      }
      ]
    },
    {
      projectId: '5d7b81512550177ef7f08c79',
      resourcesList: [{
        title: 'Developing leadership skills through the Student Parliament program',
        id: 'https://bodh.shikshalokam.org/resources/play/content/do_3127734629782978561755',
      }
      ]
    },
    {
      projectId: '5d7b81512550177ef7f08c7b',
      resourcesList: [{
        title: 'Enrolment Drive',
        id: 'https://bodh.shikshalokam.org/resources/play/content/do_3126782017974927362928',
      }
      ]
    },
    {
      projectId: '5d7b81512550177ef7f08c7d',
      resourcesList: [{
        title: 'Library: Guidelines',
        id: 'https://bodh.shikshalokam.org/resources/play/content/do_312826092077654016251',
      },
      {
        title: 'Resource 2: Storytelling, songs, role play and drama',
        id: 'https://bodh.shikshalokam.org/resources/play/content/do_312465962347151360216433',
      }
      ]
    },
    {
      projectId: '5d7b81512550177ef7f08c7c',
      resourcesList: [{
        title: 'Zilpa - Students entrepreneurship program',
        id: 'https://bodh.shikshalokam.org/resources/play/content/do_3127525419856117762135',
      },
      {
        title: 'SLDP -SDI-Approach 1 School Physical Environment-SALA( School as a learning aid - a concept note)',
        id: 'https://bodh.shikshalokam.org/play/content/do_31268446159337881621295',
      }
      ]
    }
    ]
  }];
  constructor(public networkService: NetworkService,
    public network: Network,
    public storage: Storage,
    public location: Location,
    public appLauncher: AppLauncher,
    public toastController: ToastController,
    public route: ActivatedRoute) {
    route.params.subscribe(param => {
      if (param.cat) {
        if (param.cat == 'template-view') {
          if (param.programId) {
            this.back = 'project-view/template-view/' + param.projectId + '/' + param.programId;
          } else {
            this.back = 'project-view/template-view/' + param.projectId;
          }
        } else {
          this.parameter = param.cat;
          this.back = 'project-view/project-detail';
        }
      } else {
        this.parameter = param.cat;
        this.back = 'project-view/detail';
      }
    })
    this.route
      .queryParams
      .subscribe(params => {
      });
    this.networkService.emit.subscribe(value => {
      this.connected = value;
      this.checkNetwork();
    });
    this.id = localStorage.getItem("id");
  }

  ngOnInit() {
    //this.prepareResources();
  }

  //Launch learner App
  public openApp() {
    // org.shikshalokam.app://community.shikshalokam.org/learn
    const options: AppLauncherOptions = {
      packageName: 'org.shikshalokam.bodh',
    }
    this.appLauncher.canLaunch(options).then((canLaunch: boolean) => {
      if (canLaunch) {
        this.appLauncher.launch(options).then(() => {
        }, (err) => {
          if (navigator.onLine) {
            window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.bodh&hl=en', '_system')
          } else {
            this.errorMessage('Check your internet Connection.');
          }
        })
      } else {
        if (navigator.onLine) {
          window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.bodh&hl=en', '_system')
        } else {
          this.errorMessage('Check your internet Connection.');
        }
      }
    }, error => {
      if (navigator.onLine) {
        window.open('https://play.google.com/store/apps/details?id=org.shikshalokam.bodh&hl=en', '_system')
      } else {
        this.errorMessage('Check your internet Connection.');
      }
    })
  }
  // Prepare resources
  public prepareResources() {
    this.storage.get('currentProject').then(cp => {
      this.resources.forEach(resource => {
        resource.project.forEach(project => {
          if (cp._id == project.projectId) {
            this.projectResources = project.resourcesList;
          }
        });
      });
    })
  }
  // Location Back
  public goBack() {
    this.location.back();
  }
  // netwrok Connection
  checkNetwork() {
    this.network.onDisconnect()
      .subscribe(() => {
        this.connected = false;
      });
    this.network.onConnect()
      .subscribe(() => {
        this.connected = true;
      });
    // this.networkSubscriber();
  }
  // On destroy
  ngOnDestroy() {
    this.checkNetwork();
  }
  // Error toast message
  async errorMessage(msg) {
    const toast = await this.toastController.create({
      message: msg, color: 'danger',
      duration: 2000
    });
    toast.present();
  }
}
