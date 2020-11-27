import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermissionsPageRoutingModule } from './permissions-routing.module';

import { PermissionsPage } from './permissions.page';
import { SharedModule } from '../shared';
import { CoreModule } from '../core/core.module';
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CoreModule,
    PermissionsPageRoutingModule
  ],
  providers: [AndroidPermissions],
  declarations: [PermissionsPage]
})
export class PermissionsPageModule {}
