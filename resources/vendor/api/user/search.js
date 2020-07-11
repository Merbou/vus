"use strict";

import request from "@/utils/request";

export function searchUserApi({ u_query }, page) {
    return request({
        url: `/users-q-search/${u_query}?page=${page || 1}`,
        method: "get",
    })
}

export function globalSearchUserApi({ u_query }, page) {
    return request({
        url: `/users-g-q-search/${u_query}?page=${page || 1}`,
        method: "get",
    })
}
