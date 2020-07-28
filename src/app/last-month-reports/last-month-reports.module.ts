import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import { LastMonthReportsPage } from './last-month-reports.page';
import {SharedModule} from '../shared-module/shared-module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
const routes: Routes = [
  {
    path: '',
    component: LastMonthReportsPage
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
  declarations: [LastMonthReportsPage],
  providers:[ScreenOrientation]
})
export class LastMonthReportsPageModule {}
