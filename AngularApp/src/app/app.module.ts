import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard2Module } from './dashboard2/dashboard2.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    Dashboard2Module,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
