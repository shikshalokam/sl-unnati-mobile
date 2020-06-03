import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { CurrentUserProvider } from '../current-user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    constructor(
        public http: HttpClient,
        public currentUser: CurrentUserProvider,
        public storage: Storage) {
    }
    public getProjects() {
        return this.storage.get('projectsList');
    }
    public getAssignedProjects(type?) {
        return this.http.get(environment.api_url + '/unnati/api/v1/all?type=' + type)
    }
}