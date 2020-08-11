import road from "vue-road";
import { routeCase } from "./config"

export default new road(function () {

    this.route([
        // { path: '*', redirect: '/' },
        { path: '/', view: 'welcome/index', name: "welcome" },
    ], "init")
    this.route([
        { path: '/login', view: 'auth/login/index' },
        { path: '/register', view: 'auth/register/index' },
    ], "portail")

    this.route([
        { path: '/mail-confirmation', view: 'auth/mail/index' },
    ], "auth,mail")


    this.route([
        { path: '/dashboard', view: 'dashboard/index', name: "dashboard", rank: 1, withLayout: true, icon: "tachometer-alt" },
        {
            path: '/users', name: "users", icon: "users", withLayout: true, children: [
                { path: 'table', view: 'user/account/table', name: "table", icon: "table" },
                { path: 'chart', view: 'user/account/chart', name: "chart", icon: "chart-line" },
                { path: 'privilege', view: 'user/privilege/index', name: "privilege", icon: "star" },
            ]
        },
        { path: '/chats', view: 'chat/index', name: "chat", rank: 0.6, withLayout: true, hidden: true },
        { path: '/contacts', view: 'contact/table', name: "contacts", rank: 0.8, withLayout: true, hidden: true },
        { path: '/setting', view: 'setting/index', name: "setting", rank: 0.9, withLayout: true, icon: "cogs" },
        { path: '/trash', view: 'trash/index', name: "trash", rank: 0.7, withLayout: true, icon: "trash" },
    ], "auth")


}, routeCase)