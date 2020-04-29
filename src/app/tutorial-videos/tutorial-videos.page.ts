import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-videos',
  templateUrl: './tutorial-videos.page.html',
  styleUrls: ['./tutorial-videos.page.scss'],
})
export class TutorialVideosPage implements OnInit {
  back = "/project-view/home";
  videos = [{
    title: 'How to use Unnati (App Tutorial Video)',
    url: 'https://www.youtube.com/watch?v=G9c3xQP_ZEU'
  }];
  constructor() { }

  ngOnInit() {
  }

  public open(videoUrl) {
    window.open(videoUrl, '_system')
   }
}