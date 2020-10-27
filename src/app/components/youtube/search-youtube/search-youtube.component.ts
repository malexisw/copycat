import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faSearch, faVideo, faTh, faBell, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search-youtube',
  templateUrl: './search-youtube.component.html',
  styleUrls: ['./search-youtube.component.scss']
})
export class SearchYoutubeComponent implements OnInit {

  @Output() headOutput = new EventEmitter<boolean>();

  faBars = faBars;
  faSearch = faSearch;
  faVideo = faVideo;
  faTh = faTh;
  faBell = faBell;
  faUser = faUser;

  head: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMenu(){
    this.head = !this.head;
    this.headOutput.emit(this.head);
  }

  redirectHome(){
    this.router.navigate(['/home']);
  }

}
