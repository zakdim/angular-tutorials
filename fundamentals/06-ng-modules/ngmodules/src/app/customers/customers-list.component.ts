import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer,
  CustomersService } from './customers.service';

@Component({
  templateUrl: './customers-list.component.html',
})
export class CustomersListComponent implements OnInit {
  customers: Observable<Customer[]>;
  constructor(private customersService: CustomersService) {
    this.customers = this.customersService.getCustomers();
  }

  ngOnInit() {
  }

}
