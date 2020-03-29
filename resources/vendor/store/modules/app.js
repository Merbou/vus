'use strict';

import { isEmpty } from "lodash"

export default {
    state: {
        routes: [],
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.routes = routes
        },
    },
    actions: {

        /**
         * Store all routes Objects
         * @param {callback}
         * 
         * @param {Object} routes 
         */

        initRoutes({ commit }, routes) {

            commit('SET_ROUTES', RoutesBrokes(routes))

        },




    },
}

/**
 * return routes object without component
 * @param {*} _rs 
 */

function RoutesBrokes(_rs) {
    const _rs_temp = _rs.map(_r => {
        _r.children = _r.children && RoutesBrokes(_r.children)
        let { component, ..._rp } = _r
        return _rp
    });
    if (!isEmpty(_rs_temp)) return _rs_temp;
}