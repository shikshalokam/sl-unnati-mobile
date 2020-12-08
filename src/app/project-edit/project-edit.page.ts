import { Component, OnInit } from '@angular/core';
import { DbService, LoaderService, ToastMessageService, statuses } from '../core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-project-edit",
  templateUrl: "./project-edit.page.html",
  styleUrls: ["./project-edit.page.scss"],
})
export class ProjectEditPage implements OnInit {
  projectId;
  project;
  categories = [];
  constructor(
    public params: ActivatedRoute,
    private db: DbService,
    private loader: LoaderService,
    private router: Router,
    private toast: ToastMessageService
  ) {
    this.db.createPouchDB(environment.db.projects);
    params.params.subscribe((parameters) => {
      this.projectId = parameters.projectId;
    });
  }

  ngOnInit() {}
  ionViewDidEnter() {
    this.getProject();
  }

  getProject() {
    this.db.query({ _id: this.projectId }).then(
      (success) => {
        this.project = success.docs.length ? success.docs[0] : {};
        this.project.categories.forEach((category) => {
          this.categories.push(category.label);
        });
      },
      (error) => {}
    );
  }
  edit(type) {
    type == "metaData"
      ? this.router.navigate(["menu/create-project"], {
          queryParams: {
            projectId: this.project._id,
            type: type,
          },
        })
      : this.router.navigate(["menu/project-operation", this.project._id], {
          queryParams: { createdType: "bySelf", isEdit: true },
        });
  }

  isAssessmentType() {
    return this.project.tasks.some((t) => t.type == "assessment" || t.type == "observation");
  }
}