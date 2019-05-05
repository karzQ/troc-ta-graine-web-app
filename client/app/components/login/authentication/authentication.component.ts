import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/auth/authentication.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/class/user';
import { users } from '../../../models/mocks/users-mock';
import 'rxjs/add/operator/first';

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
  password: string;

  testMessage: string;
  alertType: string;

  users: User[] = [];

  model: any = {};
  loading = false;
  returnUrl: string;
  error = '';

  menuIsHidden: boolean;

  constructor(public authService: AuthenticationService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {

    this.menuIsHidden = true;
    this.users = users;

    this._log.subscribe((message) => this.testMessage = message);
    this._log.pipe(debounceTime(5000)).subscribe(() => this.testMessage = null);
  }

  displayAlertMessage(reason: string, type: string): void {
    this.alertType = type;
    this._log.next(reason);
  }

  authentication(login: string, password: string): void {
    if (this.authService.testlogin(login, password) === true) {
      this.router.navigate(['/home']);
      this.displayAlertMessage('Vous êtes connecté.', 'success');
    } else {
      this.displayAlertMessage('Mauvais identifiants', 'danger');
    }
  }
}
