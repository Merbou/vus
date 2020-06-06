"use strict";

import request from "@/utils/request";

export function fetchRolesApi() {
    return request({
        url: `/roles`,
        method: "get"
    })
}



export function fetchOnlyRolesApi() {
    return request({
        url: `/roles-only`,
        method: "get"
    })
}



export function fetchRolesPercentageApi() {
    return request({
        url: `/roles-percentage`,
        method: "get"
    })
}



export function storeRoleApi(data) {
    return request({
        url: `/role`,
        method: "post",
        data
    })
}



export function assignRoleApi({ user_id, roles }) {
    return request({
        url: `/role-assign/${user_id}`,
        method: "post",
        data: {
            roles
        }
    })
}



export function deleteRoleApi(id) {
    return request({
        url: `/role/${id}`,
        method: "delete"
    })
}
