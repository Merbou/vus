import router from "./router"
import route from "./router/route"
import store from "./store"
import middleware from "./router/middleware"




const midd = new middleware(router, route)


midd.private((to, form, next) => {
    store.dispatch("userInfo")
})

export default midd.export()