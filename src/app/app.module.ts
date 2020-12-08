import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

// import { FCM } from '@ionic-native/fcm/ngx';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from "@ionic/storage";
import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ApiInterceptor } from "./core";
import { AppVersion } from "@ionic-native/app-version/ngx";
import { MomentModule } from "ngx-moment";
import { Network } from "@ionic-native/network/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { Deeplinks } from "@ionic-native/deeplinks/ngx";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { FCM } from '@ionic-native/fcm/ngx';
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { DatePicker } from "@ionic-native/date-picker/ngx";
import { Camera } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import { Chooser } from "@ionic-native/chooser/ngx";
import { IOSFilePicker } from "@ionic-native/file-picker/ngx";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient],
      },
    }),
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    MomentModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Network,
    FileTransfer,
    Deeplinks,
    TranslateModule,
    // FCM,
    DatePicker,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    AppVersion,
    Camera,
    File,
    WebView,
    FilePath,
    Chooser,
    IOSFilePicker,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private translate: TranslateService) {
    this.setDefaultLanguage();
  }

  private setDefaultLanguage() {
    this.translate.setDefaultLang('en');
  }
}
