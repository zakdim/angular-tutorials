import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeekABooComponent } from './peek-a-boo.component';
import { PeekABooParentComponent } from './peek-a-boo-parent.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PeekABooComponent,
    PeekABooParentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
