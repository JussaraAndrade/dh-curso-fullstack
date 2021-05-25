import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Injeção de dependencia:  injetar para ter o acesso aos métodos
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = environment.apiUrl + 'pokemon/';
  _pokemons: any[] = [];
  _next = '';

  constructor(private http: HttpClient) { }

  get pokemons(): any[]{
    return this._pokemons;
  }
  // pegar o valor
  get next(): string{
    return this._next;
  }

  // atualizar o valor
  set next(next: string){
    this._next = next;
  }

  // objeto de pokemon
  getType(pokemon: any): string{
    return pokemon && pokemon.types.length > 0 ? pokemon.types[0].type.name : '';
  }

  //Função/Método - Irá retornar os pokemons
  getPokemons(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  // Individual
  get(name: string): Observable<any[]>{
    //debugger;
    const url = `${this.url}${name}`;
    return this.http.get<any[]>(url);
  }

  getNext(): Observable<any[]>{
    const url = this.next === '' ? `${this.url}?limit=50` : this.next;
    return this.http.get<any[]>(url);
  }
  //Observable; programação reativa
  getEvolution(id: number): Observable<any[]>{
    const url = `${environment.apiUrl}evolution-chain/${id}`;
    return this.http.get<any[]>(url);
  }

  getSpecies(name: string): Observable<any[]>{
    const url = `${environment.apiUrl}pokemon-species/${name}`;
    return this.http.get<any[]>(url);
  }

}
