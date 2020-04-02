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

            if (_ro.is_layout) return;
            //Me:Layout if compenent need Adoption then adopte him PLS
            if (_ro.withLayout) _ro = this.layoutAdoption(_ro)

            return {
                path: _ro.path.toLowerCase(),
                redirect: _ro.redirect,
                is_layout: !!_ro.is_layout,
                name: _ro.name,
                component: () => import(`@/views/${this.ComponentAdoption(_ro)}.vue`),
                children: _ro.children && this.routeCase(_ro.children)
            }
        })
    }

    /**
     * layout Adoption of child 
     * @param {object} _ro 
     */
    layoutAdoption(_ro) {
        const { withLayout, ...child } = _ro

        const _ro_temp = Object.assign({}, config && config.layout)

        _ro_temp.path = child.path
        _ro_temp["children"] = [{ ...child }]
        _ro_temp["children"].path = "index"


        return _ro_temp
    }
    /**
     * layout Adoption of child 
     * @param {object} _ro 
     */
    ComponentAdoption(_ro) {
        let view

        try {

            if (_ro.withLayout) {
                if (!_ro.view && _ro.children)
                    view = config && config.layout && config.layout.view
            } else
                view = _ro.view

            if (!view) throw new Error()

            return view
        } catch (error) {
            return "layout/index"
        }
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
        return this._ro.close.map(e => { return (e.is_layout && e.children.length) ? [...e.children].pop() : e }) || []
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
    pathOpen(_ro) {
        const _rs = _ro || this.auth()

        return this._rs.map(e => {
            e.children = e.children && this.pathopen(e.children)
            return e.path
        }) || []
    }
    /**
     * return string path according to Auth middleware
     */
    pathAuth(_ro) {
        const _rs = _ro || this.auth()
        return _rs.map(e => {
            e.children = e.children && this.pathAuth(e.children)
            return e.path
        }) || []
    }
    /**
     * return string path according to close middleware
     */
    pathClose(_ro) {
        const _rs = _ro || this.closeRoutes()
        return _rs.map(e => {
            e.children = e.children && this.pathclose(e.children)
            return e.path
        }) || []
    }



}


