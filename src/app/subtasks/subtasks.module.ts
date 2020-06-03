import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared-module/shared-module';
import { IonicModule } from '@ionic/angular';

import { SubtasksPage } from './subtasks.page';

const routes: Routes = [
  {
    path: '',
    component: SubtasksPage
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
  declarations: [SubtasksPage]
})
export class SubtasksPageModule {}
