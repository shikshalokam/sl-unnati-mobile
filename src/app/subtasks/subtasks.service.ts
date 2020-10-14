import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SubTasksService {
  constructor(public http: HttpClient) {
  }

  // Sync Sub tasks
  public syncSubTask(data) {
    return this.http.post(environment.api_url + '/improvement-project/api/v1/syncSubTask', data);
  }

  // get subtask by id
  public getSubtaskById(parameters) {
    return this.http.get(environment.api_url + '/improvement-project/api/v1/getSubTaskDetails/' + parameters.subtaskId + '/' + parameters.taskId);
  }
}