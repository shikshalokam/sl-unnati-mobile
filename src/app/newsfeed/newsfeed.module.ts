import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsfeedPageRoutingModule } from './newsfeed-routing.module';

import { NewsfeedPage } from './newsfeed.page';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    IonicModule,
    NewsfeedPageRoutingModule
  ],
  declarations: [NewsfeedPage]
})
export class NewsfeedPageModule {}
