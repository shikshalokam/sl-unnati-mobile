import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-subtask-status',
  templateUrl: './subtask-status.page.html',
  styleUrls: ['./subtask-status.page.scss'],
})
export class SubtaskStatusPage implements OnInit {
  public task;
  public projectId;
  public taskId;
  constructor(public storage: Storage, 
    public router: Router, 
    public activatedRoute: ActivatedRoute, 
    public screenOrientation: ScreenOrientation) {
    this.activatedRoute.params.subscribe(data => {
      this.taskId = data.id;
    })
  }

  ngOnInit() {
    this.storage.get('currentProject').then(cp => {
      cp.projects.forEach(project => {
        this.projectId = project._id;
        project.tasks.forEach(task => {
          if (task._id == this.taskId) {
            this.task = task;
          }
        });
      });
    })
  }
  ionViewDidEnter() {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
    }
  }
  public goBack() {
    //  this.location.back();
    this.router.navigate(['project-view/status/',this.projectId]);
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    } catch (error) {
    }
    
  }
}
