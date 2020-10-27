import { Component, OnInit } from '@angular/core';
import { faSortDown, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-steam',
  templateUrl: './top-steam.component.html',
  styleUrls: ['./top-steam.component.scss']
})
export class TopSteamComponent implements OnInit {

  constructor() { }

  faSortDown = faSortDown;
  faSearch = faSearch;

  ngOnInit(): void {
  }

}
