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
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  // public open(videoUrl) {
  //   window.open(videoUrl, '_system')
  // }

  async open(video) {
    const modal = await this.modalController.create({
      component: VideoPlayerComponent,
      componentProps: {
        'video': video,
      }
    });
    return await modal.present();
  }
}