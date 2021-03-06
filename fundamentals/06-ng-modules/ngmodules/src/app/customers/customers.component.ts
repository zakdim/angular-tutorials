import { Component, OnInit } from '@angular/core';

import { CustomersService } from './customers.service';
import { UserService } from '../core/user.service';

@Component({
  templateUrl: './customers.component.html',
  providers: [ UserService ]
})
export class CustomersComponent implements OnInit {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
  }

}
