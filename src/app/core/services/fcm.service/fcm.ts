import { Injectable } from "@angular/core";
// import { FCM } from '@ionic-native/fcm/ngx';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic";
import { Platform } from "@ionic/angular";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { KendraApiService } from "../kendra-api/kendra-api.service";
import { urlConstants } from "../../constants";

@Injectable({
  providedIn: "root",
})
export class FcmProvider {
  fcmDeviceId: string;
  constructor(
    // public fcm: FCM,
    public localStorage: Storage,
    public platform: Platform,
    public kendraApiService: KendraApiService,
    public localNotification: LocalNotifications,
    public router: Router
  ) {}

  initializeFCM() {
    if (this.platform.is("android")) {
      FCM.requestPushPermission().then(
        (data) => {
          console.log(data, "data");
        },
        (error) => {
          console.log(error, "error");
        }
      );
      this.initializeFirebaseAndroid();
      // this.shedule();
    } else {
      // this.initializeFirebaseIOS()
    }
  }

  initializeFirebaseAndroid() {
    this.subscribeToPushNotifications();
    this.localNotificationClickHandler();
    this.localStorage.get("deviceId").then((token) => {
      if (token) {
        this.fcmDeviceId = token;
      } else {
        FCM.getToken().then(
          (token) => {
            this.fcmDeviceId = token;
            this.localStorage.set("deviceId", token).then((token) => {
              // this.subscribeToChannels('allUsers');
              this.registerDeviceID();
            });
          },
          (error) => {}
        );
      }
    });
    FCM.onTokenRefresh().subscribe((token) => {
      this.fcmDeviceId = token;
      this.localStorage.set("deviceId", token);
      this.registerDeviceID();
    });
  }

  subscribeToPushNotifications() {
    FCM.onNotification().subscribe((notificationData) => {
      if (!notificationData) {
        return;
      }
      console.log(notificationData);
    
      //Will be triggered if the user clicks on the notification and come to the app
      if (notificationData.wasTapped) {
        this.onNotificationClick(notificationData);
      } else {
        //Will be triggered if the user is using the app(foreground);
        this.triggerLocalNotification(notificationData);
      }
    });

    FCM.getInitialPushPayload().then(
      (notificationData) => {
        if (!notificationData) {
          return;
        }
        //Will be triggered if the user clicks on the notification and come to the app
        if (notificationData.wasTapped) {
          this.onNotificationClick(notificationData);
        } else {
          //Will be triggered if the user is using the app(foreground);
          this.triggerLocalNotification(notificationData);
        }
      },
      (error) => {}
    );
  }

  localNotificationClickHandler() {
    this.localNotification.on("click").subscribe(
      (success) => {
        this.onNotificationClick(success);
      },
      (error) => {
      }
    );
  }

  triggerLocalNotification(notificationData) {
    let obj = notificationData;
    this.localNotification.schedule(obj);
  }

  registerDeviceID(token?: string) {
    const payload = {
      deviceId: this.fcmDeviceId,
      os: this.platform.is("android") ? "android" : "ios",
      app: "unnati",
      apptype: "improvement-project",
    };
    const config = {
      url: urlConstants.API_URLS.REGISTERDEVICE,
      payload: payload,
    };
    this.kendraApiService.post(config).subscribe(
      (data) => {},
      (error) => {}
    );
  }

  public onNotificationClick(notificationMeta) {
    if (typeof notificationMeta.payload == "string") {
      notificationMeta.payload = JSON.parse(notificationMeta.payload);
    }
    switch (notificationMeta.action) {
      case "mapping": {
        this.router.navigate(["/"]).then(() => {
          this.router.navigate(["/menu/template-view", notificationMeta.payload.project_id]);
        });
        break;
      }
    }
  }
}
