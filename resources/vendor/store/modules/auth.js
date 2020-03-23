'use strict';
import { getToken, setToken, removeToken } from "@/utils/token"
import { login, register } from "@/api/auth"
export default {
    state: {
        token: getToken(),
        user: {},
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USER: (state, user) => {
            state.user = user
        }
    },
    actions: {

        /**
         * @param {callback}
         * 
         * @param {email,password} userInfo 
         */

        login: ({ commit }, userInfo) => {

            const { email = email.trim(), password = password.trim() } = userInfo
            return new Promise((resolve, reject) => {
                login(email, password)
                    .then(response => {
                        commit("SET_TOKEN", response.token);
                        setToken(response.token);
                        commit("SET_USER", response.user);
                        resolve()
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        },



        /**
         * @param {callback}
         * 
         * @param {email,password} userInfo 
         */

        register: ({ commit }, userInfo) => {

            const username = userInfo.username.trim(),
                email = userInfo.email.trim(),
                password = userInfo.password.trim(),
                password_configuration = userInfo.password_configuration.trim()

            return new Promise((resolve, reject) => {
                register({ username, email, password, password_configuration })
                    .then(response => {
                        commit("SET_TOKEN", response.token);
                        setToken(response.token);
                        commit("SET_USER", response.user);
                        resolve()
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        },


    },
}