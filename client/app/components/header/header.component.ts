import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  animations: [
      trigger('flyInOut', [
      transition('void => *', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  @Input() home: boolean;
  @Input() ads?: boolean = true;
  @Input() garden?: boolean = true;
  @Input() forum?: boolean = true;
  @Input() perma?: boolean = true;
  @Input() kesako?: boolean = true;
  @Input() documentation?: boolean = true;

  menuIsHidden: boolean;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.menuIsHidden = true;
  }

}
