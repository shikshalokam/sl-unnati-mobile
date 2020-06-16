import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigs } from '../app.config'
@Injectable({
    providedIn: 'root',
})
export class SchoolTaskService {
    constructor(public http: HttpClient) {
    }
    public getSchoolTaskReport(id) {
        let data = {
            entityId: id
        }
        return this.http.post(AppConfigs.api_url + '/unnati/api/v1/projectsByEntity', data)
    }
    public getProjectDetail(id) {
        let data = {
            projectId: id
        }
        return this.http.post(AppConfigs.api_url + '/unnati/api/v1/projectsDetailsById', data)
    }
}