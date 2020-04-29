import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigs } from '../app.config'
@Injectable({
    providedIn: 'root',
})
export class MyschoolsService {

    constructor(public http: HttpClient) {
    }
    public getSchools(count, page) {
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/schoolList?limit=' + count + '&page=' + page)
    }
    // Search school by name.
    public searchScool(keyword) {
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/schoolList?limit=100&page=0&search=' + keyword)
    }
}