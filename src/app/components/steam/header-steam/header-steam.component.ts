import { Component, OnInit } from '@angular/core';
import { faDownload, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header-steam',
  templateUrl: './header-steam.component.html',
  styleUrls: ['./header-steam.component.scss']
})
export class HeaderSteamComponent implements OnInit {

  constructor(private router: Router) { }

  faDownload = faDownload;
  faSortDown = faSortDown;

  nav:boolean = true;

  ngOnInit(): void {
    this.nav = window.innerWidth > 800 ? true : false;
  }

  redirectHome(){
    this.router.navigate(['/home']);
  }

  setNav(event){
    this.nav = event.target.innerWidth > 800 ? true : false;
  }

}
