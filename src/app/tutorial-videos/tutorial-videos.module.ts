import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared';
import { TutorialVideosComponent } from './tutorial-videos.component';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: TutorialVideosComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
    TranslateModule
  ],
  declarations: [TutorialVideosComponent],
  providers:[ScreenOrientation]
})
export class TutorialVideosPageModule { }