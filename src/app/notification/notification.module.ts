import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NotificationPageRoutingModule } from './notification-routing.module';
import { NotificationPage } from './notification.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationPageRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [NotificationPage]
})
export class NotificationPageModule {}
