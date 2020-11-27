import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningResourcesPage } from './learning-resources.page';

const routes: Routes = [
  {
    path: '',
    component: LearningResourcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningResourcesPageRoutingModule {}
