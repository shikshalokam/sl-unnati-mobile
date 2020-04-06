import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.page.html',
  styleUrls: ['./newsfeed.page.scss'],
})
export class NewsfeedPage implements OnInit {
  back = 'project-view/home';
  post: any = {};
  file;
  imageUrl;
  constructor() { }
  ngOnInit() {
  }

  selectedFile(imageInput: any, type) {
    let value;
    const file: File = imageInput.files[0];
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => {
      value = event.target.result.split(',');
      if (type == 'image') {
        this.post.imageUrl = value[1];
      } else {
        this.post.file = {
          url: event.target.result,
          name: this.file.name
        }
        // this.toastService.successToast('message.file_uploaded');
      }
    };
    reader.readAsDataURL(file);
  }
  public postNews() {
    console.log(this.post, "post");
  }
}