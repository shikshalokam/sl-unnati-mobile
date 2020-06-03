import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { LocalKeys } from '../core-module/constants/localstorage-keys';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryViewService {
  deleteEvent = new Subject();
  constructor(public storage: Storage,
    public http: HttpClient) { }
  //  get my projects from local 
  public getMyProjects() {
    return this.storage.get(LocalKeys.allProjects).then(projects => {
      return projects;
    })
  }

  // get templates from local
  public getTemplates(type) {
    return this.storage.get(LocalKeys.templates).then(templates => {
      return templates[type];
    })
  }
  //  get projects by category
  public getTemplatesByCategory() {
    return this.http.get(environment.api_url + '/unnati/api/v1/template/all')
  }

  //  delete project event
  public deleteProject(value) {
    this.deleteEvent.next();
  }

  // get pdf of project
  public getPDF(data) {
    return this.http.post(environment.api_url + '/unnati/api/v1/getProjectPdf', data)
  }
}