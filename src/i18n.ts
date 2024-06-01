import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
    name: 'customDetector',
    lookup: () => {
        const lng = localStorage.getItem('i18nextLng') || '';
        if (lng.substring(0, 2) === 'en') {
            return 'en';
        }
        return 'id';
    },
});

i18n
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            // order and from where user language should be detected
            order: ['customDetector'],
        },
        /* lng: 'id', */
        fallbackLng: 'en',
        debug: false,

        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    }, () => {});

export default i18n;
