import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    SigninRoutingModule,
    PasswordModule,
    InputTextModule,
    ToastModule,
    SharedModule
  ]
})
export class SigninModule { }
