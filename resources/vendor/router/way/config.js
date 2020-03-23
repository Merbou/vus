export default {
    routes: {
        init: [
            { path: '*', redirect: '/' },
            { path: '/', view: 'layout/index' ,name:"welcome" }
        ],
        auth: [
            { path: '/login', view: 'auth/login/index' },
            { path: '/register', view: 'auth/register/index' },
        ]
    },
    home: { path: '/home', view: 'home/index' }
}