import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SchoolProjectDetailPage } from './school-project-detail.page';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared.module'; 
const routes: Routes = [
  {
    path: '',
    component: SchoolProjectDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,SharedModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [SchoolProjectDetailPage]
})
export class SchoolProjectDetailPageModule {}
