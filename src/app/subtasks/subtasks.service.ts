import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CurrentUserProvider } from '../current-user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigs } from '../app.config'
import { URLSearchParams, Http } from '@angular/http';
@Injectable({
  providedIn: 'root',
})
export class SubTasksService {
  constructor(public http: HttpClient, public storage: Storage) {
  }

  // Sync Sub tasks
  public syncSubTask(data, token) {
    let httpHeaders = new HttpHeaders({
      'x-auth-token': token
    })
    return this.http.post(AppConfigs.api_url + '/unnati/api/v1/syncSubTask', data, { headers: httpHeaders });
  }

  // get subtask by id
  public getSubtaskById(token, parameters) {
    let httpHeaders = new HttpHeaders({
      'x-auth-token': token
    })
     return this.http.get(AppConfigs.api_url+'/unnati/api/v1/getSubTaskDetails/'+parameters.subtaskId +'/'+ parameters.taskId,  { headers:httpHeaders});
    //return this.http.get(AppConfigs.api_url + '/unnati/api/v1/getSubTaskDetails/5dcd367997dccf453772b8f6/5dcd367997dccf453772b8f5', { headers: httpHeaders });
  }
}