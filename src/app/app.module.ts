import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { NetworkService } from './network.service';
import { CurrentUserProvider } from './current-user';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditTaskPageModule } from '../app/edit-task/edit-task.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Market } from '@ionic-native/market/ngx';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApiProvider } from '../app/api/api';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common'
//Google charts
// import { FCM } from '@ionic-native/fcm/ngx';
// import { FcmProvider } from './fcm';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Badge } from '@ionic-native/badge/ngx';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, HttpModule,
    HttpClientModule, FormsModule,ReactiveFormsModule, EditTaskPageModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar, Network, NetworkService, CurrentUserProvider, InAppBrowser, AppLauncher, ApiProvider, Market, DatePicker, DatePipe,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // FCM,
    // FcmProvider,
    LocalNotifications, Badge
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public statusBar: StatusBar) {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#fff');
  }
}
platformBrowserDynamic().bootstrapModule(AppModule);
