import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormGroup, ValidationErrors } from '@angular/forms';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[telephoneNumbers]',
  providers: [{provide: NG_VALIDATORS, useExisting: TelephoneNumbersValidatorDirective, multi: true}]
})
export class TelephoneNumbersValidatorDirective implements Validator {

  validate(form: FormGroup): ValidationErrors {

    const message = {
      'telephoneNumbers': {
        'message': 'At least one telephone number must be entered'
      }
    };

    const phoneNumbers = form.controls;
    const hasPhoneNumbers = phoneNumbers && Object.keys(phoneNumbers).length > 0;

    return hasPhoneNumbers ? null : message;
  }
}
