import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeSearchModalComponent } from '../../../home/home-search-modal/home-search-modal.component';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private modalCtrl: ModalController) { }
  @Output() onFocus = new EventEmitter();
  @Output() onSearch = new EventEmitter();
  search;
  ngOnInit() {
  }


  onSearcBtnClick() {
    // this.onSearch.emit()
    this.onFocus.emit();
  }

  searchHandler() {
    this.onSearch.emit(this.search);
  }
}
