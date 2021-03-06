import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// import { FcmProvider } from '../fcm';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import {SafePipe} from '../safe-pipe';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage,SafePipe],
})
export class LoginPageModule { }
