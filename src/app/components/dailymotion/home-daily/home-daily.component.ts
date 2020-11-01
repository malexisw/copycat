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

  right:boolean = true;

  ngOnInit(): void {
    this.right = window.innerWidth > 1000 ? true : false;
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
    this.headNews = window.scrollY >= 0 && window.scrollY < 1600 ? "blockH highlight" : "blockH";
    this.headActu = window.scrollY >= 1600 && window.scrollY < 3200 ? "blockH highlight" : "blockH";
    this.headSport = window.scrollY >= 3200 && window.scrollY < 4800 ? "blockH highlight" : "blockH";
    this.headEnter = window.scrollY >= 4800 && window.scrollY < 6400 ? "blockH highlight" : "blockH";
    this.headMusic = window.scrollY >= 6400 ? "blockH highlight" : "blockH";
  }

  setRight(event){
    this.right = event.target.innerWidth < 1000 ? false : true;
  }
}
