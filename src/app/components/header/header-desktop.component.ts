import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {TranslatePipe} from '../../pipes/translate.pipe';

@Component({
  selector: 'app-header-desktop',
  standalone: true,
  imports: [NgForOf, NgIf, TranslatePipe],
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.css']
})
export class HeaderDesktopComponent {
  @Input() menuWebItems: any[] = [];
  @Input() currencies: any[] = [];
  @Input() languages: any[] = [];
  @Input() selectedCurrency: any;
  @Input() selectedLanguage: any;

  // events will be bound by parent
  @Input() toggleCurrencyMenu!: () => void;
  @Input() toggleLanguageMenu!: () => void;
  @Input() selectCurrency!: (c: any) => void;
  @Input() selectLanguage!: (l: any) => void;
  @Input() isCurrencyMenuOpen = false;
  @Input() isLanguageMenuOpen = false;
}
