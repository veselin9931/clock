import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormat } from './format.interface';

@Component({
  selector: 'lib-clocky',
  templateUrl: './digital-clock.html',
  styleUrls: ['./digital-clock.css']
})
export class ClockyComponent implements OnInit {

  private days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'];
  private date = new Date();

  public hour: any;
  public minute: string = '';
  public second: string = '';
  public ampm: string = '';
  public day: string = '';
  public visible: boolean = false;
  public formats:IFormat[] =
   [{id:1, value:'h'},
    {id:2, value:'hh'},
    {id:3, value:'H'},
    {id:4, value: 'HH'},
    {id:5, value: 'm'},
    {id: 6, value: 'mm'},
    {id:7 , value:'tt'}];
    


  public selectedFormat:number = 1;

  constructor() {};

  changeFormat(e: any) {
  }

  ngOnInit(): void {
   setInterval(() => {
     const date = new Date();
     this.updateDate(date)
   }, 1000)
   
   this.day = this.days[this.date.getDay()];

  }

  private updateDate(date: Date){
      const hours =  date.getHours();

      this.ampm = hours >=12 ? 'PM' : 'AM' ;
      if (this.selectedFormat == 1)
      {
        this.hour = hours % 12;
        this.minute = date.getMinutes().toString();
        this.second = date.getSeconds().toString();
      }
      else if(this.selectedFormat == 2)
      {
        this.hour = hours % 12;
        this.hour = this.hour ? this.hour : 12;
  
        this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
      }
      else if(this.selectedFormat == 3 ||this.selectedFormat == 4 || this.selectedFormat == 5)
      {
  
        this.hour = date.getHours().toString();
        this.minute = date.getMinutes().toString();
        this.second = date.getSeconds().toString();
      }
      else if(this.selectedFormat == 6)
      {
  
        this.hour = date.getHours().toString();
        this.minute = date.getMinutes() < 10 ? '0' +  date.getMinutes().toString() : date.getMinutes().toString();
        this.second = date.getSeconds().toString();
      }
      else if(this.selectedFormat == 7 )
      {
        this.hour = date.getHours().toString();
        this.minute = date.getMinutes().toString();
        this.second = date.getSeconds().toString();
        this.visible = true
      }
  }
}


export class ReactiveSelectComp {
  formats = [
    {name: 'HH', value: 1},
  ];

  form = new FormGroup({
    state: new FormControl(this.formats[1]),
  });
}