import way from "./way";


export default new way(function () {

    /**
     * close using for private path authentification required
     * open using for public path
     */

    this.route("close", [
        { path: '/dashboard', view: 'dashboard/index', name: "dashboard", withLayout: true, icon: "tachometer-alt" },
        {
            path: '/users', name: "users", icon: "users", children: [
                { path: 'table', view: 'user/account/table', name: "table", icon: "table" },
                { path: 'chart', view: 'user/account/chart', name: "chart", icon: "chart-line" },
                { path: 'privilege', view: 'user/privilege/index', name: "privilege", icon: "star" },
            ]
        },
        { path: '/contacts', view: 'contact/table', name: "contacts", withLayout: true, icon: "inbox" },
        { path: '/chats', view: 'chat/index', name: "chat", withLayout: true, icon: "comments" },
        { path: '/setting', view: 'setting/index', name: "setting", withLayout: true, icon: "cogs" },
        { path: '/trash', view: 'trash/index', name: "trash", withLayout: true, icon: "trash" },
    ])

}) 