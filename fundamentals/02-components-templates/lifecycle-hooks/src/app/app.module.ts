import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeekABooComponent } from './peek-a-boo.component';
import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { SpyParentComponent } from './spy.component';
import { SpyDirective } from './spy.directive';

import {
  OnChangesParentComponent,
  OnChangesComponent
} from './on-changes.component';

import {
  DoCheckParentComponent,
  DoCheckComponent
} from './do-check.component';

import {
  AfterViewParentComponent,
  AfterViewComponent,
  ChildViewComponent
} from './after-view.component';
import {
  AfterContentParentComponent,
  AfterContentComponent,
  ChildComponent
} from './after-content.component';
import {
  CounterParentComponent,
  MyCounterComponent
} from './counter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    SpyParentComponent,
    SpyDirective,
    OnChangesParentComponent,
    OnChangesComponent,
    DoCheckParentComponent,
    DoCheckComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    CounterParentComponent,
    MyCounterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
