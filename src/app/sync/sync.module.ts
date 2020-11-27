import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SyncPageRoutingModule } from './sync-routing.module';
import { SyncPage } from './sync.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    SharedModule,
    SyncPageRoutingModule
  ],
  declarations: [SyncPage]
})
export class SyncPageModule {}
