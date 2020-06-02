import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CurrentUserProvider } from '../current-user';
import { HttpClient} from '@angular/common/http';
import { AppConfigs } from '../core-module/constants/app-config';
import { ApiProvider } from '../api/api';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    constructor(public api: ApiProvider, 
        public http: HttpClient, 
        public currentUser: CurrentUserProvider, 
        public storage: Storage) {
    }
    public getProjects() {
        return this.storage.get('projectsList');
    }
    public getAssignedProjects(type?) {
        return this.http.get(AppConfigs.api_url + '/unnati/api/v1/all?type=' + type)
    }
}