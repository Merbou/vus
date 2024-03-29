'use strict';

import { isEmpty } from "lodash"
export default {
    state: {
        routes: [],
        loading: false,
        dialog: {
            open: false,
            value: false,
            message: "Message",
            title: "Are you sure !",
            accepte: "Ok",
            cancel: "Cancel",
        },
        vSnackbar: {
            state: false,
            color: "success",
            timeout: 3000,
            text: "Hi :)"
        }
    },
    mutations: {
        SET_ROUTES: (state, routes) => {
            state.routes = routes
        },
        SET_DIALOG: (state, dialog) => {
            state.dialog = Object.assign(state.dialog, dialog)
        },
        TOGGLE_DIALOG: (state, opVal) => {
            state.dialog = Object.assign(state.dialog, opVal)
        },
        SET_LOADING: (state, val) => {
            state.loading = val
        },
        SET_VSNACKBAR: (state, _snackbar) => {
            state.vSnackbar = _snackbar
        },
    },
    actions: {

        /**
         * Store all routes Objects
         * @param {callback}
         * 
         * @param {Object} routes 
         */

        initRoutes({ commit, state }, routes) {
            return new Promise((resolve) => {
                if (state.routes.length < 1) {
                    commit('SET_ROUTES', RoutesBrokes(routes))
                    resolve(state.routes)
                }
            })

        },

        /**
         * Store dialog Object
         * @param {callback}
         * 
         * @param {Object} routes 
         */

        initDialog({ commit }, dialog) {

            commit('SET_DIALOG', dialog)

        },


        /**
         * Store toggleDialog Object
         * @param {callback}
         * 
         * @param {Object} routes 
         */

        toggleDialog({ commit }, opVal) {
            commit('TOGGLE_DIALOG', opVal)
        },


        /**
         * toggle sideBar
         * @param {callback}
         * 
         * @param None 
         */

        loading({ commit }, val) {
            commit('SET_LOADING', val)

        },

        snackbarStore({ commit }, _snackbar) {
            commit('SET_VSNACKBAR', _snackbar)
        },





    },
}

/**
 * return routes object without component
 * @param {*} _rs 
 */

function RoutesBrokes(_rs) {
    const _rs_temp = _rs.map(_r => {
        let { component, ..._rp } = { ..._r }
        _rp.children = _rp.children && RoutesBrokes(_r.children)
        return _rp
    });

    if (!isEmpty(_rs_temp)) return _rs_temp;
}
