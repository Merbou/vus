'use strict';
import ressources from "@/utils/layout"

const ress=new ressources();
export default {
    state: {
        sidebar: ress.get()["sidebar"] ? ress.get()["sidebar"] : false,
        RTL: ress.get()["locale"] === 'ar' ? true : ress.get()["RTL"],
        dark: ress.get()["dark"] ? ress.get()["dark"] : false,
        locale: ress.get()["locale"] ? ress.get()["locale"] : ress.set({ locale: "en" })["locale"],
        palette: ress.get()["palette"] ? ress.get()["palette"] : null,
    },
    mutations: {
        TOGGLE_SIDEBAR: (state) => {
            state.sidebar = state.sidebar ? false : true
            ress.set({ sidebar: state.sidebar })
        },
        TOGGLE_RTL: (state, bool) => {
            state.RTL = bool !== undefined ? bool : state.RTL ? false : true
            ress.set({ RTL: state.RTL })
        },
        TOGGLE_DARK: (state) => {
            state.dark = state.dark ? false : true
            ress.set({ dark: state.dark })
        },
        CHANGE_LOCAL: (state, locale) => {
            state.locale = locale
            ress.set({ locale: state.locale })
        },
        CHANGE_THEME: (state, palette) => {
            state.palette = palette
            ress.set({ palette: state.palette })
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

        changeTheme({ commit }, palette) {
            if (palette === null && palette === undefined && !palette instanceof Array) return;
            commit('CHANGE_THEME', palette)
        },

    },
}

