import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared-module/shared-module';
import { SchoolTaskReportPage } from './school-task-report.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolTaskReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,SharedModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
    })
  ],
  declarations: [SchoolTaskReportPage]
})
export class SchoolTaskReportPageModule {}
