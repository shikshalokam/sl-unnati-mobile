import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IonicModule } from '@ionic/angular';
import { ChartsPage } from './charts.page';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared.module';
const routes: Routes = [
  {
    path: '',
    component: ChartsPage
  }
];
@NgModule({
  imports: [
    CommonModule,SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({})
  ],
  declarations: [ChartsPage],
  providers:[ScreenOrientation]
})
export class ChartsPageModule {}
