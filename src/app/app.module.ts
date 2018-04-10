import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SpotifyApiService} from './services/spotifyapi.service'


import { AppComponent } from './app.component';
import {ArtistComponent} from './component/artist/artist.component';
import {AlbumComponent} from './component/album/album.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {AboutComponent} from './component/about/about.component';
import {SearchComponent} from './component/search/search.component'

const routes:Routes=[
  {path:'',component:SearchComponent},
  {path:'about',component:AboutComponent},
  {path:'artist/:id',component:ArtistComponent},
  {path:'album/:id',component:AlbumComponent} 
]

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent, 
    ArtistComponent,
    AppComponent ,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule, RouterModule.forRoot(routes)
  ],
  providers: [SpotifyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
