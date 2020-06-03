import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UpdateProfileService {
  updatedUser = new Subject();
  constructor(public http: HttpClient,
    public storage: Storage) {
  }

  // get States
  public getStates(token) {
    return this.http.get(environment.notification.kendra_base_url + 'v1/entities/listByEntityType/state');
  }

  // get immediate Children
  public getImmediateChildren(id) {
    return this.http.get(environment.notification.kendra_base_url + 'v1/entities/subEntityList/' + id);
  }
  // public getSubEntities(data) {
  //   return this.http.post(environment.notification.kendra_base_url + 'v1/entities/subEntityList?type='+entity+'&search='+searchText+'&page='+page+'&limit='+limit,data);
  // }
  public searchEntities(id, entity, searchText, page, limit) {
    return this.http.get(environment.notification.kendra_base_url + 'v1/entities/subEntityList/' + id + '?type=' + entity + '&search=' + searchText + '&page=' + page + '&limit=' + limit);
  }
  public saveInfo(data) {
    return this.http.post(environment.notification.kendra_base_url + 'v1/user-profile/save', data);
  }
  // event triggers for update popups
  public updateProfile(status) {
    this.updatedUser.next(status);
  }

  public getProfileData() {
    return this.http.get(environment.notification.kendra_base_url + 'v1/user-profile/getForm');
  }

  public getSubEntities(data, type) {
    return this.http.post(environment.notification.kendra_base_url + 'v1/entities/subEntityList?type=' + type + '&search=&page=&limit=', data);
  }
}