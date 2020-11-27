import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { localStorageConstants, LocalStorageService } from '../core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public language: string = this.translate.currentLang;
  
  
  languages = [
    {
      lang: 'LABELS.ENGLISH',
      value: 'en'
    },
    {
      lang: 'LABELS.TELUGU',
      value: 'te'
    },
    {
      lang: 'LABELS.KANNADA',
      value: 'ka'
    }
    
  ]

  constructor(private translate: TranslateService,
    private localStorage: LocalStorageService) { 
  }

  ngOnInit() {
  }

  languageChange() {
    this.localStorage.setLocalStorage(localStorageConstants.SELECTED_LANGUAGE, this.language);
    this.translate.use(this.language); 
  }

}
