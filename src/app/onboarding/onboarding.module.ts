import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { OnboardingPage } from './onboarding';
import { OnboardingEntityListingModalPage } from './onboarding-entity-listing-modal/onboarding-entity-listing-modal';
import {SharedModule} from '../shared-module/shared-module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    OnboardingPage,
    OnboardingEntityListingModalPage
  ],
  imports: [
    TranslateModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule
  ],
  entryComponents:[
    OnboardingEntityListingModalPage
  ]
})
export class OnboardingPageModule { }
