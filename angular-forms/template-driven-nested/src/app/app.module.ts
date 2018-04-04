import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowErrorsComponent } from './show-errors.component';
import { BirthYearValidatorDirective } from './birth-year-validator.directive';
import { TelephoneNumberFormatValidatorDirective } from './telephone-number-format-validator.directive';
import { CountryCityValidatorDirective } from './country-city-validator.directive';
import { TelephoneNumbersValidatorDirective } from './telephone-numbers-validator.directive';
import { UniqueNameValidatorDirective } from './unique-name-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowErrorsComponent,
    BirthYearValidatorDirective,
    TelephoneNumberFormatValidatorDirective,
    CountryCityValidatorDirective,
    TelephoneNumbersValidatorDirective,
    UniqueNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
