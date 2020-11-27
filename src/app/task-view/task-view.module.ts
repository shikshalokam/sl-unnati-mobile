import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskViewPageRoutingModule } from './task-view-routing.module';

import { TaskViewPage } from './task-view.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    SharedModule,      
    TaskViewPageRoutingModule
  ],
  declarations: [TaskViewPage]
})
export class TaskViewPageModule {}
