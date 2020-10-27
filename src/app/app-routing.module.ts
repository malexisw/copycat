import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeDailyComponent } from './components/dailymotion/home-daily/home-daily.component';
import { HomeYoutubeComponent } from './components/youtube/home-youtube/home-youtube.component';
import { HomeSteamComponent } from './components/steam/home-steam/home-steam.component'


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dailymotion', component: HomeDailyComponent},
  {path: 'steam', component: HomeSteamComponent },
  {path: 'youtube', component: HomeYoutubeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
