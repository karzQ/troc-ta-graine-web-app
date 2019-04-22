import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthenticationService {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  // Prod authentication
  /*
  auth0 = new auth0.WebAuth({
    clienID: '0y2pAYiYpAFNtvFxFXZUWdINCBwDRWzg',
    domain: 'dev-4t30u2ma.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://troctagraine.fr/home',
    scope: 'openid'
  });
  */

  // Local authentication
  auth0 = new auth0.WebAuth({
    clienID: '0y2pAYiYpAFNtvFxFXZUWdINCBwDRWzg',
    domain: 'dev-4t30u2ma.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/home',
    scope: 'openid'
  });

  constructor(public router: Router) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private localLogin(authResult): void {
    const expiresAt = (authResult.expiresIn * 1000) + Date.now();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSessions({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Impossible d'avoir un nouveau token (${err.error}: ${err.error.description}`);
        this.logout();
      }
    });
  }

  public logout(): void {
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;

    this.auth0.logout({
      return_to: window.location.origin
    });
  }

  public isAuthenticated(): boolean {
    return this._accessToken && Date.now() < this._expiresAt;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }
}
