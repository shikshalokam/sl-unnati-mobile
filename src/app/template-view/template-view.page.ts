import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnnatiDataService, urlConstants, NetworkService, LoaderService, ToastMessageService } from '../core';
@Component({
  selector: "app-template-view",
  templateUrl: "./template-view.page.html",
  styleUrls: ["./template-view.page.scss"],
})
export class TemplateViewPage implements OnInit {
  template;
  noTemplates: boolean = false;
  constructor(
    public routerParams: ActivatedRoute,
    public route: Router,
    private unnatiService: UnnatiDataService,
    private networkService: NetworkService,
    private loader: LoaderService,
    private toast: ToastMessageService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.routerParams.params.subscribe((params) => {
      this.networkService.isNetworkAvailable
        ? this.getTemplate(params.id)
        : this.toast.showMessage("MESSAGES.OFFLINE", "danger");
    });
  }

  getTemplate(id) {
    this.loader.startLoader();
    const config = {
      url: urlConstants.API_URLS.TEMPLATE_DATA + id,
    };
    this.unnatiService.get(config).subscribe(
      (data) => {
        if (data.result) {
          this.template = data.result;
          console.log(this.template);
          this.cd.detectChanges();
          this.loader.stopLoader();
        } else {
          this.noTemplates = true;
          this.loader.stopLoader();
        }
      },
      (error) => {
        this.loader.stopLoader();
      }
    );
  }

  next() {
    this.route.navigate(["menu/project-operation", this.template._id]);
  }
}
