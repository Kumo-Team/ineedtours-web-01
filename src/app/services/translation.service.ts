import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'it' | 'es' | 'en' | 'por';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    private currentLanguageSubject = new BehaviorSubject<Language>('en'); // English as default
    currentLanguage$ = this.currentLanguageSubject.asObservable();

    constructor() {
        // Try to load saved language from localStorage
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && ['por', 'es', 'en', 'it'].includes(savedLang)) {
            this.currentLanguageSubject.next(savedLang);
        }
    }

    getCurrentLanguage(): Language {
        return this.currentLanguageSubject.value;
    }

    setLanguage(lang: Language): void {
        this.currentLanguageSubject.next(lang);
        localStorage.setItem('language', lang);
    }
}
