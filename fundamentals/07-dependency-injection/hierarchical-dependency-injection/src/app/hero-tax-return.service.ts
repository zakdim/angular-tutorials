import { Injectable } from '@angular/core';
import { HeroTaxReturn } from './hero';
import { HeroesService } from './heroes.service';

// NOTE: no {providedIn: 'root'}, see providers in HeroTaxReturnComponent
@Injectable()
export class HeroTaxReturnService {
  private currentTaxReturn: HeroTaxReturn;
  private originalTaxReturn: HeroTaxReturn;

  constructor(private heroService: HeroesService) { }

  set taxReturn(htr: HeroTaxReturn) {
    console.log(`set taxReturn: ${JSON.stringify(htr)}`);
    this.originalTaxReturn = htr;
    this.currentTaxReturn = htr.clone();
  }

  get taxReturn(): HeroTaxReturn {
    return this.currentTaxReturn;
  }

  restoreTaxReturn() {
    console.log(`start restoreTaxReturn(): ${JSON.stringify(this.taxReturn)}`);
    this.taxReturn = this.originalTaxReturn;
    console.log(`end restoreTaxReturn(): ${JSON.stringify(this.taxReturn)}`);
  }

  saveTaxReturn() {
    this.taxReturn = this.currentTaxReturn;
    this.heroService.saveTaxReturn(this.currentTaxReturn)
      .subscribe(htr => {
        console.log(`saved taxReturn: ${JSON.stringify(htr)}`);
      });
  }
}
