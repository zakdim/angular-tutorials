/* tslint:disable:one-line */
import { HeroService } from './hero.service';
import { Logger } from '../logger.service';
import { UserService } from '../user.service';

// tslint:disable-next-line:prefer-const
let heroServiceFactory = (logger: Logger, userService: UserService) => {
    return new HeroService(logger, userService.user.isAuthorized);
};

export let heroServiceProvider =
{
    provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [Logger, UserService]
};
