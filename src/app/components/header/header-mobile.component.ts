import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {TranslatePipe} from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [NgIf, NgForOf, TranslatePipe],
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent {
  @Input() menuWebItems: any[] = [];
  @Input() currencies: any[] = [];
  @Input() languages: any[] = [];
  @Input() selectedCurrency: any;
  @Input() selectedLanguage: any;

  @Output() currencyChange = new EventEmitter<any>();
  @Output() languageChange = new EventEmitter<any>();

  menuOpen = false;
  isCurrencyMenuOpen = false;
  isLanguageMenuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleCurrencyMenu() {
    this.isCurrencyMenuOpen = !this.isCurrencyMenuOpen;
  }

  toggleLanguageMenu() {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  selectCurrency(currency: any) {
    this.currencyChange.emit(currency);
    this.isCurrencyMenuOpen = false;
  }

  selectLanguage(language: any) {
    this.languageChange.emit(language);
    this.isLanguageMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Close currency menu if click outside
    if (!target.closest('[data-mobile-currency], [data-mobile-currency-list]')) {
      this.isCurrencyMenuOpen = false;
    }
    // Close language menu if click outside
    if (!target.closest('[data-mobile-language], [data-mobile-language-list]')) {
      this.isLanguageMenuOpen = false;
    }
    // Close main menu if click outside nav or hamburger
    if (this.menuOpen) {
      const nav = document.querySelector('nav.dropdown-animate');
      const hamburger = document.querySelector('button.material-icons');
      if (nav && !nav.contains(target) && hamburger && !hamburger.contains(target)) {
        this.menuOpen = false;
      }
    }
  }
}
