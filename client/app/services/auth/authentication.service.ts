import { Injectable } from '@angular/core';
import { User } from '../../models/class/user';
import { Router } from '@angular/router';
import { users } from '../../models/mocks/users-mock';

@Injectable()
export class AuthenticationService {

  isAuthenticated: boolean;
  testUser: User;
  userList: User[] = [];

  preventUser: boolean;
  preventText: string;

  constructor(private route: Router) {
    this.testUser = new User(0, 'Karczinski', 'Quentin', new Date(), new Date(), 'test@gmail.com', 'test', 'test',
    'rt65h15erty4hn54e1rtyhn451e54trg1h56e1rt56h1e56rth456e4rt8h5e58');
    this.userList = users;
  }

  checkUsersCredentials(login: string, password: string): boolean {
    let userFound;
    this.userList.forEach(elem => {
      if (elem.email === login || elem.username === login) {
        if (elem.password === password) {
          userFound = true;
        } else {
          console.log('Mauvais mot de passe');
        }
      } else {
        console.log('Pas d\'utilisateur trouvé avec ce login');
        userFound = false;
      }
    });

    return userFound;
  }

  login(login: string, password: string): void {
    if (((login === this.testUser.email || login === this.testUser.username)
    && password === this.testUser.password) || this.checkUsersCredentials(login, password)) {

      this.isAuthenticated = true;
      this.route.navigate(['/home']);
    } else {

    }
  }
}
