import { Component, OnInit } from '@angular/core';
import { heroServiceProvider } from './hero.service.provider';

@Component({
  selector: 'app-heroes',
  providers: [ heroServiceProvider ],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
