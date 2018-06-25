import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroChild } from '../hero.child';
import { HeroesComponent } from './heroes.component';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesChildComponent extends HeroesComponent implements OnInit {

  heroes = HEROES;

  protected selectedHero: HeroChild;

  constructor() {
      super();
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = <HeroChild>hero;
  }

}
