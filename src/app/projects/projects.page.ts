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

  searchText: string = '';
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
  sortOptions = [
    {
      label: "Projects",
      value: "project"
    },
    {
      label: "Programs",
      value: "program"
    }
  ]
  selectedTab = "activePojects";
  selectedSortOption = "project";
  completeProjectData = [];
  programsList = [];
  projectsForSelectedProgram = [];
  currentProgramFilterIndex = -1;
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

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  ionViewWillEnter() {
    this.getProjects();
  }

  segmentChanged(event) {
    this.currentProgramFilterIndex = -1;
    this.selectedTab = event.detail.value;
    this.getProjects();
    this.projectsForSelectedProgram = [];
  }

  getProjects() {
    const query = this.createQuery();
    this.db.customQuery(query).then(success => {
      this.completeProjectData = success['docs'];
      this.porecessOnBasisOfSortBy();
    }, error => {
    })
  }

  porecessOnBasisOfSortBy() {
    if (this.selectedSortOption === 'program') {
      this.createProgramsList();
    } else {
    }
  }

  createQuery() {
    const query = {
      selector: {
        $and: [
          {
            isDeleted: {
              $ne: true
            }
          }
        ],
      },
      fields: ['title', '_id', 'programName', 'programId', 'status', 'isDeleted'],
    };
    //filter data according to segment
    if (this.selectedTab === 'activePojects') {
      const filter: any = {
        status: {
          $ne: statusType.notStarted
        }
      };
      query.selector.$and.push(filter)
    }
    if (this.selectedSortOption === 'project') {
      //For sort by Project we need to search for project name
      const searchFilter: any = {
        title: {
          $regex: RegExp(this.searchText, 'i')
        }
      };
      query.selector.$and.push(searchFilter)
    } else {
      //For sort by Program we need to search for program name
      if (this.searchText) {
        const searchFilter: any = {
          programName: {
            $regex: RegExp(this.searchText, 'i')
          }
        };
        query.selector.$and.push(searchFilter)
      }

    }
    return query
  }

  onSearch(e) {
    this.searchText = e;
    this.getProjects();
  }
  createProgramsList() {
    const projects = [...this.completeProjectData];
    const programs = [];
    let index = 0;
    for (const project of projects) {
      const obj = {
        programName: project.programName ? project.programName : "",
        programId: project.programId ? project.programId : ""
      }
      !programs.includes(JSON.stringify(obj)) ? programs.push(JSON.stringify(obj)) : null
      index++
    }
    const newProgram = [];
    for (let program of programs) {
      newProgram.push(JSON.parse(program));
    }
    this.programsList = newProgram;
  }

  onProgramSelect(index) {
    this.projectsForSelectedProgram = [];
    const query = {
      selector: {
        $and: [
          {
            isDeleted: {
              $ne: true
            }
          },
          {
            programName: {
              $exists: this.programsList[index].programName ? true : false
            }
          },
          {
            programId: {
              $exists: this.programsList[index].programId ? true : false
            }
          }
        ],
      },

      fields: ['title', '_id', 'programName', 'programId', 'status', 'isDeleted'],
    };
    if (this.programsList[index].programName) {
      const filter: any = {
        programName: {
          $regex: RegExp(this.programsList[index].programName)
        }
      };
      query.selector.$and.push(filter)
    }
    if (this.programsList[index].programId) {
      const filter: any = {
        programId: {
          $regex: RegExp(this.programsList[index].programId)
        }
      };
      query.selector.$and.push(filter)
    }
    if (this.selectedTab === 'activePojects') {
      const filter: any = {
        status: {
          $ne: statusType.notStarted
        }
      };
      query.selector.$and.push(filter);
    }
    this.currentProgramFilterIndex = index;
    this.db.customQuery(query).then(success => {
      this.projectsForSelectedProgram = success['docs'];
    }).catch(error => {
    })
  }

  openProject(id) {
    this.router.navigate(['/menu/project-detail', id]);
  }
}