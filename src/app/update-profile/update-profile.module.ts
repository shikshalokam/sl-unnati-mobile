import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProfilePage } from './update-profile.page';
import {SharedModule} from '../shared.module';
import {TranslateModule} from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: UpdateProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [UpdateProfilePage]
})
export class UpdateProfilePageModule {}
