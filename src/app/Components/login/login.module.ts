import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';

import { LoginComponent } from './login.component';

const routes: Route[] = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [ RouterModule.forChild(routes),CommonModule ],
  exports: [ RouterModule, LoginComponent ]
})
export class loginModule { }
