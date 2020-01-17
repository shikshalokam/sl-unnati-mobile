import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigs } from '../app.config'
@Injectable({
  providedIn: 'root'
})
export class CategoryViewService {
  constructor(public storage: Storage,
    public http: HttpClient) { }

  public getMyProjects() {
    return this.storage.get('myprojects').then(projects => {
      return projects;
    })
  }

  public getTemplates(type)
  {
    return this.storage.get('templates').then(templates => {
      return templates[type];
    })
  }
 
  public getTemplatesByCategory(data) {
    let httpHeaders = new HttpHeaders({
      'x-auth-token': data
    })
    return this.http.get(AppConfigs.api_url + '/unnati/api/v1/template/all', { headers : httpHeaders})
  }
}
