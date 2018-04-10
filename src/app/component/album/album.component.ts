import { Component,OnInit } from '@angular/core';
import {SpotifyApiService} from '../../services/spotifyapi.service'
import {Artist} from'../../component/artist/Artist';
import {Album} from'../../component/album/Album';
import {ActivatedRoute} from '@angular/router';
import {RouterModule,Routes} from '@angular/router';


@Component({
    moduleId:module.id,
  selector: 'album',
  templateUrl: `album.component.html`,
})
export class AlbumComponent{
      id:string;
   
    album:Album[];

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
                this._spotifyApiService.getAlbum(id, data.access_token)
                .subscribe(album => {
                    this.album = album;
                })
            })
        })
    }

 } 