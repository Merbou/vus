import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth"
import app from "./modules/app"

import getters from "./getters";

Vue.use(Vuex);

const opts = {
    modules: { auth, app },
    getters
}

export default new Vuex.Store(opts);
