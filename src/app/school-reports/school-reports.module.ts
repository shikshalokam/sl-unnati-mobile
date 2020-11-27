import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchoolReportsPageRoutingModule } from './school-reports-routing.module';
import { SchoolReportsPage } from './school-reports.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    SharedModule,
    SchoolReportsPageRoutingModule
  ],
  declarations: [SchoolReportsPage]
})
export class SchoolReportsPageModule {}
