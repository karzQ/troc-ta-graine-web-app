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
    this.newUser = new User(0, 'Test', 'Test', new Date(), 'Test', 'test', 28000, 'test', 'test', 'maison', 'test', 'c:/', 0,
    'rt65h15erty4hn54e1rtyhn451e54trg1h56e1rt56h1e56rth456e4rt8h5e58');
     this.step = 0 ;
  }

  setUserCredentials(data): void {
    if (data) {
      this.newUser.mail = data[0];
      this.newUser.mdp = data[1];

      if (this.newUser.mail !== undefined && this.newUser.mdp) {
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
      this.newUser.nom = data[0];
      this.newUser.prenom = data[1];
      this.newUser.dateNaissance = data[2];

      // tslint:disable-next-line:max-line-length
      if (this.newUser.id !== undefined && this.newUser.nom !== undefined && this.newUser.prenom !== undefined && this.newUser.dateNaissance !== undefined) {
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

