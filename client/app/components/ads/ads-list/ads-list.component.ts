import { Component, OnInit } from '@angular/core';
import { ads } from '../../../models/mocks/ads-mock';
import { Ad } from '../../../models/class/ad';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.less']
})
export class AdsListComponent implements OnInit {

  cards: Ad[] = [];
  primaryPos: number;

  constructor() { }

  ngOnInit() {
    this.cards = ads;
    this.primaryPos = 0;
  }

  getCardPosition(elem: Ad): number {
    const pos = this.cards.indexOf(elem);
    console.log(pos);

    return pos;
  }

  checkCardPosition(card: Ad): boolean {
    const pos = this.cards.indexOf(card);

    if (this.primaryPos === (pos - 1) || this.primaryPos === pos || this.primaryPos === (pos + 1)) {
      return true;
    } else {
      return false;
    }
  }

  changePosition(orientation: string): void {
    if (orientation === 'right' && this.primaryPos < (this.cards.length - 1)) {
      this.primaryPos++;
    } else if (orientation === 'left' && this.primaryPos > 0) {
      this.primaryPos--;
    }
  }

}
