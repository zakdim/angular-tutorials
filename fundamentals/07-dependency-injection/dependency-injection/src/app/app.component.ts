import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'dependency-injection';

  constructor(
    private userService: UserService) {
  }

  get isAuthorized() { return this.user.isAuthorized; }
  nextUser() { this.userService.getNewUser(); }
  get user() { return this.userService.user; }

  get userInfo() {
    return `Current user, ${this.user.name}, is ` +
      `${this.isAuthorized ? '' : 'not'} authorized. `;
  }

}
