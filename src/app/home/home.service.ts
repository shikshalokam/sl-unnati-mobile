import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  localDataUpdated = new Subject();
  public myProject = new Subject();
  public isForceAppUpdate = new Subject();
  public clearMyProject = new Subject();
  public tobeSync = new Subject();
  public profileUpdateEvent = new Subject();
  public isSyncing = new Subject();
  public searcResultsOfPrjcts = new Subject();
  constructor(private http: HttpClient) {
  }

  public loadMyProjects() {
    this.myProject.next();
  }
  public syncUpdated() {
    this.localDataUpdated.next(true);
  }
  public setCount(count) {
    if (count == true) {
      this.searcResultsOfPrjcts.next('no');
    } else {
      this.searcResultsOfPrjcts.next('show');
    }
  }

  public clearData() {
    this.clearMyProject.next();
  }
  syncingProject(status) {
    this.isSyncing.next(status);
  }
  public syncProjects() {
    this.tobeSync.next();
  }

  public showProfileUpdate(data) {
    this.profileUpdateEvent.next(data);
  }
  public checkAppUpdate() {
    return this.http.get(environment.api_url + '/improvement-project/api/v1/forceAppUpdateCheck');
  }
  public forceAppUpdate(data) {
    this.isForceAppUpdate.next(data);
  }
}
