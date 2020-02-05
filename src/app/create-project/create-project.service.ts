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
        this.storage.get('myprojects').then(myProjects => {
            if (myProjects) {
                myProjects.forEach(function (project, i) {
                    if (project._id == updatedProject._id) {
                        updatedProject.isEdited = true;
                        myProjects[i] = updatedProject;
                    }
                });
                this.storage.set('myprojects', myProjects).then(project => {
                })
            } else {
                updatedProject._id = 1;
                let data = [];
                data.push(updatedProject);
                this.storage.set('myprojects', data).then(myProjects => { })
            }
        })
    }
    // add new project into my projects.
    public insertIntoMyProjects(project) {
        return this.storage.get('myprojects').then(myProjects => {
            if (myProjects) {
                project.isEdited = true;
                myProjects.push(project);
                this.storage.set('myprojects', myProjects).then(projects => {
                })
            } else {
                project.isEdited = true;
                let data = [];
                data.push(project);
                this.storage.set('myprojects', data).then(projects => {
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