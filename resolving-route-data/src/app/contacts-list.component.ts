import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Observable } from 'rxjs/Observable';
import { Contact } from './contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Contact[]>;

  constructor(private contactsService:  ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}
