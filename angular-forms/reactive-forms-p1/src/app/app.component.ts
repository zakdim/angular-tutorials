import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl(),
      'birthYear': new FormControl(),
      'location': new FormGroup({
        'country': new FormControl(),
        'city': new FormControl()
      }),
      'phoneNumbers': new FormArray([new FormControl('')])
    });
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
