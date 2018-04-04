import { FormGroup, FormControl, FormArray, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.fb.group({
        'name': ['', Validators.required, CustomValidators.uniqueName],
        'birthYear': ['', [Validators.required, CustomValidators.birthYear]],
        'location': this.fb.group({
          'country': ['', Validators.required],
          'city': ''
        }),
        'phoneNumbers': this.fb.array([this.buildPhoneNumberComponent()])
      },
      {
        validator: Validators.compose([CustomValidators.countryCity, CustomValidators.telephoneNumbers])
      }
    );
  }

  remove(i: number) {
    (<FormArray>this.myForm.controls.phoneNumbers).removeAt(i);
  }

  add() {
    (<FormArray>this.myForm.controls.phoneNumbers).push(this.buildPhoneNumberComponent());
  }

  buildPhoneNumberComponent() {
    return new FormControl('', [Validators.required, CustomValidators.telephoneNumber]);
  }

  printMyForm() {
    console.log(this.myForm);
  }

  register(myForm: NgForm) {
    console.log('Registration successful.');
    console.log(myForm.value);
  }

}
