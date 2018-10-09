import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item,
         ItemService } from './items.service';

@Component({
  templateUrl: './items-list.component.html'
})
export class ItemsListComponent implements OnInit {
  items: Observable<Item[]>;

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }

  ngOnInit() {
  }

}
