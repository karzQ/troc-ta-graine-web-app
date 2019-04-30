import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SeedysDiags } from '../../models/mocks/seedys-dialogs';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
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

  constructor(private modalService: NgbModal, public deviceService: DeviceDetectorService) { }

  actualitiesList = [];

  seedyText: string;

  context: string;
  menuIsHidden: boolean;
  seedyIsClicked = false;
  seedysDiags = SeedysDiags;

  actualDevice: string;

  ngOnInit() {
    console.log(`Est-ce un mobile ? '${this.deviceService.isMobile()}`);
    console.log(`Est-ce un pc ? '${this.deviceService.isDesktop()}`);
    console.log(`Est-ce une tablette ? '${this.deviceService.isTablet()}`);
    this.menuIsHidden = true;
  }

  changeSeedysText(): number {
    const randomVal = Math.floor(Math.random() * (this.seedysDiags.length - 1)) + 1;
    // console.log(randomVal);
    return randomVal;
  }

  chooseSeedysText(): string {
    return this.seedysDiags[this.changeSeedysText()];
  }

  setSeedyText(): void {
    let text: string;
    if (this.seedyIsClicked === true) {
      text = 'Noooon pitié !!! Stooop !!!!';
    } else {
      text = this.chooseSeedysText();
    }
    // console.log(text);
    this.seedyText = text;
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
}
