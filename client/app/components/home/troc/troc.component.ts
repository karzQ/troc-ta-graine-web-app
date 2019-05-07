import { Component, OnInit } from '@angular/core';
import { Ad } from '../../../models/class/ad';
import { ads } from '../../../models/mocks/ads-mock';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SeedyService } from '../../../services/seedy/seedy.service';

@Component({
  selector: 'app-troc',
  templateUrl: './troc.component.html',
  styleUrls: ['./troc.component.less']
})
export class TrocComponent implements OnInit {

  adsList: Ad[] = [];
  context: string;
  seedyText: string;
  seedyIsClicked = false;

  adsModel: string;

  constructor(private deviceService: DeviceDetectorService, private modalService: NgbModal, public seedysInteraction: SeedyService) { }

  ngOnInit() {
    this.adsList = ads;
    this.seedyText = this.seedysInteraction.setSeedyText(this.seedyIsClicked);
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
