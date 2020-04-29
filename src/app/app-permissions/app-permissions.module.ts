import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared.module';

import { AppPermissionsPage } from './app-permissions.page';

const routes: Routes = [
  {
    path: '',
    component: AppPermissionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AppPermissionsPage]
})
export class AppPermissionsPageModule {}
