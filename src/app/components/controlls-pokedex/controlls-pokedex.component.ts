import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { PokemonInformation } from 'src/app/interfaces/pokemon.interface';
import { SearchPokemonService } from 'src/app/services/search-pokemon.service';

@Component({
  selector: 'app-controlls-pokedex',
  templateUrl: './controlls-pokedex.component.html',
  styleUrls: ['./controlls-pokedex.component.scss'],
})
export class ControllsPokedexComponent implements OnInit {
  /**
   * Pokémon information
   */
  pokemonInformation: PokemonInformation = {} as PokemonInformation;

  /**
   * Error search
   */
  errorPokemon: boolean = false;

  /**
   * Pokemon formGorup
   */
  pokemonForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor(private pokemonService: SearchPokemonService) {}

  ngOnInit(): void {}

  searchPokemon(): void {
    this.pokemonService
      .searchPokemonService(this.pokemonForm.value.name.toLowerCase())
      .subscribe(
        (pokemonResponse: PokemonInformation) => {
          this.pokemonInformation = pokemonResponse;
          this.errorPokemon = false;
        },
        () => {
          this.errorPokemon = true;
          this.pokemonInformation = {} as PokemonInformation;
        }
      );
  }
}
