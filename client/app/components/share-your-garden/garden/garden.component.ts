import { Component, OnInit, Input } from '@angular/core';
import { Garden } from '../../../models/class/garden';
@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.less']
})
export class GardenComponent implements OnInit {

  @Input() garden: Garden;

  constructor() { }

  ngOnInit() {
    this.getValue(this.garden);
  }

  getValue(value: any){
    console.log(value);
  }

}
