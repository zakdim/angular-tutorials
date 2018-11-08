import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroTaxReturnComponent } from './hero-tax-return.component';
import { HeroesListComponent } from './heroes-list.component';
import { VillainsListComponent } from './villains-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroTaxReturnComponent,
    VillainsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
