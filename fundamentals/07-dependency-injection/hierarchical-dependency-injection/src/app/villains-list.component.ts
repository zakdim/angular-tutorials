import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Villain, VillainsService } from './villains.service';

@Component({
  selector: 'app-villains-list',
  templateUrl: './villains-list.component.html',
  // @Component-level injectors: see
  // https://angular.io/guide/hierarchical-dependency-injection
  providers: [VillainsService]
})
export class VillainsListComponent implements OnInit {
  villains: Observable<Villain[]>;

  constructor(private villainsService: VillainsService) {
    this.villains = villainsService.getVillains();
  }
  ngOnInit() {
  }
}
