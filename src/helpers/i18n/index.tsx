import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

import pt from './pt.json';
import en from './en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(I18nextBrowserLanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui
    resources: {
      en: {
        translation: en,
      },
      pt: {
        translation: pt,
      },
    },
    fallbackLng: 'en',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
