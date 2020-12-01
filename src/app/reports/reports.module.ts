import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ReportsPageRoutingModule } from "./reports-routing.module";
import { ReportsPage } from "./reports.page";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReportsPageRoutingModule, CoreModule, SharedModule],
  declarations: [ReportsPage],
  providers: [SocialSharing,AndroidPermissions],
})
export class ReportsPageModule {}
