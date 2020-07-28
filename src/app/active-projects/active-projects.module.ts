import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActiveProjectsPage } from './active-projects.page';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared-module/shared-module';
const routes: Routes = [
  {
    path: '',
    component: ActiveProjectsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [ActiveProjectsPage]
})
export class ActiveProjectsPageModule {}
