import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgModule }       from '@angular/core';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { BackendService }      from './backend.service';
import { Logger }      from './logger.service';
import { SalesTaxComponent } from './sales-tax/sales-tax.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    SalesTaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BackendService,
    HeroService,
    Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
