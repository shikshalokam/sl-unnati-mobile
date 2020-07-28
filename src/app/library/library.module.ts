import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LibraryPage } from './library.page';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared-module/shared-module';
import {SearchCategory} from './search.filter';
const routes: Routes = [
  {
    path: '',
    component: LibraryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [LibraryPage,SearchCategory]
})
export class LibraryPageModule {}
