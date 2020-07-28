import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LastQuarterReportsPage } from './last-quarter-reports.page';
import {SharedModule} from '../shared-module/shared-module';
import {TranslateModule} from '@ngx-translate/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

const routes: Routes = [
  {
    path: '',
    component: LastQuarterReportsPage
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
  declarations: [LastQuarterReportsPage],
  providers:[ScreenOrientation]
})
export class LastQuarterReportsPageModule {}
