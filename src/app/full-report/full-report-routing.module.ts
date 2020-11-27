import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullReportComponent } from './full-report.component';


const routes: Routes = [
  {
    path: "",
    component: FullReportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullReportRoutingModule { }
