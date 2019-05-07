import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../../../../models/class/ad';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  @Input() list: Ad[];

  showAd: boolean;
  adsList: Ad[] = [];

  constructor() { }

  ngOnInit() {
    this.showAd = false;
    this.adsList = this.list;
  }

}
