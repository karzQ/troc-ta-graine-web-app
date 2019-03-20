import { Component, OnInit } from '@angular/core';
import { User } from '../../models/class/user';
import { users } from '../../models/mocks/users-mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  users: User[] = [];

  login: string;
  password: string;

  constructor() { }

  ngOnInit() {
    this.users = users;
  }

  checkValues(login: string, password: string): boolean {
    console.log(`login : ${login} (${typeof(login)}), mdp : ${password} (${typeof(password)})`);

    for (let user of users) {
      if (user.email === this.login || user.username === this.login) {
        console.log('Login ok');
        if (user.password === this.password) {
          console.log('Password ok');
          return true;
        } else {
          console.log("Wrong password");
        }
      } else {
        console.log("Wrong login");
      }
    }
  }
}
