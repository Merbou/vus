import road from "vue-road";
import { routeCase } from "./config"

export default new road(function () {

    this.route([
        { path: '/', view: 'welcome/index', name: "welcome" }
    ])
    this.route([
        { path: '/login', view: 'auth/login/index' },
        { path: '/register', view: 'auth/register/index' },
    ], "portail")

    this.route([
        { path: '/mail-confirmation', view: 'auth/mail/index' },
    ], "auth,mail")


    this.route([
        { path: '/dashboard', view: 'dashboard/index', name: "dashboard", withLayout: true, icon: "tachometer-alt" },
        {
            path: '/users', name: "users", icon: "users", withLayout: true, children: [
                { path: 'table', view: 'user/account/table', name: "table", icon: "table" },
                { path: 'chart', view: 'user/account/chart', name: "chart", icon: "chart-line" },
                { path: 'privilege', view: 'user/privilege/index', name: "privilege", icon: "star" },
            ]
        },
        { path: '/chats', view: 'chat/index', name: "chat", withLayout: true, hidden: true },
        { path: '/contacts', view: 'contact/table', name: "contacts", withLayout: true, hidden: true },
        { path: '/setting', view: 'setting/index', name: "setting", withLayout: true, icon: "cogs" },
        { path: '/trash', view: 'trash/index', name: "trash", withLayout: true, icon: "trash" },
    ], "auth")


}, routeCase)