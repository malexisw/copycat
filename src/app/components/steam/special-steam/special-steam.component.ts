import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-steam',
  templateUrl: './special-steam.component.html',
  styleUrls: ['./special-steam.component.scss']
})
export class SpecialSteamComponent implements OnInit {

  constructor(private router: Router) { }

  private date= new Date();

  public dateHours: any;

  public timeSale: string;

  ngOnInit(): void {

    //set the date
    this.updateDate(this.date)

    //modify the date every 1000ms
    setInterval(() => {
      const date = new Date
      this.updateDate(date);
    }, 1000)

  }

  onYoutube(){
    this.router.navigate(['/youtube']);
  }

  onDaily(){
    this.router.navigate(['/dailymotion']);
  }

  private updateDate(date: Date){
    this.dateHours = date.getHours()

    this.dateHours = this.dateHours < 10 ? '0' + this.dateHours : this.dateHours; 

    const minutes = date.getMinutes();

    const seconds = date.getSeconds();

    var hours = 24 - this.dateHours;
    var minute = 60 - minutes;
    var second = 60 - seconds;

    var hourSale: string = hours < 10 ? "0" + hours : hours.toString();
    var minuteSale: string = minute < 10 ? "0" + minute : minute.toString();
    var secondSale: string = second < 10 ? "0" + second : second.toString();

    this.timeSale = hourSale + ":" + minuteSale + ":" + secondSale;
  }

}
