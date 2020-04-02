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
            console.log(cmp, "cmp");
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
                            console.log('mapped', projectsPrograms.projects[i]);
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
                    console.log(projectList, 'in last else');
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
        return this.storage.get('latestProjects').then(projectList => {
            console.log(projectList, "projectList projectList");
            if (projectList) {
                projectList.forEach(projectsPrograms => {
                    console.log(projectsPrograms, "projectsPrograms");
                    if (projectsPrograms.programs) {
                        console.log(projectsPrograms.programs._id, " projectsPrograms.programs._id")
                        if (projectsPrograms.programs._id == "5e01da0c0c72d5597433ec7a") {
                            projectsPrograms.projects.push(project);
                            mapped = true;
                        }
                    }
                })
                if (!mapped) {
                    console.log('in mapped false', mapped, "projectsPrograms.projects ===", projectList.projects);
                    if (projectList.projects) {
                        console.log('pushing into projectsPrograms', projectList);
                        projectList.projects.push(project)
                    } else {
                        console.log('in else')
                        let pro1 = [{
                            projects: [
                            ]
                        }]
                        pro1[0].projects.push(project);
                        projectList = pro1;
                    }
                }
            } else {
                console.log('in outer else');
                if (projectList.projects) {
                    console.log(projectList, "projectList projectList");
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
            console.log('syncing in insert project into', projectList);
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