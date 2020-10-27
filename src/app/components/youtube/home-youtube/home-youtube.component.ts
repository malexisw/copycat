import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-youtube',
  templateUrl: './home-youtube.component.html',
  styleUrls: ['./home-youtube.component.scss']
})
export class HomeYoutubeComponent implements OnInit {

  header: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  classContainer(){
    if(this.header){
      return "wide container";
    } else {
      return "small container";
    }
  }

  onDaily(){
    this.router.navigate(['/dailymotion']);
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
}
