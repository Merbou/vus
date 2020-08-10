import { getToken } from '@/utils/token';

export default {
    before: function ({ to }) {
        return new Promise((resolve) => {
            if (getToken()) {
                if (to.path === "/login" || to.path === "/register")
                    resolve("/dashboard")
            } else resolve("/login")
        })
    }
}