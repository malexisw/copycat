import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-daily',
  templateUrl: './home-daily.component.html',
  styleUrls: ['./home-daily.component.scss']
})
export class HomeDailyComponent implements OnInit {

  constructor(private router: Router) { }

  headNews:string = "blockH highlight";
  headActu:string = "blockH";
  headSport:string = "blockH";
  headEnter:string = "blockH";
  headMusic:string = "blockH";

  ngOnInit(): void {
  }

  onYoutube(){
    this.router.navigate(['/youtube']);
  }

  onSteam(){
    this.router.navigate(['/steam']);
  }

  onNetflix(){
    this.router.navigate(['/netflix']);
  }

  onTwitch(){
    this.router.navigate(['/twitch']);
  }

  scrollTo(desti){
    const element = document.querySelector(desti)
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  @HostListener('window:scroll', ['$event'])

  setH(){   
    if(window.scrollY >= 0 && window.scrollY < 1600){
      this.headNews = "blockH highlight";
    } else {
      this.headNews = "blockH";
    }

    if(window.scrollY >= 1600 && window.scrollY < 3200){
      this.headActu = "blockH highlight";
    } else {
      this.headActu = "blockH";
    }

    if(window.scrollY >= 3200 && window.scrollY < 4800){
      this.headSport = "blockH highlight";
    } else {
      this.headSport = "blockH";
    }

    if(window.scrollY >= 4800 && window.scrollY < 6400){
      this.headEnter = "blockH highlight";
    } else {
      this.headEnter = "blockH";
    }

    if(window.scrollY >= 6400 && window.scrollY < 8200){
      this.headMusic = "blockH highlight";
    } else {
      this.headMusic = "blockH";
    }
  }


}
