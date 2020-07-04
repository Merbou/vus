'use strict';
import { getRessources, setRessources } from "@/utils/layout"

export default {
    state: {
        sidebar: getRessources()["sidebar"] ? getRessources()["sidebar"] : false,
        RTL: getRessources()["locale"] === 'ar' ? true : getRessources()["RTL"],
        dark: getRessources()["dark"] ? getRessources()["dark"] : false,
        locale: getRessources()["locale"] ? getRessources()["locale"] : "en",
    },
    mutations: {
        TOGGLE_SIDEBAR: (state) => {
            state.sidebar = state.sidebar ? false : true
            setRessources({ sidebar: state.sidebar })
        },
        TOGGLE_RTL: (state, bool) => {
            state.RTL = bool !== undefined ? bool : state.RTL ? false : true
            setRessources({ RTL: state.RTL })
        },
        TOGGLE_DARK: (state) => {
            state.dark = state.dark ? false : true
            setRessources({ dark: state.dark })
        },
        CHANGE_LOCAL: (state, locale) => {
            state.locale = locale
            setRessources({ locale: state.locale })
        },
    },
    actions: {

        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        },

        toggleRTL({ commit }, bool) {
            commit('TOGGLE_RTL', bool)
        },

        toggleDark({ commit }) {
            commit('TOGGLE_DARK')
        },

        changeLocale({ commit }, locale) {
            if (locale === null && locale === undefined) return;
            commit('CHANGE_LOCAL', locale)
        },

    },
}

