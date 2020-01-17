import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared.module';

import { SubtaskViewPage } from './subtask-view.page';

const routes: Routes = [
  {
    path: '',
    component: SubtaskViewPage
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
  declarations: [SubtaskViewPage]
})
export class SubtaskViewPageModule {}
