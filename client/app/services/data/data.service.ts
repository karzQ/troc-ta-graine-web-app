import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/class/user';
import { Seed } from '../../models/class/seed';
import { Ad } from '../../models/class/ad';

@Injectable()
export class DataService {

  baseUrl = '/';

  constructor() { }

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

  getAllUser(): Observable<User> {
    // tslint:disable-next-line:prefer-const
    let users: Observable<User>;

    return users;
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
