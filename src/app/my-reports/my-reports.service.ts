import { Injectable } from '@angular/core';
import { CurrentUserProvider } from '../current-user';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class MyReportsService {
    shareEvent = new Subject();
    reportEvent = new Subject();
    downloadEvent = new Subject();
    shareTask = new Subject();

    constructor(
        public http: HttpClient,
        public currentUser: CurrentUserProvider
    ) {
    }
    public getReports(state, entity?) {
        return this.http.get(environment.api_url + '/unnati/api/v1/reports/getMonthViseReport?reportType=' + state + '?entityId=' + entity)
    }
    public getFullReports(state, entity) {
        return this.http.get(environment.api_url + '/unnati/api/v1/reports/getDetailViewReport?reportType=' + state + '?entityId=' + entity)
    }
    public getReportData(entity) {
        return this.http.get(environment.api_url + '/unnati/api/v1/reports/getMonthlyOrQuarterReportPdf?reportType=' + entity.reportType + '&schoolName=' + entity.name + '&' + entity.entityId)
    }
    public getFullReportData(entity) {
        return this.http.get(environment.api_url + '/unnati/api/v1/reports/getFullMonthlyOrQuarterPdf?reportType=' + entity.reportType + '&schoolName=' + entity.name + '&' + entity.entityId)
    }
    public share(data) {
        this.shareEvent.next(data);
    }
    public download(data) {
        this.downloadEvent.next(data);
    }
    public getReportEvent(type) {
        this.reportEvent.next(type);
    }
    public shareTaskEvent(data) {
        this.shareTask.next(data);
    }
}