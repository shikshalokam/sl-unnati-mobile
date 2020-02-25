import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
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
        return this.storage.get('projects').then(projectList => {
            // projectList.forEach(projectsPrograms => {
            projectList[0].projects.forEach(function (project, i) {
                if (project._id == updatedProject._id) {
                    updatedProject.isEdited = true;
                    projectList[0].projects[i] = updatedProject;
                }
            });
            this.storage.set('projects', projectList).then(project => {
            })
            // });
        })
    }
    // add new project into my projects.
    public insertIntoMyProjects(project) {
        return this.storage.get('projects').then(projectList => {
            if (projectList) {
                projectList.forEach(projectsPrograms => {
                    if (projectsPrograms) {
                        projectsPrograms.projects.push(project);
                        this.storage.set('projects', projectList).then(projects => {
                        })
                    } else {
                        let pro1 = [{
                            projects: [
                            ]
                        }]
                        pro1[0].projects.push(project);
                        projectList = pro1;
                        this.storage.set('projects', projectList).then(projects => {
                        })
                    }
                });
            } else {  
                let projects: any;
                project._id = 1;
                let pro1 = [{
                    projects: [{
                    }]
                }]
                pro1[0].projects = project;
                projectList = pro1;
                this.storage.set('projects', projectList).then(projects => {
                })
            }

        })
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