import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './basepage/login/login.component';
import { P404Component } from './basepage/p404/p404.component';
import { MyMineComponent } from './my-mine/my-mine.component';
import { TabIndexComponent } from './my-mine/tab-index/tab-index.component';
import { TabPage1Component } from './my-mine/tab-page1/tab-page1.component';
import { TabPage2Component } from './my-mine/tab-page2/tab-page2.component';

import { MatStudyModule } from './mat-study/mat-study.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // 不输入路径时
  { path: 'login', component: LoginComponent },
  { path: '404', component: P404Component },
  { path: 'my', component: MyMineComponent, children:[
      { path: '', component: TabIndexComponent },
      { path: 'page1', component: TabPage1Component },
      { path: 'page2', component: TabPage2Component },
  ] },
  //{ path: 'mat', loadChildren: './mat-study/mat-study.module#MatStudyModule' },
  { path: 'mat', loadChildren: ()=>MatStudyModule },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
