import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garden-formular',
  templateUrl: './garden-formular.component.html',
  styleUrls: ['./garden-formular.component.less']
})
export class GardenFormularComponent implements OnInit {

  uploaded_image;

  constructor() { }

  ngOnInit() {
  }

  getValue(test: any): void {
    console.log(test);
  }

}
