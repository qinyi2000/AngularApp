import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard2Module } from './dashboard2/dashboard2.module';

@NgModule({
  declarations: [
    AppComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    Dashboard2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
