import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  localDataUpdated = new Subject();
  public myProject = new Subject();
  public clearMyProject = new Subject();
  public tobeSync = new Subject();
  public profileUpdateEvent = new Subject();
  public isSyncing = new Subject();
  public activeProjectLoad = new Subject();
  public searcResultsOfPrjcts = new Subject();
  constructor() {
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
  public loadActiveProjects() {
    this.activeProjectLoad.next('activeProjectLoad');
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
}
