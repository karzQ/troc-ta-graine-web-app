import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-your-garden',
  templateUrl: './share-your-garden.component.html',
  styleUrls: ['./share-your-garden.component.less']
})
export class ShareYourGardenComponent implements OnInit {

  uploaded_image;

  constructor() { }

  ngOnInit() {
  }

  getValue(test: any): void {
    console.log(test);
  }

  
}
