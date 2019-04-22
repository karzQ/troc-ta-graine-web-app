import { Component, OnInit } from '@angular/core';
import { Garden } from '../../../models/class/garden';
import { gardens } from '../../../models/mocks/garden-mock';

@Component({
  selector: 'app-garden-list',
  templateUrl: './garden-list.component.html',
  styleUrls: ['./garden-list.component.less']
})
export class GardenListComponent implements OnInit {

  gardens: Garden[] = [];

  constructor() { }

  ngOnInit() {
    this.gardens = gardens;
  }

}
