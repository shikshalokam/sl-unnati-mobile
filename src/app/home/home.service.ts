import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public myProject = new Subject();
  public clearMyProject = new Subject();
  public isSyncing = new Subject();
  public activeProjectLoad = new Subject();
  public searcResultsOfPrjcts = new Subject();
  constructor() {
  }

  public loadMyProjects() {
    this.myProject.next();
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
}
