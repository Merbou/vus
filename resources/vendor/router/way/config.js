export default {
    routes: {
        init: [
            { path: '*', redirect: '/' },
        ],
        auth: [
            { path: '/login', view: 'auth/login/index' },
            { path: '/register', view: 'auth/register/index' },
        ],
        mail: [{ path: '/mail-confirmation', view: 'auth/mail/index' },
        ],

        welcome: [{ path: '/', view: 'welcome/index', name: "welcome" }],
    },

    layout: { view: 'layout/index', is_layout: true },
}