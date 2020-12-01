import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, IonSelect, ModalController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { UnnatiDataService, urlConstants } from "../core";
import { ReportsService } from "../core/services/reports.service";
import { UtilsService } from "../core/services/utils.service";
import { FilterModalComponent } from "../shared/components/filter-modal/filter-modal.component";
@Component({
  selector: "app-reports",
  templateUrl: "./reports.page.html",
  styleUrls: ["./reports.page.scss"],
})
export class ReportsPage {
  reportData: any;
  showFilter : boolean = false;
  filterType: { label: string; value: number }[];
  filter = { type: 1, entity: undefined, program: undefined };
  @ViewChild("mySelect") selectRef: IonSelect;
  texts: any;
  constructor(
    public router: Router,
    public reportSrvc: ReportsService,
    public unnatiSrvc: UnnatiDataService,
    public utils: UtilsService,
    public modalController: ModalController,
    public alertController: AlertController,
    private translate: TranslateService
  ) {
    this.translate
      .get([
        "LABELS.PLEASE_SELECT_ENTITY",
        "LABELS.SELECT_ENTITY_TO_SELECT_PROGRAM",
        "LABELS.NO_DATA_AVAILABLE",
        "LABELS.NO_DATA_AVAILABLE_FOR_ENTITY_OR_PROGRAM",
        "LABELS.OK",
      ])
      .subscribe((data) => {
        this.texts = data;
      });
  }

  projectsArr = [
    {
      name: "Total Projects",
      img: "../../assets/images/reports-page/Note 1.svg",
      key: "total",
    },
    {
      name: "Projects Completed",
      img: "../../assets/images/reports-page/note.svg",
      key: "completed",
    },
    {
      name: "Projects In Progress",
      img: "../../assets/images/reports-page/Note 4.svg",
      key: "inProgress",
    },
    {
      name: "Projects Overdue",
      img: "../../assets/images/reports-page/Note 3.svg",
      key: "overdue",
    },
  ];

  ionViewWillEnter() {
    this.getReports();
    this.loadFilterType();
  }

  loadFilterType() {
    const config = {
      url: urlConstants.API_URLS.GET_REPORT_TYPES,
    };
    this.unnatiSrvc.get(config).subscribe(
      (res) => {
        if (res.result) {
          this.filterType = res.result;
        }
      },
      (err) => {
        this.filterType = [];
      }
    );
  }

  async openFilterModal(type) {
    if (type == "program" && this.filter.entity == undefined) {
      this.presentAlert(
        this.texts["LABELS.PLEASE_SELECT_ENTITY"],
        this.texts["LABELS.SELECT_ENTITY_TO_SELECT_PROGRAM"]
      );
      return;
    }
    let preFilter = JSON.stringify(this.filter);

    const modal = await this.modalController.create({
      component: FilterModalComponent,
      cssClass: "my-custom-class",
      componentProps: {
        type: type,
        entityId: this.filter.entity ? this.filter.entity._id : null,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    type == "entity" ? (this.filter.entity = data) : (this.filter.program = data);
    JSON.stringify(this.filter) !== preFilter ? this.getReports(preFilter) : null;
  }

  getReports(preFilter?) {
    const entityId = this.filter.entity ? this.filter.entity._id : null;

    let url;
    if (entityId) {
      url = urlConstants.API_URLS.GET_REPORT + entityId; // to get entity report
    } else {
      url = urlConstants.API_URLS.GET_REPORT; // overall report
    }
    const query = {
      reportType: this.filter.type,
      programId: this.filter.program ? this.filter.program._id : null,
    };

    url = this.utils.queryUrl(url, query);
    const config = {
      url: url,
    };
    this.unnatiSrvc.get(config).subscribe(
      (data) => {
        if (data.result && !data.result.dataAvailable) {
          this.presentAlert(
            this.texts["LABELS.NO_DATA_AVAILABLE"],
            this.texts["LABELS.NO_DATA_AVAILABLE_FOR_ENTITY_OR_PROGRAM"]
          );
          preFilter ? (this.filter = JSON.parse(preFilter)) : null;
          if (this.reportData) {
            return;
          }
        }
        this.reportData = data.result ? data.result.data : {};
        this.reportData.tasks.series = this.generateCircleData(this.reportData.tasks, 80);
        this.reportData.categories.series = this.generateCircleData(this.reportData.categories, 50);
      },
      (err) => {}
    );
  }

  // move to utils
  generateCircleData(obj, innerRadius) {
    let data = [];
    for (const key in obj) {
      if (key == "total") {
        continue;
      }
      let x = {};
      x["name"] = this.utils.cameltoNormalCase(key);
      x["value"] = ((obj[key] / obj.total) * 100).toFixed() + "%";
      x["y"] = obj[key];
      x["z"] = 0;
      if (key == "completed") {
        x["color"] = "green";
      }

      if (key == "notStarted") {
        x["color"] = "#B80000  ";
      }

      data.push(x);
    }
    let series = [
      {
        minPointSize: 100 - innerRadius,
        innerSize: innerRadius + "%",
        zMin: 0,
        showInLegend: true,
        data: data,
      },
    ];
    return series;
  }

  ionViewDidLeave() {
    this.filter = { type: 1, entity: null, program: null };
  }

  reportTypeChange() {
    this.getReports();
  }

  async presentAlert(heading, msg) {
    const alert = await this.alertController.create({
      header: heading,
      message: msg,
      buttons: [this.texts["LABELS.OK"]],
    });

    await alert.present();
  }

  viewFullReport() {
    this.reportSrvc.filterForReport = this.filter;
    this.router.navigate(["/menu/full-report"]);
  }

  fileName() {
    let arr = ["report"];
    this.filter.program ? arr.push(this.filter.program.name) : null;
    return arr;
  }

  downloadUrl() {
    let url = urlConstants.API_URLS.GET_REPORT;
    if (this.filter.entity) {
      url = url + this.filter.entity._id;
    }

    let query = {
      requestPdf: true,
      reportType: this.filter.type,
      programId: this.filter.program ? this.filter.program._id : null,
    };

    url = this.utils.queryUrl(url, query);

    return url;
  }
}
