import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CurrentUserProvider } from '../current-user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigs } from '../app.config'
import { ApiProvider } from '../api/api';

@Injectable({
    providedIn: 'root',
})
export class ReportsService {
    constructor(public api: ApiProvider, public http: HttpClient, public currentUser: CurrentUserProvider, public storage: Storage) {
    }
    public getReports(data, limit, page) {
        let httpHeaders = new HttpHeaders({
            'x-auth-token': data
        })
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/reportsList?limit=100&page=0&search=' + limit + '&page=' + page, { headers: httpHeaders })
    }

    public getReportFile(data, id) {
        let httpHeaders = new HttpHeaders({
            'x-auth-token': data
        })
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/getObservationReport?observationId=' + id, { headers: httpHeaders })
    }
    //  search reports
    public searchReports(data, keyword) {
        let httpHeaders = new HttpHeaders({
            'x-auth-token': data
        })
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/reportsList?limit=100&page=0&search=' + keyword, { headers: httpHeaders })
    }
}
