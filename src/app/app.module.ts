import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNetflixComponent } from './components/netflix/header-netflix/header-netflix.component';
import { SearchYoutubeComponent } from './components/youtube/search-youtube/search-youtube.component';
import { HeaderYoutubeComponent } from './components/youtube/header-youtube/header-youtube.component';
import { HeaderDailyComponent } from './components/dailymotion/header-daily/header-daily.component';
import { HomeNetflixComponent } from './components/netflix/home-netflix/home-netflix.component';
import { HomeYoutubeComponent } from './components/youtube/home-youtube/home-youtube.component';
import { HomeDailyComponent } from './components/dailymotion/home-daily/home-daily.component';
import { SideContentComponent } from './components/dailymotion/side-content/side-content.component';
import { FooterDailyComponent } from './components/dailymotion/footer-daily/footer-daily.component';
import { HomeSteamComponent } from './components/steam/home-steam/home-steam.component';
import { HeaderSteamComponent } from './components/steam/header-steam/header-steam.component';
import { SideSteamComponent } from './components/steam/side-steam/side-steam.component';
import { BottomSteamComponent } from './components/steam/bottom-steam/bottom-steam.component';
import { TopSteamComponent } from './components/steam/top-steam/top-steam.component';
import { SpecialSteamComponent } from './components/steam/special-steam/special-steam.component';
import { RecoSteamComponent } from './components/steam/reco-steam/reco-steam.component';
import { BrowseComponent } from './components/steam/browse/browse.component';
import { FootSteamComponent } from './components/steam/foot-steam/foot-steam.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeYoutubeComponent,
    HomeNetflixComponent,
    HomeDailyComponent,
    HeaderYoutubeComponent,
    HeaderNetflixComponent,
    HeaderDailyComponent,
    SearchYoutubeComponent,
    SideContentComponent,
    FooterDailyComponent,
    HomeSteamComponent,
    HeaderSteamComponent,
    SideSteamComponent,
    BottomSteamComponent,
    TopSteamComponent,
    SpecialSteamComponent,
    RecoSteamComponent,
    BrowseComponent,
    FootSteamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
