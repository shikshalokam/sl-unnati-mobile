import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CurrentUserProvider } from '../current-user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigs } from '../app.config'
import { ApiProvider } from '../api/api';

@Injectable({
    providedIn: 'root',
})
export class MyReportsService {
    constructor(public api: ApiProvider, public http: HttpClient, public currentUser: CurrentUserProvider, public storage: Storage) {
    }
    public getReports(data, state) {
        let httpHeaders = new HttpHeaders({
            'x-auth-token': data
        })
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/getMonthViseReport?reportType=' + state, { headers: httpHeaders })
    }
    public getFullReports(token, state) {
        let httpHeaders = new HttpHeaders({
            'x-auth-token': token
        })
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/getDetailViewReport?reportType=' + state, { headers: httpHeaders })
    }
}
