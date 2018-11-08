import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { Logger } from './logger.service';
import { TestComponent } from './test.component';
import { UserService } from './user.service';
import { InjectorComponent } from './injector.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroListComponent,
    InjectorComponent,
    TestComponent
  ],
  providers: [
    Logger,
    UserService
  ],
  exports: [ HeroesComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
