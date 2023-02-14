import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url = 'https://server-crud-hero-ng-ec.onrender.com/api/heroes/'

  constructor(private http: HttpClient) { }

  readHero(): Observable<any> {
    return this.http.get(this.url);
  }
  


  deleteHero(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  createHero(producto: Hero): Observable<any> {
    return this.http.post(this.url, producto);
  }

  getHero(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarHero(id: string, hero: Hero): Observable<any> {
    return this.http.put(this.url + id, hero);
  }
}
