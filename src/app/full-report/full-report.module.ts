import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FullReportRoutingModule } from "./full-report-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/shared";
import { FullReportComponent } from "./full-report.component";
import { CoreModule } from '../core/core.module';
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";



@NgModule({
  declarations: [FullReportComponent],
  imports: [
    CommonModule,
    FullReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    IonicModule,
  ],
  providers: [ScreenOrientation,SocialSharing],
})
export class FullReportModule {}
