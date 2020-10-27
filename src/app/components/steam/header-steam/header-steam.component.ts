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

  ngOnInit(): void {
  }

  redirectHome(){
    this.router.navigate(['/home']);
  }

}
