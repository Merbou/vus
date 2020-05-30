import router from "./router"
import route from "./router/route"
import store from "./store"
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/token';


NProgress.configure({ showSpinner: true });




async function privateField(to, form, next) {
    return new Promise(async (resolve, reject) => {
        const res = await store.dispatch("userInfo")

        const mail = route.mail()
        if (res.email_verified_at) {
            store.dispatch("initRoutes", route.closeRoutes())

            if (to.path == mail.path) {

                //redirection to your path
                resolve({ path: "/dashboard" })
            };

        } else {

            if (to.path !== mail.path) {
                resolve({ path: mail.path });
            }else resolve()
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

        }).catch(() => {

            if (route.pathAuth().indexOf(to.path) > -1) {

                next(route.welcome());

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
