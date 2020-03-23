import router from "./router"
import route from "./router/route"
import store from "./store"
import middleware from "./router/middleware"




const midd = new middleware(router, route)


midd.private((to, form, next) => {
    store.dispatch("userInfo")
})


// NProgress.configure({ showSpinner: true });


// const publicList = [...route.pathPublic(), ...route.pathAuth()];

// router.beforeEach((to, from, next) => {
//     NProgress.start()
//     debugger
//     if (getToken()) {

//         console.log(route.pathAuth())
//         ///PRIVATE ROUTES
//         if (route.pathAuth().indexOf(to.path) > -1) {

//             //EXCEPTIONS ROUTES
//             next(route.welcome());

//         } else next()

//     } else {

//         ///PUBLIC ROUTES 
//         if (route.pathPrivate().indexOf(to.path) > -1)
//             ///AUTH ROUTES
//             next("/login")

//     }

//     next()
//     NProgress.done()
// })



// router.afterEach((to, from) => {

//     if (from.path === "/")
//         if (getToken())
//             if (route.pathAuth().indexOf(to.path) > -1)
//                 router.push(route.welcome())

// })

export default midd.export()