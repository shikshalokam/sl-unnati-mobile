import { Injectable } from '@angular/core';
import { localStorageConstants, urlConstants } from '../../constants';
import { KendraApiService } from '../kendra-api/kendra-api.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private kendraService: KendraApiService,
    private storage: LocalStorageService) { }

  getDynamicLinks() {
    return new Promise((resolve, reject) =>{
      const config = {
        url: urlConstants.API_URLS.GET_DYNAMIC_LINKS
      }
      this.kendraService.get(config).subscribe(data => {
        const dynamicLinks = data['result'];
        this.storage.setLocalStorage(localStorageConstants.DYNAMIC_LINKS, dynamicLinks);
        resolve(dynamicLinks);
      }, error => {
        reject();
      })
    })
   
  }
}
