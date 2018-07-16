import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  heroes: Hero[];

  protected selectedHero: Hero;

  public isShown: boolean;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.isShown = true;
    this.heroService.openSubject.subscribe(() => { // 変更
      alert('終わりましたよ');
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
