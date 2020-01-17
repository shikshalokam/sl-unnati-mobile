import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AllProjectsPage } from './all-projects.page';
import {TranslateModule} from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: AllProjectsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [AllProjectsPage]
})
export class AllProjectsPageModule {}
