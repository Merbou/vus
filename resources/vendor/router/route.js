import way from "./way";


export default new way(function () {


    this.route("private", [

        { path: '/home', view: 'home/index' },

    ])

}) 