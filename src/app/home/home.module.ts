import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HomeSearchModalComponent } from './home-search-modal/home-search-modal.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CoreModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    HomePage,
    HomeSearchModalComponent
  ]
})
export class HomePageModule { }
