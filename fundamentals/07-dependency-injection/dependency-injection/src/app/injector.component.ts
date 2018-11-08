/* tslint:disable */
import { Component, OnInit, Injector } from '@angular/core';

// import { Car, Engine, Tires }   from './car/car';
import { Hero }                 from './heroes/hero';
import { HeroService }          from './heroes/hero.service';
// import { heroServiceProvider }  from './heroes/hero.service.provider';
import { Logger }               from './logger.service';

@Component({
  selector: 'app-injectors',
  templateUrl: './injector.component.html',
  providers: [Logger]
})
export class InjectorComponent implements OnInit {
  // car: Car;

  heroService: HeroService;
  hero: Hero;

  constructor(private injector: Injector) { }

  ngOnInit() {
    // this.car = this.injector.get(Car);
    this.heroService = this.injector.get(HeroService);
    this.hero = this.heroService.getHeroes()[0];
  }

  get rodent() {
    let rousDontExist = `R.O.U.S.'s? I don't think they exist!`;
    return this.injector.get(ROUS, rousDontExist);
  }
}
/**
 * R.O.U.S. - Rodents Of Unusual Size
 * // https://www.youtube.com/watch?v=BOv5ZjAOpC8
 */
class ROUS { }

