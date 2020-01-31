import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
@Injectable({
    providedIn: 'root'
})
export class CreateTaskService {
    project;
    constructor(public storage: Storage) { }
    public getProjectById(projectId) {
        return this.storage.get('myprojects').then(myprojects => {
            if (myprojects) {
                myprojects.forEach(project => {
                    if (project._id == projectId) {
                        return this.project = project;
                    }
                });
                if (!this.project) {
                    return this.storage.get('projects').then(projectList => {
                        projectList[0].projects.forEach(project => {
                            if (project._id == projectId) {
                                return this.project = project;
                            }
                        });
                    })
                }
                return this.project;
            } else {
                return this.storage.get('projects').then(projectList => {
                    projectList[0].projects.forEach(project => {
                        if (project._id == projectId) {
                            return this.project = project;
                        }
                    });
                })
            }
        })
    }
    public updateByProjects(updatedProject) {
        this.storage.get('myprojects').then(myProjects => {
            myProjects.forEach(project => {
                if (project._id == updatedProject._id) {
                    project = updatedProject;
                }
            });
        })
    }
    // add project into my projects
    public insertIntoMyProjects(project) {
        return this.storage.get('myprojects').then(myProjects => {
            if (myProjects) {
                myProjects.push(project);
                this.storage.set('myprojects', myProjects).then(projects => {
                })
            } else {
                let data = [];
                data.push(project);
                this.storage.set('myprojects', data).then(projects => {
                })
            }
        })
    }
}