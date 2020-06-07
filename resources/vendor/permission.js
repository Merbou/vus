import router from "./router"
import route from "./router/route"
import store from "./store"
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/token';
import { permissionsRoute } from "@/utils/permission"


NProgress.configure({ showSpinner: true });



function privateField(to, form, next) {
    return new Promise((resolve, reject) => {
        store.dispatch("userInfo").then(async ({ roles, permissions, ...res }) => {
            const asyncRoutes = route.PermissionsRoutes(permissions, roles, "super-admin")


            if (store.getters.routes.length < 1)
                store.dispatch("initRoutes", asyncRoutes).then((_res) => {
                    // router.addRoutes(asyncRoutes) // addRoutes not working must fix !!  
                })

            const mail = route.mail()
            if (res.email_verified_at) {


                //email verified zone
                if (to.path == mail.path) {
                    //whene mail verifed u cant go to activation mail
                    //redirection to your path
                    resolve({ path: "/dashboard" })
                }


                if (roles.indexOf("super-admin") == -1)
                    if (permissionsRoute(to, permissions))
                        reject({ path: "/dashboard" })

            } else {

                if (to.path !== mail.path) {
                    resolve({ path: mail.path });
                } else resolve()
            }

            reject()
        }).catch((err) => {
            store.dispatch("LogOut")
            reject({ path: "/login" })
        })
    })

}











router.beforeEach((to, from, next) => {
    NProgress.start()
    if (getToken()) {

        ///PRIVATE ROUTES
        privateField(to, from, next).then(res => {
            next(res)

        }).catch((rej) => {
            if (route.pathAuth().indexOf(to.path) > -1) {
                console.log(route.welcome())
                if (from.path === route.welcome().path)
                    next("/dashboard")
                next(route.welcome());

            } else if (rej) {
                next(rej)

            } else next()
        })
    } else {


        ///PUBLIC ROUTES 


        if (route.pathClose().indexOf(to.path) > -1) {
            ///AUTH ROUTES


            next("/login")
        } else next()


    }

})


router.afterEach(() => {

    NProgress.done()

})


export default router
