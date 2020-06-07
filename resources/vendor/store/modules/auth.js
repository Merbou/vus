'use strict';
import { getToken, setToken, removeToken } from "@/utils/token"
import { login, register, userInfo } from "@/api/auth"
import { isEmpty } from "lodash"
import { permissionsExtraction } from "@/utils/permission"

export default {
    state: {
        token: getToken(),
        user: {},
        roles: [],
        permissions: []
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_USER: (state, user) => {
            state.user = user
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles.map(e => e.name)
        },
        SET_PERMISSIONS: (state, roles) => {
            state.permissions = permissionsExtraction(roles)
        },
        SE_EMAIL_VERIFIED: (state, email_verified_at) => {
            state.user.email_verified_at = email_verified_at
        },
        SET_COMPLATE: (state, user) => {
            let picture_path = "public/root/avatars/"
            const { roles, ..._user } = user
            if (!_user.picture_path)
                _user.picture_path = _user.sex ? picture_path + "man.png" : picture_path + "woman.png"
            state.user = _user
            state.roles = roles.map(e => e.name)
            state.permissions = permissionsExtraction(roles)
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
                        const { token, user } = response
                        commit("SET_TOKEN", token);
                        setToken(token);
                        commit("SET_COMPLATE", user);
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
                        const { token, roles, user } = response
                        user.roles = roles
                        commit("SET_TOKEN", token);
                        commit("SET_COMPLATE", user);
                        setToken(token);
                        resolve(user)
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

        LogOut: () => {

            return new Promise((resolve, reject) => {
                resolve(removeToken())
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
                            commit("SET_COMPLATE", response);
                            resolve(margeState(state))
                        })
                        .catch(error => {
                            reject(error);
                        })
                }
                else {

                    resolve(margeState(state))
                }

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

function margeState(state) {
    const response = state.user
    response["roles"] = state.roles
    response["permissions"] = state.permissions
    return response
}