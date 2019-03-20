import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  visible: boolean;

  constructor() { }

  ngOnInit() {
    this.visible = false;
  }
  
  toggleState(): void {
    this.visible = !this.visible;
  }

  getValue(): void {
    console.log(this.visible);
  }

}
