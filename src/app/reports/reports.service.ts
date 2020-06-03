import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root',
})
export class ReportsService {
    constructor(
        public http: HttpClient) {
    }
    public getReports(limit, page) {

        return this.http.get(environment.api_url + '/unnati/api/v1/reports/reportsList?limit=100&page=0&search=' + limit + '&page=' + page)
    }

    public getReportFile(id) {

        return this.http.get(environment.api_url + '/unnati/api/v1/reports/getObservationReport?observationId=' + id)
    }
    //  search reports
    public searchReports(keyword) {
        return this.http.get(environment.api_url + '/unnati/api/v1/reports/reportsList?limit=100&page=0&search=' + keyword)
    }
}
