import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'id', 'fr']);
    translate.setDefaultLang('en');
  }
  
  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
  
}
