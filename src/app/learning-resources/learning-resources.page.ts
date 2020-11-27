import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  DbService,
  UnnatiDataService,
  urlConstants,
  NetworkService,
  LoaderService,
  ToastMessageService,
} from "../core";
import { ModalController } from "@ionic/angular";
import { OpenResourcesService } from "../shared";
import { Storage } from "@ionic/storage";
import { environment } from "src/environments/environment.prod";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-learning-resources",
  templateUrl: "./learning-resources.page.html",
  styleUrls: ["./learning-resources.page.scss"],
})
export class LearningResourcesPage implements OnInit {
  projectId;
  taskId: any;
  list;
  constructor(
    private routerparam: ActivatedRoute,
    private networkService: NetworkService,
    private loader: LoaderService,
    private toast: ToastMessageService,
    private db: DbService,
    private openResources: OpenResourcesService
  ) {
    routerparam.params.subscribe((param) => {
      this.projectId = param.id;
      this.taskId = param.taskId;
      console.log(this.projectId, " this.projectId");
      console.log(this.taskId, " this.taskId");
      this.getProjectFromLocal(this.projectId);
    });
  }

  ngOnInit() {}
  getProjectFromLocal(projectId) {
    this.loader.startLoader();
    this.db.createPouchDB(environment.db.projects);
    this.db.query({ _id: projectId }).then(
      (success) => {
        // this.db.getById(id).then(success => {
        this.loader.stopLoader();
        this.list = success.docs[0];
        if (this.taskId) {
          // to show  learnign resources of task
          this.list = this.list.tasks.filter((t) => t._id == this.taskId)[0];
        }
        console.log(this.list, "learningResources");
      },
      (error) => {
        this.loader.stopLoader();
      }
    );
  }
  openBodh(link) {
    console.log(link, "link");
    this.networkService.isNetworkAvailable
      ? this.openResources.openBodh(link)
      : this.toast.showMessage("MESSAGES.OFFLINE", "danger");
  }
}
