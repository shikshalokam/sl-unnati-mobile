import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningResourcesPageRoutingModule } from './learning-resources-routing.module';

import { LearningResourcesPage } from './learning-resources.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    IonicModule,
    LearningResourcesPageRoutingModule
  ],
  declarations: [LearningResourcesPage]
})
export class LearningResourcesPageModule { }
