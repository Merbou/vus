import store from "@/store"
export default {
    before: function ({ to }) {
        return new Promise(async (resolve, reject) => {
            let { roles, permissions, ...res } = await store.dispatch("userInfo")
            if (res.email_verified_at)
                if (to.path == "/mail-confirmation")
                    resolve("/dashboard")
                else
                    resolve("/mail-confirmation")
        })
    }
}