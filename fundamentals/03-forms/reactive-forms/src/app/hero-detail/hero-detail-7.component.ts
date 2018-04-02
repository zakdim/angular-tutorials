/* tslint:disable:component-class-suffix */
import { Component, Input, OnChanges }             from '@angular/core';
import { FormBuilder, FormGroup, Validators }      from '@angular/forms';

import { Address, Hero, states } from '../data-model';

@Component({
  selector: 'app-hero-detail-7',
  templateUrl: './hero-detail-7.component.html'
})
export class HeroDetailComponent7 implements OnChanges {
  @Input() hero: Hero;

  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      address: this.fb.group(new Address()), // <-- a FormGroup with a new address
      power: '',
      sidekick: ''
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }

  /* First version of rebuildForm */
  rebuildForm1() {
    this.heroForm.reset();
     this.heroForm.setValue({
      name:    this.hero.name,
      address: this.hero.addresses[0] || new Address()
   });
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/