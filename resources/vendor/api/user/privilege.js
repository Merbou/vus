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


export function storeRoleApi(data) {
    return request({
        url: `/role`,
        method: "post",
        data
    })
}

export function deleteRoleApi(id) {
    return request({
        url: `/role/${id}`,
        method: "delete"
    })
}

export function fetchPermissionsApi() {
    return request({
        url: `/permissions`,
        method: "get"
    })
}

export function storePermissionsApi(data) {
    return request({
        url: `/permissions`,
        method: "post",
        data
    })
}
