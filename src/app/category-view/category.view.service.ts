import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigs } from '../core-module/constants/app-config';
import { Subject } from 'rxjs';
import {LocalKeys} from '../shared-module/localstorage-keys';
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
    return this.http.get(AppConfigs.api_url + '/unnati/api/v1/template/all')
  }

  //  delete project event
  public deleteProject(value) {
    this.deleteEvent.next();
  }

  // get pdf of project
  public getPDF(data) {
    return this.http.post(AppConfigs.api_url + '/unnati/api/v1/getProjectPdf', data)
  }
}