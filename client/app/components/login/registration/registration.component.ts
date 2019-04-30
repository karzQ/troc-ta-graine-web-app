import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../../../services/inscription/inscription.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less'],
  providers: [InscriptionService]
})
export class RegistrationComponent implements OnInit {

  constructor(public registration: InscriptionService) { }

  ngOnInit() {
  }

}
