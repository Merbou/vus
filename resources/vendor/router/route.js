import way from "./way";


export default new way(function () {

    /**
     * close using for private path
     * open using for public path
     */

    this.route("close", [
        // { path: '/home', view: 'home/index', name: "dashboard" },
        { path: '/users', view: 'user/account/index', name: "user", layout: true }
    ])

}) 