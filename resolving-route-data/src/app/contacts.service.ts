import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { timer } from 'rxjs/observable/timer';
import { Contact } from './contact';
// import * as Rx from 'rxjs';

const contacts: Contact[] = [
  { id: 1, name: 'Pascal Precht', twitter: '@PascalPrecht' },
  { id: 2, name: 'Christoph Burgdorf', twitter: '@cburgdorf' },
  { id: 3, name: 'Thomas Burleson', twitter: '@thomasburleson' },
  { id: 4, name: 'Dominic Elm', twitter: '@elmd_' }
];

@Injectable()
export class ContactsService {

  getContacts(): Observable<Contact[]> {
    return Observable.create(observer => {
      observer.next(contacts);
    });
  }

  getContact(id): Observable<Contact> {
    return Observable.create(observer => {
      setTimeout(() => {
        observer.next(contacts.find((contact) => contact.id === id));
        observer.complete();
      }, 3000);
    });
  }

  // getContact(id) {
  //   return Observable.create(observer => {
  //     setTimeout(() => {
  //       observer.next({
  //         id: id,
  //         name: 'Pascal Precht',
  //         twitter: 'http://thoughtram.io',
  //       });
  //       observer.complete();
  //     }, 3000);
  //   });
  // }
}

/*
Copyright 2016 thoughtram GmbH. All Rights Reserved.
Use of this source code is governed by an TTML-style license that
can be found in the license.txt file at http://thoughtram.io/license.txt
*/
