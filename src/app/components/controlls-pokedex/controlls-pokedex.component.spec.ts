import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllsPokedexComponent } from './controlls-pokedex.component';

describe('ControllsPokedexComponent', () => {
  let component: ControllsPokedexComponent;
  let fixture: ComponentFixture<ControllsPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllsPokedexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllsPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
