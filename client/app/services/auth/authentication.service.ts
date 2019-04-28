import { Injectable } from '@angular/core';
import { User } from '../../models/class/user';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  isAuthenticated: boolean;
  testUser: User;

  constructor(private route: Router) {
    this.testUser = new User(0, 'Karczinski', 'Quentin', new Date(), new Date(), 'test@gmail.com', 'test', 'test',
    'rt65h15erty4hn54e1rtyhn451e54trg1h56e1rt56h1e56rth456e4rt8h5e58');
  }

  login(username: string, password: string): void {
    if (username === this.testUser.username && password === this.testUser.password) {
      this.isAuthenticated = true;
      alert('Good !');
      this.route.navigate(['/home']);
    } else {
      alert('Wrong credentials !');
    }
  }
}
