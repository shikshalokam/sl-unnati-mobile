import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { IonicModule } from '@ionic/angular';

import { SubtaskStatusPage } from './subtask-status.page';

const routes: Routes = [
  {
    path: '',
    component: SubtaskStatusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubtaskStatusPage],
  providers:[ScreenOrientation]
})
export class SubtaskStatusPageModule {}
