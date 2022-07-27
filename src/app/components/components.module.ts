import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ControllsPokedexComponent } from './controlls-pokedex/controlls-pokedex.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ControllsPokedexComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ControllsPokedexComponent
  ]
})
export class ComponentsModule { }
