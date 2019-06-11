import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyMaterialModule } from '../my-material.module';

import { ButtonComponent } from './button/button.component';
import { MatStudyComponent } from './mat-study/mat-study.component';

const matSRoutes : Routes = [ 
  { path: '', component: MatStudyComponent, children: [
      { path: '', component: ButtonComponent },  // 
      { path: 'button',  component: ButtonComponent } 
      //{ path: 'checkbox',  component: CheckboxComponent }
  ] },
  { path: 'button2',  component: ButtonComponent } // 这个写法就不会应用 Mat 的模块级模板页了

];

@NgModule({
  declarations: [ButtonComponent, MatStudyComponent],
  imports: [
    CommonModule, MyMaterialModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(matSRoutes)
  ]
})
export class MatStudyModule { }
