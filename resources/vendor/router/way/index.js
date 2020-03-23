import config from "./config"

//_w : way
//_ro : route
//_rs : routes
//_ds : middelware
export default class way {
    constructor($callback) {
        this._ro = {};
        this.init();
        $callback.call(this);
    }
    route(_ds, _rs) {
        _rs = _rs.map(e => {
            return {
                path: e.path.toLowerCase(),
                redirect: e.redirect,
                name: e.name,
                component: () => import(`@/views/${e.view}.vue`)
            }
        })


        let _w = {}
        _w[_ds] = _rs
        this._ro = Object.assign(this._ro, _w);
    }
    init() {
        let initRoutes = config && config.routes
        Object.keys(initRoutes).forEach(_ds => {
            this.route(_ds, initRoutes[_ds])
        });

    }

    all() {
        const init_ro = this._ro.init || [],
            public_ro = this._ro.public || [],
            auth_ro = this._ro.auth || [],
            private_ro = this._ro.private || []

        return [...init_ro, ...public_ro, ...auth_ro, ...private_ro]
    }

    public() {
        return this._ro.public || []
    }
    auth() {
        return this._ro.auth || []
    }
    private() {
        return this._ro.private || []
    }
    home() {
        return config && config.home
    }

    pathPublic() {
        return this.public().map(e => e.path) || []
    }
    pathAuth() {
        return this.auth().map(e => e.path) || []
    }
    pathPrivate() {
        return this.private().map(e => e.path) || []
    }



}


