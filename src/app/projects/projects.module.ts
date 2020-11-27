import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProjectsPageRoutingModule } from './projects-routing.module';
import { ProjectsPage } from './projects.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsPageRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [ProjectsPage]
})
export class ProjectsPageModule {}
