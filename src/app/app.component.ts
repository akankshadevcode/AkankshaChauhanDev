import { Component } from '@angular/core';
import{SearchComponent} from './component/search/search.component';
import{AboutComponent} from './component/about/about.component';
import {SpotifyApiService} from './services/spotifyapi.service'
import{AlbumComponent} from './component/album/album.component';
import{ArtistComponent} from './component/artist/artist.component';



@Component({
  moduleId:module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  entryComponents:[SearchComponent,AboutComponent],
  providers:[SpotifyApiService]
})
export class AppComponent {
  //title = 'Angular 4 Spotify API App';
}
