import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TemplatesPageRoutingModule } from './templates-routing.module';
import { TemplatesPage } from './templates.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import {TemplatesSearchModalComponent} from './templates-search-modal/templates-search-modal.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    SharedModule,
    TemplatesPageRoutingModule
  ],
  declarations: [TemplatesPage,
    TemplatesSearchModalComponent]
})
export class TemplatesPageModule {}
