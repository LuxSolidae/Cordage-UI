/* global PRODUCTION:false */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import moment from 'moment';
import 'moment/locale/es';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLng = 'en';
const availableLanguages = ['en', 'es'];

// availableLanguages.forEach((element) => {
//   if (element !== 'en') {
//     import(`moment/locale/${element}`);
//   }
// });

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng,
    debug: !PRODUCTION,
    whitelist: availableLanguages,
    ns: ['common', 'translation'],
    defaultNS: 'translation',

    interpolation: {
      escapeValue: false,
      // nsSeparator: false,
      // keySeparator: false,

      format: (value, format, lng) => {
        /* if the format is 'currentDate', then take its __value__ transfom it to a moment object,
         * translate it to the current language and show it in Month DD, YYYY format. */
        if (format === 'uppercase') return value.toUpperCase();
        if (value instanceof Date) return moment(value).locale(lng).format(format);
        if (value instanceof moment && format === 'ago') return value.locale(lng).fromNow(true);
        if (value instanceof moment) return value.locale(lng).format(format);
        return value;
      },
    },

    loadPath: '/locales/{{lng}}/{{ns}}.json',
    // // path to post missing resources
    // addPath: 'locales/add/{{lng}}/{{ns}}',
    // saveMissing: true,
  });


export default i18n;
