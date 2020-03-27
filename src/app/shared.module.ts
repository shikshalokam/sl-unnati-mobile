import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { HeaderComponent } from './header/header.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchSchool } from './myschools/search.filter';
import { FilterPipe } from './home/search.filter';
import { SearchEntities } from './get-sub-entities/search-entities.filter';
import { TaskBoardPipe } from './task-board/task-board.filter';
import { CustomPopupComponent } from './custom-popup/custom-popup.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild()
  ],
  declarations: [
    HeaderComponent, 
    NotificationCardComponent, 
    SearchSchool, 
    FilterPipe, 
    CustomPopupComponent, 
    TaskBoardPipe, 
    SearchEntities
  ],
  exports: [
    HighchartsChartModule, 
    HeaderComponent, 
    NotificationCardComponent, 
    SearchSchool, 
    FilterPipe, 
    CustomPopupComponent, 
    TaskBoardPipe, 
    SearchEntities
  ]
})
export class SharedModule { }