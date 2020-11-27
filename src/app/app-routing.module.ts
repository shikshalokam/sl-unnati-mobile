import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrivateGuard, PublicGuard, PermissionGuard } from './core';

const routes: Routes = [
  {
    path: '', redirectTo: '/menu/tabs/home', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [PublicGuard]
  },
 
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule),
    canActivate: [PrivateGuard]
  },
  {
    path: 'permissions',
    canActivate: [PermissionGuard],
    loadChildren: () => import('./permissions/permissions.module').then( m => m.PermissionsPageModule)
  },
  {
    path: '**', redirectTo: '/menu/tabs/home', pathMatch: 'full'
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
