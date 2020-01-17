import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MyProjectsPage } from './my-projects.page';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: MyProjectsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [MyProjectsPage]
})
export class MyProjectsPageModule {}
