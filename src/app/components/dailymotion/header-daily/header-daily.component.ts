import { Component, OnInit } from '@angular/core';
import { faSearch, faAlignRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header-daily',
  templateUrl: './header-daily.component.html',
  styleUrls: ['./header-daily.component.scss']
})
export class HeaderDailyComponent implements OnInit {

  constructor(private router: Router) { }

  faSearch = faSearch;
  faAlignRight = faAlignRight;
  faUser = faUser;

  ngOnInit(): void {
  }

  redirectHome(){
    this.router.navigate(['/home']);
  }
}
