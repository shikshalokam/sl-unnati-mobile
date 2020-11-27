import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectEditPageRoutingModule } from './project-edit-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectEditPage } from './project-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CoreModule,
    IonicModule,
    ProjectEditPageRoutingModule
  ],
  declarations: [ProjectEditPage]
})
export class ProjectEditPageModule {}
