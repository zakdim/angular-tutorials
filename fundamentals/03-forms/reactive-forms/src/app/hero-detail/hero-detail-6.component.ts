/* tslint:disable:component-class-suffix */
import { Component, Input, OnChanges }             from '@angular/core';
import { FormBuilder, FormGroup, Validators }      from '@angular/forms';

import { Hero, states } from '../data-model';

////////// 6 ////////////////////

@Component({
  selector: 'app-hero-detail-6',
  templateUrl: './hero-detail-6.component.html'
})
export class HeroDetailComponent6 implements OnChanges {
  @Input() hero: Hero;

  heroForm: FormGroup;
  states = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      }),
      power: '',
      sidekick: ''
    });
  }

  ngOnChanges() { // <-- call rebuildForm in ngOnChanges
    this.rebuildForm();
  }

  rebuildForm() { // <-- wrap patchValue in rebuildForm
    this.heroForm.reset();
    this.heroForm.patchValue({
      name: this.hero.name
    });
  }
}





/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/