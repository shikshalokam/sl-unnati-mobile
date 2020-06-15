import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  @Input() url;
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() { }
  sanitizeUrl() {
    console.log(this.url, "this.url this.url");
    const videoId = this.url.substr(this.url.lastIndexOf('/'))
    const finalLink = `https://www.youtube.com/embed${videoId}`
    return this.sanitizer.bypassSecurityTrustResourceUrl(finalLink);
  }
}