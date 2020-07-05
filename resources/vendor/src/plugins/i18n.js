import Vue from 'vue'

import VueI18n from 'vue-i18n'
import messages from "@/locales"
import ressources from "@/utils/layout"
const ress = new ressources();

const opts = {
    locale: ress.get()["locale"], // set locale
    fallbackLocale: 'en',
    messages

}

Vue.use(VueI18n)


export default new VueI18n(opts)
