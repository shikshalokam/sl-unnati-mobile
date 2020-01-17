import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared.module';
import {TranslateModule} from '@ngx-translate/core';
import { CoursesPage } from './courses.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesPage
  }
];

@NgModule({
  imports: [
    CommonModule,SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [CoursesPage]
})
export class CoursesPageModule {}
