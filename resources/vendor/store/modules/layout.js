'use strict';
import ressources from "@/utils/layout"
import { isEmpty } from "lodash"
const ress = new ressources();
export default {
    state: {
        sidebar: ress.get()["sidebar"],
        RTL: ress.get()["locale"] === 'ar' ? true : ress.get()["RTL"],
        dark: ress.get()["dark"],
        locale: ress.get()["locale"] && ress.get()["locale"] !== "" ?
            ress.get()["locale"] : ress.set({ locale: "en" })["locale"],
        palette: ress.get()["palette"].length ? ress.get()["palette"] : ["#25274D", "#464866", "#AAABB8", "#2E9CCA", "#29648A"],
        appBar: ress.get()["appBar"],
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
        CHANGE_APP_BAR: (state, appBar) => {
            state.appBar = appBar
            ress.set({ appBar: state.appBar })
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
            if (!locale) return;
            commit('CHANGE_LOCAL', locale)
        },

        changeTheme({ commit }, palette) {
            if (!palette && !palette instanceof Array) return;
            commit('CHANGE_THEME', palette)
        },

        changeAppBar({ commit }, appBar) {
            if (isEmpty(appBar) && !appBar instanceof Object) return;
            commit('CHANGE_APP_BAR', appBar)
        },

    },
}

