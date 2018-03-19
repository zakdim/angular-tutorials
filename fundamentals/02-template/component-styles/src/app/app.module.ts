import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroAppComponent } from './hero-app.component';
import { HeroAppMainComponent } from './hero-app-main.component';
import { QuestSummaryComponent } from './quest-summary.component';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroControlsComponent } from './hero-controls.component';
import { HeroTeamComponent } from './hero-team.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    HeroAppComponent,
    HeroAppMainComponent,
    QuestSummaryComponent,
    HeroDetailsComponent,
    HeroControlsComponent,
    HeroTeamComponent
  ],
  bootstrap: [ HeroAppComponent ]
})
export class AppModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/