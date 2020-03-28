import way from "./way";


export default new way(function () {


    this.route("private", [
        { path: '/mail-confirmation', view: 'auth/mail/index' },
        { path: '/home', view: 'home/index' },
        { path: '/users', view: 'user/account/index' },
    ])

}) 