import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth"

import getters from "./getters";

Vue.use(Vuex);

const opts = {
    modules: { auth },
    getters
}

export default new Vuex.Store(opts);
