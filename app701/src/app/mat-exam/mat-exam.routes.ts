import { Routes, RouterModule } from '@angular/router';

import { MatExamComponent }  from './mat-exam.component'
import { CheckboxComponent } from './checkbox/checkbox.component';

export const matExamRoutes : Routes = [ 
    { path: '', component: MatExamComponent },
    { path: 'checkbox',  component: CheckboxComponent }
 ];