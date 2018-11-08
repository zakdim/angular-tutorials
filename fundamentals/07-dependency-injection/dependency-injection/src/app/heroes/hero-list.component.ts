import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];  // with DI

  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

  ngOnInit() {

  }

}
