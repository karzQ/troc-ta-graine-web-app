import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../../../../models/class/ad';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  @Input() ad: Ad;

  constructor() { }

  ngOnInit() {
  }

}
