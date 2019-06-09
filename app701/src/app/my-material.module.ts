import { NgModule } from '@angular/core';
 
import {MatButtonModule, MatCheckboxModule, } from '@angular/material';


/**
 * 把所有的 material 包都导入到这个模块， 其它他用materail的，只引用此模块即可
 */
@NgModule({
  declarations: [],
  imports: [ MatButtonModule, MatCheckboxModule, ],
  exports: [ MatButtonModule, MatCheckboxModule],
})
export class MyMaterialModule {
  
 }
