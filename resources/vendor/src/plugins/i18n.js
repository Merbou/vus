import Vue from 'vue'

import VueI18n from 'vue-i18n'
import messages from "@/locales"
import { getRessources } from "@/utils/layout"
const opts = {
    locale: getRessources()["locale"], // set locale
    fallbackLocale: 'en',
    messages

}

Vue.use(VueI18n)


export default new VueI18n(opts)
