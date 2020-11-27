import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectOperationPageRoutingModule } from './project-operation-routing.module';

import { ProjectOperationPage } from './project-operation.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    IonicModule,
    ProjectOperationPageRoutingModule
  ],
  declarations: [ProjectOperationPage]
})
export class ProjectOperationPageModule {}
