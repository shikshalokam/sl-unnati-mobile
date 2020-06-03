import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailPage } from './detail.page';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared-module/shared-module';
const routes: Routes = [
  {
    path: '',
    component: DetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,SharedModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      // loader: {
      //     provide: TranslateLoader,
      //     useFactory: (createTranslateLoader),
      //     deps: [HttpClient]
      // }
  })
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}