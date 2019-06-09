import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MyMaterialModule } from '../my-material.module';
import { matExamRoutes } from './mat-exam.routes'

import { MatExamComponent } from './mat-exam.component'
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
  declarations: [ MatExamComponent, CheckboxComponent],
  imports: [
    CommonModule, MyMaterialModule,
    RouterModule.forChild(matExamRoutes)
  ]
})
export class MatExamModule {
  
}
