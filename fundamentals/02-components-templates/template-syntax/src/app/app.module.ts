import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { SizerComponent } from './sizer/sizer.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { heroSwitchComponents } from './hero-switch/hero-switch.components';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ClickDirective, ClickDirective2 } from './click.directive';


@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    HeroDetailComponent,
    heroSwitchComponents,
    HeroFormComponent,
    ClickDirective,
    ClickDirective2
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
