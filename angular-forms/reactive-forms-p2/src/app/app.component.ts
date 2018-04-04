import { FormGroup, FormControl, FormArray, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl('', Validators.required, CustomValidators.uniqueName),
      'birthYear': new FormControl('', [Validators.required, CustomValidators.birthYear]),
      'location': new FormGroup({
        'country': new FormControl('', Validators.required),
        'city': new FormControl()
      }),
      'phoneNumbers': new FormArray([this.buildPhoneNumberComponent()])
    },
      Validators.compose([CustomValidators.countryCity, CustomValidators.telephoneNumbers])
    );
  }

  buildPhoneNumberComponent() {
    return new FormControl('', [Validators.required, CustomValidators.telephoneNumber]);
  }

  remove(i: number) {
    (<FormArray>this.myForm.get('phoneNumbers')).removeAt(i);
  }

  add() {
    (<FormArray>this.myForm.get('phoneNumbers')).push(new FormControl(''));
  }

  printMyForm() {
    console.log(this.myForm);
  }

  register(myForm: NgForm) {
    console.log('Registration successful.');
    console.log(myForm.value);
  }

}
