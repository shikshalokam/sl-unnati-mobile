import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { GetSubEntitiesPage } from './get-sub-entities.page';

const routes: Routes = [
  {
    path: '',
    component: GetSubEntitiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
    })
  ],
  declarations: [GetSubEntitiesPage]
})
export class GetSubEntitiesPageModule { }
