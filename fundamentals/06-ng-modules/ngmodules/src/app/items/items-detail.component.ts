import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item,
  ItemService } from './items.service';

@Component({
  templateUrl: './items-detail.component.html'
})
export class ItemsDetailComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }
}
