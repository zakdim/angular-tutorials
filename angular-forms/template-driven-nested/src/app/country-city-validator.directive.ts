import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormGroup, ValidationErrors } from '@angular/forms';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[countryCity]',
  providers: [{provide: NG_VALIDATORS, useExisting: CountryCityValidatorDirective, multi: true}]
})
export class CountryCityValidatorDirective implements Validator {

  validate(form: FormGroup): ValidationErrors {
    const countryControl = form.get('country');
    const cityControl = form.get('city');

    if (countryControl != null && cityControl != null) {
      const country = countryControl.value;
      const city = cityControl.value;
      let error = null;

      if (country === 'France' && city !== 'Paris') {
        error = 'If the country is France, the city must be Paris';
      }

      const message = {
        'countryCity': {
          'message': error
        }
      };

      return error ? message : null;
    }
  }
}
