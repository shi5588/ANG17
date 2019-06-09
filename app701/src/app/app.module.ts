import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 请注意，这个必须在 BrowserModule 后

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 

import { LoginComponent } from './basepage/login/login.component';
import { P404Component } from './basepage/p404/p404.component';


@NgModule({
  declarations: [
    AppComponent, LoginComponent, P404Component
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
