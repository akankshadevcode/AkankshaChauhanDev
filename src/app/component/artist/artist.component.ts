import { Component,OnInit } from '@angular/core';
import {SpotifyApiService} from '../../services/spotifyapi.service'
import {Artist} from'../../component/artist/Artist';
import {Album} from'../../component/album/Album';
import {ActivatedRoute} from '@angular/router';
import {RouterModule,Routes} from '@angular/router';


@Component({
    moduleId:module.id,
    selector: 'artist',
    templateUrl: `artist.component.html`,

 
})
export class ArtistComponent implements OnInit{ 
    id:string;
    artist:Artist[];
    albums:Album[];

    constructor(
        private _spotifyApiService:SpotifyApiService,
        private _route:ActivatedRoute){

    }
    ngOnInit(){
        this._route.params
          .map(params => params['id'])
          .subscribe((id) => { 
             this._spotifyApiService.getToken()
              .subscribe(data => {
                this._spotifyApiService.getArtist(id, data.access_token)
                 .subscribe(artist=> {
                   this.artist = artist;
                })
                this._spotifyApiService.getAlbums(id, data.access_token)
                    .subscribe(albums => {
                      this.albums = albums.items;
                    })
                })
          })
    }
} 