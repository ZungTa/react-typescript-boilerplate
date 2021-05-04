import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ko from './locales/ko';
import en from './locales/en';

export const resources = {
  ko: {
    translation: ko,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'ko',
  debug: true,
  keySeparator: '.', // default value
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
});

export default i18n;
