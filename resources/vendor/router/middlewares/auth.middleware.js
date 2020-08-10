import store from "@/store"
import route from "../route"
import { getToken } from '@/utils/token';
import { PermissionsRoutes } from "@/utils/permission"

export default {
    before: function ({ to }) {
        return new Promise((resolve, reject) => {
            if (getToken()) {
                store.dispatch("userInfo")
                    .then(({ roles, permissions, ...res }) => {
                        const asyncRoutes = PermissionsRoutes({ permissions, roles, routes: route.get("auth"), superAdmin: "super-admin" })

                        if (!store.getters.routes || store.getters.routes.length < 1)
                            store.dispatch("initRoutes", asyncRoutes).then((_res) => {
                                // router.addRoutes(asyncRoutes) // addRoutes not working must fix !!  
                            })
                        resolve()
                    }).catch(err => {
                        store.dispatch("LogOut")
                        resolve("/login")
                    })
            }
            else resolve("/login")
        })
    }
}