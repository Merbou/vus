import Vue from "vue";
import Router from "vue-router";
import route from "./route"
import middlewares from "./middlewares"

Vue.use(Router);
const opts = {
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: route.constant(false, ["init", "portail"]),
}

const router = new Router(opts);

route.middleware({ router, middlewares })

export default router


