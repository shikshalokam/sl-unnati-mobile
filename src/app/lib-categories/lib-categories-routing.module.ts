import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibCategoriesPage } from './lib-categories.page';

const routes: Routes = [
  {
    path: '',
    component: LibCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibCategoriesPageRoutingModule {}
