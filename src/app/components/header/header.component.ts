import {Component, HostListener, OnInit} from '@angular/core';
import {MenuWeb} from "../../models/MenuWeb";
import {NgForOf, NgIf} from "@angular/common";
import {Language, TranslationService} from "../../services/translation.service";
import {TranslatePipe} from "../../pipes/translate.pipe";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {HeaderDesktopComponent} from './header-desktop.component';
import {HeaderMobileComponent} from './header-mobile.component';

@Component({
  selector: 'app-header',
  imports: [
      NgIf,
    HeaderDesktopComponent,
    HeaderMobileComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public translationService: TranslationService,
              private breakpoint: BreakpointObserver) {}

  isCurrencyMenuOpen = false;
  isLanguageMenuOpen = false;

  selectedCurrency = {
    name: "Euro",
    symbol: "€"
  };

  selectedLanguage = {
    name: "English",
    code: "en"
  };

  currencies = [
      {
        name: "Euro",
        symbol: "€"
      },
      {
        name: "Dollar",
        symbol: "$"
      },
      {
        name: "Pound",
        symbol: "£"
      }

  ]

  languages = [
    {
      name: "Español",
      code: "es"
    },
    {
      name: "English",
      code: "en"
    },
    {
      name: "Português",
      code: "por"
    },
    {
      name: "Italiano",
      code: "it"
    }
  ]

  menuWebItems: MenuWeb[] = [
      {
        "id": 190,
        "name": "activities",
        "code": "Actividades",
        "subMenu": null,
        "webId": 61,
        "level": 0,
        "link": "actividades",
        "order": "1",
        "systemCode": null,
        "onlyPvp": false
      },
      {
        "id": 209,
        "name": "transfers",
        "code": "traslados",
        "subMenu": null,
        "webId": 61,
        "level": 1,
        "link": "traslados",
        "order": "1",
        "systemCode": "1",
        "onlyPvp": false
      },
      {
        "id": 210,
        "name": "hotels",
        "code": "hoteles",
        "subMenu": null,
        "webId": 61,
        "level": 1,
        "link": "hoteles",
        "order": "2",
        "systemCode": "1",
        "onlyPvp": false
      },
      {
        "id": 189,
        "name": "ourDestinations",
        "code": "nuestros destinos",
        "subMenu": null,
        "webId": 61,
        "level": 0,
        "link": "destinos",
        "order": "3",
        "systemCode": null,
        "onlyPvp": false
      }
    ];

  isMobile = false;

  ngOnInit() {
    this.breakpoint.observe([Breakpoints.Handset]).subscribe(state => {
      this.isMobile = state.matches;
    });
  }

  // Dropdown logic
  toggleCurrencyMenu() {
    this.isCurrencyMenuOpen = !this.isCurrencyMenuOpen;
  }

  toggleLanguageMenu() {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  closeCurrencyMenu() {
    this.isCurrencyMenuOpen = false;
  }

  closeLanguageMenu() {
    this.isLanguageMenuOpen = false;
  }

  selectCurrency(currency: any) {
    this.selectedCurrency = currency;
    this.closeCurrencyMenu();
  }

  selectLanguage(language: any) {
    this.selectedLanguage = language;
    this.setLanguage(language.code);
    this.closeLanguageMenu();
  }

  setLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
  }

  //Animacion
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Close currency menu if click outside
    if (!target.closest('[data-popover-target="menu"], [data-popover="menu"]')) {
      this.closeCurrencyMenu();
    }
    // Close language menu if click outside
    if (!target.closest('[data-popover-target="language-menu"], [data-popover="language-menu"]')) {
      this.closeLanguageMenu();
    }
  }
}
