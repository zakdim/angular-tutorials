import { Component, Input } from '@angular/core';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {
  title = 'NgModules';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/