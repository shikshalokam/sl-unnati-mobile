
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TasksService } from '../tasks/tasks.service';
import { ProjectService } from '../project-view/project.service';
import { Location } from '@angular/common'
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProvider } from '../api/api';
import { AlertController, Platform } from '@ionic/angular';
import * as Highcharts from 'highcharts/highcharts-gantt';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage implements OnInit, OnDestroy {
  public title;
  public tasks = [];
  public value = [];
  public totalTasks = 0;
  public totalSTasks = 0;
  public status: string;
  public id;
  public entityId;
  chartOptions;
  highcharts = Highcharts;
  public refreshToken: any;
  constructor(public storage: Storage,
    public platform: Platform,
    public projectService: ProjectService,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    public api: ApiProvider,
    public location: Location,
    public tasksService: TasksService, public screenOrientation: ScreenOrientation) {
    this.projectService.emit.subscribe(value => {
      try {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      } catch (error) {
      }
    })
    this.tasksService.emit.subscribe(value => {
      this.platform.ready().then(() => {
        this.setupChart();
        try {
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        } catch (error) {
        }
      })
    });
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.storage.get('latestProjects').then(data => {
        if (typeof data == 'string') {
          data = JSON.parse(data);
        }
        let matched: boolean = false;
        data.forEach(projects => {
          projects.projects.forEach(data => {
            if (data._id == this.id) {
              matched = true;
              this.title = data.title;
              this.storage.set('projectToBeView', data).then(data => {
                this.platform.ready().then(() => {
                  this.setupChart();
                  try {
                    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                  } catch (error) {
                  }
                })
              })
            }
          });
        });
        if (!matched) {
          this.getProjectsFromService();
        }
      })
    });
  }
  ionViewDidEnter() {
    this.setupChart();
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    } catch (error) {
    }
  }
  ngOnInit() {
    this.platform.ready().then(() => {
      try {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      } catch (error) {
      }
    })
  }
  // // prepare data for chart
  public setupChart() {
    this.value = [];
    var dates = [];
    this.totalTasks = 0;
    this.totalSTasks = 0;
    this.storage.get('projectToBeView').then(pc => {
      if (!pc) {
        this.getProjectsFromService();
      } else {
        // pc.projects.forEach(project => {
        this.title = pc.title;
        this.status = pc.status;
        this.entityId = pc.entityId;
        if (pc.tasks) {
          this.totalTasks = pc.tasks.length;
        }
        pc.tasks.forEach(task => {
          if (task.subTasks) {
            this.totalSTasks = this.totalSTasks + task.subTasks.length;
          }
          task.startDate = new Date(task.startDate);
          task.endDate = new Date(task.endDate);
          dates.push(new Date(task.startDate));
          dates.push(new Date(task.endDate));
          let id = task._id;
          let sdate = task.startDate.getDate();
          let smonth = task.startDate.getMonth();
          let syear = task.startDate.getFullYear();
          let edate = task.endDate.getDate();
          let emonth = task.endDate.getMonth();
          let eyear = task.endDate.getFullYear();
          let color: string;
          if (task.status == 'in progress' || task.status == 'In progress') {
            color = '#f7a35c';
          }
          else if (task.status == 'completed' || task.status == 'Completed') {
            color = '#67e427';
          } else if (task.status == 'not yet started' || task.status == 'Not started') {
            color = '#adafad';
          }
          this.value.push({
            name: task.title,
            start: Date.UTC(syear, smonth, sdate),
            end: Date.UTC(eyear, emonth, edate),
            color: color,
            id: task._id
          })
        });
        var min = dates.sort((a, b) => a - b)[0], max = dates.slice(-1)[0];
        this.loadChart(this.value, min, max);
        // });
      }
    })
  }

  // chartGantt: Highcharts.Options = {
  // };
  // // Load chart after preparing data for chart.
  loadChart(value, min, max) {
    let mindate = min.getDate();
    let minmonth = min.getMonth();
    let minyear = min.getFullYear();
    let maxdate = max.getDate();
    let maxmonth = max.getMonth();
    let maxyear = max.getFullYear();
    Highcharts.ganttChart('container', {
      xAxis: {
        min: Date.UTC(minyear, minmonth, mindate),
        max: Date.UTC(maxyear, maxmonth, maxdate)
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          },
          showInLegend: true
        },
      },
      series: [{
        name: '',
        type: 'gantt',
        data: value,
        events: {
          click: this.onPointClick.bind(this)
        },
      }]

    });
  }

  onPointClick = (event) => {
    this.router.navigate(['project-view/subtask-status', event.point.options.id]);
  }
  public goBack() {
    this.router.navigate(['project-view/school-task-report/' + this.entityId + '/School'])
  }
  ngOnDestroy() {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
  }
  // Get projects 
  public getProjectsFromService() {
    let id = {
      projectId: this.id
    }
    this.projectService.projectDetails(id).subscribe((resp: any) => {
      this.storage.set('projectToBeView', resp.data).then(pc => {
        this.value = [];
        var dates = [];
        this.totalTasks = 0;
        this.totalSTasks = 0;
        pc.projects.forEach(project => {
          this.title = project.title;
          this.status = project.status;
          this.entityId = project.entityId;
          if (project.tasks) {
            this.totalTasks = project.tasks.length;
            project.tasks.forEach(task => {
              if (task.subTasks) {
                this.totalSTasks = this.totalSTasks + task.subTasks.length;
              }
              task.startDate = new Date(task.startDate);
              task.endDate = new Date(task.endDate);
              dates.push(new Date(task.startDate));
              dates.push(new Date(task.endDate));
              let id = task._id;
              let sdate = task.startDate.getDate();
              let smonth = task.startDate.getMonth();
              let syear = task.startDate.getFullYear();
              let edate = task.endDate.getDate();
              let emonth = task.endDate.getMonth();
              let eyear = task.endDate.getFullYear();
              let color: string;
              if (task.status == 'in progress' || task.status == 'In progress') {
                color = '#f7a35c';
              }
              else if (task.status == 'completed' || task.status == 'Completed') {
                color = '#67e427';
              } else if (task.status == 'not yet started' || task.status == 'Not started') {
                color = '#adafad';
              }
              this.value.push({
                name: task.title,
                start: Date.UTC(syear, smonth, sdate),
                end: Date.UTC(eyear, emonth, edate),
                color: color,
                id: task._id
              })
            });
          }
        });
        var min = dates.sort((a, b) => a - b)[0], max = dates.slice(-1)[0];
        this.loadChart(this.value, min, max);
      });
    }, error => {
    })
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }
}