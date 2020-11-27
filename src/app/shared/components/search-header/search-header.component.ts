import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
})
export class SearchHeaderComponent implements OnInit {

  @Input() placeholder: string = 'LABELS.SEARCH';
  @Output() onSearch = new EventEmitter();
  value;
  constructor(
    private modal: ModalController
  ) { }

  ngOnInit() { }

  close() {
    this.modal.dismiss();
  }
  search(event) {
    this.onSearch.emit(this.value);
  }
}