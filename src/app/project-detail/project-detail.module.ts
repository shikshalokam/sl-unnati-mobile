import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProjectDetailPage } from './project-detail.page';
import {SharedModule} from '../shared-module/shared-module';
import {TranslateModule} from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: ProjectDetailPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [ProjectDetailPage]
})
export class ProjectDetailPageModule {}
