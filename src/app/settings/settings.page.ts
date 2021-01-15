import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService, localStorageConstants, LocalStorageService } from '../core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public language: string = this.translate.currentLang;


  languages = [
    {
      lang: 'English',
      value: 'en'
    },
    {
      lang: 'हिंदी',
      value: 'hi'
    }

    // {
    //   lang: 'LABELS.TELUGU',
    //   value: 'te'
    // },
    // {
    //   lang: 'LABELS.KANNADA',
    //   value: 'ka'
    // }

  ]

  constructor(private translate: TranslateService,
    private languageServ: LanguageService,
    private localStorage: LocalStorageService) {
  }

  ngOnInit() {
  }

  languageChange() {
      this.localStorage.setLocalStorage(localStorageConstants.SELECTED_LANGUAGE, this.language);
      this.languageServ.setLanguage(this.language)
  }

}
