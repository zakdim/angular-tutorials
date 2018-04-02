import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import { AppComponent }        from './app.component';
import { HeroDetailComponent1 } from './hero-detail/hero-detail-1.component';
import { HeroDetailComponent2 } from './hero-detail/hero-detail-2.component';
import { HeroDetailComponent3 } from './hero-detail/hero-detail-3.component';
import { HeroDetailComponent4 } from './hero-detail/hero-detail-4.component';
import { HeroDetailComponent5 } from './hero-detail/hero-detail-5.component';
import { HeroDetailComponent6 } from './hero-detail/hero-detail-6.component';
import { HeroDetailComponent7 } from './hero-detail/hero-detail-7.component';
import { HeroDetailComponent8 } from './hero-detail/hero-detail-8.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { HeroService }         from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent1,
    HeroDetailComponent2,
    HeroDetailComponent3,
    HeroDetailComponent4,
    HeroDetailComponent5,
    HeroDetailComponent6,
    HeroDetailComponent7,
    HeroDetailComponent8,
    HeroDetailComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  providers: [ HeroService ], // <-- provide HeroService
  bootstrap: [ AppComponent ]
})
export class AppModule { }