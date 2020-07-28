import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from '../shared-module/shared-module';

import { IonicModule } from '@ionic/angular';

import { LibrarySearchPage } from './library-search.page';

const routes: Routes = [
  {
    path: '',
    component: LibrarySearchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LibrarySearchPage]
})
export class LibrarySearchPageModule {}
