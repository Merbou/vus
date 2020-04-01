import way from "./way";


export default new way(function () {

    /**
     * close using for private path authentification required
     * open using for public path
     */

    this.route("close", [
        { path: '/dashboard', view: 'dashboard/index', name: "dashboard", withLayout: true },
        { path: '/users', view: 'user/account/index', name: "user", withLayout: true }
    ])

}) 