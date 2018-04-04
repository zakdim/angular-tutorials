import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NestableFormDirective } from './nestable-form.directive';
import { RootFormComponent } from './root-form.component';
import { FormStatusComponent } from './form-status.component';
import { NestedFormComponent } from './nested-form.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { IsolatedFormComponent } from './isolated-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NestableFormDirective,
    RootFormComponent,
    FormStatusComponent,
    NestedFormComponent,
    ReactiveFormComponent,
    IsolatedFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
