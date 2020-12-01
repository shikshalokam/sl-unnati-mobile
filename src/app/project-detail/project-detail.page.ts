import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController, AlertController, ModalController, Platform } from '@ionic/angular';
import { PopoverComponent, CreateTaskComponent, OpenResourcesService } from '../shared';
import { menuConstants } from '../core/constants/menuConstants';
import { DbService, LoaderService, SyncService, ToastMessageService, NetworkService, statuses, UnnatiDataService, urlConstants } from '../core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import * as _ from 'underscore';
import { UtilsService } from '../core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.page.html",
  styleUrls: ["./project-detail.page.scss"],
})
export class ProjectDetailPage implements OnInit {
  showDetails: boolean = true;
  statuses = statuses;
  project;
  projectId;
  categories = [];
  taskCount: number = 0;
  filters: any = {};
  schedules = [
    {
      title: "LABELS.PAST",
      value: "past"
    },
    {
      title: "LABELS.TODAY",
      value: "today"
    },
    {
      title: "LABELS.THIS_WEEK",
      value: "thisWeek"
    },
    {
      title: "LABELS.THIS_MONTH",
      value: "thisMonth"
    },
    {
      title: "LABELS.UPCOMMING",
      value: "upcoming"
    },
  ];
  sortedTasks;

  isSynced: boolean;
  locationChangeTriggered: boolean = false;
  allStrings;
  constructor(
    public params: ActivatedRoute,
    public popoverController: PopoverController,
    private db: DbService,
    private loader: LoaderService,
    private router: Router,
    private utils: UtilsService,
    private alert: AlertController,
    private location: Location,
    private syncServ: SyncService,
    private toast: ToastMessageService,
    private translate: TranslateService,
    private networkService: NetworkService,
    private openResourceSrvc: OpenResourcesService,
    private modal: ModalController,
    private unnatiService: UnnatiDataService,
    private iab: InAppBrowser,
    private platform: Platform
  ) {
    this.db.createPouchDB(environment.db.projects);
    params.params.subscribe((parameters) => {
      this.projectId = parameters.id;
    });
    this.translate
      .get(["MESSAGES.SOMETHING_WENT_WRONG", "MESSAGES.NO_ENTITY_MAPPED", ".MESSAGES.CANNOT_GET_PROJECT_DETAILS"])
      .subscribe((texts) => {
        this.allStrings = texts;
      });

    this.platform.resume.subscribe((result) => {
      console.log("Platform Resume Event");
      this.getProjectTaskStatus()
    });
  }

  getProject() {
    this.db.query({ _id: this.projectId }).then(
      (success) => {
        this.project = success.docs.length ? success.docs[0] : {};
        this.isSynced = this.project ? this.project.isNew || this.project.isEdit : true;
        this.project.categories.forEach((category) => {
          category.label ? this.categories.push(category.label) : this.categories.push(category.name);
        });
        this.project.tasks && this.project.tasks.length ? this.sortTasks() : "";
        this.getProjectTaskStatus();
      },
      (error) => { }
    );
  }

  ngOnInit() { }
  ionViewDidEnter() {
    this.getProject();
    this.getDateFilters();
  }
  getDateFilters() {
    let currentDate = moment();
    this.filters.today = moment().format("YYYY-MM-DD");
    this.filters.thisWeek = currentDate.endOf("week").format("YYYY-MM-DD");
    this.filters.thisMonth = currentDate.endOf("month").format("YYYY-MM-DD");
    this.filters.thisQuarter = currentDate.endOf("quarter").format("YYYY-MM-DD");
  }
  sortTasks() {
    this.taskCount = 0;
    let completed = 0;
    let inProgress = 0;
    this.sortedTasks = JSON.parse(JSON.stringify(this.utils.getTaskSortMeta()));
    this.project.tasks.forEach((task) => {
      if (!task.isDeleted && task.endDate) {
        this.taskCount = this.taskCount + 1;
        let ed = JSON.parse(JSON.stringify(task.endDate));
        ed = moment(ed).format("YYYY-MM-DD");
        if (ed < this.filters.today) {
          this.sortedTasks["past"].tasks.push(task);
        } else if (ed == this.filters.today) {
          this.sortedTasks["today"].tasks.push(task);
        } else if (ed > this.filters.today && ed <= this.filters.thisWeek) {
          this.sortedTasks["thisWeek"].tasks.push(task);
        } else if (ed > this.filters.thisWeek && ed <= this.filters.thisMonth) {
          this.sortedTasks["thisMonth"].tasks.push(task);
        } else {
          this.sortedTasks["upcoming"].tasks.push(task);
        }
      } else if (!task.isDeleted && !task.endDate) {
        this.sortedTasks["upcoming"].tasks.push(task);
        this.taskCount = this.taskCount + 1;
      }
      if (!task.isDeleted) {
        if (task.status == this.statuses[1].title) {
          inProgress = inProgress + 1;
        } else if (task.status == this.statuses[2].title) {
          completed = completed + 1;
        }
      }
    });
    this.project = this.utils.setStatusForProject(this.project);
    // if (inProgress > 0 || completed != this.taskCount) {
    //   this.project.status = this.statuses[1].title;
    // } else if (this.taskCount && this.taskCount == completed) {
    //   this.project.status = this.statuses[2].title;
    // } else {
    //   this.project.status = this.statuses[0].title;
    // }
  }
  syn() { }

  toggle() {
    this.showDetails = !this.showDetails;
  }
  async openPopover(ev: any, taskId?) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { menus: taskId ? menuConstants.TASK : menuConstants.PROJECT },
      event: ev,
      translucent: true,
    });
    popover.onDidDismiss().then((data) => {
      if (data.data) {
        this.action(data.data, taskId);
      }
    });
    return await popover.present();
  }

  action(event, taskId?) {
    switch (event) {
      case "sync": {
        this.project.isNew
          ? this.createNewProject()
          : this.router.navigate(["/menu/sync"], { queryParams: { projectId: this.projectId } });
        break;
      }
      case "editTask": {
        this.router.navigate(["/menu/task-view", this.project._id, taskId]);
        break;
      }
      case "deleteTask": {
        this.askPermissionToDelete("task", taskId);
        break;
      }
      case "editProject": {
        this.router.navigate(["/menu/project-edit", this.project._id]);
        break;
      }
      case "deleteProject": {
        this.askPermissionToDelete("Project");
        break;
      }
    }
  }

  // task and project delete permission.
  async askPermissionToDelete(type, id?) {
    let data;
    this.translate.get(["MESSAGES.DELETE_CONFIRMATION", "LABELS.CANCEL", "LABELS.SUBMIT"]).subscribe((text) => {
      data = text;
    });
    const alert = await this.alert.create({
      message: data["MESSAGES.DELETE_CONFIRMATION"] + type + "?",
      buttons: [
        {
          text: data["LABELS.CANCEL"],
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => { },
        },
        {
          text: data["LABELS.SUBMIT"],
          handler: () => {
            type == "task" ? this.deleteTask(id) : this.deleteProject();
          },
        },
      ],
    });
    await alert.present();
  }

  deleteTask(id) {
    let index = _.findIndex(this.project.tasks, (item) => {
      return item._id == id;
    });
    this.project.tasks[index].isDeleted = true;
    this.update("taskDelete");
  }
  deleteProject() {
    // actions
    this.project.isDeleted = true;
    this.update("ProjectDelete");
  }
  openResources(task = null) {
    if (task && task.learningResources && task.learningResources.length === 1) {
      let link = task.learningResources[0].link;
      this.openBodh(link);
      return;
    }
    if (task) {
      this.router.navigate(["/menu/learning-resources", this.project._id, task._id]);
    } else {
      this.router.navigate(["/menu/learning-resources", this.project._id]);
    }
  }
  //open openBodh
  openBodh(link) {
    console.log(link, "link");
    this.networkService.isNetworkAvailable
      ? this.openResourceSrvc.openBodh(link)
      : this.toast.showMessage("MESSAGES.OFFLINE", "danger");
  }

  //Update the project
  update(type) {
    this.project.isEdit = true;
    this.db.createPouchDB(environment.db.projects);
    this.project = this.utils.setStatusForProject(this.project);
    this.db
      .update(this.project)
      .then((success) => {
        this.project._rev = success.rev;
        this.isSynced = this.project ? this.project.isNew || this.project.isEdit : true;
        if (type == "newTask") {
          this.toast.showMessage("MESSAGES.NEW_TASK_ADDED_SUCCESSFUL", "success");
        } else if (type == "ProjectDelete") {
          this.toast.showMessage("MESSAGES.PROJECT_DELETED_SUCCESSFUL", "success");
          this.location.back();
        } else if (type == "taskDelete") {
          this.toast.showMessage("MESSAGES.TASK_DELETED_SUCCESSFUL", "success");
        }
        this.sortTasks();
      })
      .catch((error) => { });
  }
  createNewProject() {
    this.loader.startLoader();
    const projectDetails = JSON.parse(JSON.stringify(this.project));
    this.syncServ
      .createNewProject()
      .then((success) => {
        projectDetails._id = success.result._id;
        projectDetails.lastDownloadedAt = success.result.lastDownloadedAt;
        this.doDbActions(projectDetails);
        this.loader.stopLoader();
      })
      .catch((error) => {
        this.toast.showMessage(this.allStrings["MESSAGES.SOMETHING_WENT_WRONG"], "danger");
        this.loader.stopLoader();
      });
  }

  doDbActions(projectDetails) {
    const _rev = projectDetails._rev;
    delete projectDetails._rev;
    const newObj = this.syncServ.removeKeys(projectDetails, ["isNew"]);
    this.db
      .create(newObj)
      .then((success) => {
        this.db
          .delete(this.projectId, _rev)
          .then((deleteSuccess) => {
            this.loader.stopLoader();
            this.projectId = newObj._id;
            this.project = newObj;
            this.router.navigate(["/menu/project-detail/" + this.projectId], { replaceUrl: true });
            setTimeout(() => {
              this.router.navigate(["/menu/sync"], { queryParams: { projectId: this.projectId } });
            }, 0);
          })
          .catch((deletError) => {
            this.toast.showMessage(this.allStrings["MESSAGES.SOMETHING_WENT_WRONG"], "danger");
            this.loader.stopLoader();
          });
      })
      .catch((error) => {
        this.toast.showMessage(this.allStrings["MESSAGES.SOMETHING_WENT_WRONG"], "danger");
        this.loader.stopLoader();
      });
  }

  async addTask() {
    const modal = await this.modal.create({
      component: CreateTaskComponent,
      cssClass: "create-task-modal",
    });
    modal.onDidDismiss().then((data) => {
      if (data.data) {
        !this.project.tasks ? (this.project.tasks = []) : "";
        this.project.tasks.push(data.data);
        this.update("newTask");
      }
    });
    return await modal.present();
  }

  openAttachments() {
    console.log("openAttachments");
    this.router.navigate(["menu/attachment-list", this.project._id], { replaceUrl: true });
  }

  startAssessment(task) {
    if (this.project.entityId) {
      const config = {
        url: urlConstants.API_URLS.START_ASSESSMENT + `${this.project._id}?taskId=${task._id}`,
      };
      this.unnatiService.get(config).subscribe(
        (success) => {
          if (!success.result) {
            this.toast.showMessage(this.allStrings["MESSAGES.CANNOT_GET_PROJECT_DETAILS"], "danger");
            return;
          }
          let data = success.result;

          let params = `${data.programId}-${data.solutionId}-${data.entityId}`;
          let link = `${environment.deepLinkAppsUrl}/${task.type}/${params}`;
          this.iab.create(link, "_system");
        },
        (error) => {
          this.toast.showMessage(this.allStrings["MESSAGES.CANNOT_GET_PROJECT_DETAILS"], "danger");
          console.log(error);
        }
      );
    } else {
      this.toast.showMessage(this.allStrings["MESSAGES.NO_ENTITY_MAPPED"], "danger");
    }
  }

  getProjectTaskStatus() {
    if (!this.project.tasks && !this.project.tasks.length) {
      return
    }
    const config = {
      url: urlConstants.API_URLS.PROJCET_TASK_STATUS + `${this.project._id}`,
      payload: {
        taskIds: this.getAssessmentTypeTaskId(),
      },
    };
    this.unnatiService.post(config).subscribe(
      (success) => {
        console.log(success);
        if (!success.result) {
          return;
        }
        this.updateAssessmentStatus(success.result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateAssessmentStatus(data) {
    // if task type is assessment or observation then check if it is submitted and change the status and update in db
    let isChnaged = false
    this.project.tasks.map((t) => {
      data.map((d) => {
        if (d._id == t._id && d.status != t.status) {
          t.status = d.status;
          isChnaged = true
        }
      });
    });
    isChnaged ? this.update('taskStatusUpdated') : null// if any assessment/observatiom task status is changed then only update 
    console.log(this.project);
  }

  getAssessmentTypeTaskId() {
    const assessmentTypeTaskIds = [];
    for (const task of this.project.tasks) {
      task.type === "assessment" || task.type === "observation" ? assessmentTypeTaskIds.push(task._id) : null;
    }
    return assessmentTypeTaskIds;
  }

  checkReport(task) {
    if (this.project.entityId) {
      const config = {
        url: urlConstants.API_URLS.START_ASSESSMENT + `${this.project._id}?taskId=${task._id}`,
      };
      this.unnatiService.get(config).subscribe(
        (success) => {
          if (!success.result) {
            this.toast.showMessage(this.allStrings["MESSAGES.CANNOT_GET_PROJECT_DETAILS"], "danger");
            return;
          }
          let data = success.result;
          let entityType = data.entityType
          let params = `${data.programId}-${data.solutionId}-${data.entityId}-${entityType}`;
          let link = `${environment.deepLinkAppsUrl}/${task.type}/reports/${params}`;
          this.iab.create(link, "_system");
        },
        (error) => {
          this.toast.showMessage(this.allStrings["MESSAGES.CANNOT_GET_PROJECT_DETAILS"], "danger");
          console.log(error);
        }
      );
    } else {
      this.toast.showMessage(this.allStrings["MESSAGES.NO_ENTITY_MAPPED"], "danger");
    }
  }
}
