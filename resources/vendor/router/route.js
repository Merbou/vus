import way from "./way";


export default new way(function () {

    /**
     * close using for private path authentification required
     * open using for public path
     */

    this.route("close", [
        { path: '/dashboard', view: 'dashboard/index', name: "dashboard", withLayout: true,icon:"fas fa-tachometer-alt" },
        {
            path: '/users', name: "users",icon:"fas fa-users", children: [
                { path: '/table', view: 'user/account/table', name: "table", icon:"fas fa-table"},
                { path: '/chart', view: 'user/account/chart', name: "chart", icon:"fas fa-chart-line" }
            ]
        },
        { path: '/contacts', view: 'contact/table', name: "contacts",  withLayout: true ,icon:"fas fa-inbox"}

    ])

}) 