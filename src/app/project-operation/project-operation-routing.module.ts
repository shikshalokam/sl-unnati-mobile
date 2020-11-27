import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectOperationPage } from './project-operation.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectOperationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectOperationPageRoutingModule {}
