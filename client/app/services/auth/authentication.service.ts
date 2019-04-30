import { Injectable } from '@angular/core';
import { User } from '../../models/class/user';
import { users } from '../../models/mocks/users-mock';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  isAuthenticated: boolean;
  testUser: User;
  userList: User[] = [];

  constructor(private http: HttpClient) {
    this.testUser = new User(0, 'Karczinski', 'Quentin', new Date(), new Date(), 'test', 'test', 'test',
    'rt65h15erty4hn54e1rtyhn451e54trg1h56e1rt56h1e56rth456e4rt8h5e58');
    this.userList = users;
  }

  login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', { username: username, password: password })
        .map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        });
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
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

  /*
  testlogin(login: string, password: string): boolean {
    if (((login === this.testUser.email || login === this.testUser.username)
    && password === this.testUser.password) || this.checkUsersCredentials(login, password)) {
      this.isAuthenticated = true;
      return true;

    } else {
      return false;
    }
  } */
}
