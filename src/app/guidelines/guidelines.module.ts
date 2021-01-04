import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidelinesPageRoutingModule } from './guidelines-routing.module';

import { GuidelinesPage } from './guidelines.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CoreModule,
    IonicModule,
    GuidelinesPageRoutingModule
  ],
  declarations: [GuidelinesPage]
})
export class GuidelinesPageModule {}
