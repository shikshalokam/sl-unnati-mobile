import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService, ToastMessageService } from ".";
import { urlConstants } from "..";
import { ApiService } from "./api/api.service";
import { ModalController } from "@ionic/angular";
@Injectable({
  providedIn: "root",
})
export class ReportsService extends ApiService {
  baseUrl: string;
  filterForReport: any;
  constructor(
    public http: HttpClient,
    public auth: AuthService,
    public toast: ToastMessageService,
    public modalController: ModalController
  ) {
    super(http, auth, toast, modalController);
  }
}
