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
        if (to.path == "/mail-confirmation") {
            if (res.email_verified_at) resolve({ path: "/home" });
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
        NProgress.done()
    } else {



        ///PUBLIC ROUTES 





        if (route.pathPrivate().indexOf(to.path) > -1) {
            ///AUTH ROUTES



            next("/login")
        } else next()

        NProgress.done()

    }

})


router.afterEach(() => {

    NProgress.done()

})


export default router
