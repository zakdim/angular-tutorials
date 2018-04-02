import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-hero-detail-1',
  templateUrl: './hero-detail-1.component.html'
})
export class HeroDetailComponent1 implements OnInit {

  name = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
