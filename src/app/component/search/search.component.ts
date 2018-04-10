import { Component } from '@angular/core';
import {SpotifyApiService} from '../../services/spotifyapi.service';
import {Artist} from '../../component/artist/Artist';


@Component({
    moduleId:module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
  providers:[SpotifyApiService],
  
})
export class SearchComponent{
    searchStr:string;
    searchRes:Artist[];

    constructor(private _spotifyApiService:SpotifyApiService){

    }

    searchMusic(){
      this._spotifyApiService.getToken()
        .subscribe(res => {
            this._spotifyApiService.searchMusic(this.searchStr ,'artist' , res.access_token)
              .subscribe(res=> {
                this.searchRes = res.artists.items;
           })
        })
      
   }  
   
 } 