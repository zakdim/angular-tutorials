import { Component } from '@angular/core';

import { Hero, HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './hero-team-builder.component.html',
  styles: [`
    .buttons {
      text-align: center;
    }
    button {
      padding: 1.5em 3em;
    }
    .columns {
      display: flex;
      flex-direction: row;
    }
    .column {
      flex: 1;
      padding: 10px;
    }
    .column p {
      min-height: 6em;
    }
  `],
  providers: [HeroService]
})
export class HeroTeamBuilderComponent {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = heroService.heroes;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/