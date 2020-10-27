import { Component, OnInit, Input } from '@angular/core';
import { faPlayCircle, faPhotoVideo, faHome, faFire, faHistory, faCaretSquareRight, faClock, 
  faGamepad, faLightbulb, faBroadcastTower, faReceipt, faPersonBooth, faPlay, faCog, faFlag, 
  faQuestionCircle, faCommentAlt, faBell, faCompass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-youtube',
  templateUrl: './header-youtube.component.html',
  styleUrls: ['./header-youtube.component.scss']
})
export class HeaderYoutubeComponent implements OnInit {

  constructor() { }

  faPlayCircle = faPlayCircle;
  faPhotoVideo = faPhotoVideo;
  faHome = faHome;
  faFire = faFire;
  faHistory = faHistory;
  faCaretSquareRight = faCaretSquareRight;
  faClock = faClock;
  faGamepad = faGamepad;
  faLightbulb = faLightbulb;
  faTower = faBroadcastTower;
  faReceipt = faReceipt;
  faBooth = faPersonBooth;
  faPlay = faPlay;
  faCog = faCog;
  faFlag = faFlag;
  faQuestion = faQuestionCircle;
  faComment = faCommentAlt;
  faBell = faBell;
  faCompass = faCompass;

  @Input() header: boolean;

  ngOnInit(): void {
  }

  classHeader(){
    if(this.header){
      return "wide header";
    } else {
      return "small header";
    }
  }
}
