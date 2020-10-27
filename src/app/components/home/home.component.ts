import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onYoutube(){
    this.router.navigate(['/youtube']);
  }

  onDaily(){
    this.router.navigate(['/dailymotion']);
  }

  onSteam(){
    this.router.navigate(['/steam']);
  }

  onTwitch(){
    this.router.navigate(['/twitch']);
  }

}
