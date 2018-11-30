import { Component, Inject } from '@angular/core';

import { UserService } from './user.service';
import { APP_CONFIG } from './app.config';
import { AppConfig } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;

  constructor(
    @Inject(APP_CONFIG) config: AppConfig,
    private userService: UserService) {
      this.title = config.title;
  }

  get isAuthorized() { return this.user.isAuthorized; }
  nextUser() { this.userService.getNewUser(); }
  get user() { return this.userService.user; }

  get userInfo() {
    return `Current user, ${this.user.name}, is ` +
      `${this.isAuthorized ? '' : 'not'} authorized. `;
  }

}
