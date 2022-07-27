import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [PokedexComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [PokedexComponent],
})
export class TemplatesModule {}
