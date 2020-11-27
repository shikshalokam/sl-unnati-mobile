import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProjectDetailPageRoutingModule } from './project-detail-routing.module';
import { ProjectDetailPage } from './project-detail.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    SharedModule,
    ProjectDetailPageRoutingModule
  ],
  declarations: [ProjectDetailPage]
})
export class ProjectDetailPageModule {}
