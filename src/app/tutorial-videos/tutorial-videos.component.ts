import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from '../core';
import { localStorageConstants } from '../core/constants/localStorageConstants';
import { VideoPlayerComponent } from './video-player/video-player.component';


@Component({
  selector: 'app-tutorial-videos',
  templateUrl: './tutorial-videos.component.html',
  styleUrls: ['./tutorial-videos.component.scss'],
})
export class TutorialVideosComponent implements OnInit {
  back = "/menu";
  videos: any;
  constructor( public modalController: ModalController,
    private storage: LocalStorageService) {
     

   }

   ngOnInit() {
    this.storage.getLocalStorage(localStorageConstants.DYNAMIC_LINKS).then(success =>{
      this.videos = success['Tutorial-video']['metaInformation']['videos'];
    }).catch(error =>{
    })
  }

  async open(video) {
    const modal = await this.modalController.create({
      component: VideoPlayerComponent,
      componentProps: {
        'video': video,
      }
    });
    modal.onDidDismiss().then((data: any) => {
    })
    return await modal.present();
  }

}
