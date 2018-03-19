import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-controls',
  template: `
    <style>
      button {
        background-color: white;
        border: 1px solid #777;
      }
    </style>
    <h3>Controls</h3>
    <button (click)="activate()">{{hero.active ? 'Disactive' : 'Activate'}}</button>
  `
})
export class HeroControlsComponent {
  @Input() hero: Hero;

  activate() {
    // this.hero.active = true;
    this.hero.active = !this.hero.active;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/