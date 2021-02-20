import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { routes } from './register.routing';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RegisterComponent,
    RouterModule.forChild(routes)
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
