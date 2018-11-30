import { Injectable, Optional } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Logger } from '../logger.service';
import { UserService } from '../user.service';

@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root',
  // we declare that this service should be created
  // by any injector that includes HeroModule.
  // providedIn: HeroModule,
  useFactory: (logger: Logger, userService: UserService) =>
    new HeroService(logger, userService.user.isAuthorized),
  deps: [Logger, UserService]
})
export class HeroService {
  constructor(
    private logger: Logger,
    private isAuthorized: boolean) { }

  getHeroes() {
    // tslint:disable-next-line:prefer-const
    let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}
