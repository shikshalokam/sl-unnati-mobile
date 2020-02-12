import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigs } from '../app.config'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UpdateProfileService {
  updatedUser = new Subject()
  constructor(public http: HttpClient,
    public storage: Storage) {
  }

  // get States
  public getStates(token) {
    let httpHeaders = new HttpHeaders({
      'X-authenticated-user-token': token
    })
    return this.http.get(AppConfigs.notification.kendra_base_url + 'v1/entities/listByEntityType/state', { headers: httpHeaders });
  }

  // get immediate Children
  public getImmediateChildren(token, id) {
    let httpHeaders = new HttpHeaders({
      'X-authenticated-user-token': token
    })
    return this.http.get(AppConfigs.notification.kendra_base_url + 'v1/entities/immediateEntities/' + id, { headers: httpHeaders });
    //return this.http.get(AppConfigs.api_url + '/unnati/api/v1/getSubTaskDetails/5dcd367997dccf453772b8f6/5dcd367997dccf453772b8f5', { headers: httpHeaders });
  }

  public saveInfo(token, data) {
    let httpHeaders = new HttpHeaders({
      'X-authenticated-user-token': token
    })
    return this.http.post(AppConfigs.notification.kendra_base_url + 'v1/user-profile/update', data, { headers: httpHeaders });
  }
  // event triggers for update popups
  public updateProfile(status) {
    this.updatedUser.next(status);
  } 
}