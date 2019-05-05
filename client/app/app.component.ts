import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [AuthenticationService]
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthenticationService) {
    authService.handleAuthentication();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.authService.renewTokens();
    }
  }
}
