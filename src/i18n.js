import { createI18n } from 'vue-i18n';
//import { getLocalStorage } from '_/utils/local-storage-utils';

import en from '@/translations/en.json';
import fr from '@/translations/fr.json';

const messages = {
    en,
    fr,
   };
   
   //const preferredLocale = getLocalStorage('preferredLocale');
   const fallbackLocale = 'fr';
   //const locale = Object.keys(messages).includes(preferredLocale) ? preferredLocale : fallbackLocale; 
   
   const i18n = createI18n({
     legacy: false,
     globalInjection: true,
    // locale,
     fallbackLocale,
     messages,
   });
   
   export default i18n;