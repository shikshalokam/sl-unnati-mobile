import { Component, OnDestroy, OnInit } from '@angular/core';
import { DbService, statusType, urlConstants, LoaderService, UnnatiDataService, UtilsService } from '../core';
import { environment } from 'src/environments/environment';
import { ModalController } from '@ionic/angular';
import { HomeSearchModalComponent } from '../home/home-search-modal/home-search-modal.component';
import { Router } from '@angular/router';
import * as _ from "underscore";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit, OnDestroy {
  type = 'activePojects';
  projects;
  searchText: string;
  programs = [];
  currentProgramFilterIndex = 0;
  selectedFilter = "";
  tabFilter;
  tabs = [
    {
      name: "LABELS.ACTIVE_PROJECTS",
      value: "activePojects",
      filter: {
        $or: [
          {
            status: {
              $eq: statusType.completed
            }
          },
          {
            status: {
              $eq: statusType.inProgress
            }
          }
        ]
      }
    },
    {
      name: "LABELS.ALL_PROJECTS",
      value: "allProjects",
      filter: {}
    }
  ];
  constructor(
    private db: DbService,
    private modalCtrl: ModalController,
    private router: Router,
    private loader: LoaderService,
    private unnatiService: UnnatiDataService,
    private utils: UtilsService
  ) {
    this.db.createPouchDB(environment.db.projects);
  }

  ngOnInit() { }

  ngOnDestroy() {
  }
  action(event) {
    if (event == 'reload') {
      this.getLatesProjects();
    }
  }

  getLatesProjects() {
    const config = {
      url: urlConstants.API_URLS.PROJECTS_LIST
    }
    this.loader.startLoader();
    this.unnatiService.get(config).subscribe(data => {
      if (data.result && data.result.length) {
        const projectData = this.utils.processProjectsData(data.result);
        this.db.bulkCreate(projectData).then(success => {
          this.loader.stopLoader();
          this.getProjects();
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



  ionViewWillEnter() {
    this.getProjects();

  }
  segmentChanged(event) {
    this.type = event.detail.value;
    this.getProjects();
  }

  getProjects() {
    this.tabFilter = (this.type === 'allProjects') ? {} :
      {
        status: {
          $ne: statusType.notStarted
        }
      };
    let programQuery = [];
    if (this.currentProgramFilterIndex > 0) {
      programQuery = [
        {
          programName: {
            $eq: this.programs[this.currentProgramFilterIndex].programName
          }
        },
      ]
    }
    const query = {
      selector: {
        $and: [
          ...programQuery,
          {
            title: {
              $regex: RegExp(this.searchText, 'i')
            }
          },
          {
            isDeleted: {
              $ne: true
            }
          }
        ],
      },
      // sort: [{updatedAt: 'desc'}]
      // sort: ['title']
      fields: ['title', '_id', 'programName', 'programId', 'status', 'isDeleted'],
    };
    query.selector.$and.push(this.tabFilter);
    this.db.customQuery(query).then(success => {
      this.projects = success['docs'];
      (this.programs && !this.programs.length) ? this.createProgramsList([...this.projects]) : null;
    }, error => {
    })
  }

  onFilterChange(e) {
    let index = 0
    for (const program of this.programs) {
      if (program.programId === this.selectedFilter) {
        break
      }
      index++
    }
    this.currentProgramFilterIndex = index;
    this.getProjects();
  }

  createProgramsList(projects) {
    const programs = [];
    let index = 0;
    for (const project of projects) {
      if (project.programName) {
        const obj = {
          programName: project.programName,
          programId: project.programId ? project.programId : project.programName + index
        }
        !programs.includes(JSON.stringify(obj)) ? programs.push(JSON.stringify(obj)) : null
      }
      index++
    }
    const newProgram = [
      {
        programName: 'All',
        programId: ""
      }
    ];
    for (let program of programs) {
      newProgram.push(JSON.parse(program));
    }
    this.programs = newProgram;
  }

  onSearch(e) {
    this.searchText = e;
    this.getProjects();
  }

  async onSearcBtnClick() {
    const modal = await this.modalCtrl.create({
      component: HomeSearchModalComponent,
    });
    return await modal.present();
  }

  openProject(id) {
    // this.navCtrl.navigateRoot(['/menu/project-detail', id])
    // this.navCtrl.navigateForward(['/menu/project-detail', id]);
    // this.navCtrl.
    this.router.navigate(['/menu/project-detail', id]);
  }
}