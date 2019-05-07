import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { transition, trigger, state, style, animate } from '@angular/animations';
import { SeedyService } from '../../services/seedy/seedy.service';
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [SeedyService],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
      })),

      transition('void <=> *', [
        animate(750)
      ]),
    ]),
  ]
})

export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal, public deviceService: DeviceDetectorService, public seedysInteraction: SeedyService,
      public authService: AuthenticationService) { }

  actualitiesList = [];

  seedyText: string;
  seedyIsClicked = false;

  context: string;
  menuIsHidden: boolean;
  actualDevice: string;


  ngOnInit() {
    console.log(`Est-ce un mobile ? '${this.deviceService.isMobile()}`);
    console.log(`Est-ce un pc ? '${this.deviceService.isDesktop()}`);
    console.log(`Est-ce une tablette ? '${this.deviceService.isTablet()}`);
    this.menuIsHidden = true;
    this.seedyText = this.seedysInteraction.setSeedyText(this.seedyIsClicked);
  }

  redirectTo(path: string): void {
    if (path === 'forum') {
      window.location.href = 'http://www.forum.troctagraine.fr';
    }
  }
}
