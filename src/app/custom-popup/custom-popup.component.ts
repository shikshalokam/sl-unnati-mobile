import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-custom-popup',
  templateUrl: './custom-popup.component.html',
  styleUrls: ['./custom-popup.component.scss'],
})
export class CustomPopupComponent implements OnInit {
  showPopup: boolean = true;
  @Input() header;
  @Input() body;
  constructor(
    public router: Router
  ) { }

  ngOnInit() { }
  closepopup() {
    this.showPopup = false;
  }
  public navigateToProfile() {
    this.closepopup();
    this.router.navigate(['/project-view/update-profile']);
  }
}