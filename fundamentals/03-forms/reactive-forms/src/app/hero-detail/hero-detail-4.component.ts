/* tslint:disable:component-class-suffix */
import { Component }                          from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { states } from '../data-model';

@Component({
  selector: 'app-hero-detail-4',
  templateUrl: './hero-detail-4.component.html'
})
export class HeroDetailComponent4 {
  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
    });
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/