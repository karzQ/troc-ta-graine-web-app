import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.less'],
  providers: [AuthenticationService],
  animations: [
    trigger('displayLogMessage', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('0.3s ease-in')
      ]),
      transition('* => void', [
        animate('0.3s 0.15s ease-out', style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }))
      ])
    ]),

    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
      })),

      transition('void <=> *', [
        animate(750)
      ]),
    ]),
  ]
})

export class AuthenticationComponent implements OnInit {

  private _log = new Subject<string>();

  // ngModel
  login: string;
  password: string;

  testMessage: string;
  timer: number;

  constructor(public authService: AuthenticationService) {
  // constructor(public auth: AuthenticationService) {
    // auth.handleAuthentication();
  }

  ngOnInit() {
    /*
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
    */

    this._log.subscribe((message) => this.testMessage = message);
    this._log.pipe(
      debounceTime(10000)).subscribe(() => this.testMessage = null);

  }

 startCountdown(timer: number): void {
  this.timer = timer;
  const interval = setInterval(() => {
    this.timer--;

    if (this.timer < 0 ) {
      clearInterval(interval);
    }
    }, 1000);
  }

  displayAlertMessage(): void {
    this.startCountdown(10);
    this._log.next('Mauvais identifiants.');
  }
}
