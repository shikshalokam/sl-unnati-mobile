import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import {SharedModule} from '../shared.module';
import { EditTaskPage } from './edit-task.page';

const routes: Routes = [
  {
    path: 'edit-task/:id',
    component: EditTaskPage
  },
  {
    path: 'edit-task',
    component: EditTaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild({}),
    RouterModule.forChild(routes)
  ],
  declarations: [EditTaskPage]
})
export class EditTaskPageModule {}
