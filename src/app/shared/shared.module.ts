import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  NotificationCardComponent, PopoverComponent, SearchHeaderComponent, SearchBarComponent, PieChartComponent,
  CardsComponent, ProjectsReportComponent, NoDataComponent, SingleSelectionSearchComponent,
  StarRatingsComponent, AddEntityComponent, CategorySelectComponent, MultiSelectionComponent, TasklistCardComponent,
  CreateTaskComponent
} from './components';
import { MomentModule } from 'ngx-moment';
import { HighchartsChartModule } from 'highcharts-angular';
import { GraphCirlceComponent } from './components/graph-cirlce/graph-cirlce.component';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilterPipe } from './pipes/filter.pipe';
import { DownlaodShareComponent } from './components/downlaod-share/downlaod-share.component';
import { CamelToTitlePipe } from './pipes/camelToTitle/camel-to-title.pipe';

@NgModule({
  declarations: [
    NotificationCardComponent,
    SearchHeaderComponent,
    SearchBarComponent,
    PieChartComponent,
    ProjectsReportComponent,
    PopoverComponent,
    CardsComponent,
    NoDataComponent,
    SingleSelectionSearchComponent,
    StarRatingsComponent,
    AddEntityComponent,
    GraphCirlceComponent,
    FilterModalComponent,
    CategorySelectComponent,
    MultiSelectionComponent,
    TasklistCardComponent,
    FilterPipe,
    CreateTaskComponent,
    DownlaodShareComponent,
    CamelToTitlePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MomentModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ],
  exports: [
    TranslateModule,
    HighchartsChartModule,
    NotificationCardComponent,
    SearchHeaderComponent,
    SearchBarComponent,
    PieChartComponent,
    ProjectsReportComponent,
    PopoverComponent,
    CardsComponent,
    MomentModule,
    NoDataComponent,
    SingleSelectionSearchComponent,
    StarRatingsComponent,
    AddEntityComponent,
    TasklistCardComponent,
    GraphCirlceComponent,
    FilterModalComponent,
    CategorySelectComponent,
    FilterPipe,
    CreateTaskComponent,
    DownlaodShareComponent,
    CamelToTitlePipe

  ]
})
export class SharedModule { }
