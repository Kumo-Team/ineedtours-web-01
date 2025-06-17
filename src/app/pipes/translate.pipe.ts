import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { TRANSLATIONS } from '../i18n';

@Pipe({
    name: 'translate',
    standalone: true,
    pure: false // Make it impure so it updates when language changes
})
export class TranslatePipe implements PipeTransform {
    constructor(private translationService: TranslationService) {}

    transform(key: string): string {
        const lang = this.translationService.getCurrentLanguage();
        // TRANSLATIONS may be undefined during initial module loading (circular deps)
        const translations = TRANSLATIONS[lang];

        // Gracefully handle undefined translations object or missing key
        if (!translations) {
            return key;
        }

        return (translations as any)[key] ?? key;
    }
}
