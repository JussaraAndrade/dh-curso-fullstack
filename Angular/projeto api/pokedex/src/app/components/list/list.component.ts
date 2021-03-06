import { Component, OnInit } from '@angular/core';
import { concat, Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  subscriptions: Subscription[] = [];
  loading = false;

  // Inicializar o construtor
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    //this.getPokes();
    this.loadMore();
  }

  get pokemons(): any[]{
    return this.pokemonService.pokemons;
  }

  set subscription(subscription: Subscription){
    this.subscriptions.push(subscription);
  }

  getType(pokemon: any): string {
    return this.pokemonService.getType(pokemon);
  }

  loadMore(): void {
    this.loading = true;
    this.pokemonService.getNext().subscribe((response: any) => {
      this.pokemonService.next = response.next;
      const details = response.results.map((p: any) => this.pokemonService.get(p.name));
      this.subscription = concat(...details).subscribe(response => {
        this.pokemonService.pokemons.push(response);
      });
    // Error
    }, (err) => {
      console.log('error', err);
    // Complete
    }, () => {
      this.loading = false;
    })
  }

  ngOnDestroy(): void{
    this.subscriptions.forEach(subscription => { subscription ? subscription.unsubscribe(): 0 });
  }

}

  // getPokes() {
  //   this.pokemonService.getPokemons().subscribe((data: any) => {
  //     this.pokemons = data.results;
  //   })
  // }
