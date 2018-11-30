import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_CONFIG, HERO_DI_CONFIG } from './app.config';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { InjectorComponent } from './injector.component';
import { Logger } from './logger.service';
import { TestComponent } from './test.component';
import { UserService } from './user.service';

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
    UserService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ],
  exports: [HeroesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
