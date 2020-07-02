'use strict';
import { sidebar, setSidebar } from "@/utils/sidebar"
import { getRessources, setRessources, removeRessources } from "@/utils/layout"

export default {
    state: {
        sidebar: sidebar(),
        RTL: getRessources()["RTL"],
        dark: getRessources()["dark"],
    },
    mutations: {
        TOGGLE_SIDEBAR: (state) => {
            state.sidebar = state.sidebar ? 0 : 1
            setSidebar(state.sidebar)
        },
        TOGGLE_RTL: (state) => {
            state.RTL = state.RTL ? false : true
            setRessources({ RTL: state.RTL })
        },
        TOGGLE_DARK: (state) => {
            state.dark = state.dark ? false : true
            setRessources({ dark: state.dark })
        },
    },
    actions: {

        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        },

        toggleRTL({ commit }) {
            commit('TOGGLE_RTL')
        },

        toggleDark({ commit }) {
            commit('TOGGLE_DARK')
        },

    },
}

