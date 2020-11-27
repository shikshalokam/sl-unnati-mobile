import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyProjectsPageRoutingModule } from './my-projects-routing.module';

import { MyProjectsPage } from './my-projects.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    SharedModule,
    MyProjectsPageRoutingModule
  ],
  declarations: [MyProjectsPage]
})
export class MyProjectsPageModule {}
