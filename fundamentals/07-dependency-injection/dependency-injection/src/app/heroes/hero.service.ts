import { Injectable, Optional } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Logger } from '../logger.service';
import { UserService, User } from '../user.service';
import { HeroModule } from './hero.module';

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
  // we declare that this service should be created
  // by any injector that includes HeroModule.
  // providedIn: HeroModule,

  deps: [Logger, UserService]
})
export class HeroService {
  constructor(
    @Optional() private logger: Logger,
    private userService: UserService,
    private isAuthorized: boolean) { }

  getHeroes() {
    const auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    if (this.logger) {
      this.logger.log(`Getting heroes for ${auth} user ${this.userService.user.name}.`);
    }
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}
