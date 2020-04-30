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
    public getProjectDetail(token, id) {
        let httpHeaders = new HttpHeaders({
            'x-auth-token': token
        })
        let data = {
            projectId: id
        }
        return this.http.post(AppConfigs.api_url + '/unnati/api/v1/projectsDetailsById', data, { headers: httpHeaders })
    }
}