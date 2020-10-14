import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OnboadringServiceService {

  constructor(public http: HttpClient) {
  }
  getState(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.kendra_base_url + 'v1/entities/listByEntityType/state').subscribe(success => {
        resolve(success)
      }, error => {
        reject(error)
      })
    })
  }
  getRolesForState(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.kendra_base_url + 'v1/entities/subEntitiesRoles/' + id).subscribe(success => {
        resolve(success)
      }, error => {
        reject(error)
      })
    })
  }
  getSubEntitiesForm(params): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.kendra_base_url + 'v1/users/entitiesMappingForm/' + params).subscribe(success => {
        resolve(success)
      }, error => {
        reject(error)
      })
    })
  }
  getSubEntitieList(params): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.kendra_base_url + 'v1/entities/subEntityList/' + params).subscribe(success => {
        resolve(success)
      }, error => {
        reject(error)
      })
    })
  }
  profileUpdate(payload): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.kendra_base_url + 'v1/user-extension/updateProfileRoles', payload).subscribe(success => {
        resolve(success)
      }, error => {
        reject(error)
      })
    })
  }
  getProfile(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.kendra_base_url + 'v2/user-extension/getProfile').subscribe(success => {
        resolve(success)
      }, error => {
        reject(error)
      })
    })
  }
}
