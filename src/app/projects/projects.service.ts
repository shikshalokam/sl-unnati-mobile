import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CurrentUserProvider } from '../current-user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigs } from '../app.config'
import { ApiProvider } from '../api/api';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    constructor(public api: ApiProvider, public http: HttpClient, public currentUser: CurrentUserProvider, public storage: Storage) {
    }
    public getProjects() {
        return this.storage.get('projectsList');
    }
    public getAssignedProjects(data, type?) {
        let httpHeaders = new HttpHeaders({
            //'x-auth-token': this.currentUser.curretUser.accessToken
            'x-auth-token': data
        })
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/all?type=' + type, { headers: httpHeaders })
    }
}