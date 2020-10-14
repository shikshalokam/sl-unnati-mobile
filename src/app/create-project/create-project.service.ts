import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AppConfigs } from '../core-module/constants/app.config';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LocalKeys } from '../core-module/constants/localstorage-keys';

@Injectable({
    providedIn: 'root'
})
export class CreateProjectService {
    modalCloseEvent = new Subject();
    addNewTask = new Subject();
    constructor(public storage: Storage,
        public http: HttpClient) { }
    // Update task in current Project
    public updateCurrentMyProject(createdTask) {
        return this.storage.get('newcreatedproject').then(cmp => {
            cmp.isEdited = true;
            cmp.tasks.forEach(function (task, i) {
                if (task._id == createdTask._id) {
                    cmp.lastUpdate = new Date();
                    cmp.tasks[i] = createdTask;
                    cmp.isEdited = true;
                }
            });
            this.storage.set('newcreatedproject', cmp).then(updatedProject => {
                this.storage.set('projectToBeView', cmp).then(updatedProject => {
                    this.updateByProjects(updatedProject);
                })
            })
        })
    }
    //  Update project in my projects list.
    public updateByProjects(updatedProject) {
        let mapped: boolean = false;
        let programId = '';
        let environment = AppConfigs.currentEnvironment;
        AppConfigs.environments.forEach(env => {
            if (environment === env.name) {
                programId = env.programId;
            }
        })
        return this.storage.get(LocalKeys.allProjects).then(projectList => {
            if (projectList) {
                projectList.forEach(projectsPrograms => {
                    if (projectsPrograms) {
                        projectsPrograms.projects.forEach(function (project, i) {
                            if (project._id == updatedProject._id && !mapped) {
                                updatedProject.isEdited = true;
                                projectsPrograms.projects[i] = updatedProject;
                                mapped = true;
                            }
                        });
                    }
                })
            }
            if (!mapped) {
                if (projectList && projectList[0].projects) {
                    projectList[0].projects.forEach(project => {
                        projectList[0].projects.push(updatedProject);
                    });
                } else {
                    let pro1 = [
                        {
                            programs: {
                                name: 'My Projects',
                                _id: programId
                            },
                            projects: []
                        }
                    ]
                    pro1[0].projects.push(updatedProject);
                    projectList = pro1;
                }
            }
            this.storage.set('newcreatedproject', updatedProject).then(sucess => {
                this.storage.set('projectToBeView', updatedProject).then(updatedProject => {
                })
            })
            this.storage.set(LocalKeys.allProjects, projectList).then(projects => {
            })
        })
    }
    // add new project into my projects.
    public insertIntoMyProjects(project) {
        let mapped: boolean = false;
        let environment = AppConfigs.currentEnvironment;
        let programId = '';
        AppConfigs.environments.forEach(env => {
            if (environment === env.name) {
                programId = env.programId;
            }
        });
        return this.storage.get(LocalKeys.allProjects).then(projectList => {
            if (projectList) {
                projectList.forEach(projectsPrograms => {
                    if (projectsPrograms.programs) {
                        if (projectsPrograms.programs._id == programId && !mapped) {
                            projectsPrograms.projects.push(project);
                            mapped = true;
                        }
                    }
                })
                if (!mapped) {
                    if (projectList) {
                        project._id = projectList[0].projects.length + 1;
                        projectList[0].projects.push(project)
                    } else {
                        let pro1 = [
                            {
                                programs: {
                                    name: 'My Projects',
                                    _id: programId
                                },
                                projects: []
                            }
                        ]
                        pro1[0].projects.push(project);
                        projectList = pro1;
                    }
                }
            } else {
                project._id = 1;
                let pro1 = [
                    {
                        programs: {
                            name: 'My Projects',
                            _id: programId
                        },
                        projects: []
                    }
                ]
                pro1[0].projects.push(project);
                projectList = pro1;
            }
            this.storage.set(LocalKeys.allProjects, projectList).then(projects => {
            })
        });
    }
    // update task in project after marking as delete. 
    public UpdateCurrentMyProjectByTask(createdTask) {
        return this.storage.get('projectToBeView').then(cmp => {
            cmp.tasks.forEach(function (task, i) {
                if (task._id == createdTask._id) {
                    cmp.isEdited = true;
                    cmp.tasks[i] = createdTask;
                }
            });
            this.storage.set('projectToBeView', cmp).then(updatedProject => {
                this.updateByProjects(updatedProject);
            })
        })
    }

    // Close task create modal
    public closeModal() {
        this.modalCloseEvent.next();
    }

    public getTaskPDF(data) {
        return this.http.post(environment.api_url + '/improvement-project/api/v1/reports/shareTaskPdf', data);
    }
    public addNewTaskIntoProject(task) {
        this.addNewTask.next(task);
    }

    public getTemplate(templateId) {
        return this.http.get(environment.api_url + '/improvement-project/api/v1/template/getTemplateDetailsById/' + templateId)
    }
}