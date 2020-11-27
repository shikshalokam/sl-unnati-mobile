import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent, RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TranslateModule
  ]
})
export class CoreModule { }
