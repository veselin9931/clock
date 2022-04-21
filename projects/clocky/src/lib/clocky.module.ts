import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClockyComponent } from './digital-clock/clocky.component';



@NgModule({
  declarations: [
    ClockyComponent
  ],
  imports: [BrowserModule, FormsModule
  ],
  exports: [
    ClockyComponent
  ]
})


export class ClockyModule { }
