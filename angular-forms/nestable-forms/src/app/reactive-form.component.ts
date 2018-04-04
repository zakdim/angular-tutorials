import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { NestableFormDirective } from './nestable-form.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {

  private sampleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.sampleForm = this.formBuilder.group({
      input3: ['', Validators.required],
    });
  }

}
