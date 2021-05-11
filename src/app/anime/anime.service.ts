import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getAnimes(): Observable<Array<Anime>> {
    return this.http.get<Array<Anime>>( this.apiUrl );
  }

}
