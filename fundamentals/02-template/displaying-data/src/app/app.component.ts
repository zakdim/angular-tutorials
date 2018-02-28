import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes | slice:0:3; let i=index">
        {{hero.name}} ({{i}})
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];

  // title: string;
  // myHero: string;

  constructor() {
    // this.title = 'Tour of Heroes';
    // this.myHero = 'Windstorm';
  }
}
