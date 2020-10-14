import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MyReportsPage } from './my-reports.page';
import { SharedModule } from '../shared-module/shared-module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

const routes: Routes = [
  {
    path: '',
    component: MyReportsPage,
    children: [
      { path: 'last-month-reports', loadChildren: '../last-month-reports/last-month-reports.module#LastMonthReportsPageModule' },
      { path: 'last-quarter-reports', loadChildren: '../last-quarter-reports/last-quarter-reports.module#LastQuarterReportsPageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, 
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
    })
  ],
  declarations: [MyReportsPage],
  providers: [ScreenOrientation]
})
export class MyReportsPageModule { }