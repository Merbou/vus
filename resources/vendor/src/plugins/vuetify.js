
import Vue from 'vue'
import Vuetify from 'vuetify'
import ar from "vuetify/es5/locale/ar"
import en from "vuetify/es5/locale/en"
import fr from "vuetify/es5/locale/fr"

Vue.use(Vuetify)

const opts = {
    theme: {
        options: {
            cspNonce: document.getElementById("csp_nonce").content,
        },
    },
    icons: {
        iconfont: 'fa', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    lang:
    {
        locales: { en, ar, fr },
        current: 'en'
    },
}

export default new Vuetify(opts) 