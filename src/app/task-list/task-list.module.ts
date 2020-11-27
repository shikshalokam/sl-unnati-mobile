import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskListPageRoutingModule } from './task-list-routing.module';

import { TaskListPage } from './task-list.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CoreModule,
    TaskListPageRoutingModule
  ],
  declarations: [TaskListPage]
})
export class TaskListPageModule {}
