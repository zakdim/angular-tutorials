import { TestBed, inject } from '@angular/core/testing';

import { SalesTaxService } from './sales-tax.service';

describe('SalesTaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesTaxService]
    });
  });

  it('should be created', inject([SalesTaxService], (service: SalesTaxService) => {
    expect(service).toBeTruthy();
  }));
});
