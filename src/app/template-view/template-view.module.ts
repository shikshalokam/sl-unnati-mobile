import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TemplateViewPageRoutingModule } from './template-view-routing.module';
import { TemplateViewPage } from './template-view.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    SharedModule,
    TemplateViewPageRoutingModule
  ],
  declarations: [TemplateViewPage]
})
export class TemplateViewPageModule {}
