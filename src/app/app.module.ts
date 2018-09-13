import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YxTitleComponent } from './yx-title/yx-title.component';
import { DomHandler } from './svc/domhandler';


@NgModule({
  declarations: [
    AppComponent,
    YxTitleComponent,
    // DomHandler
  ],
  imports: [
    BrowserModule 
  ],
  providers:  [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
