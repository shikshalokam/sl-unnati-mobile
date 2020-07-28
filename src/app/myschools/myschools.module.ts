import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared-module/shared-module';
import { MyschoolsPage } from './myschools.page';

const routes: Routes = [
  {
    path: '',
    component: MyschoolsPage
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
  declarations: [MyschoolsPage]
})
export class MyschoolsPageModule {}
