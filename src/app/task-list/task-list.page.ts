import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../core';
import { DbService } from '../core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  projects: any;
  searchInput: any;
  ongoing: any[];
  past: any[];
  finalResults: any;
  totalResults: any;
  type = "ongoing"
  taskTabs = [
    {
      name: "LABELS.ONGOING",
      value: "ongoing",
    },
    {
      name: "LABELS.PAST",
      value: "past",
    }
  ];

  constructor(private storage: LocalStorageService,
    private db: DbService) {
  }

  ngOnInit() {
    this.createQuery();
  }

  tabChanged(event) {
    this.type = event.detail.value;
    this.createQuery();
  }

  taskListSearch(data) {
    this.searchInput = data;
    this.createQuery();
  }

  ionViewDidEnter() {
    this.createQuery();
  }

  createQuery() {
    const query = {
      selector: {
        'tasks': {
          "$elemMatch": {
            name: { $regex: RegExp(this.searchInput, 'i') }
          }
        },
        $and: [
          {
            isDeleted: { '$ne': true }
          },
        ]
      },
      $and: [
        {
          isDeleted: false
        },

      ],
      fields: ['tasks']
    };
    this.getDocs(query);
  }


  getDocs(query) {
    this.db.customQuery(query).then(success => {
      this.totalResults = success['docs'].length ? success['docs'] : [];
      this.past = [];
      this.ongoing = [];
      this.totalResults.forEach(element => {
        if (element.tasks) {
          element.tasks.forEach(data => {
            if(data.isDeleted != true) {
            if (data?.status == 'completed') {
              this.past.push(data);
            } else {
              this.ongoing.push(data);
            }
          }
          });
        }
      });
    }).catch(error => {
      this.totalResults = [];
    })
  }


}
