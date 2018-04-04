import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
 // tslint:disable-next-line:directive-selector
 selector: '[telephoneNumber]',
 providers: [{provide: NG_VALIDATORS, useExisting: TelephoneNumberFormatValidatorDirective, multi: true}]
})
export class TelephoneNumberFormatValidatorDirective implements Validator {

 validate(c: FormControl): ValidationErrors {
  // debugger

   const isValidPhoneNumber = /^\d{3,3}-\d{3,3}-\d{3,3}$/.test(c.value);
   const message = {
     'telephoneNumber': {
       'message': 'The phone number must be valid (XXX-XXX-XXX, where X is a digit)'
     }
   };
   return isValidPhoneNumber ? null : message;
 }
}