import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    SharedModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
