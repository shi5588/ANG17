import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './basepage/login/login.component';
import { P404Component } from './basepage/p404/p404.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // 不输入路径时
  { path: 'login', component: LoginComponent },
  { path: '404', component: P404Component },
  { path: 'mat', loadChildren: './mat-exam/mat-exam.module#MatExamModule' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
