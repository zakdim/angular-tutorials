import { Injectable } from '@angular/core';
import { UserModule } from './user.module';

export class User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: UserModule,
})
export class UserService1 {

  constructor() { }

  getUsers(): Promise<User[]> {
    return Promise.resolve([
      { id: 1, name: 'Maria' },
      { id: 2, name: 'Alex' },
      { id: 3, name: 'Chuntao' },
      { id: 4, name: 'Béatrice' },
      { id: 5, name: 'Sarah' },
      { id: 6, name: 'Andrés' },
      { id: 7, name: 'Abdul' },
      { id: 8, name: 'Pierre' },
      { id: 9, name: 'Jiao' },
      { id: 10, name: 'Seth' }
    ]);
  }
}
