import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ProfileUpdatePageRoutingModule } from './profile-update-routing.module';

import { ProfileUpdatePage } from './profile-update.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared';
import { OnboardingEntityListingModalPage } from './onboarding-entity-listing-modal/onboarding-entity-listing-modal';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule,
    ProfileUpdatePageRoutingModule
  ],
  declarations: [ProfileUpdatePage, OnboardingEntityListingModalPage],
  entryComponents: [OnboardingEntityListingModalPage]
})
export class ProfileUpdatePageModule {}
