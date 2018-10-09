import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Customer,
         CustomersService } from './customers.service';

@Component({
  templateUrl: './customers-detail.component.html'
})
export class CustomersDetailComponent implements OnInit {
  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private customersService: CustomersService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.customersService.getCustomer(id).subscribe(customer => this.customer = customer);
  }
}
