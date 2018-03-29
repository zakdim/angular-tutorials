import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactsListComponent } from './contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail.component';
import { ContactResolve } from './contact.resolve';

const routes: Routes = [
  { path: '', component: ContactsListComponent },
  {
    path: 'contact/:id',
    component: ContactsDetailComponent,
    resolve: {
      // contact: 'contact'
      contact: ContactResolve
    }
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
