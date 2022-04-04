import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = {
    name: 'Berry',
    language: 'en',
    cart: ['flower', 'bottle', 'towel'],
    cartItemCount: 0
  }

  constructor(private translate: TranslateService) {
    const lang = sessionStorage.getItem("lang");
    this.user.language = (lang !== null) ? lang : this.user.language;
    this.setLanguage(this.user.language);
  }

  ngOnInit() {
    this.user.cartItemCount = this.user.cart.length;
  }

  setLanguage(lang: string) {
    sessionStorage.setItem("lang", lang);
    this.translate.addLangs([lang, 'klingon']);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

}
