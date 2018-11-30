import { Injectable } from '@angular/core';

export class User {
  constructor(
    public name: string,
    public isAuthorized = false) { }
}

// TODO: get the user; don't 'new' it.
// tslint:disable-next-line:prefer-const
let alice = new User('Alice', true);
// tslint:disable-next-line:prefer-const
let bob = new User('Bob', false);

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = bob;  // initial user is Bob

  constructor() { }

  // swap users
  getNewUser() {
    return this.user = this.user === bob ? alice : bob;
  }
}
