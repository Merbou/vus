import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/token';




NProgress.configure({ showSpinner: true });


// const publicList = [...route.pathPublic(), ...route.pathAuth()];

export default class middleware {
    constructor(router, route) {
        this.router = router
        this.route = route
    }

    private($callback) {
        this.privateCallback = $callback
    }
    public($callback) {
        this.publicCallback = $callback
    }
    auth($callback) {
        this.authCallback = $callback
    }
    exception($callback) {
        this.exceptionCallback = $callback
    }

    beforeEach() {

        this.router.beforeEach((to, from, next) => {

            NProgress.start()

            if (getToken()) {

                ///PRIVATE ROUTES

                if (typeof this.privateCallback === "function")
                    this.privateCallback(to, from, next)

                if (this.route.pathAuth().indexOf(to.path) > -1) {

                    //EXCEPTIONS ROUTES


                    if (typeof this.exceptionCallback === "function")
                        this.exceptionCallback(to, from, next)


                    next(this.route.welcome());

                } else next()

            } else {

                ///PUBLIC ROUTES 


                if (typeof this.publicCallback === "function")
                    this.publicCallback(to, from, next)



                if (this.route.pathPrivate().indexOf(to.path) > -1) {
                    ///AUTH ROUTES


                    if (typeof this.authCallback === "function")
                        this.authCallback(to, from, next)


                    next("/login")
                }


            }

            next()
            NProgress.done()
        })

    }

    afterEach() {
        this.router.afterEach((to, from) => {

            if (from.path === this.route.welcome().path)
                if (getToken())
                    if (this.route.pathAuth().indexOf(to.path) > -1)
                        this.router.push(this.route.welcome())

        })
    }

    export() {
        this.beforeEach()
        this.afterEach()
        return this.router
    }


}


