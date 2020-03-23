import router from "./router"
import route from "./router/route"
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/token';




NProgress.configure({ showSpinner: true });


const publicList = [...route.pathPublic(), ...route.pathAuth()];

router.beforeEach((to, from, next) => {
    NProgress.start()
    debugger
    if (getToken()) {

        console.log(route.pathAuth())
        ///PRIVATE ROUTES
        if (route.pathAuth().indexOf(to.path) > -1) {

            //EXCEPTIONS ROUTES
            next({
                name: 'welcome',
            });

        } else next()

    } else {

        ///PUBLIC ROUTES 
        if (route.pathPrivate().indexOf(to.path) > -1)
            ///AUTH ROUTES
            next("/login")

    }

    next()
    NProgress.done()
})


export default router