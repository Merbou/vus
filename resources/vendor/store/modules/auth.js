'use strict';
import { getToken, setToken, removeToken } from "@/utils/token"
import { login, register, userInfo } from "@/api/auth"
import { isEmpty } from "lodash"
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
        },
        SE_EMAIL_VERIFIED: (state, email_verified_at) => {
            state.user.email_verified_at = email_verified_at
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
                        resolve(response.user.id)
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        },

        /**
         * @param {callback}
         * 
         * @param null  
         */

        userInfo: ({ commit, state }) => {
            return new Promise((resolve, reject) => {
                if (isEmpty(state.user)) {

                    userInfo()
                        .then(response => {
                            commit("SET_USER", response);
                            resolve(response)
                        })
                        .catch(error => {
                            reject(error);
                        })
                }
                else resolve(state.user)

            });
        },
        /**
         * @param {callback}
         * 
         * @param null  
         */

        setInfo: ({ commit }, data) => {
            commit("SET_USER", data);

        },


        /**
         * @param {callback}
         * 
         * @param null  
         */

        mailVerifed: ({ commit }, { email_verified_at }) => {

            return new Promise((resolve) => {
                commit("SE_EMAIL_VERIFIED", email_verified_at);
                resolve()
            });
        },


    },
}