export default {
    routes: {
        init: [
            { path: '*', redirect: '/' },
        ],
        auth: [
            { path: '/login', view: 'auth/login/index' },
            { path: '/register', view: 'auth/register/index' },
        ],
        // home: [{ path: '/home', view: 'home/index' }],
        welcome: [{path: '/', view: 'layout/index', name: "welcome" }]
    },
}