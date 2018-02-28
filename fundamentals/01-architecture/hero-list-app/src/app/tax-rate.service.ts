import { Injectable } from '@angular/core';

@Injectable()
export class TaxRateService {

  constructor() { }
  
  getRate(rateName: string) { return 0.10; } // 10% everywhere
}
