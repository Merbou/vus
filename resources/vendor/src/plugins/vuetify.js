
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import ar from "vuetify/es5/locale/ar"
import en from "vuetify/es5/locale/en"
import fr from "vuetify/es5/locale/fr"

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'fa', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    lang:
    {
        locales: { en, ar, fr },
        current: 'en'
    }

}

export default new Vuetify(opts) 