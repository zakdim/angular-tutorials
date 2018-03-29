import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ContactsService } from './contacts.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
})
export class ContactsDetailComponent implements OnInit {

  contact: Contact;

  constructor(
    // private contactsService: ContactsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.contactsService.getContact(id)
    //   .subscribe(contact => this.contact = contact);
    this.contact = this.route.snapshot.data['contact'];
  }

}
