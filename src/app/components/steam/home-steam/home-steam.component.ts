import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-steam',
  templateUrl: './home-steam.component.html',
  styleUrls: ['./home-steam.component.scss']
})
export class HomeSteamComponent implements OnInit {

  constructor() { }

  side:boolean;

  ngOnInit(): void {
    this.side = window.innerWidth > 800 ? true : false;
  }

  setSide(event){
    this.side = event.target.innerWidth > 800 ? true : false;
  }
}
