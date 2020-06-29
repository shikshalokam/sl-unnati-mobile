import { Component, OnInit } from '@angular/core';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tutorial-videos',
  templateUrl: './tutorial-videos.page.html',
  styleUrls: ['./tutorial-videos.page.scss'],
})
export class TutorialVideosPage implements OnInit {
  back = "/project-view/home";
  videos = [{
    title: 'How to use Unnati (App Tutorial Video)',
    url: 'https://youtu.be/G9c3xQP_ZEU'
    // https://youtu.be/G9c3xQP_ZEU
  }];
  opened:boolean = false;
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  // public open(videoUrl) {
  //   window.open(videoUrl, '_system')
  // }

  async open(video) {
    this.opened= true;
    const modal = await this.modalController.create({
      component: VideoPlayerComponent,
      componentProps: {
        'video': video,
      }
    });
    modal.onDidDismiss().then((data: any) => {
      this.opened= false;
    })
    return await modal.present();
  }
}