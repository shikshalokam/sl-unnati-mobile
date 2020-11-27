import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasklist-card',
  templateUrl: './tasklist-card.component.html',
  styleUrls: ['./tasklist-card.component.scss'],
})
export class TasklistCardComponent implements OnInit {
 @Input() cardData: any;
  constructor() { }

  ngOnInit() {
  }

}
