import Vue from "vue";
import Router from "vue-router";
import route from "./route"


Vue.use(Router);

const opts = {
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: route.all(),
}
export default new Router(opts);


