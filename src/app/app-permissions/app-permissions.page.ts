import { Component, OnInit } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions';
@Component({
  selector: 'app-app-permissions',
  templateUrl: './app-permissions.page.html',
  styleUrls: ['./app-permissions.page.scss'],
})
export class AppPermissionsPage implements OnInit {

  constructor(
    private androidPermissions: AndroidPermissions
  ) {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
   }

  ngOnInit() {
  }

}
