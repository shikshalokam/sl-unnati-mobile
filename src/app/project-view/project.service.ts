import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CurrentUserProvider } from '../current-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { AppConfigs } from '../core-module/constants/app.config';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    public emit = new Subject();
    taskDeleteEvent = new Subject();
    public title = new Subject();
    constructor(public http: HttpClient, public Http: Http, public currentUser: CurrentUserProvider, public storage: Storage) {
    }

    // sync subtask
    public sync(data) {
        return this.http.post(environment.api_url + '/improvement-project/api/v1/project/sync', data)
    }

    public oldDataSync(data) {
        return this.http.post(environment.api_url + '/improvement-project/api/v1/projects/syncLocalDataOnUpgradeOfApp', data)
    }
    public loadChart() {
        this.emit.next('load');
    }
    public setTitle(title) {
        this.title.next(title);
    }
    public projectDetails(data) {
        return this.http.post(environment.api_url + '/improvement-project/api/v1/projectsDetailsById', data)
    }
    public getProfileData(profileId) {
        return this.http.get(environment.kendra_base_url + 'v1/' + AppConfigs.notification.getProfile + profileId)
    }
    public getStorageUrl(data) {
        return this.http.post(environment.api_url + '/improvement-project/api/v1/projects/getFileUploadUrl', data)
    }
    public storeInBucket(base64, url) {
        let httpHeaders = new HttpHeaders({
            'Content-Type': 'multipart/form-data'
        })
        return this.http.put(url, base64)
    }

    // delete task 
    taskDelete(task) {
        this.taskDeleteEvent.next(task);
    }
}