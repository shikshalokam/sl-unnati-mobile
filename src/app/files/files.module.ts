import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FilesPage } from './files.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared-module/shared-module';

const routes: Routes = [
  {
    path: '',
    component: FilesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [FilesPage]
})
export class FilesPageModule { }
