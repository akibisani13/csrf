import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesGetUrl = 'http://localhost:9000/demo';  // URL to web api
  private heroesPostUrl = 'http://localhost:9000/demo';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */

  getHeroes(): Observable<string> {
    return this.http.get<any>(`${this.heroesGetUrl}/getcall`);
  }

   // Add a hero to the backend
   addHero(heroName: string, x:HttpHeaders): Observable<any> {
    const hero = { name: heroName };
    return this.http.post<any>(`${this.heroesPostUrl}/postcall`, hero);
  }
  
}
