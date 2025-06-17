import { ES_TRANSLATIONS } from './es';
import { EN_TRANSLATIONS } from './en';
import { IT_TRANSLATIONS } from './it';
import { POR_TRANSLATIONS } from './por';
import { Language } from '../services/translation.service';
import { Translations } from './translations.interface';

export const TRANSLATIONS: Record<Language, Translations> = {
    es: ES_TRANSLATIONS,
    en: EN_TRANSLATIONS,
    it: IT_TRANSLATIONS,
    por: POR_TRANSLATIONS,
};

export * from './translations.interface';
