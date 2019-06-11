// 官方模块
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// 第三方模块
// 我的项目模块
import { AppRoutingModule } from './app-routing.module';
import { MatStudyModule } from './mat-study/mat-study.module';
// import { MatExamModule } from './mat-exam/mat-exam.module';

import { AppComponent } from './app.component';
import { P404Component } from './basepage/p404/p404.component'
import { DogDetailComponent } from './basepage/login/dog-detail/dog-detail.component';
import { LoginComponent } from './basepage/login/login.component'; 

@NgModule({
  declarations: [
    AppComponent, P404Component, LoginComponent, DogDetailComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, MatStudyModule  //, MatExamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
