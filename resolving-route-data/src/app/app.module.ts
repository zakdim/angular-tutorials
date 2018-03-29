import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list.component';
import { ContactsService } from './contacts.service';
import { AppRoutingModule } from './/app-routing.module';
import { ContactsDetailComponent } from './contacts-detail.component';
import { ContactResolve } from './contact.resolve';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ContactsService,
    ContactResolve
    // {
    //   provide: 'contact',
    //   useValue: () => {
    //     return {
    //       id: 1,
    //       name: 'Some Contact',
    //       twitter: 'http://some.website.com'
    //     };
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
