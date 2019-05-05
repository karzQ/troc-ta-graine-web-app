import { Injectable } from '@angular/core';
import { User } from '../../models/class/user';
import { users } from '../../models/mocks/users-mock';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthenticationService {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: '0y2pAYiYpAFNtvFxFXZUWdINCBwDRWzg',
    domain: 'dev-4t30u2ma.eu.auth0.com',
    responseType: 'token id_token',

    // if on production
    // redirectUri: 'http://troctagraine.fr/home',
    // if on developpment
    // redirectUri: 'http://developpement.troctagraine.fr/home',

    // else
    redirectUri: 'http://localhost:4200/home',
    scope: 'openid'
  });

  authenticated: boolean;
  testUser: User;
  userList: User[] = [];

  constructor(private http: HttpClient, public router: Router) {
    this.testUser = new User(0, 'Karczinski', 'Quentin', new Date(), new Date(), 'test', 'test', 'test',
    'rt65h15erty4hn54e1rtyhn451e54trg1h56e1rt56h1e56rth456e4rt8h5e58');
    this.userList = users;

    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
    console.log(this.auth0);
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

  testlogin(login: string, password: string): boolean {
    if (((login === this.testUser.email || login === this.testUser.username)
    && password === this.testUser.password) || this.checkUsersCredentials(login, password)) {
      this.authenticated = true;
      return true;

    } else {
      return false;
    }
  }

  // Aut0 used here
  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  get login(): string {
    return this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['/home']);
        this.authenticated = true;
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
        this.authenticated = false;
      }
    });
  }

  private localLogin(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = (authResult.expiresIn * 1000) + Date.now();

    localStorage.setItem('accessToken', this.accessToken);
    localStorage.setItem('idToken', this._idToken);
    localStorage.setItem('expiresAt', this._expiresAt.toString());

    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;

    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('expiresAt');

    this.router.navigate(['/home']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return this._accessToken && new Date().getTime() < (new Date().getTime() + this._expiresAt);
  }

}
