import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
@Injectable({
    providedIn: 'root'
})
export class CreateTaskService {
    project;
    constructor(public storage: Storage) { }
    public getProjectById(projectId) {
        return this.storage.get('projects').then(projectList => {
            projectList[0].projects.forEach(project => {
                if (project._id == projectId) {
                    return this.project = project;
                }
            });
        })
    }
    public updateByProjects(updatedProject) {
        this.storage.get('projects').then(projectList => {
            projectList[0].projects.forEach(project => {
                if (project._id == updatedProject._id) {
                    projectList[0].projects = updatedProject;
                    this.storage.set('projects', projectList).then(projects => {
                    })
                }
            });
        })
    }
    // add project into my projects
    public insertIntoMyProjects(project) {
        return this.storage.get('projects').then(projectList => {
            if (projectList[0].projects) {
                projectList[0].projects.push(project);
                this.storage.set('projects', projectList).then(projects => {
                })
            } else {
                projectList[0].projects.push(project);
                this.storage.set('projects', projectList).then(projects => {
                })
            }
        });
    }
}