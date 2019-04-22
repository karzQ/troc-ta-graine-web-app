import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/auth/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.less'],
  providers: [AuthenticationService]
})
export class AuthenticationComponent implements OnInit {

  constructor() {
  // constructor(public auth: AuthenticationService) {
    // auth.handleAuthentication();
  }

  ngOnInit() {
    /*
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
    */
  }

}
