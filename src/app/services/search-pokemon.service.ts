import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchPokemonService {
  constructor(private http: HttpClient) {}

  searchPokemonService(name: string): any {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}
