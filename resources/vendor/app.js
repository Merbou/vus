import Vue from "vue"
import App from "./views/App"
import './permission'

import vuetify from "./src/plugins/vuetify"
import router from "./router"
import store from "./store/index"
import mixin from "./utils/mixin"

Vue.mixin(mixin)


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
