import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.less']
})
export class FormularComponent implements OnInit {

  donModel: string;
  trocModel: string;

  constructor() { }

  ngOnInit() {
  }

}
