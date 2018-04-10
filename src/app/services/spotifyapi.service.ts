import {Injectable} from '@angular/core';
import {Http,Headers , Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyApiService{
    private searchUrl:string;
    private artistUrl:string;
    private albumsUrl:string;
    private albumUrl:string;
    private client_id ='bddb4f82345b427ca8260b40ac87b411';
    private client_secret = 'a16cf461138244169762d3baacdaacaf';
    private access_token:string;    
    private encoded = btoa(this.client_id + ':' + this.client_secret);
    private base64 = 'YmRkYjRmODIzNDViNDI3Y2E4MjYwYjQwYWM4N2I0MTE6YTE2Y2Y0NjExMzgyNDQxNjk3NjJkM2JhYWNkYWFjYWY=';
    constructor(private _http:Http){


    }
    getToken(){
       
         var params = ('grant_type=client_credentials');
 
         var headers = new Headers();
         headers.append( 'Authorization', 'Basic ' + this.encoded);
        
         headers.append('Content-Type' , 'application/x-www-form-urlencoded');
 
         return this._http.post('https://accounts.spotify.com/api/token', params , {headers : headers} )
         .map(res=> res.json());
      }

      searchMusic(str:string, type='artist' ,token:string){    
        
        console.log(this.encoded); 
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type;
        let headers = new Headers();
        headers.append('Authorization' , 'Bearer ' + token); 
        return this._http.get(this.searchUrl , {headers : headers})
        .map((res: Response) => res.json())
 
        
    }

    getArtist(id:string, token:string){   
        this.artistUrl='https://api.spotify.com/v1/artists/'+id;
        let headers = new Headers();
       headers.append('Authorization' , 'Bearer ' + token);
       return this._http.get(this.artistUrl , {headers : headers})
       .map((res: Response) => res.json())
}

     getAlbums(artistid:string, token:string){
        this.albumsUrl='https://api.spotify.com/v1/artists/'+artistid+'/albums';
        let headers = new Headers();
        headers.append('Authorization' , 'Bearer ' + token);

        return this._http.get(this.albumsUrl , {headers : headers})
        .map((res: Response) => res.json())
     }


     getAlbum(id:string,token:string){
        this.albumUrl='https://api.spotify.com/v1/albums/'+id;
        let headers = new Headers();
       headers.append('Authorization' , 'Bearer ' + token);

       return this._http.get(this.albumUrl , {headers : headers})
        .map((res: Response) => res.json())
}


}