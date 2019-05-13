import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../models/class/user';
import { Seed } from '../../../models/class/seed';
import { Ad } from '../../../models/class/ad';
import { AuthenticationService } from '../../auth/authentication.service';

@Injectable()
export class DataService {

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  baseUrl = 'http://php.troctagraine.fr/api/user/read';
  users: Observable<any>;
  userCount: number;

  getAllUsers(): Observable<User> {
    this.users = this.http.get<User>(this.baseUrl);
    return this.users;
  }

  getAllSeeds(): Observable<Seed> {
    // tslint:disable-next-line:prefer-const
    let seeds: Observable<Seed>;
    return seeds;
  }

  getSeed(): Seed {
    // tslint:disable-next-line:prefer-const
    let seed: Seed;

    return seed;
  }

  getUser(): User {
    // tslint:disable-next-line:prefer-const
    let user: User;
    return user;
  }

  getAllAd(): Observable<Ad> {
    // tslint:disable-next-line:prefer-const
    let ads: Observable<Ad>;

    return ads;
  }

  getAd(): Ad {
    // tslint:disable-next-line:prefer-const
    let ad: Ad;

    return ad;
  }
}
