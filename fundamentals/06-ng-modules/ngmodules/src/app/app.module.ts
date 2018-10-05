// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';

/* Routing Module */

// @NgModule decorator with its metadata
@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot({userName: 'Miss Marple'})
  ],
  providers: [],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }