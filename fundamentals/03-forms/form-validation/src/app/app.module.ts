import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormTemplateComponent } from './template/hero-form-template.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroFormTemplateComponent,
    ForbiddenValidatorDirective,
    HeroFormReactiveComponent
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
