import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
import { AppConfigs } from '../app.config'
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public emit = new Subject();
  public isActive;
  constructor(public storage: Storage, public http: HttpClient, public location: Location) {
  }

  // Add tasks
  public addTasks(task) {
    return this.storage.get('currentProject').then((project) => {
      if (project) {
        if (project.tasks) {
          task._id = project.tasks.length + 12;
        } else {
          task._id = 1;
        }
        task.projectId = project._id;
        task.isNew = true;
        task.subTasks = [];
        //Pushing new task into tasks array
        project.tasks.push(JSON.stringify(task));
        // parse recentely added task
        project.tasks[project.tasks.length - 1] = JSON.parse(project.tasks[project.tasks.length - 1]);
        this.storage.get('projects').then(data => {
          if (typeof data == "string") {
            data = JSON.parse(data);
          }
          data.data.forEach(projects => {
            // parsing project
            projects.projects.forEach(array => {
              if (array._id === project._id) {
                array.tasks.push(task);
                this.storage.set('projects', JSON.stringify(data)).then(data => {
                  this.loadProject();
                });
              }
            });
          });
        });
        // updating in my Projects
        this.storage.get('myProjects').then((data: any) => {
          if (typeof data == "string") {
            data = JSON.parse(data);
          }
          if (data) {
            data.forEach(myProject => {
              if (myProject._id == project._id) {
                myProject.tasks.push(task);
                this.storage.set('myProjects', JSON.stringify(data)).then(resp => {
                })
              }
            });
          }
        })
        return this.storage.set('currentProject', project);
      }
    })
  }


  // Add Sub tasks
  public addSubTasks(subtask) {
    return this.storage.get('currentTask').then((currentTask: any) => {
      if (currentTask.subTasks != undefined) {
        subtask._id = currentTask.subTasks.length + 1;
      } else {
        subtask._id = 1;
      }
      subtask.isNew = true;
      currentTask.subTasks.push(JSON.stringify(subtask));
      currentTask.subTasks[currentTask.subTasks.length - 1] = JSON.parse(currentTask.subTasks[currentTask.subTasks.length - 1]);
      this.storage.set('currentTask', currentTask).then((currentTask: any) => {
        this.storage.get('currentProject').then((currentProject: any) => {
          currentProject.tasks.forEach(task => {
            if (task._id === currentTask._id) {
              task.subTasks.push(JSON.stringify(subtask));
              task.subTasks[task.subTasks.length - 1] = JSON.parse(task.subTasks[task.subTasks.length - 1]);
              this.storage.get('projects').then(data => {
                if (typeof data == "string") {
                  data = JSON.parse(data);
                }
                data.data.forEach(projects => {
                  // parsing project
                  projects.projects.forEach(array => {
                    array.tasks.forEach(task => {
                      if (task._id == currentTask._id) {
                        task.subTasks.push(subtask);
                        this.storage.set('projects', JSON.stringify(data)).then(data => {
                          this.loadProject();
                          // this.location.back();
                        });
                      }
                    });
                  });
                });
              });
            }
          });
          return this.storage.set('currentProject', currentProject).then(data => {
          });
        })
      })
    })
  }
  //get tasks
  public getTasks() {
    return this.storage.get('currentProject').then(data => {
    });
  }

  // Update task
  public update(value) {
    return this.storage.get('currentProject').then(data => {
      data.tasks.forEach(task => {
        if (task._id == value._id) {
          task.assignedTo = value.assignedTo;
          task.endDate = value.endDate;
          task.startDate = value.startDate;
          task.title = value.title;
          task.status = value.status;
          // task = value;
          this.storage.set('currentProject', data).then(data => {
            this.updateProjectsDetails(value.Project_id);
          });
          // updating in my Projects
          this.storage.get('myProjects').then((myProject: any) => {
            if (typeof myProject == "string") {
              myProject = JSON.parse(myProject);
            }
            if (myProject) {
              myProject.forEach(myPro => {
                if (myPro._id == data._id) {
                  myPro.tasks.forEach(myProtask => {
                    if (myProtask._id == value._id) {
                      myProtask.status = value.status;
                      myProtask.title = value.title;
                      myProtask.startDate = value.startDate;
                      myProtask.endDate = value.endDate;
                      this.storage.set('myProjects', JSON.stringify(myProject)).then(resp => {
                      })
                    }
                  });


                }
              });
            }
          })

          this.storage.get('projects').then(projectsList => {
            if (typeof projectsList == "string") {
              projectsList = JSON.parse(projectsList);
            }
            //   projectsList.data.forEach(projects => {
            // parsing project
            //projects.projects.forEach(array => {
            projectsList.data.tasks.forEach(task => {
              if (task._id == value._id) {
                task.status = value.status;
                task.title = value.title;
                task.startDate = value.startDate;
                task.endDate = value.endDate;
                this.storage.set('projects', projectsList).then(data => {
                  this.loadProject();
                })
              }
              //  });
              //});
            });
          });
        }
      });
    })
  }

  // Update subtasks
  public updateSubTask(value) {
    return this.storage.get('currentProject').then(data => {
      data.tasks.forEach(task => {
        task.subTasks.forEach(subTask => {
          if (subTask._id == value._id) {
            subTask.assignedTo = value.assignedTo;
            subTask.endDate = value.endDate;
            subTask.startDate = value.startDate;
            subTask.title = value.title;
            subTask.status = value.status;
            this.storage.set('currentTask', task).then(data => {
            });
            this.storage.set('currentSubtask', subTask).then(data => {
            })
            // task = value;
            this.storage.set('currentProject', data).then(data => {
              this.updateProjectsDetails(value.Project_id);
            });
            this.storage.get('projects').then(projectsList => {
              if (typeof projectsList == "string") {
                projectsList = JSON.parse(projectsList);
              }
              projectsList.data.forEach(projects => {
                // parsing project
                projects.projects.forEach(array => {
                  array.tasks.forEach(tasks => {
                    tasks.subTasks.forEach(subtask => {
                      if (subtask._id == value._id) {
                        subtask.status = value.status;
                        subtask.title = value.title;
                        subtask.startDate = value.startDate;
                        subtask.endDate = value.endDate;
                        return this.storage.set('projects', projectsList).then(data => {
                          this.loadProject();
                        })
                      }
                    });
                  });
                });
              });
            });
          }
        })
      });
    })
  }
  // Update Projects Details
  public updateProjectsDetails(id) {
    let currentProject;
    this.storage.get('currentProject').then(data => {
      currentProject = data;
    })
    this.storage.get('projects').then(projects => {
      if (projects.data != null) {
        if (typeof projects.data == 'string') {
          projects.data = JSON.parse(projects.data);
        }
        // projects.data.forEach(project => {
        // project = JSON.parse(project);
        if (projects.data._id == currentProject._id) {
          projects.data.tasks = [];
          projects.data.tasks.push(currentProject.tasks);
          this.storage.set('currentProject', projects.data).then(data => {
          })
          this.storage.set('projects', projects).then(data => {
          });
        }
        this.storage.set('projects', projects).then(data => {
        });
      }
    })
  }

  public loadProject() {
    this.emit.next('load');
  }

  // sync task
  public syncTask(data, token) {
    let httpHeaders = new HttpHeaders({
      'x-auth-token': token
    })
    let jsonPrepare = {
      "_id": data.projectId,
      "tasks": [
        {
          "_id": data._id,
          "assignedTo": data.assignedTo,
          "projectId": data.projectId,
          "title": data.title,
          "startDate": data.startDate,
          "endDate": data.endDate,
          "status": data.status,
          "lastSync": data.lastSync,
          "isDeleted": data.isDeleted,
          "isNew": data.isNew,
          "subTasks": data.subTasks
        }
      ]
    }
    return this.http.post(AppConfigs.api_url + '/unnati/api/v1/taskSync', jsonPrepare, { headers: httpHeaders });
  }

  public modalActive(value) {
    this.isActive = value;
  }

  // get task by id
  public getTaskById(token, data) {
    let httpHeaders = new HttpHeaders({
      'x-auth-token': token
    })
    return this.http.get(AppConfigs.api_url + '/unnati/api/v1/getTaskDetailsById/'+data.taskId, { headers: httpHeaders })
  }
}