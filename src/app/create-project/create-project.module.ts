import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import { CreateProjectPage } from './create-project.page';
import {SharedModule} from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: CreateProjectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [CreateProjectPage]
})
export class CreateProjectPageModule {}
