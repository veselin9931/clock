import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClockyModule } from 'projects/clocky/src/public-api';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClockyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
