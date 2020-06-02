import router from "./router"
import route from "./router/route"
import store from "./store"
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/token';


NProgress.configure({ showSpinner: true });


function accessRoutes(to, permissions) {
    let fullPath = to.fullPath.split("/").slice(1).join(".")

    if (fullPath.split(".").length > 1)
        return permissions.indexOf(fullPath) == -1
    else
        return permissions.indexOf(to.name) == -1

}



async function privateField(to, form, next) {
    return new Promise(async (resolve, reject) => {
        const { roles, permissions, ...res } = await store.dispatch("userInfo")

        const mail = route.mail()
        if (res.email_verified_at) {
            store.dispatch("initRoutes", route.PermissionsRoutes(permissions, roles, "super-admin"))
            //email verified zone
            if (to.path == mail.path) {
                //whene mail verifed u cant go to activation mail
                //redirection to your path
                resolve({ path: "/dashboard" })
            }

            if (roles.indexOf("super-admin") == -1)
                if (accessRoutes(to, permissions))
                    reject({ path: "/dashboard" })

        } else {

            if (to.path !== mail.path) {
                resolve({ path: mail.path });
            } else resolve()
        }

        reject()
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
