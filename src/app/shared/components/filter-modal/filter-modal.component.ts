import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { KendraApiService, LoaderService, UnnatiDataService, urlConstants } from "src/app/core";
import { ReportsService } from "src/app/core/services/reports.service";
import * as _ from "underscore";

@Component({
  selector: "app-filter-modal",
  templateUrl: "./filter-modal.component.html",
  styleUrls: ["./filter-modal.component.scss"],
})
export class FilterModalComponent implements OnInit {
  page = 1;
  limit = 15;
  entityTypes: any;
  selectedType = "school";
  dataList: any = [];
  @Input() type: string;
  @Input() entityId: string;
  searchText: any;
  count: any;

  constructor(
    private loader: LoaderService,
    public reportSrvc: ReportsService,
    public kendraSrvc: KendraApiService,
    public unnatiSrvc: UnnatiDataService,
    private modalCtrl: ModalController
  ) {
    this.search = _.debounce(this.search, 500);
  }

  ngOnInit() {
    this.getEntityTypes();
    this.search("");
  }

  typeChange(e) {
    this.selectedType = e.detail.value;

    this.serachEntity(this.searchText);
  }

  search(searchText) {
    if (searchText == null || searchText == undefined) {
      searchText = "";
    }
    this.dataList = [];
    this.searchText = searchText;

    this.type == "entity" ? this.serachEntity(searchText) : this.searchProgramByEntity(searchText);
  }
  searchProgramByEntity(searchText: any) {
    this.loader.startLoader();

    const config = {
      url:
        urlConstants.API_URLS.GET_PROGRAM_BY_ENTITY +
        this.entityId +
        `?search=${searchText}&page=${this.page}&limit=${this.limit}`,
    };
    this.unnatiSrvc.get(config).subscribe(
      (data) => {
        this.loader.stopLoader();
        this.dataList = data.result.data;
      },
      (error) => {
        this.loader.stopLoader();
      }
    );
  }
  serachEntity(searchText: any) {
    this.loader.startLoader();
    const config = {
      url:
        urlConstants.API_URLS.GET_ENTITIES_BY_TYPE +
        `?entityType=${this.selectedType}&search=${searchText}&page=${this.page}&limit=${this.limit}`,
    };
    this.kendraSrvc.get(config).subscribe(
      (data) => {
        this.loader.stopLoader();
        this.dataList = [...this.dataList, ...data.result.data];
        this.count = data.result.count;
      },
      (error) => {
        this.loader.stopLoader();
      }
    );
  }
  getEntityTypes() {
    const config = {
      url: urlConstants.API_URLS.GET_ENTITY_TYPES,
    };
    this.kendraSrvc.get(config).subscribe(
      (res) => {
        this.entityTypes = res.result;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  dismissModal(data) {
    this.modalCtrl.dismiss(data);
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.page++;
      this.search(this.searchText);
      if (this.dataList.length == this.count) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
