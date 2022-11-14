import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  
  constructor(private http: HttpClient) {
  }
  public searchMusic(str: string){
    let searchUrl = "http://api.spotify.com/v1/search?q="+str+"&type=artist";
    return this.http.get<any>(searchUrl);
  }

}