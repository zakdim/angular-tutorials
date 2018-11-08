import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero, HeroTaxReturn } from './hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  selectedTaxReturns: HeroTaxReturn[] = [];

  constructor(private heroesService: HeroesService) {
    this.heroes = heroesService.getHeroes();
  }

  ngOnInit() {
  }

  showTaxReturn(hero: Hero) {
    this.heroesService.getTaxReturn(hero)
      .subscribe(htr => {
        // show if not currently shown
        if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
          this.selectedTaxReturns.push(htr);
        }
      });
  }

  closeTaxReturn(ix: number) {
    this.selectedTaxReturns.splice(ix, 1);
  }

}
