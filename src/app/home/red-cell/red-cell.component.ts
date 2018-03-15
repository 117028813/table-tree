import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-cell',
  templateUrl: './red-cell.component.html',
  styleUrls: ['./red-cell.component.css']
})
export class RedCellComponent implements OnInit {

  params

  constructor() { }

  ngOnInit() {
  }

  agInit(params) {
    this.params = params
  }

}
