import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private myForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl('', Validators.required, CustomValidators.uniqueName),
      'birthYear': new FormControl('', [Validators.required, CustomValidators.birthYear]),
      'location': new FormGroup({
        'country': new FormControl('', Validators.required),
        'city': new FormControl()
      }, CustomValidators.countryCity),
      'phoneNumbers': new FormArray([this.buildPhoneNumberComponent()], CustomValidators.telephoneNumbers)
    });
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
