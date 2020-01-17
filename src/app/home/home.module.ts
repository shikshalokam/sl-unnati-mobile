import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { HomePage } from './home.page';
import {SharedModule} from '../shared.module';
@NgModule({
  imports: [
    CommonModule,SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    TranslateModule.forChild({
  })
  ],
  declarations: [HomePage],
  providers:[ScreenOrientation]
})
export class HomePageModule {}
