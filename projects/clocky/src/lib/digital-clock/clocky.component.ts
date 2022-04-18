import { Component, OnInit } from '@angular/core';

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

  constructor() { 
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

      this.hour = hours % 12;
      this.hour = this.hour ? this.hour : 12;

      this.hour = this.hour < 10 ? '0' + hours : this.hour;

      const minutes = date.getMinutes();
      this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

      const seconds = date.getSeconds();
      this.second = seconds < 10 ? '0' +  seconds : seconds.toString();
  }
}
