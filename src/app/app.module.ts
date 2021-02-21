import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
