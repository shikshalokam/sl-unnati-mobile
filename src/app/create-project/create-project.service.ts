import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AppConfigs } from '../app.config';

@Injectable({
    providedIn: 'root'
})
export class CreateProjectService {
    constructor(public storage: Storage) { }
    // Update task in current Project
    public updateCurrentMyProject(createdTask) {
        return this.storage.get('newcreatedproject').then(cmp => {
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
        return this.storage.get('latestProjects').then(projectList => {
            projectList.forEach(projectsPrograms => {
                if (projectsPrograms) {
                    projectsPrograms.projects.forEach(function (project, i) {
                        if (project._id == updatedProject._id) {
                            updatedProject.isEdited = true;
                            projectsPrograms.projects[i] = updatedProject;
                            mapped = true;
                        }
                    });
                }
            })
            if (!mapped) {
                if (projectList[0].projects) {
                    projectList[0].projects.forEach(project => {
                        projectList[0].projects.push(updatedProject);
                    });
                } else {
                    let pro1 = [{
                        projects: [
                        ]
                    }]
                    pro1[0].projects.push(updatedProject);
                    projectList = pro1;
                }
            }
            this.storage.set('newcreatedproject', updatedProject).then(sucess => {
                this.storage.set('projectToBeView', updatedProject).then(updatedProject => {
                })
            })
            this.storage.set('latestProjects', projectList).then(projects => {
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
        return this.storage.get('latestProjects').then(projectList => {
            if (projectList) {
                projectList.forEach(projectsPrograms => {
                    if (projectsPrograms.programs) {
                        if (projectsPrograms.programs._id == programId) {
                            projectsPrograms.projects.push(project);
                            mapped = true;
                        }
                    }
                })
                if (!mapped) {
                    if (projectList.projects) {
                        projectList.projects.push(project)
                    } else {
                        let pro1 = [{
                            projects: [
                            ]
                        }]
                        pro1[0].projects.push(project);
                        projectList = pro1;
                    }
                }
            } else {
                if (projectList.projects) {
                    project._id = projectList.projects.length + 1;
                    projectList.projects.push(project)
                } else {
                    project._id = 1;
                    let pro1 = [{
                        projects: [
                        ]
                    }]
                    pro1[0].projects.push(project);
                    projectList = pro1;
                }
            }
            this.storage.set('latestProjects', projectList).then(projects => {
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
}