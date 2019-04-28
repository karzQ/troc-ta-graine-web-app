import { Injectable } from '@angular/core';
import { User } from '../../models/class/user';

@Injectable()
export class InscriptionService {

  users = [];

  newUser: User;

  private settedCredentials: boolean;
  private settedPersonal: boolean;
  step: number;

  constructor() {
     this.newUser = new User(0, '', '', new Date(), new Date(), '', '', '', '');
     this.step = 0 ;
  }

  setUserCredentials(data): void {
    if (data) {
      this.newUser.email = data[0];
      this.newUser.username = data[1];
      this.newUser.password = data[2];

      if (this.newUser.email !== undefined && this.newUser.password !== undefined && this.newUser.username !== undefined) {
        this.settedCredentials = true;
      }
    } else {
      alert('Impossible de récupérer les credentials');
      console.log(`credentials : ${data}`);
    }
  }

  setUserPersonalDatas(data): void {
    if (data) {
      this.newUser.id = this.users.length;
      this.newUser.lastName = data[0];
      this.newUser.firstName = data[1];
      this.newUser.birthDate = data[2];

      // tslint:disable-next-line:max-line-length
      if (this.newUser.id !== undefined && this.newUser.lastName !== undefined && this.newUser.firstName !== undefined && this.newUser.birthDate !== undefined) {
        this.settedPersonal = true;
      }
      this.settedPersonal = true;
    } else {
      alert('Impossible de récupérer les données personnelles');
      console.log(`personal : ${data}`);
    }
  }

  sendNewUserToDB(): void {
    if (this.settedCredentials === true && this.settedPersonal === true) {
      this.users.push({...this.newUser});
    } else {
      alert(`Vous n\'avez pas bien renseigné vos informations.
            Il est donc impossible de poursuivre pour le moment.`);
    }
  }
}

