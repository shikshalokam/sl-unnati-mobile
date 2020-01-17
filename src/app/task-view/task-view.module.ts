import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { TaskViewPage } from './task-view.page';
import {SharedModule} from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: TaskViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
  })
  ],
  declarations: [TaskViewPage]
})
export class TaskViewPageModule {}
