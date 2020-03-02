import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-custom-popup',
  templateUrl: './custom-popup.component.html',
  styleUrls: ['./custom-popup.component.scss'],
})
export class CustomPopupComponent implements OnInit {
  @Input() header;
  @Input() body;
  @Input() button;
  @Input() isActionable;
  @Input() showPopup: boolean;
  constructor(
    public router: Router,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.getTranslateKeys();
  }
  closepopup() {
    this.showPopup = false;
  }
  public navigateToProfile() {
    this.closepopup();
    if (this.isActionable) {
      this.router.navigate([this.isActionable]);
    }
    this.showPopup = false;
  }
  public getTranslateKeys() {
    this.translate.get([this.header, this.body, this.button]).subscribe((text: string) => {
      this.header = text[this.header];
      this.body = text[this.body];
      this.button = text[this.button];
      this.showPopup = true;
    });
  }
}