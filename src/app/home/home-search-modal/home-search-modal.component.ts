import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DbService } from 'src/app/core';
import { environment } from 'src/environments/environment';
import * as _ from 'underscore';

@Component({
  selector: 'app-home-search-modal',
  templateUrl: './home-search-modal.component.html',
  styleUrls: ['./home-search-modal.component.scss'],
})
export class HomeSearchModalComponent implements OnInit {

  pdb;
  projects: Array<any> = [];
  tasks: Array<any> = [];
  selectedFilter;
  searchString;
  searchResults;

  filters = [
    {
      icon: "document-text",
      name: "LABELS.PROJECTS",
      key: "project",
      fieldsToReturn: ['title', '_id', 'programName']
    },
    {
      icon: "add-circle",
      name: "LABELS.TASKS",
      key: "tasks",
      fieldsToReturn: ['title', '_id', 'programName', 'tasks']

    },
    {
      icon: "clipboard",
      name: "LABELS.PROGRAMS",
      key: "program",
      fields: [],
      fieldsToReturn: ['title', '_id', 'programName']
    },
    // {
    //   icon: "document-attach",
    //   name: "Documents",
    //   key: "doc",
    //   fields: [],

    // },
    // {
    //   icon: "image",
    //   name: "Images",
    //   key: "image",
    //   fields: []
    // }

  ]

  constructor(
    private db: DbService,
    private router: Router,
    private modal: ModalController
  ) {
    this.db.createPouchDB(environment.db.projects);
  }

  ngOnInit() {
    this.onFilterChange(this.filters[0]);
  }

  onSearch(value) {
    this.searchString = value;
    this.createQuery();
  }

  createQuery() {
    const query = {
      selector: {
        $and: []
      },
      fields: this.selectedFilter.fieldsToReturn,
    };
    if (this.searchString) {
      switch (this.selectedFilter.key) {
        case 'project':
          query['selector'] = {
            $and: [
              {
                title: {
                  $regex: RegExp(this.searchString, 'i')
                }
              }
            ]
          }
          break
        case 'program':
          query['selector'] = {
            $and: [
              {
                'programName': {
                  $regex: RegExp(this.searchString, 'i')
                }
              }
            ]
          }
          break
        case 'tasks':
          query['selector'] = {
            $and: [
              {
                'tasks': {
                  "$elemMatch": {
                    name: { $regex: RegExp(this.searchString, 'i') }
                  }
                }
              }
            ]
          }
          break
      }
    }
    query['selector']['$and'].push({
      isDeleted: {
        $ne: true
      }
    })
    this.getDocs(query);
  }

  getDocs(query) {
    this.db.customQuery(query).then(success => {
      this.searchResults = success['docs'].length ? success['docs'] : [];
      if (this.selectedFilter.key === 'tasks') {
        const filteredConetent = [];
        for (const project of this.searchResults) {
          for (const task of project.tasks) {
            const obj = {
              projectName: project.title,
              projectId: project._id,
              taskName: task.name,
              taskId: task._id
            }
            if ((this.searchString && obj.taskName.toLowerCase().includes(this.searchString.toLowerCase())) || !this.searchString) {
              filteredConetent.push(obj)
            }
          }
        }
        this.searchResults = filteredConetent;
      }
    }).catch(error => {
      this.searchResults = [];
    })
  }

  onFilterChange(filter) {
    this.selectedFilter = filter;
    this.createQuery();
  }

  navigateTo(url) {
    this.modal.dismiss();
    this.router.navigate([url]);
  }

}
