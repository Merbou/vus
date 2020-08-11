import store from "@/store"
import route from "../route"
import router from "../index"
import { getToken } from '@/utils/token';
import { premissionsDrop } from "@/utils/permission"

export default {
    before: function ({ to, from }) {
        return new Promise((resolve) => {
            if (getToken()) {
                store.dispatch("userInfo")
                    .then(({ roles, permissions, ...res }) => {

                        if (!store.getters.routes || store.getters.routes.length < 1) {
                            const asyncRoutes = roles.indexOf("super-admin") > -1 ? route.get(false, "auth")
                                : premissionsDrop(route.get(false, "auth"), permissions)

                            store.dispatch("initRoutes", asyncRoutes).then((_res) => {
                                router.addRoutes(asyncRoutes)
                                router.push({ path: asyncRoutes.reduce((acc, curr) => acc.rank > curr.rank ? acc : curr).path })
                            })
                        }
                        resolve()
                    }).catch(err => {
                        store.dispatch("LogOut")
                        resolve("/login")
                    })
            }
            else {
                resolve("/login")
            }
        })
    }
}