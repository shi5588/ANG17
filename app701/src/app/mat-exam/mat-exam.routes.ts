import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { MatExamComponent }  from './mat-exam.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { WithoutMdlmasterComponent } from './withoutmdlmaster/without.mdlmaster.component';

export const matExamRoutes : Routes = [ 
    { path: '', component: MatExamComponent, children: [
        { path: '', component: IndexComponent },  // 
        { path: 'autocomplete',  component: AutocompleteComponent }, 
        { path: 'checkbox',  component: CheckboxComponent }
    ] },
    { path: 'without',  component: WithoutMdlmasterComponent } // 这个写法就不会应用 Mat 的模块级模板页了

 ];