import { Component, Input, ViewChild } from '@angular/core';
import { NgForm }                      from '@angular/forms';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styles: [`
    button { margin: 6px 0; }
    #heroForm { border: 1px solid black; margin: 20px 0; padding: 8px; max-width: 350px; }
  `]
})
export class HeroFormComponent {
  @Input() hero: Hero;
  @ViewChild('heroForm') form: NgForm;

  private _submitMessage = '';

  get submitMessage() {
    if (!this.form.valid) {
      this._submitMessage = '';
    }
    return this._submitMessage;
  }

  onSubmit(form: NgForm) {
    this._submitMessage =  'Submitted. form value is ' + JSON.stringify(form.value);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/