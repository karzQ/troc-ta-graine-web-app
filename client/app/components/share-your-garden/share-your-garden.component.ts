import { Component, OnInit } from '@angular/core';
import { Garden } from '../../models/class/garden';
import { gardens } from '../../models/mocks/garden-mock';

@Component({
  selector: 'app-share-your-garden',
  templateUrl: './share-your-garden.component.html',
  styleUrls: ['./share-your-garden.component.less']
})
export class ShareYourGardenComponent implements OnInit {

  gardens: Garden[] = [];

  constructor() { }

  ngOnInit() {
    this.gardens = gardens;
  }
  
}
