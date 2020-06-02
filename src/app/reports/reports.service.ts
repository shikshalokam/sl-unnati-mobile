import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CurrentUserProvider } from '../current-user';
import { HttpClient } from '@angular/common/http';
import { AppConfigs } from '../core-module/constants/app-config';
import { ApiProvider } from '../api/api';

@Injectable({
    providedIn: 'root',
})
export class ReportsService {
    constructor(public api: ApiProvider, public http: HttpClient, public currentUser: CurrentUserProvider, public storage: Storage) {
    }
    public getReports(limit, page) {

        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/reportsList?limit=100&page=0&search=' + limit + '&page=' + page)
    }

    public getReportFile(id) {

        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/getObservationReport?observationId=' + id)
    }
    //  search reports
    public searchReports(keyword) {
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/reportsList?limit=100&page=0&search=' + keyword)
    }
}
