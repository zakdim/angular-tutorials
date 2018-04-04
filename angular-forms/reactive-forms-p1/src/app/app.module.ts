import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowErrorsComponent } from './show-errors.component';
import { BirthYearValidatorDirective } from './birth-year-validator.directive';
import { CountryCityValidatorDirective } from './country-city-validator.directive';
import { UniqueNameValidatorDirective } from './unique-name-validator.directive';
import { TelephoneNumberFormatValidatorDirective } from './telephone-number-format-validator.directive';
import { TelephoneNumbersValidatorDirective } from './telephone-numbers-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowErrorsComponent,
    BirthYearValidatorDirective,
    CountryCityValidatorDirective,
    UniqueNameValidatorDirective,
    TelephoneNumberFormatValidatorDirective,
    TelephoneNumbersValidatorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
