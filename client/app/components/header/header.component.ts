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
  @Input() ads = true;
  @Input() garden = true;
  @Input() forum = true;
  @Input() perma = true;
  @Input() kesako = true;
  @Input() documentation = true;
  @Input() backBtn: boolean ;
  @Input() backRedirectTo: string;

  menuIsHidden: boolean;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.menuIsHidden = true;
  }

}
