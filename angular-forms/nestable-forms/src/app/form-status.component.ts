import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-status',
  template: `
    <p>{{formName}} validity is:
      <span class="form-state" [ngClass]="{'valid': isFormValid}">
          {{isFormValid}}
        </span>
    </p>
  `,
})
export class FormStatusComponent {

  @Input()
  private isFormValid: boolean;

  @Input()
  private formName: string;
}
