import { Component, OnInit } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Router } from '@angular/router';
import { ToastService } from '../toast.service';
@Component({
  selector: 'app-app-permissions',
  templateUrl: './app-permissions.page.html',
  styleUrls: ['./app-permissions.page.scss'],
})
export class AppPermissionsPage implements OnInit {

  disableBtn: boolean = true;
  showWarning: boolean = false
  popMsg = {
    type: 'permissions',
    title: 'Warning !',
    text: 'Dear user, you have not provided us permissions to access certain resources',
    showCloseButton: false,
    titleCss: {
      fontSize: '24px',
      color: '#b23e33',
      bottomBorder: false
    },
    textCss: {
      fontSize: '16px',
      color: '#b23e33;'
    },
    buttons: [{
      title: 'Back',
      color: 'primary',
    },
    {
      title: 'Continue',
      color: 'primary',
      isActionable: '/project-view/home',
    }]
  }
  requiredPermissions = [{
    icon: '../assets/images/camera1.svg',
    title: 'Camera',
    subTitle: 'Allows app to take photos and videos',
    isChecked: false,
    id: this.androidPermissions.PERMISSION.CAMERA
  },
  {
    icon: '../assets/images/folder.svg',
    title: 'Read and Write Files',
    subTitle: 'Allows app to save and upload local files',
    isChecked: false,
    id: this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
  },
  {
    icon: '../assets/images/notifications.svg',
    title: 'Notifications',
    subTitle: 'Allows app to send you information',
    isChecked: false,
    id: this.androidPermissions.PERMISSION.ACCESS_NOTIFICATION_POLICY
  }
  ]
  requests = [];
  constructor(
    private androidPermissions: AndroidPermissions,
    private toastService: ToastService,
    public router: Router,
  ) {
    toastService.popClose.subscribe(data => {
      this.showWarning = false;
    })
    toastService.requestPermissions.subscribe(data => {
      console.log('in requestPermissions');
      this.showWarning = false;
      console.log(this.requests, " this.requests");
      this.getPermissions();
    })
    // this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
  }


  ngOnInit() {
  }
  public permissionGivenTo(request) {
    this.disableBtn = true;
    console.log(request);
    if (this.requests.length > 0) {
      let data = this.requests.find(ob => ob.title === request.title);
      if (!data) {
        this.requests.push(request);
      } else {
        this.requests.forEach(element => {
          if (element.isChecked) {
            this.disableBtn = false;
          }
          if (element.title === request.title) {
            element.isChecked = request.isChecked;
          }
        });
      }
    } else {
      this.requests.push(request);
    }
    this.requests.forEach(element => {
      if (element.isChecked) {
        this.disableBtn = false
      }
    });
  }

  submit() {
    let request: any = [];
    this.requests.forEach(element => {
      if (element.isChecked) {
        request.push(element.id);
      }
    });
    if (request.length == this.requiredPermissions.length) {
      this.getPermissions();
    } else {
      this.showWarning = true;
    }

  }
  public getPermissions() {
    let request: any = [];
    this.requests.forEach(element => {
      if (element.isChecked) {
        request.push(element.id);
      }
    });
    request.forEach(element => {
      this.androidPermissions.checkPermission(element).then(
        result => {
          // code where you call camera directive
          console.log('Has permission?', result.hasPermission);
          if (!result.hasPermission) {
            this.androidPermissions.requestPermission(element).then(resp => {
              console.log(resp, 'resp');
            }, error => { console.log(error, "error") })
            this.router.navigate(['/project-view/home'])
          }
        },
        err => this.androidPermissions.requestPermission(element))
    });
  }
}
