import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateProjectService } from '../create-project/create-project.service';
import { CreateTaskService } from '../create-task/create-task.service';
import * as moment from 'moment';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';
import { ToastService } from '../toast.service';
import { HomeService } from '../home/home.service';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Platform } from '@ionic/angular';
import { LocalKeys } from '../core-module/constants/localstorage-keys';
import { PopoverController } from '@ionic/angular';
import { AppConfigs } from '../core-module/constants/api.config';

import { PopoverComponent } from '../shared-module/components/popover/popover.component';
import { ProjectService } from '../project-view/project.service';
import { AppAvailability } from '@ionic-native/app-availability';

import * as uuid from 'uuid';
declare var cordova: any;

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.page.html",
  styleUrls: ["./project-detail.page.scss"],
})
export class ProjectDetailPage {
  project;
  back;
  category;
  addTaskButton: boolean;
  files: any;
  startDate;
  isValidDate;
  tasksLength = 0;
  endDate;
  isIos;
  appFolderPath: string;
  rootPath: string;
  projectId;
  markLabelsAsInvalid: boolean = false;
  editGoal: boolean = false;
  editTitle: boolean = false;
  show: boolean = false;
  showAddTask: boolean = false;
  past = [];
  currentTask = [];
  weekTask = [];
  upcoming = [];
  months = [];
  quarter = [];
  currentDate = new Date();
  menus = [{
    title: 'Share Task',
    value: 'shareTask',
    icon: 'share'
  },
  {
    title: 'Edit Task',
    value: 'editTask',
    icon: 'create'
  },
  {
    title: 'Delete Task',
    value: 'deleteTask',
    icon: 'trash'
  }
  ]
  statuses = [
    { title: "Not started" },
    { title: "In Progress" },
    { title: "Completed" },
  ];

  taskCreate = {};
  constructor(
    public storage: Storage,
    public route: ActivatedRoute,
    public router: Router,
    public createProjectService: CreateProjectService,
    public datePicker: DatePicker,
    public datepipe: DatePipe,
    public taskService: CreateTaskService,
    public toastService: ToastService,
    public homeService: HomeService,
    public file: File,
    public transfer: FileTransfer,
    public filePath: FilePath,
    public platform: Platform,
    public popoverController: PopoverController,
    public projectService: ProjectService
  ) {
    this.projectService.taskDeleteEvent.subscribe((data: any) => {
      data.isDeleted = true;
      this.delete(data);
    })
    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        this.isIos = this.platform.is('ios') ? true : false;
        this.appFolderPath = this.isIos ? cordova.file.documentsDirectory + 'attachments' : cordova.file.externalDataDirectory + 'attachments';
        this.rootPath = this.isIos ? cordova.file.documentsDirectory : cordova.file.externalDataDirectory;
      })
    }
    createProjectService.addNewTask.subscribe((data: any) => {
      this.showAddTask = false;
      if (this.project.tasks && this.project.tasks.length > 0) {
        data._id = this.project.tasks.length + 2;
      } else {
        data._id = 1;
      }
      this.project.tasks.push(data);
      this.tasksLength = this.project.tasks.length;
      if (this.tasksLength > 0 && this.project.isStarted) {
        this.project.tasks.sort((a, b) => {
          return <any>new Date(a.endDate) - <any>new Date(b.endDate);
        });
        this.sortTasks();
      }
      this.updateTask();
    });
    createProjectService.modalCloseEvent.subscribe((data) => {
      this.showAddTask = false;
    });
    route.params.subscribe((param) => {
      this.editTitle = false;
      this.editGoal = false;
      if (param.cat) {
        this.category = param.cat;
        if (this.category == 'my-projects' || this.category == 'active-projects' || this.category == 'all-projects' || this.category == 'projectsList') {
          this.back = 'project-view/projects';
        } else if (this.category == 'schools') {
          localStorage.setItem('entityKey', this.project.entityId);
          this.back = 'project-view/school-task-report/' + this.project.entityId + '/school';
        } else if (this.category == 'home') {
          this.back = 'project-view/home';
        } else if (this.category == 'form') {
          this.back = 'project-view/create-project/no';
        } else if (this.category == 'search') {
          this.back = 'project-view/library-search';
        }
        else {
          this.back = 'project-view/category/' + this.category;
        }
      } else {
        this.back = "project-view/category/my_projects";
      }
    });
  }
  ionViewDidEnter() {
    this.projectService.setTitle("project-detail");
    if (this.category == 'my_projects' || this.category == 'form' || this.category == 'home' || this.category == 'projectsList') {
      this.addTaskButton = true;
    } else {
      this.addTaskButton = false;
    }
    this.showAddTask = false;
    this.getProject();
  }
  getProject() {
    this.storage.get(LocalKeys.projectToBeView).then(project => {
      let completed = 0;
      let notStarted = 0;
      this.tasksLength = 0;
      let inProgress = 0;
      project.tasks.forEach((task) => {
        if (!task.isDeleted) {
          this.tasksLength = this.tasksLength + 1;
        }
        if (this.category == 'search' && project.createdType) {
          this.addTaskButton = true;
        }
        //  set the project status if project is started
        if (project.isStarted) {
          if (
            task.status == "Not started" ||
            task.status == "not yet started"
          ) {
            notStarted = notStarted + 1;
          } else if (task.status == "Completed" || task.status == "completed") {
            completed = completed + 1;
          } else if (
            task.status == "In Progress" ||
            task.status == "in progress"
          ) {
            inProgress = inProgress + 1;
          }
          if (project.tasks.length === notStarted) {
            project.status = "Not started";
          }
          if (project.tasks.length === completed) {
            project.status = "Completed";
          }
          if (inProgress > 0 || completed != project.tasks.length) {
            project.status = "In Progress";
          }
        }
        if (task.imageUrl || task.file) {
          this.prepareAttachments(task);
        }
      });
      if (project.status == "not yet started") {
        project.status = "Not started";
      }
      if (project.status == "not yet started") {
        project.status = "Not started";
      }
      if (!project.isStarted) {
        project.isStarted = false;
      }
      // if (project.category) {
      //   project.category = project.category.join(', ');
      // }
      this.project = project;

      this.show = true;
      if (this.tasksLength > 0 && this.project.isStarted) {
        this.project.tasks.sort((a, b) => {
          return <any>new Date(a.endDate) - <any>new Date(b.endDate);
        });
        this.sortTasks();
      }
      if (this.project && this.project.isStarted) {
        this.updateTask();
      }
    })
  }

  //  Copy the template project into my project
  public copyTemplate() {
    this.projectId = "";
    this.project.isStarted = true;
    this.addTaskButton = true;
    if (
      this.project.status == "Not started" ||
      this.project.status == "not yet started" || !this.project.status
    ) {
      this.project.status = "In Progress";
    }
    if (!this.project.startDate) {
      this.project.startDate = new Date();
    }
    if (!this.project.appReferenceKey) {
      const myId = uuid.v4();
      this.project.appReferenceKey = myId;
    }
    // if (this.category != 'my_projects' && this.category != 'projectsList' && this.category != 'form') {
    if (this.category != "my_projects" && this.category != "form" && this.category != 'projectsList') {
      this.project.createdType = "by reference";
      this.project.lastUpdate = new Date();
      this.project.isNew = true;
      this.project.templateId = this.project._id;
      // this.project.templateId = 9;
      this.project._id = +new Date();
      let environment = AppConfigs.currentEnvironment;
      AppConfigs.environments.forEach(env => {
        if (environment === env.name) {
          this.project.programId = env.programId;
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
        })
        if (this.tasksLength > 0 && this.project.isStarted) {
          this.project.tasks.sort((a, b) => {
            return <any>new Date(a.endDate) - <any>new Date(b.endDate);
          });
          this.sortTasks();
        }
      }
      if (this.tasksLength > 0 && this.project.isStarted) {
        this.project.tasks.sort((a, b) => {
          return <any>new Date(a.endDate) - <any>new Date(b.endDate);
        });
        this.sortTasks();
      }
      this.storage.get(LocalKeys.allProjects).then(projectList => {
        this.storage.set(LocalKeys.projectToBeView, this.project).then(project => {
          this.project = project;
          this.createProjectService.insertIntoMyProjects(this.project).then(data => {
            this.project.isStarted = true;
            this.category = 'my_projects';
          })
        })
      })

    } else {
      if (this.tasksLength > 0 && this.project.isStarted) {
        this.project.tasks.sort((a, b) => {
          return <any>new Date(a.endDate) - <any>new Date(b.endDate);
        });
        this.sortTasks();
      }
      this.project.lastUpdate = new Date();
      this.createProjectService.updateByProjects(this.project);
      this.storage.set(LocalKeys.projectToBeView, this.project).then(project => {
        this.project = project;
      });
    }
  }
  public navigateToResources() {
    this.router.navigate(["/project-view/courses", this.category, 'project']);
  }
  public addTask() {
    this.taskCreate = {
      label: "Add New Task",
      closeIcon: {
        slot: "end",
        icon: "close",
      },
      projectData: {
        projectName: this.project.title,
        goal: this.project.goal,
        duration: this.project.duration,
        projectId: this.project._id,
        tasks: {},
      },
      formData: [
        {
          type: "text",
          label: "Assigned to",
          placeholder: "",
          share: true,
          required: false,
          field: "assigneeName",
          icon: "assets/images/task-user.png",
          value: "",
        },
        {
          type: "date",
          label: "End Date",
          placeholder: "",
          required: false,
          field: "endDate",
          icon: "assets/images/task-cal.svg",
          value: "",
        },
        {
          type: "text-area",
          label: "Task Description",
          placeholder: "",
          field: "title",
          required: true,
          icon: "assets/images/task-title.png",
          value: "",
        },
        {
          type: "attachment",
          placeholder: "",
          required: false,
          value: [],
        },
      ],
      buttons: [
        {
          label: "add Task",
          role: "submit",
          expand: "block",
          color: "secondary",
          border_raduis: "4px",
        },
      ],
    };
    this.showAddTask = true;
    // this.router.navigate(['/project-view/create-task', this.project._id, "pd"]);
  }
  public navigateToFiles() {
    this.router.navigate(["/project-view/files", this.project._id]);
  }
  // set date
  public setDate(event, type) {
    if (type == "sd") {
      this.project.startDate = this.datepipe.transform(new Date(event.detail.value));
      this.startDate = event.detail.value;
      if (this.project.endDate) {
        this.checkDate();
      }
    } else if (type == "ed") {
      this.project.endDate = this.datepipe.transform(new Date(event.detail.value));
      this.endDate = event.detail.value;
      if (this.project.startDate) {
        this.checkDate();
      } else {
        this.project.startDate = this.datepipe.transform(new Date());
        this.checkDate();
      }
    }
    this.createProjectService.updateByProjects(this.project);
  }

  // validate date
  public checkDate() {
    this.startDate = this.datepipe.transform(new Date(this.project.startDate));
    this.endDate = this.datepipe.transform(new Date(this.project.endDate));
    if (new Date(this.startDate) <= new Date(this.endDate)) {
      this.isValidDate = true;
      let sDay = new Date(this.startDate).getDate();
      let sMonth = new Date(this.startDate).getMonth();
      let sYear = new Date(this.startDate).getFullYear();
      let eDay = new Date(this.endDate).getDate();
      let eMonth = new Date(this.endDate).getMonth();
      let eYear = new Date(this.endDate).getFullYear();
      let startDate = moment([sYear, sMonth, sDay]);
      let endDate = moment([eYear, eMonth, eDay]);
      let diffInMonths = endDate.diff(startDate, "months");
      let diffInDays = endDate.diff(startDate, "days");
      let diffInYears = endDate.diff(startDate, "years");
      if (diffInMonths) {
        this.project.duration = diffInMonths + " months";
      } else if (diffInDays || !diffInDays) {
        this.project.duration = diffInDays + " days";
      } else if (diffInYears) {
        this.project.duration = diffInYears + " years";
      }
      this.startDate = this.datepipe.transform(
        new Date(this.project.startDate),
        "dd-MM-yyyy"
      );
      this.endDate = this.datepipe.transform(
        new Date(this.project.endDate),
        "dd-MM-yyyy"
      );
      this.updateTask();
    } else {
      this.isValidDate = false;
    }
  }

  // allow user to edit
  public allowEdit(field) {
    switch (field) {
      case "goal": {
        this.editGoal = true;
        this.editTitle = false;
        break;
      }
      case "title": {
        this.editTitle = true;
        this.editGoal = false;
        break;
      }
    }
  }

  // disable edit option
  public blockEdit(field) {
    switch (field) {
      case "goal": {
        if (this.project.goal) {
          this.editGoal = false;
          this.markLabelsAsInvalid = false;
        } else {
          this.markLabelsAsInvalid = true;
        }
        break;
      }
      case "title": {
        if (this.project.title) {
          this.editTitle = false;
          this.markLabelsAsInvalid = false;
        } else {
          this.markLabelsAsInvalid = true;
        }
        break;
      }
    }
    this.updateTask();
  }

  blockEditAll() {
    if (this.project.goal) {
      this.editGoal = false;
      this.markLabelsAsInvalid = false;
    }
    if (this.project.title) {
      this.editTitle = false;
      this.markLabelsAsInvalid = false;
    }
    this.updateTask();
  }
  // update the task
  public updateTask() {
    let cp = this.project;
    cp.isEdited = true;
    cp.lastUpdate = new Date();
    this.createProjectService.updateByProjects(this.project);
    let mapped: boolean = false;
    return this.storage.get(LocalKeys.allProjects).then((projectList) => {
      if (projectList) {
        projectList.forEach((projectsPrograms) => {
          if (projectsPrograms) {
            projectsPrograms.projects.forEach(function (project, i) {
              if (project._id == cp._id) {
                cp.isEdited = true;
                projectsPrograms.projects[i] = cp;
                mapped = true;
              }
            });
          }
          if (!mapped) {
            if (projectList && projectList[0].projects) {
              projectList[0].projects.forEach(function (project, i) {
                if (project._id == cp._id) {
                  cp.isEdited = true;
                  projectList[0].projects[i] = cp;
                }
              });
            } else {
              let environment = AppConfigs.currentEnvironment;
              let programId = '';
              AppConfigs.environments.forEach(env => {
                if (environment === env.name) {
                  programId = env.programId;
                }
              });
              let pro1 = [
                {
                  programs: {
                    name: 'My Projects',
                    _id: programId
                  },
                  projects: []
                }
              ]
              pro1[0].projects.push(this.project);
              projectList = pro1;
            }
          }
        });
        this.storage.set("latestProjects", projectList).then((projects) => {
          this.storage.set("newcreatedproject", this.project).then((sucess) => {
            this.storage
              .set("projectToBeView", this.project)
              .then((updatedProject) => { });
          });
        });
      }
    });
  }
  // navigate to view task
  public taskView(task) {
    if (this.project.isStarted) {
      this.storage.set(LocalKeys.newcreatedproject, this.project).then(cmp => {
        task.projectStarted = this.project.isStarted;
        this.storage.set("cTask", task).then((ct) => {
          this.router.navigate(["/project-view/current-task", task._id, "pd"]);
        });
      });
    }
  }
  // mark the task as deleted
  public delete(task) {
    task.isDeleted = true;
    task.status = "Completed";
    this.tasksLength = this.tasksLength - 1;
    this.storage.set("cTask", task).then((ct) => {
      this.updateCurrentProject(ct);
      this.toastService.successToast("message.task_is_deleted");
    });
  }
  // update project with all changes made.
  public updateCurrentProject(ct) {
    this.project.lastUpdate = new Date();
    this.project.isEdited = true;
    this.createProjectService.updateByProjects(this.project);
  }
  public sortTasks() {
    this.past = [];
    this.currentTask = [];
    this.weekTask = [];
    this.upcoming = [];
    this.months = [];
    this.quarter = [];
    let withoutEndDate = [];
    let today: any = new Date();
    let st = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    let et = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 2, 59, 59);
    let date = new Date(), y = date.getFullYear(), m = date.getMonth(), m1 = date.getMonth() + 4;
    let month = new Date(y, m + 1, 0);
    let month1 = new Date(y, m1 + 1, 0);
    let week = new Date(today.getTime() + (7 - today.getDay()) * 24 * 60 * 60 * 1000);
    let week1 = new Date(today.getTime() + (14 - today.getDay()) * 24 * 60 * 60 * 1000);
    this.project.tasks.forEach(task => {
      if (!task.isDeleted) {
        if (task.endDate) {
          task.endDate = new Date(new Date(task.endDate).getFullYear(), new Date(task.endDate).getMonth(), new Date(task.endDate).getDate(), 0, 0, 0);
          if (new Date(task.endDate) < st) {
            this.past.push(task);
          } else if (new Date(task.endDate) >= st && new Date(task.endDate) <= et) {
            this.currentTask.push(task);
          } else if (new Date(task.endDate) >= today && new Date(task.endDate) <= week) {
            this.weekTask.push(task);
          } else if (new Date(task.endDate) > week && new Date(task.endDate) <= month) {
            this.months.push(task);
          } else if (new Date(task.endDate) > month && new Date(task.endDate) <= month1) {
            this.quarter.push(task);
          } else {
            this.upcoming.push(task);
          }
        } else {
          withoutEndDate.push(task);
        }
        if (this.upcoming.length > 0) {
          this.upcoming.concat(withoutEndDate);
        } else {
          this.upcoming = withoutEndDate;
        }
      }
    });
  }

  // add created task
  public addNewTask(task) {
    this.storage.get(LocalKeys.allProjects).then(myProjects => {
      let mapped;
      if (myProjects) {
        if (myProjects.program)
          myProjects.program.forEach((programs) => {
            if (programs.projects) {
              programs.projects.forEach((project) => {
                if (project._id == this.project._id) {
                  project = this.project;
                  mapped = true;
                }
              });
            }
          });
      }
      if (!mapped) {
        myProjects[0].projects.forEach(function (myProject, i) {
          if (myProject._id == this.project._id) {
            myProjects[0].projects[i] = this.project;
          }
        });
      }
      this.storage.set(LocalKeys.allProjects, myProjects).then(success => {
        this.toastService.successToast('message.task_is_created');
      })
    })
  }
  // prepare old apk attachments to new version apk
  prepareAttachments(task) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    if (task.imageUrl) {
      let d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
      this.downloadFile(task.imageUrl, newFileName, task, "img");
    }
    if (task.file) {
      let d = new Date(),
        n = d.getTime(),
        newFileName = n + ".pdf";
      this.downloadFile(task.file.url, newFileName, task, "fileUrl");
    }
  }
  downloadFile(attachment, newFileName, task, type) {
    if (this.isIos) {
      this.file
        .checkDir(this.file.documentsDirectory, "attachments")
        .then((_) => {
          let blob = this.b64toBlob(attachment, type);
          this.appFolderPath = decodeURIComponent(this.appFolderPath);
          newFileName = decodeURIComponent(newFileName);
          this.file
            .writeFile(this.rootPath, newFileName, blob)
            .then((res) => {
              let currentPath = res.nativeURL
                .substr(0, res.nativeURL.lastIndexOf("/") + 1)
                .toString();
              let currentName = res.nativeURL
                .substring(
                  res.nativeURL.lastIndexOf("/") + 1,
                  res.nativeURL.length
                )
                .toString();
              this.file
                .copyFile(
                  currentPath,
                  currentName,
                  this.appFolderPath,
                  newFileName
                )
                .then(
                  (res) => {
                    let fileMIMEType = this.getMIMEtype(
                      newFileName.substring(newFileName.lastIndexOf(".") + 1)
                    );
                    let data = {
                      name: newFileName,
                      type: fileMIMEType,
                      isNew: true,
                    };
                    if (type == "fileUrl") {
                      task.file = "";
                    } else {
                      task.imageUrl = "";
                    }
                    task.attachments.push(data);
                  },
                  (err) => { }
                );
            })
            .catch((err) => { });
        })
        .catch((err) => {
          this.file
            .createDir(cordova.file.documentsDirectory, "attachments", false)
            .then((response) => {
              this.toastService.presentLoading("Downloading, Please wait");
              let blob = this.b64toBlob(attachment, type);
              this.appFolderPath = decodeURIComponent(this.appFolderPath);
              newFileName = decodeURIComponent(newFileName);
              this.file
                .writeFile(this.rootPath, newFileName, blob)
                .then((res) => {
                  let currentPath = res.nativeURL
                    .substr(0, res.nativeURL.lastIndexOf("/") + 1)
                    .toString();
                  let currentName = res.nativeURL
                    .substring(
                      res.nativeURL.lastIndexOf("/") + 1,
                      res.nativeURL.length
                    )
                    .toString();
                  this.file
                    .copyFile(
                      currentPath,
                      currentName,
                      this.appFolderPath,
                      newFileName
                    )
                    .then(
                      (res) => {
                        let fileMIMEType = this.getMIMEtype(
                          newFileName.substring(
                            newFileName.lastIndexOf(".") + 1
                          )
                        );
                        let data = {
                          name: newFileName,
                          type: fileMIMEType,
                          isNew: true,
                        };
                        if (type == "fileUrl") {
                          task.file = "";
                        } else {
                          task.imageUrl = "";
                        }
                        task.attachments.push(data);
                      },
                      (err) => { }
                    );
                })
                .catch((err) => { });
            })
            .catch((err) => { });
        });
    } else {
      this.file
        .checkDir(this.file.externalDataDirectory, "attachments")
        .then((_) => {
          let blob = this.b64toBlob(attachment, type);
          this.appFolderPath = decodeURIComponent(this.appFolderPath);
          newFileName = decodeURIComponent(newFileName);
          this.file
            .writeFile(this.rootPath, newFileName, blob)
            .then((res) => {
              let currentPath = res.nativeURL
                .substr(0, res.nativeURL.lastIndexOf("/") + 1)
                .toString();
              let currentName = res.nativeURL
                .substring(
                  res.nativeURL.lastIndexOf("/") + 1,
                  res.nativeURL.length
                )
                .toString();
              this.file
                .copyFile(
                  currentPath,
                  currentName,
                  this.appFolderPath,
                  newFileName
                )
                .then(
                  (res) => {
                    let fileMIMEType = this.getMIMEtype(
                      newFileName.substring(newFileName.lastIndexOf(".") + 1)
                    );
                    let data = {
                      name: newFileName,
                      type: fileMIMEType,
                      isNew: true,
                    };
                    if (type == "fileUrl") {
                      task.file = "";
                    } else {
                      task.imageUrl = "";
                    }
                    task.attachments.push(data);
                  },
                  (err) => { }
                );
            })
            .catch((err) => { });
        })
        .catch((err) => {
          this.file
            .createDir(cordova.file.externalDataDirectory, "attachments", false)
            .then((response) => {
              this.toastService.presentLoading("Downloading, Please wait");
              let blob = this.b64toBlob(attachment, type);
              this.appFolderPath = decodeURIComponent(this.appFolderPath);
              newFileName = decodeURIComponent(newFileName);
              this.file
                .writeFile(this.rootPath, newFileName, blob)
                .then((res) => {
                  let currentPath = res.nativeURL
                    .substr(0, res.nativeURL.lastIndexOf("/") + 1)
                    .toString();
                  let currentName = res.nativeURL
                    .substring(
                      res.nativeURL.lastIndexOf("/") + 1,
                      res.nativeURL.length
                    )
                    .toString();
                  this.file
                    .copyFile(
                      currentPath,
                      currentName,
                      this.appFolderPath,
                      newFileName
                    )
                    .then(
                      (res) => {
                        let fileMIMEType = this.getMIMEtype(
                          newFileName.substring(
                            newFileName.lastIndexOf(".") + 1
                          )
                        );
                        let data = {
                          name: newFileName,
                          type: fileMIMEType,
                          isNew: true,
                        };
                        if (type == "fileUrl") {
                          task.file = "";
                        } else {
                          task.imageUrl = "";
                        }
                        task.attachments.push(data);
                      },
                      (err) => { }
                    );
                })
                .catch((err) => { });
            })
            .catch((err) => { });
        });
    }
  }
  getMIMEtype(extn) {
    let ext = extn.toLowerCase();
    let MIMETypes = {
      pdf: "application/pdf",
      jpg: "image/jpeg",
      bmp: "image/bmp",
      png: "image/png",
      jpeg: "image/jpeg",
      gif: "image/gif",
    };
    return MIMETypes[ext];
  }

  b64toBlob(b64Data, contentType) {
    contentType = contentType || "";
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  async showMenu(ev: any, task) {
    let project = {
      title: this.project.title,
      goal: this.project.goal,
      duration: this.project.duration,
      startDate: this.project.startDate,
      endDate: this.project.startDate,
      status: this.project.startDate,
      tasks: [
        task
      ]
    }
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { project: project, menus: this.menus },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  public openTaskResources(task) {
    if (task.resources && task.resources.length > 1) {
      this.storage.set('resourcesofTask', task).then(data => {
        this.router.navigate(["/project-view/courses", this.category, 'task']);
      })
    } else {
      this.launchExternalApp('', 'org.shikshalokam.bodh', 'bodh://play/content/do_11309585387098112011502', task.resources[0].link);
    }
  }


  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string) {
    let app: string;
    app = 'org.shikshalokam.bodh';
    AppAvailability.check(app).then(
      () => { // success callback
        (<any>window).cordova.InAppBrowser.open(httpUrl, '_system');
      },
      () => { // error callback
        (<any>window).cordova.InAppBrowser.open(httpUrl, '_system');
      }
    );
  }
}