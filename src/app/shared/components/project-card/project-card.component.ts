import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() data;
  @Output() onGetTemplate = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  public getData(id) {
    this.onGetTemplate.emit(id);
  }
}
