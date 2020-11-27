import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { localStorageConstants } from '../../constants';
import { LocalStorageService } from '../../services';


@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  constructor(private localStorage: LocalStorageService,
    private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
         this.localStorage.getLocalStorage(localStorageConstants.FIRST_TIME).then(data =>{
          this.router.navigateByUrl('/menu/tabs/home');
          resolve(false);
        }).catch(error =>{
          resolve(true);
        })
       
      })
    
  }
  
}
