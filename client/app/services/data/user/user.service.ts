import { Injectable } from '@angular/core';
import { User } from '../../../models/class/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/api/users');
    }
}
