import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialModule } from '../my-material.module';
import { matExamRoutes } from './mat-exam.routes'

import { MatExamComponent } from './mat-exam.component'
//import { CheckboxComponent } from './checkbox/checkbox.component';
import { IndexComponent } from './index/index.component';
//import { WithoutMdlmasterComponent } from './withoutmdlmaster/without.mdlmaster.component';
//import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [ MatExamComponent, IndexComponent, 
    //CheckboxComponent, WithoutMdlmasterComponent, AutocompleteComponent,
    ButtonComponent],
  imports: [
    CommonModule, MyMaterialModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(matExamRoutes)
  ]
})
export class MatExamModule {
  
}
