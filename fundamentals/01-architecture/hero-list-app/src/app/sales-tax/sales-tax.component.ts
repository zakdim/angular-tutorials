import { Component, OnInit } from '@angular/core';

import { SalesTaxService } from '../sales-tax.service';
import { TaxRateService }  from '../tax-rate.service';

@Component({
  selector: 'app-sales-tax',
  templateUrl: './sales-tax.component.html',
  styleUrls: ['./sales-tax.component.css'],
  providers: [SalesTaxService, TaxRateService]
})
export class SalesTaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
