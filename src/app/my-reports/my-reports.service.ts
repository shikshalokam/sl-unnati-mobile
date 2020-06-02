import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CurrentUserProvider } from '../current-user';
import { HttpClient } from '@angular/common/http';
import { AppConfigs } from '../core-module/constants/app-config';
import { ApiProvider } from '../api/api';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MyReportsService {
    shareEvent = new Subject();
    reportEvent = new Subject();
    downloadEvent = new Subject();
    shareTask = new Subject();

    constructor(public api: ApiProvider, public http: HttpClient, public currentUser: CurrentUserProvider, public storage: Storage) {
    }
    public getReports(state, entity?) {
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/getMonthViseReport?reportType=' + state + '?entityId=' + entity)
    }
    public getFullReports(state, entity) {
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/getDetailViewReport?reportType=' + state + '?entityId=' + entity)
    }
    public getReportData(entity) {
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/getMonthlyOrQuarterReportPdf?reportType=' + entity.reportType + '&schoolName=' + entity.name + '&' + entity.entityId)
    }
    public getFullReportData(entity) {
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/reports/getFullMonthlyOrQuarterPdf?reportType=' + entity.reportType + '&schoolName=' + entity.name + '&' + entity.entityId)
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