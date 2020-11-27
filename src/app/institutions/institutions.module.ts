import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InstitutionsPageRoutingModule } from './institutions-routing.module';
import { InstitutionsPage } from './institutions.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstitutionsPageRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [InstitutionsPage]
})
export class InstitutionsPageModule {}
