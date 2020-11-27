import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeSearchModalComponent } from '../home/home-search-modal/home-search-modal.component';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async onSearcBtnClick() {
    const modal = await this.modalCtrl.create({
      component: HomeSearchModalComponent,
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
