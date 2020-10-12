import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { LocalKeys } from '../core-module/constants/localstorage-keys';
@Injectable({
    providedIn: 'root'
})
export class CreateTaskService {
    project;
    constructor(public storage: Storage) { }
    public getProjectById(projectId) {
        return this.storage.get(LocalKeys.allProjects).then(projectList => {
            projectList.forEach(programs => {
                programs.projects.forEach(project => {
                    if (project._id == projectId) {
                        return this.project = project;
                    }
                });
            });

        })
    }
    public updateByProjects(updatedProject) {
        let mapped: boolean = false;
        return this.storage.get(LocalKeys.allProjects).then(projectList => {
            if (projectList) {
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
                    if (!mapped) {
                        if (projectList && projectList[0].projects) {
                            projectList[0].projects.push(updatedProject)
                        } else {
                            let pro1 = [{
                                projects: [
                                ]
                            }]
                            pro1[0].projects.push(updatedProject);
                            projectList = pro1;
                        }
                    }
                })
            }
        })
    }
    // add project into my projects
    // public insertIntoMyProjects(project) {
    //     return this.storage.get('latestProjects').then(projectList => {
    //         if (projectList) {
    //             if (!projectList && projectList[0].projects) {
    //                 projectList[0].projects.push(project);
    //                 this.storage.set('latestProjects', projectList).then(projects => {
    //                 })
    //             } else {
    //                 projectList[0].projects.push(project);
    //                 this.storage.set('latestProjects', projectList).then(projects => {
    //                 })
    //             }
    //         }

    //     });
    // }
}