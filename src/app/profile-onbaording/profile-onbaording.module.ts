import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileOnbaordingPage } from './profile-onbaording.page';
import { SharedModule } from '../shared-module/shared-module';
const routes: Routes = [
  {
    path: '',
    component: ProfileOnbaordingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({}),
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileOnbaordingPage]
})
export class ProfileOnbaordingPageModule { }
