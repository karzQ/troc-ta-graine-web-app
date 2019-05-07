import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-ads-formular',
  templateUrl: './ads-formular.component.html',
  styleUrls: ['./ads-formular.component.less'],
  animations: [
      trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(-100%)', opacity: 0}))
      ])
    ])
  ]
})
export class AdsFormularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
