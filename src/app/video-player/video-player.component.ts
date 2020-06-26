import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  @Input() video;
  finalLink;
  constructor(
    private sanitizer: DomSanitizer,
    private modal: ModalController,
    private screenOrientation: ScreenOrientation
  ) { 
    // try {
    //   this.screenOrientation.lock(this.screenOrientation.);
    // } catch (error) {
    // }
  }

  ngOnInit() {
    this.sanitizeUrl();
  }
  sanitizeUrl() {
    const videoId = this.video.url.substr(this.video.url.lastIndexOf('/'))
    const finalLink = `https://www.youtube.com/embed${videoId}`
    this.finalLink = this.sanitizer.bypassSecurityTrustResourceUrl(finalLink);
  }
  close() {
    this.modal.dismiss();
  }
}