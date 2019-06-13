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
import { MyMineComponent } from './my-mine/my-mine.component';
import { TabIndexComponent } from './my-mine/tab-index/tab-index.component';
import { TabPage1Component } from './my-mine/tab-page1/tab-page1.component';
import { TabPage2Component } from './my-mine/tab-page2/tab-page2.component'; 

@NgModule({
  declarations: [
    AppComponent, P404Component, LoginComponent, DogDetailComponent, MyMineComponent, TabIndexComponent, TabPage1Component, TabPage2Component
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, MatStudyModule  //, MatExamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
