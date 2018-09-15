import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YxTitleComponent } from './yx-title/yx-title.component';
import { DomHandler } from './svc/domhandler';
import { TestService } from './svc/test';
import { MathtestComponent } from './mathtest/mathtest.component';

@NgModule({
  declarations: [
    AppComponent,
    YxTitleComponent,
    MathtestComponent,
    
    // DomHandler
  ],
  imports: [
    BrowserModule 
  ],
  providers:  [ DomHandler, TestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
