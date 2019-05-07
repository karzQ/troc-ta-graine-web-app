import { Component, OnInit } from '@angular/core';
import { ads } from '../../../models/mocks/ads-mock';
import { Ad } from '../../../models/class/ad';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.less']
})
export class AdsListComponent implements OnInit {

  context: string;
  adList: Ad[];

  constructor(public deviceService: DeviceDetectorService, private modalService: NgbModal) { }

  ngOnInit() {
    this.adList = ads;
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
