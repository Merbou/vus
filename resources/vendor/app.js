import Vue from "vue"
import App from "./views/App"
import './permission'

import vuetify from "./src/plugins/vuetify"
import i18n from "./src/plugins/i18n"
import router from "./router"
import store from "./store/index"
import mixin from "./utils/mixin"
import './src/plugins/laravel-echo'

Vue.mixin(mixin)

new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
