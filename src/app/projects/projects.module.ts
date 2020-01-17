import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared.module';
import { IonicModule } from '@ionic/angular';
import { ProjectsPage } from './projects.page';
import {FilterPipe} from './search-filter';
const routes: Routes = [
  {
    path: '',
    component: ProjectsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
  })
  ],
  declarations: [ProjectsPage,FilterPipe]
})
export class ProjectsPageModule {}