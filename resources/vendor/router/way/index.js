import config from "./config"

//_w : way
//_ro : route
//_rs : routes
//_ds : middelware
export default class way {
    constructor($callback) {
        this._ro = {};
        this.init();
        //callback with this object
        $callback.call(this);
    }
    /**
     * assignment all routes to attribut _ro 
     * 
     * @param {String} _ds 
     * @param {Array} _rs 
     */
    route(_ds, _rs) {
        _rs = this.routeCase(_rs)


        //assignment a routes with middleware index to _ro array
        let _w = {}
        _w[_ds] = _rs
        this._ro = Object.assign(this._ro, _w);
        return _rs
    }

    /**
    * create objects of route vueRouter form simple object
    * 
    * @param {Array} _rs 
    */
    routeCase(routes) {
        return routes.map(_ro => {
            //if compenent need Adoption of layout
            if (_ro.layout) _ro = this.homeAdoption(_ro)
            
            return {
                path: _ro.path.toLowerCase(),
                redirect: _ro.redirect,
                name: _ro.name,
                component: () => import(`@/views/${_ro.view}.vue`),
                children: _ro.children && this.routeCase(_ro.children)
            }
        })
    }

    /**
     * layout Adoption of child 
     * @param {object} _ro 
     */
    homeAdoption(_ro) {
        const { layout, ...child } = _ro

        const _ro_temp = config && config.home

        _ro_temp["children"] = [child]

        return _ro_temp
    }

    /**
     * upload route of confing file 
     */
    init() {
        let initRoutes = config && config.routes
        Object.keys(initRoutes).forEach(_ds => {
            this.route(_ds, initRoutes[_ds])
        });

    }

    /**
     * 
     * return all routes as array of vue Router object(route)
     */
    all() {
        let {
            open = [],
            close = [],
            init = [],
            auth = [],
            welcome = [],
            mail = [],
        } = this._ro

        return [...init, ...open, ...auth, ...close, ...welcome, ...mail]
    }

    /**
     * return object VueRouter according to open middleware
     */
    openRoutes() {
        return this._ro.open || []
    }
    /**
     * return object VueRouter according to auth middleware
     */
    auth() {
        return this._ro.auth || []
    }
    /**
     * return object VueRouter according to close middleware
     */
    closeRoutes() {
        console.log(this._ro.close)
        return this._ro.close || []
    }
    /**
     * return object VueRouter according to home middleware
     */
    home() {
        // let __home = this._ro.home || []
        // return [...__home].pop()
        return config && config.home
    }
    /**
     * return object VueRouter according to mail middleware
     */
    mail() {
        let __mail = this._ro.mail || []
        return [...__mail].pop()
    }
    /**
     * return object VueRouter according to welcome middleware
     */
    welcome() {
        let __welcome = this._ro.welcome || []
        return [...__welcome].pop()
    }

    /**
     * return string path according to open middleware
     */
    pathOpen() {
        return this.openRoutes().map(e => {
            e.children = e.children && this.pathopen(e.children)
            return e.path
        }) || []
    }
    /**
     * return string path according to Auth middleware
     */
    pathAuth() {
        return this.auth().map(e => {
            e.children = e.children && this.pathAuth(e.children)
            return e.path
        }) || []
    }
    /**
     * return string path according to close middleware
     */
    pathClose() {
        return this.closeRoutes().map(e => {
            e.children = e.children && this.pathclose(e.children)
            return e.path
        }) || []
    }



}


