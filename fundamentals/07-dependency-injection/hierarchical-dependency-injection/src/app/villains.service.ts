import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

export interface Villain { id: number; name: string; }

// Note no {providedIn: 'root'} See @Component-level injectors:
// https://angular.io/guide/hierarchical-dependency-injection#component-level-injectors
@Injectable()
export class VillainsService {
  villains: Villain[] = [
    { id: 1, name: 'Dr. Evil' },
    { id: 2, name: 'Moriarty' }
  ];

  getVillains(): Observable<Villain[]> {
    return of(this.villains);
  }
}
