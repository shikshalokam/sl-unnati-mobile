import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LibCategoriesPageRoutingModule } from './lib-categories-routing.module';

import { LibCategoriesPage } from './lib-categories.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { LibrarySearchComponent } from './library-search/library-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    SharedModule,
    LibCategoriesPageRoutingModule
  ],
  declarations: [LibCategoriesPage, LibrarySearchComponent]
})
export class LibCategoriesPageModule { }
