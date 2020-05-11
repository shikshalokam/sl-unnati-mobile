import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CurrentUserProvider } from '../current-user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigs } from '../app.config'
import { URLSearchParams, Http } from '@angular/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    public emit = new Subject();
    public title = new Subject();
    constructor(public http: HttpClient, public Http: Http, public currentUser: CurrentUserProvider, public storage: Storage) {
    }

    // sync subtask
    public sync(data) {
        return this.http.post(AppConfigs.api_url + '/unnati/api/v1/project/sync', data)
    }
    // public syncForPDF(data, token) {
    //     let httpHeaders = new HttpHeaders({
    //         'x-auth-token': token
    //     })
    //     return this.http.post(AppConfigs.api_url + '/unnati/api/v1/projects/getProjectPdfWithSyc', data, { headers: httpHeaders })
    // }
    public oldDataSync(data) {
        return this.http.post(AppConfigs.api_url + '/unnati/api/v1/projects/syncLocalDataOnUpgradeOfApp', data)
    }
    public loadChart() {
        this.emit.next('load');
    }
    public setTitle(title) {
        this.title.next(title);
    }
    public projectDetails(data) {
        return this.http.post(AppConfigs.api_url + '/unnati/api/v1/projectsDetailsById', data)
    }
    public getProfileData(profileId) {
        return this.http.get(AppConfigs.api_url + '/kendra-service/api/v1/user-extension/getProfile/' + profileId)
    }
    public getStorageUrl(data) {
        return this.http.post(AppConfigs.api_url + '/unnati/api/v1/projects/getFileUploadUrl', data)
    }
    public storeInBucket(base64, url) {
        return this.http.put(url, base64)

    }
}