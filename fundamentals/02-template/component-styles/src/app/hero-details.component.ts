import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-details',
  template: `
    <h2>{{hero.name}} ({{hero.active ? 'Active' : 'Inactive'}})</h2>
    <app-hero-team [hero]=hero></app-hero-team>
    <ng-content></ng-content>
  `,
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {
  @Input() hero: Hero;
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/