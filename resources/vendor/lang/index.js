import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
import elementEnLocale from 'element-ui/lib/locale/lang/en'; 
import elementFrLocale from 'element-ui/lib/locale/lang/fr';
import elementArLocale from 'element-ui/lib/locale/lang/ar';
import enLocale from './en';
import frLocale from './fr';
import arLocale from './ar';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  fr: {
    ...frLocale,
    ...elementFrLocale,
  },
  ar: {
    ...arLocale,
    ...elementArLocale,
  },
};

const i18n = new VueI18n({
  // set locale

  locale: Cookies.get('language') || 'en',
  // set locale messages
  messages,
});

export default i18n;
