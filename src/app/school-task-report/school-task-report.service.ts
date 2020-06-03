import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
        return this.http.post(environment.api_url + '/unnati/api/v1/projectsByEntity', data)
    }
    public getProjectDetail(id) {
        let data = {
            projectId: id
        }
        return this.http.post(environment.api_url + '/unnati/api/v1/projectsDetailsById', data)
    }
}