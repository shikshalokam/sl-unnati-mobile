import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.scss'],
})
export class NotificationCardComponent implements OnInit {

  @Input() notification;
  @Output() notificationevent = new EventEmitter()

  constructor() { }


  ngOnInit() {}

  notificationClick(notification){
    this.notificationevent.emit(notification)
  }

}
