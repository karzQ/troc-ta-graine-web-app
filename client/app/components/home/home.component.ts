import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { transition, trigger, state, style, animate } from '@angular/animations';
import { SeedyService } from '../../services/seedy/seedy.service';
import { SearchPipe } from '../../services/pipes/search.pipe';
import { Ad } from '../../models/class/ad';
import { ads } from '../../models/mocks/ads-mock';
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [SeedyService, SearchPipe],
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

  adsList: Ad[] = [];

  ngOnInit() {
    console.log(`Est-ce un mobile ? '${this.deviceService.isMobile()}`);
    console.log(`Est-ce un pc ? '${this.deviceService.isDesktop()}`);
    console.log(`Est-ce une tablette ? '${this.deviceService.isTablet()}`);
    this.menuIsHidden = true;
    this.seedyText = this.seedysInteraction.setSeedyText(this.seedyIsClicked);

    this.adsList = ads;
  }

  showModal(template, context?: string) {

    if (context !== undefined) {
      this.context = context;
    }

    if (this.deviceService.isDesktop() === true) {
      this.modalService.open(template, { centered: true, size: 'lg' }).result.then(
        (closeResult) => {
            // modal close
            console.log('modal closed : ', closeResult);
        }, (dismissReason) => {
            // modal Dismiss
            if (dismissReason === ModalDismissReasons.ESC) {
                console.log('modal dismissed when used pressed ESC button');
            } else if (dismissReason === ModalDismissReasons.BACKDROP_CLICK) {
                console.log('modal dismissed when used pressed backdrop');
            } else {
                console.log(dismissReason);
            }
        });
    } else {
      this.modalService.open(template, { centered: true }).result.then(
        (closeResult) => {
            // modal close
            console.log('modal closed : ', closeResult);
        }, (dismissReason) => {
            // modal Dismiss
            if (dismissReason === ModalDismissReasons.ESC) {
                console.log('modal dismissed when used pressed ESC button');
            } else if (dismissReason === ModalDismissReasons.BACKDROP_CLICK) {
                console.log('modal dismissed when used pressed backdrop');
            } else {
                console.log(dismissReason);
            }
        });
    }
  }

  redirectTo(path: string): void {
    if (path === 'forum') {
      window.location.href = 'http://www.forum.troctagraine.fr';
    }
  }
}
