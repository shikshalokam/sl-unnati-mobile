import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateProjectService } from '../create-project/create-project.service';
import { CreateTaskService } from '../create-task/create-task.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';
import { ToastService } from '../toast.service';
import { HomeService } from '../home/home.service';
import { AppConfigs } from '../core-module/constants/api.config';
import { LocalKeys } from '../core-module/constants/localstorage-keys';
import { ErrorHandle } from '../error-handling.service';
@Component({
  selector: "app-template-view",
  templateUrl: "./template-view.page.html",
  styleUrls: ["./template-view.page.scss"],
})
export class TemplateViewPage {
  project;
  templateId;
  programId;
  back = "project-view/home";
  category;
  files: any;
  startDate;
  isValidDate;
  tasksLength = 0;
  endDate;
  projectId;
  markLabelsAsInvalid: boolean = false;
  editGoal: boolean = false;
  editTitle: boolean = false;
  show: boolean = false;
  showAddTask: boolean = false;
  statuses = [
    { title: "Not started" },
    { title: "In Progress" },
    { title: "Completed" },
  ];
  sub;
  taskCreate = {};
  blockEditAll;
  constructor(
    public storage: Storage,
    public platform: Platform,
    public route: ActivatedRoute,
    public createProjectService: CreateProjectService,
    public router: Router,
    public datePicker: DatePicker,
    public datepipe: DatePipe,
    public taskService: CreateTaskService,
    public toastService: ToastService,
    public homeService: HomeService,
    public errorHandle:ErrorHandle
  ) {
    platform.ready().then(() => {
      route.params.subscribe((params) => {
        this.templateId = params.templateId;
        if (this.templateId) {
          this.getProject();
        }
      });
      this.sub = this.route.queryParams.subscribe((params) => {
        this.programId = params.programId;
      });
    });
  }

  ionViewDidEnter() {
    this.showAddTask = false;
  }
  getProject() {
    this.tasksLength = 0;
    this.createProjectService.getTemplate(this.templateId).subscribe(
      (data: any) => {
        if (data.status == "success") {
          if (data.result[0].tasks && data.result[0].tasks.length > 0) {
            data.result[0].tasks.forEach((task) => {
              if (!task.isDeleted) {
                this.tasksLength = this.tasksLength + 1;
              }
            });
          }
          if (data.result[0].status == "not yet started") {
            data.result[0].status = "Not started";
          }
          if (data.result[0].status == "not yet started") {
            data.result[0].status = "Not started";
          }
          if (!data.result[0].isStarted) {
            data.result[0].isStarted = false;
          }
          this.project = data.result[0];
          this.show = true;
        }
      },
      (error) => {
        this.errorHandle.errorHandle(error);
      }
    );
  }
  // Copy the template project into my project
  public copyTemplate() {
    this.projectId = "";
    this.project.isStarted = true;
    if (
      this.project.status == "Not started" ||
      this.project.status == "not yet started"
    ) {
      this.project.status = "In Progress";
    }
    let environment = AppConfigs.currentEnvironment;
    let programId = "";
    AppConfigs.environments.forEach((env) => {
      if (environment === env.name) {
        programId = env.programId;
      }
    });
    this.project.startDate = new Date();
    this.project.createdType = "by reference";
    this.project.lastUpdate = new Date();
    this.project.isNew = true;
    this.project.templateId = this.project._id;
    if (!this.project.programId) {
      this.project.programId = programId;
    }
    this.storage.get(LocalKeys.allProjects).then(projectList => {
      if (projectList) {
        projectList.forEach((projectsPrograms) => {
          if (projectsPrograms.programs) {
            if (projectsPrograms.programs._id == programId) {
              this.project._id = projectsPrograms.projects.length + 10;
            }
          }
        });
      }
    });
    if (this.project.tasks) {
      let pId = this.project._id;
      this.project.tasks.forEach(function (task, i) {
        if (!task._id) {
          task._id = i + 1;
          task.isNew = true;
        }
        task.projectId = pId;
        task.status = "Not started";
        if (task.subTasks) {
          task.subTasks.forEach((subtask) => {
            if (!subtask._id) {
              subtask.isNew = true;
              subtask._id = task.subTasks.length + 1;
              subtask.status = "Not started";
            }
          });
        } else {
          task.subTasks = [];
        }
      });
    }
    this.storage.set(LocalKeys.projectToBeView, this.project).then(project => {
      this.project = project;
      this.createProjectService
        .insertIntoMyProjects(this.project)
        .then((data) => {
          this.router.navigate(["/project-view/project-detail", "my_projects"]);
        });
    });
  }
  public navigateToResources() {
    if (this.programId) {
      this.router.navigate([
        "/project-view/courses/",
        "template-view",
        this.templateId,
        this.programId,
      ]);
    } else {
      this.router.navigate([
        "/project-view/courses/",
        "template-view",
        this.templateId,
      ]);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
