import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigs } from '../app.config'
@Injectable({
    providedIn: 'root',
})
export class MyschoolsService {

    constructor(public http: HttpClient) {
    }
    public getSchools(token, count, page) {
        let httpHeaders = new HttpHeaders({
            'x-auth-token': token
        })
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/schoolList?limit=' + count + '&page=' + page, { headers: httpHeaders })
    }
    // Search school by name.
    public searchScool(token, keyword) {
        let httpHeaders = new HttpHeaders({
            'x-auth-token': token
        })
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/schoolList?limit=100&page=0&search=' + keyword, { headers: httpHeaders })
    }
}