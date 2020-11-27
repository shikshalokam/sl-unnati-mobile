import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolReportsPage } from './school-reports.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolReportsPageRoutingModule {}
