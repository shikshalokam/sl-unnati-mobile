import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateProjectPageRoutingModule } from './create-project-routing.module';
import { CreateProjectPage } from './create-project.page';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    IonicModule,
    CreateProjectPageRoutingModule
  ],
  declarations: [CreateProjectPage]
})
export class CreateProjectPageModule { }
