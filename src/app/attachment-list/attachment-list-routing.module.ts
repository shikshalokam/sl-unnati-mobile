import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttachmentListPage } from './attachment-list.page';

const routes: Routes = [
  {
    path: '',
    component: AttachmentListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttachmentListPageRoutingModule {}
